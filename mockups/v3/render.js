/* ============ 盏 v3 · 深色样张（5 帧） ============ */
const F = {};

/* ---------- SVG 图标库：线性、1.6 细描边、圆端点（对齐参考图） ---------- */
const P = {
  home: '<path d="M4 10.5 12 3.5l8 7"/><path d="M6.2 9.2V20h11.6V9.2"/>',
  bottle: '<path d="M10 3h4"/><path d="M10.8 3v3.2c0 .8-.5 1.6-1 2.2-1 1.2-1.8 2.6-1.8 4.4V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6.2c0-1.8-.8-3.2-1.8-4.4-.5-.6-1-1.4-1-2.2V3"/><path d="M8 14.5h8"/>',
  chat: '<path d="M20.5 12a8.5 8.5 0 0 1-12.4 7.5L3.5 21l1.6-4.4A8.5 8.5 0 1 1 20.5 12Z"/>',
  user: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c1.4-3.8 4.3-5.6 7.5-5.6s6.1 1.8 7.5 5.6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  sliders: '<path d="M4 7h9M17.5 7H20M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  heart: '<path d="M12 20s-7.2-4.4-9.2-8.9A5.2 5.2 0 0 1 12 7.2a5.2 5.2 0 0 1 9.2 3.9C19.2 15.6 12 20 12 20Z"/>',
  comment: '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L4 20.5l1.6-4.3A8.5 8.5 0 1 1 21 11.5Z"/>',
  share: '<path d="M12 14V3.5"/><path d="m8 6.5 4-4 4 4"/><path d="M5.5 11.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
  star: '<path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z"/>',
  'chevron-left': '<path d="m14.5 5.5-6.5 6.5 6.5 6.5"/>',
  'chevron-right': '<path d="m9.5 5.5 6.5 6.5-6.5 6.5"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  camera: '<path d="M4 8.5h2.8l1.7-2.5h7L17.2 8.5H20a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18v-8A1.5 1.5 0 0 1 4 8.5Z"/><circle cx="12" cy="13.5" r="3.4"/>',
  bookmark: '<path d="M6.5 3.5h11V21L12 17.2 6.5 21V3.5Z"/>',
  more: '<circle cx="5.5" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/><circle cx="18.5" cy="12" r="1.15" fill="currentColor" stroke="none"/>',
  cart: '<path d="M3.5 5h2.2l2.3 11h9.6l2-8H7"/><circle cx="9.5" cy="19.5" r="1.4"/><circle cx="16.5" cy="19.5" r="1.4"/>',
  alert: '<path d="M12 4 2.8 19.5h18.4L12 4Z"/><path d="M12 10v4.2"/><path d="M12 17.2h.01"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.4 2"/>',
  flag: '<path d="M5.5 21.5v-17"/><path d="M5.5 5c4-2 7 2 13 0v9c-6 2-9-2-13 0"/>',
  gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7.2"/><path d="M12 2.6v1.9M12 19.5v1.9M2.6 12h1.9M19.5 12h1.9M5.4 5.4l1.4 1.4M17.2 17.2l1.4 1.4M18.6 5.4l-1.4 1.4M6.8 17.2l-1.4 1.4"/>',
  bell: '<path d="M18 9.5a6 6 0 1 0-12 0c0 5.5-2.3 6.8-2.3 6.8h16.6S18 15 18 9.5"/><path d="M10.2 19.8a2 2 0 0 0 3.6 0"/>',
  doc: '<path d="M7 3.5h6.5L19 9v11.5H7V3.5Z"/><path d="M13.5 3.5V9H19"/>',
  'arrow-right': '<path d="M4 12h15"/><path d="m13.5 6 6 6-6 6"/>',
  glass: '<path d="M4.5 4.5h15L12 12.2 4.5 4.5Z"/><path d="M12 12.2V20"/><path d="M8 20.5h8"/>',
  leaf: '<path d="M5.5 18.5C5.5 10 12 4.5 20 4.5c0 8.5-5.5 14-13.5 14"/><path d="M5.5 18.5C8 13 12 9.5 16 7.5"/>',
  edit: '<path d="m14.5 5 4.5 4.5L8 20.5H3.5V16L14.5 5Z"/><path d="m12.5 7 4.5 4.5"/>',
};
function ic(name, size = 20, sw = 1.6) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}
function icf(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}

/* ---------- 状态栏 ---------- */
const sbIcons = `<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.8"/><rect x="4.5" y="5" width="3" height="6" rx="0.8"/><rect x="9" y="2.6" width="3" height="8.4" rx="0.8"/><rect x="13.5" y="0" width="3" height="11" rx="0.8"/></svg>`
  + `<svg width="16" height="11" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1.5 4.2a10 10 0 0 1 13 0"/><path d="M3.9 6.9a7 7 0 0 1 8.2 0"/><path d="M6.4 9.5a3.6 3.6 0 0 1 3.2 0"/><circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none"/></svg>`
  + `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.6" y="0.6" width="20" height="10.8" rx="3" stroke="currentColor" stroke-opacity=".4" stroke-width="1"/><rect x="2.2" y="2.2" width="14.5" height="7.6" rx="1.6" fill="currentColor"/><path d="M22.8 4v4a2.1 2.1 0 0 0 0-4Z" fill="currentColor" fill-opacity=".5"/></svg>`;
const statusbar = () => `<div class="statusbar"><span class="time">9:41</span><span class="sic">${sbIcons}</span></div>`;
const homeind = () => `<div class="homeind"></div>`;

/* ---------- 通用组件 ---------- */
const icbtn = (icon, cls = '', size = 18) => `<span class="icbtn ${cls}">${ic(icon, size)}</span>`;
const avatar = (src, size, ring = false) => `<img class="avatar" src="assets/${src}" style="width:${size}px;height:${size}px" loading="eager">`;
const secHead = (t, more = '查看全部') => `<div class="sec-head"><span class="h2">${t}</span><span class="arr">${more}${ic('chevron-right', 12, 1.5)}</span></div>`;

const LEVELS = { L1: ['#7ED957', '入门酒'], L2: ['#F5A623', '进阶酒'], L3: ['#D0021B', '大师酒'], L4: ['#1A1A1A', '隐藏款'] };
const levelDot = (l) => `<i class="dot${l === 'L4' ? ' is-l4' : ''}" style="background:${LEVELS[l][0]}"></i>`;
const lchip = (l) => `<span class="lchip">${levelDot(l)}${l} ${LEVELS[l][1]}</span>`;
const levelPill = (l) => `<span class="level-pill">${levelDot(l)}${l} ${LEVELS[l][1]}</span>`;
const badges = (src) => (src === 'diy' ? '<span class="badge-diy">DIY</span>' : '<span class="badge-official">盏 · 精编</span>');

const segbar = (label, val) => {
  let segs = '';
  for (let i = 1; i <= 5; i++) segs += `<i class="${i <= val ? 'on' : ''}"></i>`;
  return `<div class="segbar"><span class="lbl">${label}</span><span class="segs">${segs}</span><span class="val">${val}/5</span></div>`;
};

const d3 = (lv, size = 18) => `<img class="d3" src="../difficulty-3d-v2/${lv}.png" style="width:${size}px;height:${size}px" loading="eager">`;

const tabbar = (active) => {
  const tabs = [['home', '首页'], ['bottle', '酒库'], ['chat', '酒圈'], ['user', '我的']];
  return `<div class="tabbar">${tabs.map(([i, lb]) =>
    `<div class="tab${i === active ? ' active' : ''}">${ic(i, 21)}<span class="lb">${lb}</span></div>`).join('')}</div>`;
};

/* 网格配方卡（图片按比例固定裁切，保持既有图片规则） */
const vcard = (o) => `
  <div class="vcard">
    <div class="ph">
      <img src="assets/${o.img}" style="object-position:${o.pos || '50% 50%'}">
      ${badges(o.src)}
      ${o.lv ? levelPill(o.lv) : ''}
    </div>
    <div class="ci">
      <div class="nm">${o.name}</div>
      <div class="mt num">${o.lv ? d3(o.lv, 17) : ''}<span>${o.meta}</span></div>
    </div>
  </div>`;

/* ================================================================
   H1 · 首页推荐
   ================================================================ */
F['H1-home-recommend'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="padding:64px 20px 0">
      <div class="eyebrow">11 月 3 日 · 上海 · 微醺指数 良</div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:7px">
        <div class="display" style="font-size:30px">今晚喝点什么</div>
        <div style="display:flex;gap:8px">${icbtn('search')}${icbtn('sliders')}</div>
      </div>
    </div>

    <div style="margin:16px 20px 0;height:44px;border-radius:22px;background:var(--surface);border:1px solid var(--hairline-soft);display:flex;align-items:center;gap:9px;padding:0 16px;color:var(--ink-400);font-size:12.5px">
      ${ic('search', 16, 1.6)}<span>搜索配方、材料或风味</span>
    </div>

    <div class="chips" style="padding:14px 20px 0;overflow:hidden">
      <span class="chip on">全部</span>
      <span class="chip">清爽</span>
      <span class="chip">酸甜</span>
      <span class="chip">烈</span>
      <span class="chip">3 步内</span>
    </div>

    <div style="padding:20px 20px 0">${secHead('今日推荐')}</div>
    <div style="margin:0 20px;position:relative;height:184px;border-radius:18px;overflow:hidden">
      <img src="assets/d13.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 42%">
      <div class="scrim"></div>
      <span class="badge-official">盏 · 精编</span>
      <span style="position:absolute;top:10px;right:10px;z-index:5">${icbtn('arrow-right', 'frost', 17)}</span>
      <span class="level-pill" style="left:auto;right:10px;top:56px;bottom:auto">${levelDot('L1')}L1 入门酒</span>
      <div class="hero-copy" style="position:absolute;left:16px;right:16px;bottom:14px;z-index:4;color:#fff">
        <div class="drink-name" style="font-size:26px;line-height:1.2">大都会</div>
        <div class="num" style="font-size:10.5px;color:rgba(255,255,255,.78);margin-top:5px">4 分钟 · 15%vol · 酸甜平衡的人气款</div>
      </div>
    </div>

    <div style="padding:20px 20px 0">${secHead('快手一杯', '换一批')}</div>
    <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:0 20px">
      ${vcard({ img: 'd17.jpg', pos: '50% 42%', name: '螺丝刀', meta: '2 分钟 · 10%vol', src: 'official', lv: 'L1' })}
      ${vcard({ img: 'd01.jpg', pos: '8% 50%', name: '金菲士', meta: '5 分钟 · 11%vol', src: 'diy', lv: 'L2' })}
    </div>

    <div style="margin:14px 20px 0;background:var(--surface);border-radius:16px;padding:13px 14px;display:flex;align-items:center;gap:12px">
      <span style="width:34px;height:34px;border-radius:50%;background:var(--amber-wash);color:var(--amber-lift);display:flex;align-items:center;justify-content:center">${ic('bottle', 18)}</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:12.5px;font-weight:600">你的酒库有 6 瓶 · 可做 12 杯</div>
        <div class="caption" style="margin-top:2px">补 1 瓶红石榴糖浆，再解锁 2 杯</div>
      </div>
      <span style="color:var(--ink-400);display:flex">${ic('chevron-right', 15)}</span>
    </div>
  </div>
  ${tabbar('home')}${homeind()}`;

/* ================================================================
   G1 · 配方详情
   ================================================================ */
F['G1-recipe-detail'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;overflow:hidden">
    <div style="position:absolute;top:54px;left:0;right:0;height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:55">
      ${icbtn('chevron-left')}
      <span style="position:absolute;left:50%;transform:translateX(-50%);font-size:11.5px;color:var(--ink-400)">配方详情</span>
      <div style="display:flex;gap:8px">${icbtn('share', '', 17)}${icbtn('heart', '', 17)}</div>
    </div>

    <div style="margin:106px 20px 0;position:relative;height:176px;border-radius:18px;overflow:hidden">
      <img src="assets/d03.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 45%">
      <div class="scrim"></div>
      <span class="badge-official">盏 · 精编</span>
      <span class="level-pill" style="left:auto;right:10px;top:10px;bottom:auto">${levelDot('L2')}L2 进阶酒</span>
      <div class="hero-copy" style="position:absolute;left:16px;right:16px;bottom:13px;z-index:4;color:#fff">
        <div class="drink-name" style="font-size:28px;line-height:1.18">威士忌酸</div>
        <div class="num" style="font-size:10.5px;color:rgba(255,255,255,.72);margin-top:4px">Whiskey Sour · 酸甜 · 约 18%vol</div>
        <div style="display:flex;gap:6px;margin-top:9px">
          <span style="height:22px;padding:0 9px;border-radius:11px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);font-size:10px;display:inline-flex;align-items:center;backdrop-filter:blur(8px)">酸甜</span>
          <span style="height:22px;padding:0 9px;border-radius:11px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);font-size:10px;display:inline-flex;align-items:center;backdrop-filter:blur(8px)">摇和</span>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:12px 20px 0">
      <div class="stat-tile"><span class="lb">难度</span><span class="vl">${d3('L2', 22)}L2 进阶</span></div>
      <div class="stat-tile"><span class="lb">用时</span><span class="vl num">${ic('clock', 14, 1.5)}5 分钟</span></div>
      <div class="stat-tile"><span class="lb">口碑</span><span class="vl num">${icf('star', 13)}4.8<span style="color:var(--ink-300);font-weight:400">·312</span></span></div>
    </div>

    <div style="padding:14px 20px 0">
      <div class="sec-head" style="margin-bottom:8px"><span class="h2">风味</span><span class="caption num">平衡型</span></div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${segbar('酸度', 4)}${segbar('甜度', 2)}${segbar('酒精感', 3)}
      </div>

      <div class="sec-head" style="margin:12px 0 8px"><span class="h2">材料</span><span class="caption">4 项 · 酒库已有 2 项</span></div>
      <div class="gcard" style="padding:2px 14px">
        ${[
          ['check', 'var(--amber-lift)', '波本威士忌', '60ml', '<span style="color:#7ED957">酒库有</span>'],
          ['check', 'var(--amber-lift)', '黄柠檬汁', '30ml', ''],
          ['alert', 'var(--amber-lift)', '单糖浆', '15ml', '<span style="color:var(--amber-lift)">可用蜂蜜 10ml 替代</span>'],
          ['close', 'var(--ink-300)', '蛋清', '1 个', '<span style="color:var(--ink-300)">可选</span>'],
        ].map(([i, c, n, q, note], idx, arr) => `
          <div style="display:flex;align-items:center;gap:9px;height:38px;${idx < arr.length - 1 ? 'border-bottom:1px solid var(--hairline-soft)' : ''}">
            <span style="color:${c};display:flex;flex:0 0 auto">${ic(i, 15, 1.8)}</span>
            <span style="font-size:12.5px;font-weight:500">${n}</span>
            <span class="num" style="font-size:10.5px;color:var(--ink-400);margin-left:2px">${q}</span>
            <span style="margin-left:auto;font-size:10px">${note}</span>
          </div>`).join('')}
      </div>

      <div class="sec-head" style="margin:12px 0 7px"><span class="h2">步骤</span><span class="arr">${ic('arrow-right', 15, 1.5)}</span></div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${['材料入摇壶，先干摇 5 秒乳化蛋清', '加冰摇和 10 秒，滤入冰杯'].map((s, i) => `
          <div style="display:flex;align-items:center;gap:10px;font-size:12px;color:var(--ink-600)">
            <span class="num" style="color:var(--ink-300);font-size:11px">0${i + 1}</span>${s}
          </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="ctabar">
    <div style="text-align:center;font-size:10.5px;color:var(--ink-400);margin-bottom:9px">手动标记已完成</div>
    <div class="btn primary">开调</div>
  </div>
  ${homeind()}`;

/* ================================================================
   S1 · 酒圈瀑布流
   ================================================================ */
(() => {
  const post = (o) => `
    <div style="position:relative;height:${o.h}px;border-radius:16px;overflow:hidden">
      <img src="assets/${o.img}" style="width:100%;height:100%;object-fit:cover;object-position:${o.pos}">
      <div class="scrim"></div>
      <span style="position:absolute;top:9px;right:9px;z-index:5;height:24px;padding:0 9px;border-radius:12px;background:rgba(16,17,21,.5);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.14);display:inline-flex;align-items:center;gap:4px;font-size:10px;color:#fff">
        ${ic('heart', 11, 1.7)}<span class="num">${o.likes}</span>
      </span>
      <div style="position:absolute;left:11px;right:11px;bottom:10px;z-index:4;color:#fff">
        <div style="font-size:12px;font-weight:600;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${o.title}</div>
        <div style="display:flex;align-items:center;gap:5px;margin-top:7px;font-size:9.5px;color:rgba(255,255,255,.72)">
          <img src="assets/${o.av}" style="width:16px;height:16px;border-radius:50%;object-fit:cover">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.name}</span>
        </div>
      </div>
    </div>`;

  F['S1-feed'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;padding:64px 20px 0">
      <div>
        <div class="eyebrow">COMMUNITY</div>
        <div class="display" style="font-size:29px;margin-top:5px">酒圈</div>
      </div>
      ${icbtn('camera')}
    </div>

    <div style="display:flex;align-items:center;gap:20px;padding:14px 20px 0">
      <span style="font-size:12.5px;color:var(--ink-400)">关注</span>
      <span style="font-size:12.5px;color:var(--ink-900);font-weight:600;position:relative">推荐<i style="position:absolute;left:50%;transform:translateX(-50%);bottom:-7px;width:16px;height:2px;border-radius:1px;background:var(--amber-lift)"></i></span>
      <span style="font-size:12.5px;color:var(--ink-400)">最新</span>
      <span style="margin-left:auto;font-size:10.5px;color:var(--ink-400);display:inline-flex;align-items:center;gap:3px">${ic('sliders', 13, 1.5)}筛选</span>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:16px 20px 0">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${post({ img: 'd03.jpg', pos: '50% 40%', h: 196, title: '烟熏古典｜周末仪式感拉满', av: 'a1.jpg', name: '深夜小酒馆不打烊', likes: '326' })}
        ${post({ img: 'd20.jpg', pos: '50% 40%', h: 158, title: '草莓黛绮莉，粉色治愈系', av: 'a5.jpg', name: '阿 May 调酒记', likes: '156' })}
        ${post({ img: 'd13.jpg', pos: '50% 45%', h: 150, title: '大都会｜一杯正红', av: 'a6.jpg', name: '一个人喝到天亮', likes: '74' })}
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${post({ img: 'd09.jpg', pos: '50% 0%', h: 236, title: '荔枝马天尼｜季节限定的一杯', av: 'a3.jpg', name: '杯中物', likes: '892' })}
        ${post({ img: 'd05.jpg', pos: '50% 50%', h: 148, title: '西柚帕洛玛，酸甜刚好', av: 'a2.jpg', name: '居家微醺', likes: '89' })}
        ${post({ img: 'd02.jpg', pos: '50% 50%', h: 132, title: '自由古巴，可乐桶升级版', av: 'a4.jpg', name: '可乐不加冰', likes: '51' })}
      </div>
    </div>
    <div class="caption" style="text-align:center;margin-top:10px">已加载全部</div>
  </div>
  ${tabbar('chat')}${homeind()}`;
})();

/* ================================================================
   C1 · 酒库总览
   ================================================================ */
F['C1-pantry-overview'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;padding:64px 20px 0">
      <div>
        <div class="eyebrow">MY BAR</div>
        <div class="display" style="font-size:29px;margin-top:5px">酒库</div>
      </div>
      ${icbtn('plus')}
    </div>

    <div style="margin:16px 20px 0;background:var(--amber);border-radius:18px;padding:16px 6px;display:flex">
      ${[['6', '藏酒（瓶）'], ['9', '材料（件）'], ['12', '可做（杯）']].map(([n, lb], i) => `
        <div style="flex:1;text-align:center;${i > 0 ? 'border-left:1px solid rgba(255,255,255,.22)' : ''}">
          <div class="num" style="font-size:25px;font-weight:600;line-height:1;color:#fff">${n}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.78);margin-top:6px">${lb}</div>
        </div>`).join('')}
    </div>

    <div class="chips" style="padding:14px 20px 0">
      <span class="chip on">我的酒 6</span>
      <span class="chip">材料 9</span>
      <span class="chip">收藏 12</span>
    </div>

    <div style="padding:20px 20px 0">${secHead('缺料提醒', '查看全部')}</div>
    <div style="margin:0 20px;background:var(--surface);border-radius:16px;padding:12px 14px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:46px;height:46px;border-radius:12px;overflow:hidden;flex:0 0 auto">
          <img src="assets/i04.jpg" style="width:100%;height:100%;object-fit:cover">
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600">红石榴糖浆</div>
          <div style="font-size:10.5px;color:var(--ink-400);margin-top:3px">莫吉托、新加坡司令需要它</div>
        </div>
        <span class="btn-outline-amber">去补货</span>
      </div>
      <div style="font-size:10px;color:var(--ink-300);margin-top:8px">跳转美团闪购 · 预计 30 分钟送达</div>
    </div>

    <div style="padding:20px 20px 0">${secHead('最近添加')}</div>
    <div class="gcard" style="margin:0 20px">
      <div class="vrow">
        <div class="thumb"><img src="assets/b05.jpg" style="object-position:50% 50%"></div>
        <div class="inf">
          <div class="nm">百加得白朗姆</div>
          <div class="mt">750ml · 40%vol</div>
          <div style="margin-top:6px;height:4px;border-radius:2px;background:rgba(255,255,255,.10);overflow:hidden">
            <div style="width:90%;height:100%;background:var(--amber-lift)"></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:7px">
          ${lchip('L1')}
          <span class="num" style="font-size:10px;color:var(--ink-400)">余 90%</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="vrow">
        <div class="thumb"><img src="assets/i02.jpg"></div>
        <div class="inf">
          <div class="nm">青柠</div>
          <div class="mt">× 3 个 · 新鲜</div>
        </div>
        <span class="caption num">10-30 入库</span>
      </div>
      <div class="divider"></div>
      <div class="vrow">
        <div class="thumb"><img src="assets/b02.jpg" style="object-position:50% 40%"></div>
        <div class="inf">
          <div class="nm">尊尼获加黑牌</div>
          <div class="mt">700ml · 40%vol</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:7px">
          ${lchip('L2')}
          <span class="num" style="font-size:10px;color:var(--ink-400)">余 65%</span>
        </div>
      </div>
    </div>
  </div>
  ${tabbar('bottle')}${homeind()}`;

/* ================================================================
   M1 · 我的
   ================================================================ */
F['M1-profile'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="padding:64px 20px 0">
      <div class="eyebrow">PROFILE</div>
      <div class="display" style="font-size:29px;margin-top:5px">我的</div>
    </div>

    <div style="margin:16px 20px 0;background:var(--surface);border-radius:18px;padding:14px;display:flex;align-items:center;gap:13px">
      ${avatar('a8.jpg', 56)}
      <div style="flex:1;min-width:0">
        <div style="font-size:17px;font-weight:600;letter-spacing:-.3px">居家调酒练习生</div>
        <div class="caption" style="margin-top:4px">已绑定 Apple 邮箱 l***@163.com</div>
      </div>
      ${icbtn('more', '', 17)}
    </div>

    <div style="margin:12px 20px 0;background:var(--surface);border-radius:18px;padding:14px 6px;display:flex">
      ${[['28', '调酒'], ['46', '收藏'], ['12', '帖子']].map(([n, lb], i) => `
        <div style="flex:1;text-align:center;${i > 0 ? 'border-left:1px solid var(--hairline-soft)' : ''}">
          <div class="num" style="font-size:23px;font-weight:600;line-height:1">${n}</div>
          <div style="font-size:10px;color:var(--ink-400);margin-top:6px">${lb}</div>
        </div>`).join('')}
    </div>

    <div class="gcard" style="margin:12px 20px 0">
      <div style="display:flex;align-items:center;gap:10px;padding:0 14px;height:50px">
        <span style="width:20px;color:var(--ink-400);display:flex">${ic('leaf', 19)}</span>
        <span style="font-size:12.5px">口味偏好</span>
        <div class="chips" style="margin-left:auto;gap:4px">
          <span class="chip on" style="height:26px;padding:0 10px;font-size:10.5px;border-radius:13px">酸甜</span>
          <span class="chip" style="height:26px;padding:0 10px;font-size:10.5px;border-radius:13px">清爽</span>
          <span class="chip" style="height:26px;padding:0 10px;font-size:10.5px;border-radius:13px">低度</span>
        </div>
      </div>
      <div class="divider"></div>
      <div style="display:flex;align-items:center;gap:10px;padding:0 14px;height:50px">
        <span style="width:20px;color:var(--ink-400);display:flex">${ic('bell', 19)}</span>
        <span style="font-size:12.5px;flex:1">消息通知</span>
        <span class="toggle on"></span>
      </div>
    </div>

    <div class="sec-head" style="margin:14px 20px 8px"><span class="h2">我的内容</span></div>
    <div class="gcard" style="margin:0 20px">
      ${[['glass', '我的调酒', '28 杯'], ['doc', '我的帖子', '12 条'], ['star', '勋章', '4 枚'], ['chat', '帮助与反馈', ''], ['gear', '设置', '']].map(([i, t, v], idx) => `
        ${idx > 0 ? '<div class="divider"></div>' : ''}
        <div style="display:flex;align-items:center;gap:12px;padding:0 14px;height:50px">
          <span style="width:20px;color:var(--ink-400);display:flex">${ic(i, 19)}</span>
          <span style="flex:1;font-size:13px">${t}</span>
          ${v ? `<span class="num" style="font-size:10.5px;color:var(--ink-400);margin-right:4px">${v}</span>` : ''}
          <span style="color:var(--ink-300);display:flex">${ic('chevron-right', 14)}</span>
        </div>`).join('')}
    </div>

    <div class="caption num" style="text-align:center;margin-top:18px;color:var(--ink-300)">盏 v1.0.0 · 适量饮酒</div>
  </div>
  ${tabbar('user')}${homeind()}`;

/* ---------- 帧顺序（仅 5 张样张） ---------- */
const ORDER = [
  'H1-home-recommend',
  'G1-recipe-detail',
  'S1-feed',
  'C1-pantry-overview',
  'M1-profile',
];

const root = document.getElementById('root');
root.innerHTML = ORDER.map(id => `<section class="frame" data-frame-id="${id}">${F[id]}</section>`).join('');
window.__ZhanFrames__ = ORDER;
