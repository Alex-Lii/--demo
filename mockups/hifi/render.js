/* ============ 盏 · 高保真视觉稿 render ============ */
/* 素材映射（按画面实际内容分配）：
   金汤力d07 自由古巴d02 威士忌嗨棒b02(杯中) 螺丝刀d17 金菲士d01左 莫吉托d16
   莫斯科骡子b03(饮品) 咸狗d05 边车d09中 皮斯科酸d01中 金酒酸d09右 威士忌酸d10
   古典/烟熏古典d03 尼格罗尼d04 曼哈顿b01(杯中) 大都会d13 荔枝马天尼d09左
   草莓黛绮莉d20 西柚帕洛玛d05 百香果莫吉托d16
   酒瓶实拍: 杰克丹尼蜂蜜威士忌b01 尊尼获加黑牌b02 百加得白/柠檬/陈年朗姆b05(左中右) 伏特加d16顶(透明瓶)
   品类格: 金酒b03(G&T饮品) 利口酒d17 金巴利d04
   材料: 青柠i02 柠檬i01 薄荷d07局部 红石榴糖浆i04 汤力水d07 苏打水d16 蔓越莓汁d04
*/

/* ---------- SVG 图标库（stroke 1.7 / round / viewBox 24） ---------- */
const P = {
  home: '<path d="M4 10.5 12 3.5l8 7"/><path d="M6.2 9.2V20h11.6V9.2"/>',
  bottle: '<path d="M10 3h4"/><path d="M10.8 3v3.2c0 .8-.5 1.6-1 2.2-1 1.2-1.8 2.6-1.8 4.4V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6.2c0-1.8-.8-3.2-1.8-4.4-.5-.6-1-1.4-1-2.2V3"/><path d="M8 14.5h8"/>',
  chat: '<path d="M20.5 12a8.5 8.5 0 0 1-12.4 7.5L3.5 21l1.6-4.4A8.5 8.5 0 1 1 20.5 12Z"/>',
  user: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c1.4-3.8 4.3-5.6 7.5-5.6s6.1 1.8 7.5 5.6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  sliders: '<path d="M4 7h9M17.5 7H20M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  heart: '<path d="M12 20s-7.2-4.4-9.2-8.9A5.2 5.2 0 0 1 12 7.2a5.2 5.2 0 0 1 9.2 3.9C19.2 15.6 12 20 12 20Z"/>',
  comment: '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L4 20.5l1.6-4.3A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>',
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
  'map-pin': '<path d="M12 21.5s-6.5-5.8-6.5-10.5a6.5 6.5 0 0 1 13 0c0 5-6.5 10.5-6.5 10.5Z"/><circle cx="12" cy="10.8" r="2.3"/>',
  flag: '<path d="M5.5 21.5v-17"/><path d="M5.5 5c4-2 7 2 13 0v9c-6 2-9-2-13 0"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8"/>',
  bell: '<path d="M18 9.5a6 6 0 1 0-12 0c0 5.5-2.3 6.8-2.3 6.8h16.6S18 15 18 9.5"/><path d="M10.2 19.8a2 2 0 0 0 3.6 0"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  doc: '<path d="M7 3.5h6.5L19 9v11.5H7V3.5Z"/><path d="M13.5 3.5V9H19"/>',
  trash: '<path d="M4.5 6.5h15"/><path d="M9.5 6.5v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"/><path d="m6.5 6.5 1 13a1.5 1.5 0 0 0 1.5 1.4h6a1.5 1.5 0 0 0 1.5-1.4l1-13"/>',
  'arrow-right': '<path d="M4 12h15"/><path d="m13.5 6 6 6-6 6"/>',
  glass: '<path d="M4.5 4.5h15L12 12.2 4.5 4.5Z"/><path d="M12 12.2V20"/><path d="M8 20.5h8"/>',
  leaf: '<path d="M5.5 18.5C5.5 10 12 4.5 20 4.5c0 8.5-5.5 14-13.5 14"/><path d="M5.5 18.5C8 13 12 9.5 16 7.5"/>',
  edit: '<path d="m14.5 5 4.5 4.5L8 20.5H3.5V16L14.5 5Z"/><path d="m12.5 7 4.5 4.5"/>',
};
function ic(name, size = 20, sw = 1.7) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}
function icf(name, size = 20) { // filled variant (heart / bookmark / star)
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}
const APPLE = '<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.88 1.45-.06 2-.93 3.74-.93s2.24.93 3.77.9c1.56-.02 2.55-1.41 3.5-2.8 1.1-1.61 1.56-3.17 1.58-3.25-.03-.02-3.04-1.17-3.07-4.1ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.85-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63Z"/></svg>';

/* ---------- 状态栏 / Home indicator ---------- */
const sbIcons = `<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.8"/><rect x="4.5" y="5" width="3" height="6" rx="0.8"/><rect x="9" y="2.6" width="3" height="8.4" rx="0.8"/><rect x="13.5" y="0" width="3" height="11" rx="0.8"/></svg>`
  + `<svg width="16" height="11" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1.5 4.2a10 10 0 0 1 13 0"/><path d="M3.9 6.9a7 7 0 0 1 8.2 0"/><path d="M6.4 9.5a3.6 3.6 0 0 1 3.2 0"/><circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none"/></svg>`
  + `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.6" y="0.6" width="20" height="10.8" rx="3" stroke="currentColor" stroke-opacity=".4" stroke-width="1"/><rect x="2.2" y="2.2" width="14.5" height="7.6" rx="1.6" fill="currentColor"/><path d="M22.8 4v4a2.1 2.1 0 0 0 0-4Z" fill="currentColor" fill-opacity=".5"/></svg>`;
const statusbar = () => `<div class="statusbar"><span class="time">9:41</span><span class="sic">${sbIcons}</span></div>`;
const homeind = (light) => `<div class="homeind${light ? ' light' : ''}"></div>`;

/* ---------- 通用组件 ---------- */
const icbtn = (icon, cls = '') => `<span class="icbtn ${cls}">${ic(icon, 18)}</span>`;
const secHead = (t) => `<div class="sec-head"><span class="h2">${t}</span><span class="arr">${ic('arrow-right', 16, 1.5)}</span></div>`;
const warn = () => `<div class="drinkwarn"><span class="dot"></span>适量饮酒 · 请勿酒后驾车 · 未成年人禁止饮酒</div>`;

const LEVELS = { L1: ['#7ED957', '入门酒'], L2: ['#F5A623', '进阶酒'], L3: ['#D0021B', '大师酒'], L4: ['#1A1A1A', '隐藏款'] };
const levelPill = (l, sm) => `<span class="level-pill${sm ? ' sm' : ''}"><i class="dot" style="background:${LEVELS[l][0]}"></i>${l} ${LEVELS[l][1]}</span>`;
const lchip = (l) => `<span class="lchip"><i class="dot" style="background:${LEVELS[l][0]}"></i>${l} ${LEVELS[l][1]}</span>`;
const badges = (src) => (src === 'diy' ? '<span class="badge-diy">DIY</span>' : '<span class="badge-official">盏 · 精编</span>');

const stars = (n, size = 11) => {
  let s = '<span class="stars">';
  for (let i = 1; i <= 3; i++) s += i <= n ? icf('star', size) : `<span class="dim">${ic('star', size)}</span>`;
  return s + '</span>';
};

const segbar = (label, val, dark = false) => {
  let segs = '';
  for (let i = 1; i <= 5; i++) segs += `<i class="${i <= val ? 'on' + (dark ? ' dark' : '') : ''}"></i>`;
  return `<div class="segbar"><span class="lbl">${label}</span><span class="segs">${segs}</span><span class="val">${val}/5</span></div>`;
};

const avatar = (src, size, ring = false) => `<img class="avatar${ring ? ' ring' : ''}" src="assets/${src}" style="width:${size}px;height:${size}px" loading="eager">`;

/* 网格配方卡 */
const rcard = (o) => `
  <div class="rcard" style="${o.style || ''}">
    <div class="photo" style="height:${o.ph || 110}px">
      <img src="assets/${o.img}" style="${o.pos ? 'object-position:' + o.pos : ''}">
      ${badges(o.src)}${levelPill(o.lv, o.ph && o.ph < 80)}
    </div>
    <div class="info">
      <div class="name">${o.name}</div>
      <div class="meta num">${o.meta}</div>
      ${o.sub ? `<div class="sub">${o.sub}</div>` : ''}
    </div>
  </div>`;

/* 竖排列表配方卡（照片左 + 信息右） */
const rrow = (o) => `
  <div class="rrow" style="${o.style || ''}">
    <div class="photo">
      <img src="assets/${o.img}" style="${o.pos ? 'object-position:' + o.pos : ''}">
    </div>
    <div class="info">
      <div class="name" style="font-family:var(--serif);font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
      <div class="meta num" style="font-size:11px;color:var(--ink-400);display:flex;align-items:center;gap:6px">
        ${o.lv ? `<i style="width:7px;height:7px;border-radius:50%;flex:0 0 auto;background:${LEVELS[o.lv][0]}"></i>` : ''}
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.meta}</span>
      </div>
      ${o.sub || ''}
    </div>
    ${o.right || ''}
  </div>`;

/* tab bar */
const tabbar = (active) => {
  const tabs = [['home', '首页'], ['bottle', '酒库'], ['chat', '酒圈'], ['user', '我的']];
  return `<div class="tabbar">${tabs.map(([i, lb]) =>
    `<div class="tab${i === active ? ' active' : ''}">${ic(i, 22)}<span class="lb">${lb}</span></div>`).join('')}</div>`;
};

/* 二级页 nav */
const navbar = (title, left = 'chevron-left', right = '', flow = false) => `
  <div class="navbar${flow ? ' flow' : ''}">
    ${icbtn(left)}
    <span class="ttl">${title}</span>
    ${right ? right : '<span style="width:40px"></span>'}
  </div>`;

/* 数据行（赞/评/藏） */
const statline = (items) => `<div style="display:flex;align-items:center;gap:18px;color:var(--ink-600)">${items.map(([i, t]) =>
  `<span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-variant-numeric:tabular-nums">${i}${t}</span>`).join('')}</div>`;

/* ================================================================
   23 个 frame
================================================================ */
const F = {};

/* ---------- L1 年龄确认 ---------- */
F['L1-age-confirm'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding:96px 24px 40px;display:flex;flex-direction:column">
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center">
      <div style="width:88px;height:88px;border-radius:50%;background:linear-gradient(180deg,#B9804E,#9C6F40);display:flex;align-items:center;justify-content:center">
        <span style="font-family:var(--serif);font-size:44px;font-weight:600;color:#fff;line-height:1">盏</span>
      </div>
      <div class="display" style="margin-top:20px">欢迎来到盏</div>
      <div class="body" style="margin-top:10px;max-width:280px">一盏好调酒，在家就能做。<br>在继续之前，我们需要确认你的年龄。</div>
    </div>
    <div class="card" style="margin-top:30px;padding:8px 0 0">
      <div class="picker">
        <div class="selband"></div>
        <div class="col">${['03', '04', '05', '06', '07'].map((m, i) => `<div class="it${i === 2 ? ' sel' : ''}">${m} 月</div>`).join('')}</div>
        <div class="col">${['10', '11', '12', '13', '14'].map((d, i) => `<div class="it${i === 2 ? ' sel' : ''}">${d} 日</div>`).join('')}</div>
        <div class="col">${['1996', '1997', '1998', '1999', '2000'].map((y, i) => `<div class="it${i === 2 ? ' sel' : ''}">${y}</div>`).join('')}</div>
      </div>
      <div style="text-align:center;padding:12px 0 16px;border-top:1px solid var(--hairline)">
        <span class="caption num">我出生于 <span style="color:var(--ink-900);font-weight:600">1998 年 5 月 12 日</span></span>
      </div>
    </div>
    <div style="margin-top:auto">
      <div class="btn primary">我已满 18 岁</div>
      <div style="text-align:center;margin-top:14px;font-size:11px;color:var(--wine)">未成年人禁止饮酒</div>
    </div>
  </div>
  ${homeind()}`;

/* ---------- L2 登录 ---------- */
F['L2-login'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding:88px 24px 40px;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;gap:14px">
      <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(180deg,#B9804E,#9C6F40);display:flex;align-items:center;justify-content:center;flex:0 0 auto">
        <span style="font-family:var(--serif);font-size:28px;font-weight:600;color:#fff;line-height:1">盏</span>
      </div>
      <div class="h1" style="flex:1">登录以保存你的酒库</div>
    </div>
    <div style="margin-top:22px;display:flex;flex-direction:column;gap:12px">
      ${[['lock', '用 Apple 账号一键登录，无需注册'], ['doc', '我们仅获取你的邮箱，用于账号识别与必要通知'], ['bell', '不做营销推送，通知由你掌控']].map(([i, t]) => `
        <div style="display:flex;align-items:center;gap:12px">
          <span class="icbtn" style="width:36px;height:36px">${ic(i, 16)}</span>
          <span style="font-size:13px;color:var(--ink-600)">${t}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:26px;border-radius:20px;overflow:hidden;position:relative;height:236px">
      <img src="assets/d19.jpg" style="width:100%;height:100%;object-fit:cover">
      <div class="scrim"></div>
      <div style="position:absolute;left:16px;bottom:14px;z-index:3;color:#fff">
        <div style="font-family:var(--serif);font-size:16px;font-weight:600">家里的角落，也能是吧台</div>
        <div style="font-size:11px;opacity:.85;margin-top:3px">已有 12,000+ 位家庭调酒师加入</div>
      </div>
    </div>
    <div style="margin-top:auto">
      <div class="btn dark">${APPLE}继续使用 Apple 登录</div>
      <div class="caption" style="text-align:center;margin-top:14px">继续即代表同意<span style="color:var(--amber)">《用户协议》</span>与<span style="color:var(--amber)">《隐私政策》</span></div>
    </div>
  </div>
  ${homeind()}`;

/* ---------- L3 onboarding 选基酒 ---------- */
(() => {
  /* 第一步：选酒类（家族级）。行式规格与 H1b 一致 */
  const BASES = [
    { n: '伏特加', img: 'd16.jpg', pos: '50% 0%', meta: '无色无味 · 最适合调酒入门', sel: true },
    { n: '朗姆酒', img: 'b05.jpg', pos: '50% 50%', meta: '甘蔗蒸馏 · 甜感突出', sel: true },
    { n: '金酒', img: 'b03.jpg', pos: '50% 60%', meta: '杜松子香气 · 清爽百搭', sel: false },
    { n: '龙舌兰', img: 'd05.jpg', pos: '50% 45%', meta: '龙舌兰草酿造 · 柑橘草本', sel: false },
    { n: '威士忌', img: 'b01.jpg', pos: '50% 45%', meta: '谷物陈酿 · 烟熏焦糖', sel: true },
    { n: '白兰地', img: 'b02.jpg', pos: '50% 45%', meta: '葡萄蒸馏 · 果香圆润', sel: false },
  ];
  const totalSelB = BASES.filter(b => b.sel).length;
  const stepPill = (t) => `<span style="flex:0 0 auto;height:20px;padding:0 8px;border-radius:10px;background:rgba(176,122,74,.12);color:var(--amber);font-size:11px;font-weight:600;display:inline-flex;align-items:center;font-variant-numeric:tabular-nums">${t}</span>`;
  const baseRow = (b) => `
    <div class="rrow" style="border-color:${b.sel ? 'rgba(176,122,74,.42)' : 'var(--hairline)'}">
      <div class="photo">
        <img src="assets/${b.img}" style="object-position:${b.pos}">
      </div>
      <div class="info">
        <div style="font-family:var(--serif);font-size:16px;font-weight:600;color:var(--ink-900);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.n}</div>
        <div class="num" style="font-size:11px;color:var(--ink-400);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.meta}</div>
      </div>
      <div style="flex:0 0 auto;width:24px;height:24px;border-radius:50%;margin-left:10px;border:1.5px solid ${b.sel ? 'transparent' : 'var(--ink-300)'};background:${b.sel ? 'var(--amber)' : 'transparent'};display:flex;align-items:center;justify-content:center;color:#fff">
        ${b.sel ? ic('check', 13, 2.2) : ''}
      </div>
    </div>`;

  F['L3-onboarding'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding:80px 0 0 0;overflow:hidden;display:flex;flex-direction:column">
    <div style="padding:0 20px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div class="display" style="font-size:26px">你家里现在有哪些酒？</div>
        ${stepPill('1/2')}
      </div>
      <div class="body" style="margin-top:6px">先勾选酒类，下一步再挑具体酒款。</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:7px;padding:16px 20px 0">
      ${BASES.map(baseRow).join('')}
    </div>
    <div class="caption" style="text-align:center;margin:6px 0 6px">已选 ${totalSelB} 类 · 可解锁 14 款配方</div>
    <div style="padding:0 20px 34px;display:flex;gap:12px">
      <div class="btn secondary" style="flex:0 0 110px">手动添加</div>
      <div class="btn primary" style="flex:1">下一步（已选 ${totalSelB} 类）</div>
    </div>
  </div>
  ${homeind()}`;
})();

/* ---------- L3b onboarding 第二步：选具体酒款（SKU 级） ---------- */
(() => {
  /* 当前选中酒类「朗姆酒」下的品牌酒款；瓶照取自同一张百加得三瓶实拍（按左/中/右裁切） */
  const BOTTLES = [
    { n: '百加得 白朗姆', bg: '50% 40%', abv: 40, vol: 750, price: '¥68', sel: true },
    { n: '百加得 柠檬朗姆', bg: '6% 40%', abv: 35, vol: 700, price: '¥78', sel: false },
    { n: '百加得 陈年朗姆', bg: '88% 40%', abv: 40, vol: 700, price: '¥128', sel: true },
  ];
  const totalSel = BOTTLES.filter(b => b.sel).length;
  /* 某家族 0 款 SKU 的空态：高度与 3 行列表 + 「展开更多」一致，保证底部按钮不位移 */
  const emptyPanel = `
    <div style="height:305px;border-radius:20px;border:1px dashed rgba(32,26,20,.16);background:var(--tint-cream);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
      <div style="font-size:13px;color:var(--ink-400)">这类酒我们还没收录</div>
      <div style="display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;color:var(--amber)">手动添加</div>
    </div>`;
  const stepPill = (t) => `<span style="flex:0 0 auto;height:20px;padding:0 8px;border-radius:10px;background:rgba(176,122,74,.12);color:var(--amber);font-size:11px;font-weight:600;display:inline-flex;align-items:center;font-variant-numeric:tabular-nums">${t}</span>`;
  const bottleRow = (b) => `
    <div class="rrow" style="border-color:${b.sel ? 'rgba(176,122,74,.42)' : 'var(--hairline)'}">
      <div class="photo" style="background:url(assets/b05.jpg) ${b.bg} / 300% auto no-repeat"></div>
      <div class="info">
        <div style="font-family:var(--serif);font-size:16px;font-weight:600;color:var(--ink-900);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.n}</div>
        <div class="num" style="font-size:11px;color:var(--ink-400);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.abv}%vol · ${b.vol}ml · <span style="color:var(--amber);font-weight:600">${b.price}</span></div>
      </div>
      <div style="flex:0 0 auto;width:24px;height:24px;border-radius:50%;margin-left:10px;border:1.5px solid ${b.sel ? 'transparent' : 'var(--ink-300)'};background:${b.sel ? 'var(--amber)' : 'transparent'};display:flex;align-items:center;justify-content:center;color:#fff">
        ${b.sel ? ic('check', 13, 2.2) : ''}
      </div>
    </div>`;

  F['L3b-onboarding-bottles'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding:80px 0 0 0;overflow:hidden;display:flex;flex-direction:column">
    <div style="padding:0 20px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div class="display" style="font-size:26px">挑具体酒款</div>
        ${stepPill('2/2')}
      </div>
      <div class="body" style="margin-top:6px">勾选你手头有的酒款，没有也可以先跳过。</div>
    </div>
    <div class="l3b-chips" style="display:flex;align-items:center;gap:8px;padding:14px 20px 0;white-space:nowrap">
      <span class="chip" data-fam="vodka">伏特加</span><span class="chip on" data-fam="rum">朗姆酒</span><span class="chip" data-fam="whisky">威士忌</span>
      <span style="margin-left:auto;flex:0 0 auto;font-size:12px;color:var(--amber);display:inline-flex;align-items:center;gap:2px">${ic('chevron-left', 12, 2)}重选</span>
    </div>
    <!-- 家族切换 tab：只列 Step 1 已勾选的家族；高亮 = 当前家族；右侧角标 = 该家族已选 SKU 数，0 时隐藏 -->
    <style>
      .l3b-tabs{display:flex;align-items:center;gap:30px;width:100%;padding:0 20px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 24px,#000 calc(100% - 24px),transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 24px,#000 calc(100% - 24px),transparent 100%)}
      .l3b-tab{flex:0 0 auto;min-width:104px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer}
      .l3b-tab .nm{display:inline-flex;align-items:center;gap:5px;font-size:14px;font-weight:400;color:var(--ink-600);white-space:nowrap}
      .l3b-tab .dot{display:none;width:5px;height:5px;border-radius:50%;background:var(--amber)}
      .l3b-tab .cnt{font-size:11px;color:var(--amber);opacity:.9}
      .l3b-tab .bar{width:100%;height:2px;border-radius:1px;background:transparent}
      .l3b-tab.on .nm{color:var(--amber);font-weight:600}
      .l3b-tab.on .dot{display:inline-block}
      .l3b-tab.on .bar{background:var(--amber)}
    </style>
    <div style="margin-top:10px;height:38px;display:flex;align-items:center">
      <div class="l3b-tabs">
        <div class="l3b-tab" data-fam="vodka"><span class="nm"><i class="dot"></i>伏特加</span><span class="bar"></span></div>
        <div class="l3b-tab on" data-fam="rum"><span class="nm"><i class="dot"></i>朗姆酒<span class="cnt">·2</span></span><span class="bar"></span></div>
        <div class="l3b-tab" data-fam="whisky"><span class="nm"><i class="dot"></i>威士忌</span><span class="bar"></span></div>
      </div>
    </div>
    <div data-sku-scroll style="padding:14px 20px 0;overflow:hidden">
      <div data-panel="vodka" style="display:none">${emptyPanel}</div>
      <div data-panel="whisky" style="display:none">${emptyPanel}</div>
      <div data-panel="rum">
        <div style="display:flex;flex-direction:column;gap:7px">
          ${BOTTLES.map(bottleRow).join('')}
        </div>
        <div style="text-align:center;margin-top:12px;font-size:11px;color:var(--ink-400)">展开更多 · 还有 5 款朗姆酒</div>
      </div>
    </div>
    <div style="margin-top:auto">
      <div class="caption" style="text-align:center;margin:6px 0 6px">已选 ${totalSel} 瓶 · 可解锁 22 款配方</div>
      <div style="padding:0 20px 34px;display:flex;gap:12px">
        <div class="btn secondary" style="flex:0 0 110px">跳过</div>
        <div class="btn primary" style="flex:1">完成（已选 ${totalSel} 瓶）</div>
      </div>
    </div>
  </div>
  ${homeind()}`;
})();

const homeHead = () => `
  <div style="display:flex;align-items:center;justify-content:space-between;padding:66px 20px 0">
    <div>
      <div class="display">晚上好</div>
      <div class="caption" style="margin-top:5px">上海的夜，适合来一杯酸的</div>
    </div>
    <div style="display:flex;gap:10px">${icbtn('search')}${icbtn('sliders')}</div>
  </div>`;

const heroGT = () => `
  <div style="margin:16px 20px 0;position:relative;height:172px;border-radius:20px;overflow:hidden">
    <img src="assets/d07.jpg" style="width:100%;height:100%;object-fit:cover;object-position:58% 60%">
    <div class="scrim"></div>
    <span class="badge-official">盏 · 精编</span>
    <div style="position:absolute;left:16px;bottom:14px;z-index:3;color:#fff">
      <div style="font-family:var(--serif);font-size:24px;font-weight:600">金汤力</div>
      <div style="font-size:11px;opacity:.9;margin-top:4px;font-variant-numeric:tabular-nums">3 分钟 · 6.5%vol · 经典入门首选</div>
    </div>
  </div>`;

/* ---------- H1 推荐 ---------- */
F['H1-home-recommend'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    ${homeHead()}
    ${heroGT()}
    <div style="padding:16px 20px 0">
      ${secHead('今日推荐')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${rcard({ img: 'd02.jpg', name: '自由古巴', meta: '★ 简单 · 4 分钟 · 12%vol', src: 'official', lv: 'L1', ph: 96, pos: '50% 40%', sub: '<span class="match">酒库可做</span>' })}
        ${rcard({ img: 'b02.jpg', name: '威士忌嗨棒', meta: '★ 简单 · 3 分钟 · 9%vol', src: 'diy', lv: 'L1', ph: 96, pos: '32% 68%', sub: `${avatar('a7.jpg', 16)}<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">高球少年</span>` })}
      </div>
    </div>
    <div style="padding:16px 20px 0">
      ${secHead('快手一杯')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${rcard({ img: 'd17.jpg', name: '螺丝刀', meta: '★ 简单 · 2 分钟 · 10%vol', src: 'official', lv: 'L1', ph: 88, pos: '50% 42%', sub: '<span class="match">酒库可做</span>' })}
        ${rcard({ img: 'd01.jpg', name: '金菲士', meta: '★★ 进阶 · 5 分钟 · 11%vol', src: 'diy', lv: 'L2', ph: 88, pos: '8% 50%', sub: `${avatar('a2.jpg', 16)}<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">汽水研究所</span>` })}
      </div>
    </div>
    <div class="caption" style="text-align:center;margin-top:10px">已为你更新今日推荐</div>
  </div>
  ${tabbar('home')}${homeind()}`;

/* ---------- H1b 我能做的 ---------- */
(() => {
  const row = (o) => rrow({
    ...o,
    style: `margin:0 20px 8px;${o.dim ? 'opacity:.5;' : ''}`,
    pw: 86,
    sub: o.sub,
    right: `<div style="display:flex;flex-direction:column;justify-content:center;align-items:flex-end;padding-right:14px;gap:5px">
      <span style="font-family:var(--serif);font-size:17px;font-weight:600;color:${o.dim ? 'var(--ink-400)' : 'var(--amber)'};font-variant-numeric:tabular-nums">${o.pct}</span>
      ${o.lack ? `<span style="font-size:10px;color:var(--amber)">缺：${o.lack}</span>` : ''}
    </div>`,
  });
  F['H1b-home-doable'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="padding:64px 20px 0">
      <div style="display:flex;background:var(--tint-mist);border-radius:12px;padding:3px">
        <div style="flex:1;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--ink-600)">推荐</div>
        <div style="flex:1;height:34px;border-radius:9px;background:var(--amber);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600">我能做的</div>
      </div>
    </div>
    <div style="margin:12px 20px 14px;background:var(--tint-cream);border-radius:20px;padding:14px 18px;display:flex;align-items:center;gap:14px">
      <span style="font-family:var(--serif);font-size:32px;font-weight:600;line-height:1;font-variant-numeric:tabular-nums">12</span>
      <div style="font-size:12px;color:var(--ink-600);line-height:1.55">你的酒库现可支持 12 款配方<br><span style="color:var(--ink-400)">补齐红石榴糖浆可再解锁 2 款</span></div>
    </div>
    ${row({ img: 'd16.jpg', pos: '50% 45%', name: '莫吉托', meta: '盏 · 精编 · ★ 简单 · 5 分钟', src: 'official', lv: 'L1', pct: '100%' })}
    ${row({ img: 'd01.jpg', pos: '8% 50%', name: '金菲士', meta: 'DIY · 汽水研究所 · ★★ 进阶', src: 'diy', lv: 'L2', pct: '100%' })}
    ${row({ img: 'b03.jpg', pos: '50% 60%', name: '莫斯科骡子', meta: '盏 · 精编 · ★ 简单 · 4 分钟', src: 'official', lv: 'L1', pct: '100%' })}
    ${row({ img: 'd05.jpg', pos: '50% 55%', name: '咸狗', meta: '盏 · 精编 · ★ 简单 · 3 分钟', src: 'official', lv: 'L1', pct: '80%', lack: '西柚汁' })}
    ${row({ img: 'd09.jpg', pos: '50% 45%', name: '边车', meta: '盏 · 精编 · ★★★ 大师', src: 'official', lv: 'L3', pct: '60%', lack: '干邑、橙酒', dim: true })}
    <div class="caption" style="text-align:center;margin-top:6px">已经到底啦</div>
  </div>
  ${tabbar('home')}${homeind()}`;
})();

/* ---------- H2 筛选弹层（H1 做底） ---------- */
(() => {
  const grp = (label, items, onIdx) => `
    <div style="margin-bottom:18px">
      <div style="font-size:13px;font-weight:600;margin-bottom:10px">${label}</div>
      <div class="chips">${items.map((c, i) => `<span class="chip${i === onIdx ? ' on' : ''}">${c}</span>`).join('')}</div>
    </div>`;
  F['H2-filter-sheet'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;overflow:hidden">
    ${homeHead()}
    ${heroGT()}
    <div style="padding:20px 20px 0">
      ${secHead('今日推荐')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        ${rcard({ img: 'd02.jpg', name: '自由古巴', meta: '★ 简单 · 4 分钟 · 12%vol', src: 'official', lv: 'L1', ph: 96, pos: '50% 40%' })}
        ${rcard({ img: 'b02.jpg', name: '威士忌嗨棒', meta: '★ 简单 · 3 分钟 · 9%vol', src: 'diy', lv: 'L1', ph: 96, pos: '32% 68%' })}
      </div>
    </div>
  </div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="grab"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
      <span class="h2" style="font-size:19px">筛选</span>
      ${icbtn('close')}
    </div>
    ${grp('基酒', ['全部', '伏特加', '金酒', '朗姆', '龙舌兰', '威士忌'], 2)}
    ${grp('难度', ['全部', '★ 简单', '★★ 进阶', '★★★ 大师'], 0)}
    ${grp('风味', ['酸甜', '清爽', '浓郁', '果香', '草本'], 1)}
    ${grp('来源', ['全部', '盏 · 精编', '用户 DIY'], 0)}
    ${grp('用时', ['全部', '5 分钟内', '10 分钟内'], 0)}
    <div style="display:flex;gap:12px;margin-top:10px">
      <div class="btn secondary" style="flex:0 0 108px;height:50px">重置</div>
      <div class="btn primary" style="flex:1;height:50px">查看 24 个结果</div>
    </div>
  </div>
  ${homeind()}`;
})();

/* ---------- H3 搜索结果 ---------- */
F['H3-search-result'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding:64px 20px 0;overflow:hidden">
    <div style="display:flex;align-items:center;gap:12px">
      <div style="flex:1;height:44px;border-radius:22px;background:var(--tint-mist);display:flex;align-items:center;gap:8px;padding:0 16px;color:var(--ink-900)">
        ${ic('search', 17)}<span style="font-size:14px">酸</span><span style="width:1px;height:16px;background:var(--amber)"></span>
      </div>
      <span style="font-size:14px;color:var(--amber);font-weight:500">取消</span>
    </div>
    <div class="caption num" style="margin:14px 0 14px">共 18 个结果</div>
    ${secHead('配方')}
    ${rrow({ img: 'd10.jpg', pos: '50% 45%', name: '威士忌酸', meta: 'DIY · 酸口老李 · ★★ 进阶 · 18%vol', src: 'diy', lv: 'L2', pw: 92, style: 'margin-bottom:10px', sub: `<div class="sub" style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--ink-600)">${avatar('a6.jpg', 16)}酸口老李</div>` })}
    ${rrow({ img: 'd01.jpg', pos: '52% 45%', name: '皮斯科酸', meta: '盏 · 精编 · ★★★ 大师 · 16%vol', src: 'official', lv: 'L3', pw: 92, style: 'margin-bottom:10px', sub: '<div style="font-size:11px;color:var(--amber);font-weight:600">酒库可做 · 100%</div>' })}
    ${rrow({ img: 'd09.jpg', pos: '85% 40%', name: '金酒酸', meta: '盏 · 精编 · ★★ 进阶 · 15%vol', src: 'official', lv: 'L2', pw: 92, style: 'margin-bottom:14px', sub: '<div style="font-size:11px;color:var(--amber);font-weight:600">酒库可做 · 100%</div>' })}
    ${secHead('材料')}
    <div class="card" style="display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:14px">
      <img src="assets/b03.jpg" style="width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:37% 71%">
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600">青柠汁</div>
        <div class="small" style="margin-top:2px">常用于 12 款配方</div>
      </div>
      <span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--ink-600)"><i style="width:7px;height:7px;border-radius:50%;background:#5DA85A;display:inline-block"></i>酒库有货</span>
    </div>
    ${secHead('用户')}
    <div class="card" style="display:flex;align-items:center;gap:12px;padding:12px 14px">
      ${avatar('a6.jpg', 44)}
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600">@酸口老李</div>
        <div class="small num" style="margin-top:2px">发布 14 条配方</div>
      </div>
      <span class="btn-outline-amber">关注</span>
    </div>
  </div>
  ${homeind()}`;

/* ---------- C1 酒库概览 ---------- */
F['C1-pantry-overview'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;padding:70px 20px 0;overflow:hidden">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div class="display">酒库</div>
      ${icbtn('plus')}
    </div>
    <div style="margin-top:18px;background:var(--tint-amber);border-radius:20px;padding:22px 8px;display:flex">
      ${[['6', '藏酒（瓶）'], ['9', '材料（件）'], ['12', '可制作（款）']].map(([n, lb], i) => `
        <div style="flex:1;text-align:center;${i > 0 ? 'border-left:1px solid rgba(32,26,20,.08)' : ''}">
          <div style="font-family:var(--serif);font-size:30px;font-weight:600;line-height:1;font-variant-numeric:tabular-nums">${n}</div>
          <div class="caption" style="margin-top:6px;color:var(--ink-600)">${lb}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:26px">${secHead('快捷管理')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:-4px">
      ${[['我的酒', 'bottle', '--tint-rose'], ['材料', 'leaf', '--tint-sage'], ['收藏', 'bookmark', '--tint-cream']].map(([t, i, tint]) => `
        <div style="background:var(${tint});border-radius:18px;padding:14px 12px;display:flex;flex-direction:column;gap:10px">
          <span style="color:var(--ink-900)">${ic(i, 20)}</span>
          <span style="font-size:13px;font-weight:600">${t}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:26px">${secHead('缺料提醒')}</div>
    <div class="card" style="padding:12px 14px;margin-top:-4px">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="assets/i04.jpg" style="width:48px;height:48px;border-radius:12px;object-fit:cover">
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600">红石榴糖浆</div>
          <div class="small" style="margin-top:3px">莫吉托、新加坡司令需要它</div>
        </div>
        <span class="btn-outline-amber">去补货</span>
      </div>
      <div style="font-size:10px;color:var(--ink-400);margin-top:8px">跳转美团闪购</div>
    </div>
    <div style="margin-top:26px">${secHead('最近添加')}</div>
    <div class="card" style="margin-top:-4px">
      <div class="mrow" style="height:64px">
        <img src="assets/b05.jpg" style="width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:50% 50%">
        <div style="flex:1"><div style="font-size:14px;font-weight:600">百加得白朗姆</div><div class="small num" style="margin-top:2px">750ml · 剩 90%</div></div>
        ${lchip('L1')}
      </div>
      <div class="divider"></div>
      <div class="mrow" style="height:64px">
        <img src="assets/b03.jpg" style="width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:37% 71%">
        <div style="flex:1"><div style="font-size:14px;font-weight:600">青柠</div><div class="small num" style="margin-top:2px">× 3 个 · 新鲜</div></div>
        <span class="caption num">10-30 入库</span>
      </div>
    </div>
  </div>
  ${tabbar('bottle')}${homeind()}`;

/* ---------- C2 我的酒列表 ---------- */
(() => {
  const wines = [
    ['绝对伏特加', '700ml · 40%vol', 'L1', 80, 'd16.jpg', '50% 0%'],
    ['百加得白朗姆', '750ml · 40%vol', 'L1', 90, 'b05.jpg', '50% 50%'],
    ['百加得柠檬朗姆', '750ml · 32%vol', 'L1', 70, 'b05.jpg', '16% 50%'],
    ['杰克丹尼蜂蜜威士忌', '700ml · 35%vol', 'L2', 45, 'b01.jpg', '50% 40%'],
    ['尊尼获加黑牌威士忌', '700ml · 40%vol', 'L2', 100, 'b02.jpg', '50% 35%'],
    ['百加得陈年朗姆', '750ml · 40%vol', 'L2', 30, 'b05.jpg', '84% 50%'],
  ];
  F['C2-pantry-wine-list'] = `
  ${statusbar()}
  ${navbar('我的酒', 'chevron-left', icbtn('sliders'))}
  <div style="position:absolute;inset:0;top:106px;padding:6px 20px 0;overflow:hidden">
    ${wines.map(([n, cap, lv, pct, img, pos]) => `
      <div class="card" style="display:flex;align-items:center;gap:12px;padding:12px;margin-bottom:10px">
        <img src="assets/${img}" style="width:72px;height:72px;border-radius:16px;object-fit:cover;object-position:${pos};flex:0 0 auto">
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--serif);font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n}</div>
          <div class="caption num" style="margin-top:3px">${cap}</div>
          <div style="margin-top:8px;height:5px;border-radius:3px;background:rgba(32,26,20,.08);overflow:hidden">
            <div style="width:${pct}%;height:100%;border-radius:3px;background:var(--amber)"></div>
          </div>
          <div class="small num" style="margin-top:4px">余量 ${pct}%</div>
        </div>
        ${lchip(lv)}
      </div>`).join('')}
    <div class="caption num" style="text-align:center;margin-top:6px">共 6 瓶 · 估值约 ¥612</div>
  </div>
  ${homeind()}`;
})();

/* ---------- C3 添加酒款 ---------- */
(() => {
  const bases = [
    ['伏特加', 'd16.jpg', '50% 0%', '--tint-mist', false],
    ['金酒', 'b03.jpg', '50% 60%', '--tint-sage', true],
    ['朗姆', 'b05.jpg', '50% 50%', '--tint-cream', false],
    ['威士忌', 'b01.jpg', '50% 45%', '--tint-amber', false],
    ['利口酒', 'd17.jpg', '50% 45%', '--tint-rose', false],
    ['金巴利', 'd04.jpg', '50% 60%', '--tint-mist', false],
  ];
  F['C3-pantry-add'] = `
  ${statusbar()}
  ${navbar('添加酒款')}
  <div style="position:absolute;inset:0;top:106px;padding:4px 20px 0;overflow:hidden">
    <div style="height:42px;border-radius:21px;background:var(--tint-mist);display:flex;align-items:center;gap:8px;padding:0 16px;color:var(--ink-400);font-size:13px">
      ${ic('search', 16)}搜索品牌或酒类，如：添加利
    </div>
    <div style="margin:18px 0 12px" class="h2">热门基酒</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
      ${bases.map(([n, img, pos, tint, sel]) => `
        <div style="background:var(${tint});border-radius:16px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:8px;${sel ? 'box-shadow:inset 0 0 0 2px var(--amber);background:var(--surface)' : ''}">
          <img src="assets/${img}" style="width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:${pos}">
          <span style="font-family:var(--serif);font-size:13px;font-weight:600">${n}</span>
        </div>`).join('')}
    </div>
    <div style="margin:20px 0 12px" class="h2">常见品牌</div>
    <div class="card">
      ${['添加利', '孟买蓝宝石', '哥顿', '必富达'].map((b, i) => `
        ${i > 0 ? '<div class="divider"></div>' : ''}
        <div class="mrow" style="height:52px">
          <span style="flex:1;font-size:14px;${i === 1 ? 'font-weight:600' : ''}">${b}</span>
          ${i === 1
            ? `<span style="width:24px;height:24px;border-radius:50%;background:var(--amber);color:#fff;display:flex;align-items:center;justify-content:center">${ic('check', 14, 2.2)}</span>`
            : `<span style="width:24px;height:24px;border-radius:50%;border:1.2px solid var(--hairline)"></span>`}
        </div>`).join('')}
    </div>
  </div>
  <div class="ctabar" style="padding-bottom:26px"><div class="btn primary">加入酒库</div></div>
  ${homeind()}`;
})();

/* ---------- C4 酒款详情 ---------- */
F['C4-wine-detail'] = `
  ${statusbar()}
  ${navbar('', 'chevron-left', icbtn('share'))}
  <div style="position:absolute;inset:0;top:106px;overflow:hidden">
    <div style="margin:2px 20px 0;background:var(--tint-sage);border-radius:32px;height:184px;position:relative;overflow:hidden">
      <img src="assets/b05.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 45%">
      <div style="position:absolute;left:14px;bottom:14px">${lchip('L1')}</div>
    </div>
    <div style="padding:12px 20px 0">
      <div class="h1" style="font-size:24px">百加得白朗姆</div>
      <div class="caption" style="margin-top:4px">Bacardi Carta Blanca · 白朗姆</div>
      <div style="display:flex;margin-top:12px;background:var(--surface);border:1px solid var(--hairline);border-radius:18px;padding:11px 8px">
        ${[['40', '%vol · 酒精度'], ['750', 'ml · 净含量'], ['¥89', '参考价']].map(([n, lb], i) => `
          <div style="flex:1;text-align:center;${i > 0 ? 'border-left:1px solid var(--hairline)' : ''}">
            <div style="font-family:var(--serif);font-size:22px;font-weight:600;font-variant-numeric:tabular-nums">${n}</div>
            <div class="small" style="margin-top:4px">${lb}</div>
          </div>`).join('')}
      </div>
      <div style="margin:14px 0 10px" class="h2">风味特征</div>
      <div style="display:flex;flex-direction:column;gap:7px">
        ${segbar('甘蔗', 4)}${segbar('香草', 2)}${segbar('柑橘', 3)}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin:14px 0 10px">
        <span class="h2">可制作 4 款</span><span class="arr" style="color:var(--ink-900);display:flex">${ic('arrow-right', 16, 1.5)}</span>
      </div>
      <div style="display:flex;gap:10px;overflow:hidden">
        ${rcard({ img: 'd16.jpg', name: '莫吉托', meta: '5 分钟 · 12%vol', src: 'official', lv: 'L1', ph: 64, pos: '50% 45%', style: 'width:158px;flex:0 0 auto' })}
        ${rcard({ img: 'd02.jpg', name: '自由古巴', meta: '4 分钟 · 12%vol', src: 'official', lv: 'L1', ph: 64, pos: '50% 40%', style: 'width:158px;flex:0 0 auto' })}
      </div>
      <div style="margin-top:12px;display:flex;align-items:center;gap:12px">
        <span class="caption" style="flex:0 0 auto">余量</span>
        <div style="flex:1;height:6px;border-radius:3px;background:rgba(32,26,20,.08);position:relative">
          <div style="width:90%;height:100%;border-radius:3px;background:var(--amber)"></div>
          <div style="position:absolute;left:90%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#fff;border:1.5px solid var(--amber)"></div>
        </div>
        <span class="caption num" style="flex:0 0 auto;color:var(--ink-900);font-weight:600">90%</span>
      </div>
    </div>
  </div>
  <div class="ctabar">
    <div class="btn secondary" style="flex:0 0 118px">编辑</div>
    <div class="btn primary">开调一瓶</div>
  </div>
  ${homeind()}`;

/* ---------- C5 材料列表 ---------- */
(() => {
  const item = (img, pos, name, qty, right, tintTile) => `
    <div class="mrow" style="height:60px;padding:0 4px">
      ${img
        ? `<img src="assets/${img}" style="width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:${pos || '50% 50%'};flex:0 0 auto">`
        : `<span style="width:44px;height:44px;border-radius:12px;background:var(--tint-cream);display:flex;align-items:center;justify-content:center;color:var(--ink-600);flex:0 0 auto">${ic('bottle', 18)}</span>`}
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600">${name}</div>
        <div class="small num" style="margin-top:2px">${qty}</div>
      </div>
      ${right}
    </div>`;
  const fresh = `<span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--ink-600)"><i style="width:7px;height:7px;border-radius:50%;background:#5DA85A;display:inline-block"></i>新鲜</span>`;
  F['C5-ingredient-list'] = `
  ${statusbar()}
  ${navbar('材料', 'chevron-left', icbtn('search'))}
  <div style="position:absolute;inset:0;top:106px;padding:6px 20px 0;overflow:hidden">
    <div class="h2" style="margin:8px 0 6px">水果</div>
    ${item('b03.jpg', '37% 71%', '青柠', '× 3 个', fresh)}
    ${item('b03.jpg', '74% 88%', '薄荷', '× 2 束', fresh)}
    ${item('i01.jpg', '50% 50%', '柠檬', '× 1 个', fresh)}
    <div class="h2" style="margin:16px 0 6px">糖浆</div>
    ${item(null, '', '单糖浆 · 自制', '200ml', fresh)}
    <div class="mrow" style="height:60px;padding:0 4px">
      <img src="assets/i04.jpg" style="width:44px;height:44px;border-radius:12px;object-fit:cover;flex:0 0 auto">
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600">红石榴糖浆</div>
        <div class="small" style="margin-top:2px;color:var(--wine);display:flex;align-items:center;gap:5px"><i style="width:7px;height:7px;border-radius:50%;background:var(--ink-400);display:inline-block"></i>缺货</div>
      </div>
      <span class="btn-outline-amber">去补货</span>
    </div>
    <div class="h2" style="margin:16px 0 6px">软饮</div>
    ${item('d07.jpg', '50% 40%', '汤力水', '× 2 罐', '')}
    ${item('d16.jpg', '50% 20%', '苏打水', '× 1 瓶', '')}
    ${item('d04.jpg', '50% 60%', '蔓越莓汁', '剩半瓶', '')}
  </div>
  <div class="fab">${ic('plus', 24)}</div>
  ${homeind()}`;
})();

/* ---------- C6 收藏 ---------- */
(() => {
  const fav = (img, pos, name, meta, src, lv, date) => rrow({
    img, pos, name, src, lv, pw: 100, meta,
    style: 'margin:0 20px 12px',
    sub: `<div class="small num" style="margin-top:2px">收藏于 ${date}</div>`,
    right: `<div style="display:flex;align-items:flex-start;padding:14px 14px 0 0;color:var(--amber)">${icf('bookmark', 18)}</div>`,
  });
  F['C6-favorites'] = `
  ${statusbar()}
  ${navbar('收藏')}
  <div style="position:absolute;inset:0;top:106px;padding:8px 0 0;overflow:hidden">
    ${fav('d04.jpg', '50% 60%', '尼格罗尼', '盏 · 精编 · ★★ 进阶 · 24%vol', 'official', 'L2', '10 月 28 日')}
    ${fav('d03.jpg', '50% 40%', '古典', 'DIY · 老杯子 · ★★ 进阶 · 32%vol', 'diy', 'L2', '10 月 21 日')}
    ${fav('b01.jpg', '22% 78%', '曼哈顿', '盏 · 精编 · ★★★ 大师 · 28%vol', 'official', 'L3', '10 月 12 日')}
    ${fav('d13.jpg', '75% 45%', '大都会', 'DIY · 伏特加不加冰 · ★ 简单 · 15%vol', 'diy', 'L1', '9 月 30 日')}
    <div class="caption" style="text-align:center;margin-top:4px">已经到底啦</div>
  </div>
  ${homeind()}`;
})();

/* ---------- S1 酒圈 feed ---------- */
(() => {
  const post = (img, pos, ph, title, av, name, likes, comments, long) => `
    <div class="rcard" style="border-radius:18px;padding:14px">
      <div style="height:${ph}px;border-radius:14px;overflow:hidden;position:relative">
        <img src="assets/${img}" style="width:100%;height:100%;object-fit:cover;object-position:${pos};display:block">
        ${long ? `<span style="position:absolute;right:8px;bottom:8px;height:20px;padding:0 8px;border-radius:10px;background:rgba(20,14,8,.55);color:#fff;font-size:10px;display:flex;align-items:center">长图</span>` : ''}
      </div>
      <div style="height:36px;margin-top:12px;font-size:13px;font-weight:600;line-height:18px;color:var(--ink-900);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${title}</div>
      <div style="height:20px;margin-top:8px;display:flex;align-items:center;gap:6px">
        ${avatar(av, 20)}
        <span class="small" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--ink-600)">${name}</span>
      </div>
      <div style="height:18px;margin-top:8px;display:flex;align-items:center;gap:14px">
        <span style="display:inline-flex;align-items:center;gap:4px;color:var(--ink-400)">${ic('heart', 13)}<span class="small num" style="color:var(--ink-600)">${likes}</span></span>
        <span style="display:inline-flex;align-items:center;gap:4px;color:var(--ink-400)">${ic('comment', 13)}<span class="small num" style="color:var(--ink-600)">${comments}</span></span>
      </div>
    </div>`;
  F['S1-feed'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;overflow:hidden">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:70px 20px 0">
      <span style="width:40px"></span>
      <span class="h2" style="font-size:20px">酒圈</span>
      ${icbtn('camera')}
    </div>
    <div style="display:flex;gap:22px;padding:14px 20px 12px;border-bottom:1px solid var(--hairline)">
      <span style="font-size:14px;color:var(--ink-400)">关注</span>
      <span style="font-size:14px;color:var(--ink-900);font-weight:600;position:relative">推荐<i style="position:absolute;left:50%;transform:translateX(-50%);bottom:-13px;width:20px;height:2px;border-radius:1px;background:var(--amber)"></i></span>
      <span style="font-size:14px;color:var(--ink-400)">最新</span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:14px 20px 0">
      <div style="display:flex;flex-direction:column;gap:10px">
        ${post('d03.jpg', '50% 40%', 95, '烟熏古典｜周末仪式感拉满', 'a1.jpg', '深夜小酒馆不打烊', '326', '48', false)}
        ${post('d20.jpg', '50% 40%', 95, '草莓黛绮莉，粉色治愈系', 'a5.jpg', '阿 May 调酒记', '156', '23', false)}
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${post('d09.jpg', '50% 0%', 177, '荔枝马天尼｜季节限定的一杯', 'a3.jpg', '杯中物', '892', '126', true)}
        ${post('d05.jpg', '50% 50%', 177, '西柚帕洛玛，酸甜刚好', 'a2.jpg', '居家微醺', '89', '12', true)}
      </div>
    </div>
    <div class="caption" style="text-align:center;margin-top:14px">已加载全部</div>
  </div>
  ${tabbar('chat')}${homeind()}`;
})();

/* ---------- S2 帖子详情 ---------- */
F['S2-post-detail'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding-top:54px;overflow:hidden">
    ${warn()}
    ${navbar('', 'chevron-left', icbtn('more'), true)}
    <div style="padding:6px 20px 0">
      <div style="height:437px;border-radius:20px;overflow:hidden;position:relative">
        <img src="assets/d09.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 0%">
        <span class="badge-diy">DIY</span>
        <span style="position:absolute;right:10px;bottom:10px;height:22px;padding:0 9px;border-radius:11px;background:rgba(20,14,8,.55);color:#fff;font-size:10px;display:flex;align-items:center">长图 · 查看原图</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-top:14px">
        ${avatar('a3.jpg', 40)}
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600">杯中物</div>
          <div class="caption num" style="margin-top:2px">11 月 1 日 · 杭州</div>
        </div>
        <span class="btn-outline-amber">关注</span>
      </div>
      <div class="body" style="margin-top:12px;font-size:13.5px">
        荔枝季节的限定喝法：把经典马天尼里的伏特加换成金酒，加两颗现剥荔枝轻捣，果香会把杜松子的香气托得更干净。
      </div>
      <div style="margin-top:12px;background:var(--tint-cream);border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:10px">
        <span style="color:var(--ink-600)">${ic('glass', 18)}</span>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600">荔枝马天尼 · DIY 配方</div>
          <div class="small" style="margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">金酒 45ml · 荔枝 2 颗 · 干味美思 10ml</div>
        </div>
        <span style="color:var(--ink-900);display:flex">${ic('arrow-right', 16, 1.5)}</span>
      </div>
      <div style="margin-top:14px;padding:12px 0;border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline)">
        ${statline([[ic('heart', 16), '892'], [ic('comment', 16), '126'], [ic('bookmark', 16), '233']])}
      </div>
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:14px">
        ${[
          ['a4.jpg', '调酒小透明', '荔枝和金酒真的太搭了，周末试了', '18', '1 小时前', false],
          ['a7.jpg', '高球少年', '求问荔枝要用罐头还是鲜果？', '6', '3 小时前', false],
          ['a3.jpg', '杯中物', '鲜果！罐头的糖水味会盖掉金酒', '24', '2 小时前', true],
        ].map(([av, n, t, l, time, author]) => `
          <div style="display:flex;gap:10px">
            ${avatar(av, 30)}
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px">
                <span style="font-size:12px;font-weight:600">${n}</span>
                ${author ? '<span style="font-size:9px;color:var(--amber);border:1px solid var(--amber);border-radius:6px;padding:0 5px;height:15px;display:inline-flex;align-items:center">作者</span>' : ''}
                <span class="small num" style="margin-left:auto">${time}</span>
              </div>
              <div style="font-size:13px;color:var(--ink-900);margin-top:4px;line-height:1.55">${t}</div>
              <div class="small num" style="margin-top:4px;display:flex;align-items:center;gap:4px;color:var(--ink-400)">${ic('heart', 11)} ${l}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>
  <div style="position:absolute;left:0;right:0;bottom:76px;height:40px;background:linear-gradient(to bottom,rgba(246,241,231,0),rgba(246,241,231,.96));z-index:55;pointer-events:none"></div>
  <div style="position:absolute;left:0;right:0;bottom:0;background:var(--surface);border-top:1px solid var(--hairline);padding:10px 16px 30px;display:flex;align-items:center;gap:10px;z-index:60">
    ${avatar('a8.jpg', 30)}
    <div style="flex:1;height:36px;border-radius:18px;background:var(--tint-mist);display:flex;align-items:center;padding:0 14px;font-size:12px;color:var(--ink-400)">说点什么…</div>
    <span style="color:var(--ink-600);display:flex">${ic('heart', 20)}</span>
  </div>
  ${homeind()}`;

/* ---------- S3 发布 ---------- */
F['S3-post-compose'] = `
  ${statusbar()}
  ${navbar('发布', 'close', '')}
  <div style="position:absolute;inset:0;top:106px;padding:8px 20px 0;overflow:hidden">
    <div style="display:flex;gap:10px">
      ${['d16.jpg|50% 45%', 'i02.jpg|50% 50%', 'd07.jpg|50% 55%'].map((s, i) => {
        const [img, pos] = s.split('|');
        return `<div style="width:88px;height:88px;border-radius:16px;overflow:hidden;position:relative;flex:0 0 auto">
          <img src="assets/${img}" style="width:100%;height:100%;object-fit:cover;object-position:${pos}">
          ${i === 2 ? `<span style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;background:rgba(20,14,8,.5);color:#fff;display:flex;align-items:center;justify-content:center">${ic('close', 11, 2)}</span>` : ''}
        </div>`;
      }).join('')}
      <div style="width:88px;height:88px;border-radius:16px;border:1.2px dashed var(--ink-400);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;color:var(--ink-400);flex:0 0 auto">
        ${ic('plus', 18)}<span style="font-size:10px">添加</span>
      </div>
    </div>
    <div style="margin-top:18px;border-bottom:1px solid var(--hairline);padding-bottom:12px">
      <span style="font-family:var(--serif);font-size:18px;font-weight:600">百香果撞进莫吉托，意外地好喝</span><span style="display:inline-block;width:1.5px;height:18px;background:var(--amber);vertical-align:-3px;margin-left:2px"></span>
    </div>
    <div class="body" style="margin-top:12px;font-size:13.5px;color:var(--ink-600)">
      百香果的酸香和薄荷是天生一对，用朗姆压住酸味，比原版莫吉托多一层热带感。周末试了两次，配方终于稳定了…
    </div>
    <div style="margin-top:18px" class="h2">制作步骤</div>
    <div style="margin-top:8px;display:flex;flex-direction:column;gap:2px">
      ${['百香果取果肉压汁', '加薄荷与碎冰轻捣', '补苏打水提拉'].map((s, i) => `
        <div style="display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid var(--hairline)">
          <span style="width:24px;height:24px;border-radius:50%;background:var(--tint-amber);color:var(--ink-900);font-family:var(--serif);font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;flex:0 0 auto">${i + 1}</span>
          <span style="font-size:13.5px;color:var(--ink-900)">${s}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:16px" class="h2">关联配方</div>
    <div style="margin-top:10px;background:var(--tint-mist);border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:10px">
      <img src="assets/d16.jpg" style="width:40px;height:40px;border-radius:10px;object-fit:cover;object-position:50% 45%">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600">百香果莫吉托 <span style="font-size:10px;color:var(--diy);font-weight:700;margin-left:2px">DIY</span></div>
        <div class="small" style="margin-top:2px">发布后将挂载到你的配方集</div>
      </div>
      <span style="width:24px;height:24px;border-radius:50%;background:var(--amber);color:#fff;display:flex;align-items:center;justify-content:center;flex:0 0 auto">${ic('check', 14, 2.2)}</span>
    </div>
  </div>
  <div class="ctabar"><div class="btn primary">发布到酒圈</div></div>
  ${homeind()}`;

/* ---------- S4 举报弹层（S2 简化做底） ---------- */
F['S4-report-sheet'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding-top:54px;overflow:hidden">
    ${warn()}
    ${navbar('', 'chevron-left', icbtn('more'), true)}
    <div style="padding:6px 20px 0">
      <div style="height:437px;border-radius:20px;overflow:hidden;position:relative">
        <img src="assets/d09.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 0%">
        <span class="badge-diy">DIY</span>
        <span style="position:absolute;right:10px;bottom:10px;height:22px;padding:0 9px;border-radius:11px;background:rgba(20,14,8,.55);color:#fff;font-size:10px;display:flex;align-items:center">长图 · 查看原图</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-top:14px">
        ${avatar('a3.jpg', 40)}
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600">杯中物</div>
          <div class="caption num" style="margin-top:2px">11 月 1 日 · 杭州</div>
        </div>
        <span class="btn-outline-amber">关注</span>
      </div>
      <div class="body" style="margin-top:12px;font-size:13.5px">荔枝季节的限定喝法：把经典马天尼里的伏特加换成金酒，加两颗现剥荔枝轻捣…</div>
    </div>
  </div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="grab"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <span class="h2" style="font-size:19px">举报该帖子</span>
      ${icbtn('close')}
    </div>
    <div class="caption" style="margin-bottom:14px">告诉我们发生了什么，我们会尽快核实</div>
    <div>
      ${['垃圾广告', '抄袭盗图', '不实信息', '低俗或不当内容', '其他问题'].map((r, i) => `
        <div style="display:flex;align-items:center;height:48px;${i > 0 ? 'border-top:1px solid var(--hairline)' : ''}">
          <span style="flex:1;font-size:14px;${i === 1 ? 'font-weight:600' : ''}">${r}</span>
          ${i === 1
            ? `<span style="width:24px;height:24px;border-radius:50%;background:var(--amber);color:#fff;display:flex;align-items:center;justify-content:center">${ic('check', 14, 2.2)}</span>`
            : `<span style="width:24px;height:24px;border-radius:50%;border:1.2px solid var(--hairline)"></span>`}
        </div>`).join('')}
    </div>
    <div class="caption" style="margin:10px 0 16px">我们会在 48 小时内处理并反馈结果</div>
    <div class="btn danger">提交举报</div>
  </div>
  ${homeind()}`;

/* ---------- G1 配方详情 ---------- */
F['G1-recipe-detail'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding-top:54px;overflow:hidden">
    ${warn()}
    ${navbar('', 'chevron-left', `<div style="display:flex;gap:10px">${icbtn('share')}${icbtn('heart')}</div>`, true)}
    <div style="padding:4px 20px 0">
      <div style="height:196px;border-radius:20px;overflow:hidden;position:relative">
        <img src="assets/d03.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 45%">
        <div class="scrim"></div>
        <span class="badge-official">盏 · 精编</span>
        <div style="position:absolute;left:16px;bottom:14px;z-index:3;color:#fff">
          <div style="font-family:var(--serif);font-size:26px;font-weight:600">威士忌酸</div>
          <div style="font-size:11px;opacity:.9;margin-top:4px">Whiskey Sour · 酸甜 · 约 18%vol</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-top:12px;color:var(--ink-600)">
        ${lchip('L2')}
        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-variant-numeric:tabular-nums">${ic('clock', 15)}5 分钟</span>
        <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px">${stars(2)}进阶</span>
        <span style="display:inline-flex;align-items:center;gap:4px;font-size:12px;font-variant-numeric:tabular-nums">${icf('star', 13)}4.8 · 312 人做过</span>
      </div>
      <div style="margin:14px 0 10px" class="h2">风味</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${segbar('酸度', 4)}${segbar('甜度', 2)}${segbar('酒精感', 3)}
      </div>
      <div style="margin:14px 0 8px" class="h2">材料</div>
      <div class="card" style="padding:4px 14px">
        ${[
          ['check', 'var(--amber)', '波本威士忌', '60ml', '<span style="color:#5DA85A">酒库有</span>'],
          ['check', 'var(--amber)', '黄柠檬汁', '30ml', ''],
          ['alert', 'var(--amber)', '单糖浆', '15ml', '<span style="color:var(--amber)">可用蜂蜜 10ml 替代</span>'],
          ['close', 'var(--ink-400)', '蛋清', '1 个', '<span style="color:var(--ink-400)">可选 · 无则不添加</span>'],
        ].map(([i, c, n, q, note], idx, arr) => `
          <div style="display:flex;align-items:center;gap:10px;height:44px;${idx < arr.length - 1 ? 'border-bottom:1px solid var(--hairline)' : ''}">
            <span style="color:${c};display:flex;flex:0 0 auto">${ic(i, 16)}</span>
            <span style="font-size:13.5px;font-weight:500">${n}</span>
            <span style="font-size:12px;color:var(--ink-600);font-variant-numeric:tabular-nums;margin-left:4px">${q}</span>
            <span style="margin-left:auto;font-size:11px">${note}</span>
          </div>`).join('')}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin:14px 0 8px">
        <span class="h2">步骤</span><span style="color:var(--ink-900);display:flex">${ic('arrow-right', 16, 1.5)}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${['材料入摇壶，先干摇 5 秒乳化蛋清', '加冰摇和 10 秒，滤入冰杯'].map((s, i) => `
          <div style="display:flex;align-items:center;gap:10px;font-size:13px;color:var(--ink-600)">
            <span style="font-family:var(--serif);font-weight:600;color:var(--ink-900);font-size:14px">${i + 1}.</span>${s}
          </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="ctabar">
    <div class="btn secondary" style="flex:0 0 138px;font-size:13px">手动标记已完成</div>
    <div class="btn primary">开调</div>
  </div>
  ${homeind()}`;

/* ---------- G2 制作流程 ---------- */
F['G2-making-flow'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding-top:54px;overflow:hidden">
    ${warn()}
    ${navbar('威士忌酸', 'close', '', true)}
    <div style="padding:14px 20px 0">
      <div class="caption num" style="text-align:center">第 2 步 · 共 5 步</div>
      <div style="display:flex;gap:5px;margin-top:10px">
        ${[1, 2, 3, 4, 5].map(i => `<i style="flex:1;height:5px;border-radius:3px;background:${i <= 2 ? 'var(--amber)' : 'rgba(32,26,20,.08)'}"></i>`).join('')}
      </div>
      <div class="card" style="margin-top:18px;padding:16px">
        <div style="font-family:var(--serif);font-size:22px;font-weight:600;line-height:1.4">加冰，摇和 10 秒</div>
        <div style="margin-top:12px;height:176px;border-radius:16px;overflow:hidden;position:relative">
          <img src="assets/d03.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 60%">
          <span style="position:absolute;right:12px;bottom:12px;background:rgba(20,14,8,.5);backdrop-filter:blur(8px);color:#fff;height:26px;padding:0 12px;border-radius:13px;display:flex;align-items:center;font-size:12px;font-variant-numeric:tabular-nums">00:10</span>
        </div>
        <div style="margin-top:12px;display:flex;align-items:center;gap:8px;color:var(--ink-600);font-size:12px">
          ${ic('clock', 14)}<span>壶壁挂霜即可，过度会化水</span>
        </div>
      </div>
      <div style="margin-top:14px;background:var(--tint-sage);border-radius:16px;padding:12px 14px;display:flex;gap:10px;align-items:flex-start">
        <span style="color:var(--ink-600);display:flex;margin-top:1px">${ic('leaf', 16)}</span>
        <div style="font-size:12px;color:var(--ink-600);line-height:1.6">小提示：单手扣紧壶盖，另一只手握住壶身底部，摇到壶壁挂霜即可。</div>
      </div>
    </div>
  </div>
  <div class="ctabar">
    <div class="btn secondary" style="flex:0 0 118px">上一步</div>
    <div class="btn primary">下一步</div>
  </div>
  ${homeind()}`;

/* ---------- G3 完成（G2 简化做底 + 居中卡） ---------- */
F['G3-completion'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;padding-top:54px;overflow:hidden">
    ${warn()}
    ${navbar('威士忌酸', 'close', '', true)}
    <div style="padding:14px 20px 0">
      <div class="caption num" style="text-align:center">第 5 步 · 共 5 步</div>
      <div style="display:flex;gap:5px;margin-top:10px">
        ${[1, 2, 3, 4, 5].map(() => `<i style="flex:1;height:5px;border-radius:3px;background:var(--amber)"></i>`).join('')}
      </div>
      <div class="card" style="margin-top:18px;padding:16px">
        <div style="font-family:var(--serif);font-size:22px;font-weight:600">装饰，完成出品</div>
        <div style="margin-top:12px;height:176px;border-radius:16px;overflow:hidden">
          <img src="assets/d03.jpg" style="width:100%;height:100%;object-fit:cover;object-position:50% 60%">
        </div>
      </div>
    </div>
  </div>
  <div class="dim"></div>
  <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-52%);width:310px;background:var(--surface);border-radius:28px;padding:28px 22px 22px;z-index:90;box-shadow:0 12px 32px rgba(32,26,20,.14);text-align:center">
    <div style="width:108px;height:108px;border-radius:50%;border:2.5px solid var(--amber);padding:4px;margin:0 auto">
      <img src="assets/d03.jpg" style="width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:50% 45%">
    </div>
    <div class="h1" style="margin-top:16px">干得漂亮！</div>
    <div class="caption" style="margin-top:6px">威士忌酸 · 已完成</div>
    <div style="margin-top:12px;display:inline-flex;align-items:center;gap:6px;background:var(--tint-amber);border-radius:14px;height:28px;padding:0 12px;font-size:11px;color:var(--ink-600);font-variant-numeric:tabular-nums">
      ${ic('clock', 13)}用时 6 分钟 · 第 9 次完成
    </div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <div class="btn secondary" style="flex:1;height:46px;font-size:13px;gap:6px">${ic('camera', 16)}拍照打卡</div>
      <div class="btn primary" style="flex:1;height:46px;font-size:13px">收进我的调酒</div>
    </div>
  </div>
  ${homeind()}`;

/* ---------- M1 我的 ---------- */
F['M1-profile'] = `
  ${statusbar()}
  <div style="position:absolute;inset:0;bottom:83px;padding:72px 20px 0;overflow:hidden">
    <div class="display">我的</div>
    <div class="card" style="margin-top:18px;display:flex;align-items:center;gap:14px;padding:16px">
      ${avatar('a8.jpg', 64)}
      <div style="flex:1;min-width:0">
        <div style="font-family:var(--serif);font-size:19px;font-weight:600">居家调酒练习生</div>
        <div class="caption" style="margin-top:4px">已绑定 Apple 邮箱 l***@163.com</div>
      </div>
      ${icbtn('gear')}
    </div>
    <div style="margin-top:14px;background:var(--tint-cream);border-radius:20px;padding:16px 8px;display:flex">
      ${[['28', '调酒'], ['46', '收藏'], ['12', '帖子']].map(([n, lb], i) => `
        <div style="flex:1;text-align:center;${i > 0 ? 'border-left:1px solid rgba(32,26,20,.08)' : ''}">
          <div style="font-family:var(--serif);font-size:26px;font-weight:600;font-variant-numeric:tabular-nums;line-height:1">${n}</div>
          <div class="caption" style="margin-top:5px;color:var(--ink-600)">${lb}</div>
        </div>`).join('')}
    </div>
    <div class="card" style="margin-top:16px">
      ${[['glass', '我的调酒'], ['doc', '我的帖子'], ['star', '勋章'], ['chat', '帮助与反馈'], ['gear', '设置']].map(([i, t], idx) => `
        ${idx > 0 ? '<div class="divider"></div>' : ''}
        <div class="mrow">
          <span class="mi">${ic(i, 20)}</span>
          <span class="mt">${t}</span>
          <span class="chev">${ic('chevron-right', 16)}</span>
        </div>`).join('')}
    </div>
    <div class="caption num" style="text-align:center;margin-top:16px">盏 v1.0.0</div>
  </div>
  ${tabbar('user')}${homeind()}`;

/* ---------- M2 我的调酒 ---------- */
(() => {
  const rec = (img, pos, name, date, chip) => `
    <div class="card" style="display:flex;align-items:center;gap:12px;padding:10px 12px;margin-bottom:10px">
      <img src="assets/${img}" style="width:64px;height:64px;border-radius:12px;object-fit:cover;object-position:${pos};flex:0 0 auto">
      <div style="flex:1;min-width:0">
        <div style="font-family:var(--serif);font-size:16px;font-weight:600">${name}</div>
        <div class="caption num" style="margin-top:4px">${date}</div>
      </div>
      ${chip}
    </div>`;
  const chip = (tint, txt, dot) => `<span style="display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 11px;border-radius:13px;background:var(${tint});font-size:11px;color:var(--ink-600);white-space:nowrap">${dot ? `<i style="width:6px;height:6px;border-radius:50%;background:${dot};display:inline-block"></i>` : ''}${txt}</span>`;
  F['M2-my-cocktails'] = `
  ${statusbar()}
  ${navbar('我的调酒')}
  <div style="position:absolute;inset:0;top:106px;padding:8px 20px 0;overflow:hidden">
    <div style="display:flex;gap:22px;border-bottom:1px solid var(--hairline);padding-bottom:10px;margin-bottom:14px">
      <span style="font-size:14px;color:var(--ink-400)">全部</span>
      <span style="font-size:14px;color:var(--ink-900);font-weight:600;position:relative">已完成 <span class="num">28</span><i style="position:absolute;left:50%;transform:translateX(-50%);bottom:-11px;width:20px;height:2px;border-radius:1px;background:var(--amber)"></i></span>
      <span style="font-size:14px;color:var(--ink-400)">进行中 <span class="num">2</span></span>
    </div>
    ${rec('d16.jpg', '50% 45%', '莫吉托', '2026-11-01 · 用时 6 分钟', chip('--tint-mist', '手动标记'))}
    ${rec('d07.jpg', '50% 45%', '金汤力', '2026-10-30 · 用时 3 分钟', chip('--tint-sage', '已完成'))}
    ${rec('b02.jpg', '32% 68%', '威士忌嗨棒', '2026-10-28 · 4 分钟', chip('--tint-cream', '已发布到酒圈', 'var(--amber)'))}
    ${rec('d03.jpg', '50% 40%', '古典', '2026-10-25 · 用时 5 分钟', chip('--tint-sage', '已完成'))}
    <div class="caption" style="text-align:center;margin-top:6px">已经到底啦</div>
  </div>
  ${homeind()}`;
})();

/* ---------- M3 设置 ---------- */
(() => {
  const row = (t, right, idx, first) => `
    ${!first ? '<div class="divider"></div>' : ''}
    <div class="mrow" style="height:50px">
      <span class="mt" style="font-size:14px">${t}</span>
      ${right}
    </div>`;
  const chev = `<span class="chev">${ic('chevron-right', 16)}</span>`;
  F['M3-settings'] = `
  ${statusbar()}
  ${navbar('设置')}
  <div style="position:absolute;inset:0;top:106px;padding:6px 20px 0;overflow:hidden">
    <div class="caption" style="margin:6px 0 8px 4px">账号</div>
    <div class="card">
      ${row('绑定邮箱', '<span class="mv">l***@163.com · 已验证</span>', 0, true)}
      ${row('修改昵称', chev)}
      ${row('修改头像', chev)}
    </div>
    <div class="caption" style="margin:18px 0 8px 4px">偏好</div>
    <div class="card">
      ${row('推送通知', '<span class="toggle on"></span>', 0, true)}
      ${row('仅 Wi-Fi 加载图片', '<span class="toggle"></span>')}
      ${row('清除缓存', '<span class="mv num">128MB</span>')}
    </div>
    <div class="caption" style="margin:18px 0 8px 4px">关于</div>
    <div class="card">
      ${row('用户协议', chev, 0, true)}
      ${row('隐私政策', chev)}
      ${row('适量饮酒提示', chev)}
      ${row('版本', '<span class="mv num">v1.0.0</span>')}
    </div>
    <div style="text-align:center;margin-top:22px;font-size:14px;color:var(--wine);font-weight:500">退出登录</div>
    <div class="caption num" style="text-align:center;margin-top:14px">盏 v1.0.0 · Build 2026.11.02</div>
  </div>
  ${homeind()}`;
})();

/* ---------- render ---------- */
const ORDER = [
  'L1-age-confirm', 'L2-login', 'L3-onboarding', 'L3b-onboarding-bottles',
  'H1-home-recommend', 'H1b-home-doable', 'H2-filter-sheet', 'H3-search-result',
  'C1-pantry-overview', 'C2-pantry-wine-list', 'C3-pantry-add', 'C4-wine-detail', 'C5-ingredient-list', 'C6-favorites',
  'S1-feed', 'S2-post-detail', 'S3-post-compose', 'S4-report-sheet',
  'G1-recipe-detail', 'G2-making-flow', 'G3-completion',
  'M1-profile', 'M2-my-cocktails', 'M3-settings',
];
document.getElementById('root').innerHTML = ORDER.map(id =>
  `<section class="frame" data-frame-id="${id}">${F[id]}</section>`).join('');
window.__ZhanFrames__ = ORDER;

/* ---------- L3b 家族 tab 交互（原型演示用；截图默认态仍为「朗姆酒」） ---------- */
(() => {
  const frame = document.querySelector('[data-frame-id="L3b-onboarding-bottles"]');
  if (!frame) return;
  const tabs = [...frame.querySelectorAll('.l3b-tab')];
  const chips = [...frame.querySelectorAll('.l3b-chips .chip')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (tabs.length === 1) return;                 // 只有 1 个已选家族：tab 仍显示但不可切换
    const fam = tab.dataset.fam;
    tabs.forEach(t => t.classList.toggle('on', t === tab));
    chips.forEach(c => c.classList.toggle('on', c.dataset.fam === fam));
    frame.querySelectorAll('[data-panel]').forEach(p => {
      p.style.display = p.dataset.panel === fam ? '' : 'none';   // 已勾选状态由各家族自己保留
    });
    const scroller = frame.querySelector('[data-sku-scroll]');
    if (scroller) scroller.scrollTop = 0;          // 切家族后列表回到顶部
  }));
})();
