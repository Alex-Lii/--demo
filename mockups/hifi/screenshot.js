// zhan hifi screenshot batch — 3x PNG
const puppeteer = require('/Users/apple/Documents/Trae-CN/temp_20261102_01/mockups/node_modules/puppeteer-core');
const path = require('path');

const OUT_DIR = __dirname;
const VIEWPORT = { width: 390, height: 844 };
const CLIP = { x: 0, y: 0, width: 390, height: 844 };
const SRC = 'file://' + path.join(OUT_DIR, 'index.html');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  console.log('launching chrome…');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-device-scale-factor=3', '--allow-file-access-from-files'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  page.on('console', msg => console.log('PAGE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGEERR:', err.message));

  await page.goto(SRC, { waitUntil: 'domcontentloaded' });
  await sleep(1000);

  // 破图检测
  const broken = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('img').forEach(im => {
      if (!im.complete || im.naturalWidth === 0) bad.push(im.getAttribute('src'));
    });
    return bad;
  });
  console.log('broken images:', broken.length ? JSON.stringify(broken) : 'none');

  const ids = await page.evaluate(() => window.__ZhanFrames__);
  console.log('frames:', ids.length);
  if (!ids || ids.length !== 24) { console.error('frame count wrong'); await browser.close(); process.exit(1); }

  const only = process.argv.slice(2);
  const targets = only.length ? ids.filter(i => only.includes(i)) : ids;
  for (const id of targets) {
    await page.evaluate((targetId) => {
      document.querySelectorAll('.frame').forEach(f => f.style.display = 'none');
      const el = document.querySelector(`[data-frame-id="${targetId}"]`);
      el.style.display = 'block';
      window.scrollTo(0, 0);
    }, id);
    await sleep(220);
    await page.screenshot({ path: path.join(OUT_DIR, id + '.png'), clip: CLIP });
    console.log('✓', id + '.png');
  }

  await browser.close();
  console.log('done.');
})().catch(err => { console.error(err); process.exit(1); });
