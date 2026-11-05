// zhan prototype screenshot batch
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const OUT_DIR = __dirname;
const VIEWPORT = { width: 390, height: 844 };
const CLIP     = { x: 0, y: 0, width: 780, height: 1688 }; // 2x
const SRC = 'file://' + path.join(OUT_DIR, 'index.html');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const fileNames = {
  'L1-age-confirm':   'L1-age-confirm.png',
  'L2-login':         'L2-login.png',
  'L3-onboarding':    'L3-onboarding.png',
  'H1-home-recommend':'H1-home-recommend.png',
  'H1b-home-doable':  'H1b-home-doable.png',
  'H2-filter-sheet':  'H2-filter-sheet.png',
  'H3-search-result': 'H3-search-result.png',
  'C1-pantry-overview':'C1-pantry-overview.png',
  'C2-pantry-wine-list':'C2-pantry-wine-list.png',
  'C3-pantry-add':    'C3-pantry-add.png',
  'C4-wine-detail':   'C4-wine-detail.png',
  'C5-ingredient-list':'C5-ingredient-list.png',
  'C6-favorites':     'C6-favorites.png',
  'S1-feed':          'S1-feed.png',
  'S2-post-detail':   'S2-post-detail.png',
  'S3-post-compose':  'S3-post-compose.png',
  'S4-report-sheet':  'S4-report-sheet.png',
  'G1-recipe-detail': 'G1-recipe-detail.png',
  'G2-making-flow':   'G2-making-flow.png',
  'G3-completion':    'G3-completion.png',
  'M1-profile':       'M1-profile.png',
  'M2-my-cocktails':  'M2-my-cocktails.png',
  'M3-settings':      'M3-settings.png',
};

(async () => {
  console.log('launching chromium…');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=2'],
  });
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    emulateMediaFeatures: [{ name: 'prefers-color-scheme', value: 'light' }],
  });
  page.on('console', msg => console.log('PAGE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGEERR:', err.message));

  await page.goto(SRC, { waitUntil: 'domcontentloaded' });
  await sleep(800);

  const ids = await page.evaluate(() => {
    try {
      return { ok: true, ids: window.__ZhanFrames__, frames_n: document.querySelectorAll('.frame').length };
    } catch (e) {
      return { ok: false, err: e.message };
    }
  });
  console.log('eval result:', JSON.stringify(ids).slice(0, 300));
  if (!ids.ok || !ids.ids) {
    console.error('Cannot read frames. Aborting.');
    await browser.close();
    process.exit(1);
  }

  for (const id of ids.ids) {
    await page.evaluate((targetId) => {
      document.querySelectorAll('.frame').forEach(f => f.style.display = 'none');
      const el = document.querySelector(`[data-frame-id="${targetId}"]`);
      if (el) el.style.display = 'block';
    }, id);

    await sleep(250);
    const outPath = path.join(OUT_DIR, fileNames[id] || (id + '.png'));
    await page.screenshot({ path: outPath, clip: CLIP });
    console.log('✓', path.basename(outPath));
  }

  await browser.close();
  console.log('\nDone. 23 screenshots in', OUT_DIR);
})().catch(err => { console.error(err); process.exit(1); });
