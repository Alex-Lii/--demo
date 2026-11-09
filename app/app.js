/* ==========================================================================
   盏 V6 · 可点击前端 —— 组件库 + 路由 + 交互
   视觉唯一来源：mockups-v4/styles.css（Liquid Glass）
   ========================================================================== */

/* ============================ SVG 图标库 ============================ */
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
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>',
  send: '<path d="m3.5 20 7.5-7.5L3.5 5"/><path d="M11 12.5h8"/>',
};
function ic(name, size = 20, sw = 1.6) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}
function icf(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}

const sbIcons = `<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.8"/><rect x="4.5" y="5" width="3" height="6" rx="0.8"/><rect x="9" y="2.6" width="3" height="8.4" rx="0.8"/><rect x="13.5" y="0" width="3" height="11" rx="0.8"/></svg>`
  + `<svg width="16" height="11" viewBox="0 0 16 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1.5 4.2a10 10 0 0 1 13 0"/><path d="M3.9 6.9a7 7 0 0 1 8.2 0"/><path d="M6.4 9.5a3.6 3.6 0 0 1 3.2 0"/><circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none"/></svg>`
  + `<svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.6" y="0.6" width="20" height="10.8" rx="3" stroke="currentColor" stroke-opacity=".4" stroke-width="1"/><rect x="2.2" y="2.2" width="14.5" height="7.6" rx="1.6" fill="currentColor"/><path d="M22.8 4v4a2.1 2.1 0 0 0 0-4Z" fill="currentColor" fill-opacity=".5"/></svg>`;

/* ============================ 全局状态 ============================ */
const S = {
  tab: 'home',
  homeSeg: 'rec',
  filters: { fam: [], flavor: [], strength: [], level: [], src: [] },
  search: '',
  recipeStep: 0,
  doneStep: new Set(),
  sheet: null,
  sheetKind: 'filter',
  doneId: 'd09',
  toast: '',
  canmakeLevel: 2,
  heartOn: false,
  bottleTab: 'my',
  feedSeg: 'rec',
};
let _toastTimer = null;
function toast(tx){
  const el = document.querySelector('.toast');
  if (!el) return;
  el.textContent = tx;
  el.classList.add('on');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(()=> el.classList.remove('on'), 1600);
}

/* ============================ 通用组件 ============================ */
function frame(screenHtml){
  const homeind = `<div class="homeind"></div>`;
  const sb = `<div class="statusbar"><span class="time">9:41</span><span class="sic">${sbIcons}</span></div>`;
  const tabHtml = renderTabBar();
  return `<div class="viewport">${sb}${screenHtml}</div>${tabHtml}${homeind}<div class="toast"></div>`;
}

function renderTabBar(){
  const tabs = [['home','首页'],['bottle','酒库'],['chat','酒圈'],['user','我的']];
  const hide = ['recipe','flow','bottle-detail','comment','search',
    'age','login','pick1','pick2','cellar','mywine','addwine','materials','saved',
    'publish','report','done','history','settings'].includes(_route.name);
  const cls = hide ? 'tabbar glass g28 hide' : 'tabbar glass g28';
  const nameMap = { home:'home', bottle:'bottle', chat:'chat', user:'user' };
  let activeTab = nameMap[_route.name] || 'home';
  return `<div class="${cls}">${tabs.map(([i,lb])=>`<button class="tab${activeTab===i?' active':''}" data-goto="${i}" ${activeTab===i?'aria-current="page"':''}>${ic(i,22)}<span class="lb">${lb}</span></button>`).join('')}</div>`;
}

function navbar(title, back, actions = ''){
  const ttl = title ? `<span class="ttl">${title}</span>` : '';
  return `<div class="navbar">${back ? `<button class="icbtn frost" data-back aria-label="返回">${ic('chevron-left',18)}</button>` : '<span/>'}${ttl}<div style="display:flex;gap:0">${actions}</div></div>`;
}

function icbtn(icon, cls = '', size = 18, action = '', label = ''){
  const attr = action ? `data-act="${action}"` : '';
  return `<button class="icbtn ${cls}" ${attr} aria-label="${label || icon}">${ic(icon, size)}</button>`;
}

/* 风味钻石：每款配方一颗，由四维风味生成，不表达难度 */

/* v12 三档素材（1x/2x/3x），禁止由 1024 缩放 */
function gemSet(id){
  const p = 'assets/gem-v12';
  return `${p}/1x/flavor_${id}.png 1x, ${p}/2x/flavor_${id}.png 2x, ${p}/3x/flavor_${id}.png 3x`;
}
function gemImg(d, size = 24){
  return `<img src="assets/gem-v12/1x/flavor_${d.gem}.png" srcset="${gemSet(d.gem)}" width="${size}" height="${size}" alt="${d.name} 风味钻石">`;
}
/* 等级卡钻石三版对照：?gem=v1|v2|v3（默认 v3）
   v1 24pt 整卡居中 · 与内容框间距 0
   v2 28pt 底边与另两卡数值行同线 · 与内容框间距 0
   v3 32pt 整卡垂直居中（上下间距相等） · 与内容框间距 4 */
function gemVariant(){
  const q = (location.search.match(/[?&]gem=(v[123])/) || [])[1];
  const M = {
    v1: { size: 24, align: 'center', gap: 0 },
    v2: { size: 28, align: 'end',    gap: 0 },
    v3: { size: 32, align: 'center', gap: 4 },
  };
  return M[q] || M.v3;
}
/* 等级钻石：只用 5x(120w) 档，最大 32pt 需 96px，120w 足够且不下采样到破图 */
function gemLevel(d, cfg){
  const p = 'assets/gem-v12';
  const gap = cfg.gap > 0 ? `;margin-right:${cfg.gap}px` : '';
  return `<img src="${p}/5x/flavor_${d.gem}.png" width="${cfg.size}" style="height:auto;align-self:${cfg.align}${gap}" alt="${d.name} 等级钻石">`;
}
/* 等级标识：统一「钻石 + L2」，不使用色条 */
function gemGlyph(size = 14){
  return `<svg class="lvl-gem" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.4 3.6h9.2L21 9.4 12 20.6 3 9.4l4.4-5.8Z" fill="currentColor"/>
    <path d="M3 9.4h18M7.4 3.6 12 9.4l-4.6 11.2M16.6 3.6 12 9.4l4.6 11.2" stroke="rgba(0,0,0,.30)" stroke-width="1.1" fill="none"/>
  </svg>`;
}
function levelBadge(level, dark = false){
  return `<span class="lvl-badge${dark ? ' on-dark' : ''}">${gemGlyph(14)}<b>L${level}</b></span>`;
}
function gemBadge(d, dark = false){
  return `<span class="gem-badge${dark ? ' on-dark' : ''}"><span class="gem-tier num">L${d.level}</span><span class="recipe-gem">${gemImg(d, 24)}</span></span>`;
}
/* 卡片来源标识：官方「盏 · 精编」或用户 DIY */
function srcBadge(d){
  return d.diy ? `<span class="badge-diy">DIY</span>` : `<span class="badge-src">盏 · 精编</span>`;
}
function gemBlock(d, size = 24, withTier = false){
  return `<span class="gem-block"><span class="recipe-gem">${gemImg(d, size)}</span>${withTier ? `<i class="gem-name">L${d.level}</i>` : ''}</span>`;
}

/* ============================ 数据 ============================ */
const DRINKS = [
  { id:'d13', name:'大都会', en:'Cosmopolitan', img:'d13.jpg', pos:'50% 42%', meta:'4 分钟 · 15%vol · 酸甜平衡', level:2, gem:'r7', fam:'伏特加', tags:['酸甜','摇和','经典'] },
  { id:'d17', name:'螺丝刀', en:'Screwdriver', img:'d17.jpg', pos:'50% 42%', meta:'2 分钟 · 10%vol', level:1, gem:'r2', fam:'伏特加', tags:['清爽','直掺'], diy:true },
  { id:'d01', name:'金菲士', en:'Gin Fizz', img:'d01.jpg', pos:'8% 50%', meta:'5 分钟 · 11%vol', level:2, gem:'r1', fam:'金酒', tags:['酸甜','摇和','含气'] },
  { id:'d03', name:'威士忌酸', en:'Whiskey Sour', img:'d03.jpg', pos:'50% 42%', meta:'5 分钟 · 18%vol', level:2, gem:'r6', fam:'威士忌', tags:['酸甜','摇和'] },
  { id:'d09', name:'荔枝马天尼', en:'Lychee Martini', img:'d09.jpg', pos:'50% 0%', meta:'6 分钟 · 16%vol', level:3, gem:'r8', fam:'伏特加', tags:['浓郁','摇和','果味'] },
  { id:'d05', name:'西柚帕洛玛', en:'Grapefruit Paloma', img:'d05.jpg', pos:'50% 50%', meta:'4 分钟 · 12%vol', level:1, gem:'r4', fam:'龙舌兰', tags:['清爽','酸甜','含气'] },
  { id:'d02', name:'自由古巴', en:'Cuba Libre', img:'d02.jpg', pos:'50% 50%', meta:'2 分钟 · 14%vol', level:1, gem:'r5', fam:'朗姆', tags:['清爽','直掺','含气'], diy:true },
  { id:'d16', name:'莫吉托', en:'Mojito', img:'d16.jpg', pos:'50% 40%', meta:'5 分钟 · 12%vol', level:2, gem:'r9', fam:'朗姆', tags:['清爽','草本','摇和'] },
];
const BOTTLES = [
  { id:'b05', name:'百加得白朗姆', fam:'朗姆', level:1, amt:'750ml · 40%vol', remain:0.90 },
  { id:'b02', name:'尊尼获加黑牌', fam:'威士忌', level:2, amt:'700ml · 40%vol', remain:0.65 },
  { id:'b03', name:'孟买蓝宝石金酒', fam:'金酒', level:2, amt:'750ml · 40%vol', remain:0.55 },
  { id:'b07', name:'绝对伏特加原味', fam:'伏特加', level:1, amt:'700ml · 40%vol', remain:0.80 },
];
const POSTS = [
  { id:'p1', img:'d09.jpg', pos:'50% 0%', h:236, title:'荔枝马天尼｜季节限定的一杯，冰箱里冰 30 分钟的荔枝水刚好', av:'a3.jpg', name:'杯中物', likes:892, recipeId:'d09' },
  { id:'p2', img:'d03.jpg', pos:'50% 40%', h:196, title:'烟熏古典｜周末仪式感拉满，阿贝 10 年加一滴苦精就行', av:'a1.jpg', name:'深夜小酒馆不打烊', likes:326, recipeId:'d03' },
  { id:'p3', img:'d13.jpg', pos:'50% 45%', h:150, title:'大都会｜一杯正红', av:'a6.jpg', name:'一个人喝到天亮', likes:74, recipeId:'d13' },
  { id:'p4', img:'d05.jpg', pos:'50% 50%', h:148, title:'西柚帕洛玛，酸甜刚好', av:'a2.jpg', name:'居家微醺', likes:89, recipeId:'d05' },
  { id:'p5', img:'d02.jpg', pos:'50% 50%', h:132, title:'自由古巴，可乐桶升级版', av:'a4.jpg', name:'可乐不加冰', likes:51, recipeId:'d02' },
];

/* ============================ 屏幕：首页 ============================ */
function scrHome(){
  const recSeg = S.homeSeg === 'rec';
  const segOn = recSeg ? 'left' : 'right';
  const hero = DRINKS[0];
  const quick = DRINKS.slice(1, 3);
  const heroHtml = `
    <div class="home-hero glass-rim" data-goto="recipe" data-arg="${hero.id}">
      <img src="assets/${hero.img}" style="object-position:${hero.pos}">
      <div class="scrim"></div>
      ${srcBadge(hero)}
      <span class="fly">${icbtn('arrow-right','frost',17,'goto:recipe:'+hero.id,'查看配方')}</span>
      ${gemBadge(hero)}
      <div class="copy">
        <div class="drink-name" style="font-size:28px;line-height:1.16">${hero.name}</div>
        <div class="en">${hero.en} · ${hero.meta}</div>
      </div>
    </div>`;
  const cards2 = quick.map(d => `<div class="vcard surface" data-goto="recipe" data-arg="${d.id}">
      <div class="ph"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
      <div class="ci"><div class="nm">${d.name}</div><div class="en">${d.en}</div><div class="mt">${d.meta}</div></div>
    </div>`).join('');

  const canmakeCards = DRINKS.filter(d => d.level <= 2).slice(0, 4).map(d => `<div class="vcard surface" data-goto="recipe" data-arg="${d.id}">
      <div class="ph"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
      <div class="ci"><div class="nm">${d.name}</div><div class="en">${d.en}</div><div class="mt">${d.fam} · ${d.tags.slice(0,2).join(' · ')}</div></div>
    </div>`).join('');

  const body = recSeg ? `
    ${heroHtml}
    <div style="padding:16px 20px 0">${secHead('今日推荐')}</div>
    <div style="padding:0 20px 4px;display:flex;align-items:center;justify-content:space-between">
      <div class="sec-head" style="margin-bottom:0"><span class="h2">快手一杯</span></div>
      <span class="arr"><button class="chip sm" data-home-rot>换一批</button></span>
    </div>
    <div class="grid2 pad">${cards2}</div>
    <div class="surface g20 pad" style="margin:12px 20px 0;border-radius:20px;padding:12px 16px;display:flex;align-items:center;gap:12px">
      <span style="width:36px;height:36px;border-radius:50%;background:var(--amber-wash);color:var(--amber-lift);display:flex;align-items:center;justify-content:center">${ic('bottle',18)}</span>
      <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600">你的酒库有 ${BOTTLES.length} 瓶 · 可做 7 杯</div><div class="caption" style="margin-top:2px">补 1 瓶红石榴糖浆，再解锁 2 杯</div></div>
      <span style="color:var(--ink-400);display:flex;min-width:44px;justify-content:center">${ic('chevron-right',15)}</span>
    </div>
  ` : `
    <div class="pad" style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:16px">
      <div class="canmake-head">
        <div class="canmake-num">7<span>杯可做</span></div>
      </div>
      <span class="caption" style="padding-bottom:3px">含 2 杯 DIY · 只看可用基础酒</span>
    </div>
    <div class="grid2 pad" style="margin-top:14px">${canmakeCards}</div>
  `;

  return frame(`
    <div class="screen">
      <div class="pad topgap">
        <div class="eyebrow">11 月 4 日 · 上海 · 微醺指数 良</div>
        <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:7px">
          <div class="display" style="font-size:30px">今晚喝点什么</div>
          <div style="display:flex;gap:8px">${icbtn('search','','18','goto:search','搜索')}${icbtn('sliders','','18','open-filter','筛选')}</div>
        </div>
      </div>
      <button class="searchbar surface pad" style="margin:14px 20px 0;width:calc(100% - 40px)" data-goto="search" aria-label="搜索配方、材料或风味">
        ${ic('search',16,1.6)}<span>搜索配方、材料或风味</span>
      </button>
      <div class="chips pad" style="padding-top:12px">
        <span class="chip ${S.filters.fam.length===0||S.filters.fam.includes('全部')?'on':''}" data-chip data-v="全部">全部</span>
        <span class="chip ${S.filters.fam.includes('清爽')?'on':''}" data-chip data-v="清爽">清爽</span>
        <span class="chip ${S.filters.fam.includes('酸甜')?'on':''}" data-chip data-v="酸甜">酸甜</span>
        <span class="chip ${S.filters.fam.includes('烈')?'on':''}" data-chip data-v="烈">烈</span>
        <span class="chip ${S.filters.fam.includes('3步内')?'on':''}" data-chip data-v="3步内">3 步内</span>
      </div>
      <div class="pad" style="padding-top:14px">
        <div class="seg ${segOn}">
          <span class="thumb"></span>
          <button class="${recSeg?'on':''}" data-home-seg="rec">推荐<em>8</em></button>
          <button class="${!recSeg?'on':''}" data-home-seg="can">我能做的<em>7</em></button>
        </div>
      </div>
      ${body}
      <div style="height:120px"></div>
    </div>
  `);
}

/* ============================ 屏幕：搜索 ============================ */
function scrSearch(){
  const q = (S.search||'').trim();
  const pool = q ? DRINKS.filter(d => (d.name+d.en+d.fam+d.tags.join(' ')).toLowerCase().includes(q.toLowerCase())) : [];
  const rows = pool.length ? pool.slice(0,6).map(d => `<button class="result-row surface" data-goto="recipe" data-arg="${d.id}">
    <div class="thumb"><img src="assets/${d.img}" style="object-position:${d.pos}"></div>
    <div class="inf"><div class="nm">${d.name}<span style="font-family:var(--serif);font-size:11.5px;color:var(--ink-300);font-weight:400">· ${d.en}</span></div><div class="mt">${d.fam} · ${d.meta}</div></div>
    ${gemBadge(d, true)}
  </button>`).join('') : '';
  const recent = q ? '' : `<div class="pad" style="padding-top:20px">
    <div class="sec-head"><span class="h2">热门搜索</span></div>
    <div class="chips pad" style="padding-top:8px">
      <span class="chip" data-search-set>大都会</span>
      <span class="chip" data-search-set>威士忌酸</span>
      <span class="chip" data-search-set>金酒</span>
      <span class="chip" data-search-set>莫吉托</span>
      <span class="chip" data-search-set>新手推荐</span>
    </div>
  </div>`;
  const empty = q && !pool.length ? `<div class="empty">没有找到与「${q}」匹配的配方或材料<br>试试更短的关键词？</div>` : '';

  return frame(`
    <div class="screen">
      <div style="padding-top:0;height:0"></div>
      ${navbar('搜索', true)}
      <div style="padding:110px 20px 0">
        <div class="searchbar surface field" style="margin-bottom:14px">
          ${ic('search',16,1.6)}<input id="qfield" aria-label="搜索配方、材料或风味" enterkeyhint="search" placeholder="${q||'配方、材料、风味'}" value="${q}" autofocus />
        </div>
        ${recent}
        <div style="display:flex;flex-direction:column;gap:8px;padding-top:${q?'16px':'8px'}">${rows}</div>
        ${empty}
        <div style="height:160px"></div>
      </div>
    </div>
  `);
}

/* ============================ 屏幕 C2：我的酒（列表） ============================ */
function scrBottle(){
  const fams = ['朗姆','威士忌','金酒','伏特加'];
  return frame(`
    <div class="screen">
      ${navbar('我的酒', true, `<button class="navact" style="width:auto;padding:0 6px;font-size:15px;color:var(--amber-lift)">编辑</button>`)}
      <div class="pad" style="padding-top:108px;display:flex;align-items:center;justify-content:space-between">
        <div class="small">4 瓶 · 已入库</div>
        <button class="chip sm" data-goto="addwine">${ic('plus',13,'2')} 添加酒</button>
      </div>
      <div class="pad" style="padding-top:14px">
        ${fams.map(f=>{
          const arr = BOTTLES.filter(b=>b.fam===f);
          return `<div class="gcard surface g24" style="margin-bottom:12px">
            <div class="grp-lb">${f} · ${arr.length} 瓶</div>
            ${arr.map((b,i)=>`
              <button class="vrow" data-goto="bottle-detail" data-arg="${b.id}">
                <div class="thumb"><img src="assets/${b.id}.jpg"></div>
                <div class="inf">
                  <div class="nm">${b.name}</div>
                  <div class="mt">${b.amt}</div>
                </div>
                <div class="rt">${levelBadge(b.level)}</div>
              </button>
              ${i<arr.length-1?'<div class="divider"></div>':''}`).join('')}
          </div>`;
        }).join('')}
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ 屏幕：酒款详情 ============================ */
function scrBottleDetail(id){
  const b = BOTTLES.find(x=>x.id===id) || BOTTLES[0];
  const sampleDrinks = DRINKS.filter(d=>d.fam===b.fam);
  return frame(`
    <div class="screen">
      <div class="bottle-hero"><img src="assets/${b.id}.jpg"><div class="veil"></div></div>
      ${navbar('酒款详情', true, `<span class="navact" aria-hidden="true">${ic('heart',18)}</span>`)}
      <div style="position:relative;margin-top:-40px;z-index:5">
        <div class="pad">
          <div style="display:flex;align-items:flex-end;justify-content:space-between">
            <div style="flex:1;min-width:0">
              <div class="eyebrow">${b.fam}</div>
              <div class="h1 drink-name" style="margin-top:6px">${b.name}</div>
              <div class="small" style="margin-top:4px;color:rgba(255,255,255,.88)">${b.amt}</div>
            </div>
          </div>
          <div class="surface g20 r20" style="margin-top:18px;padding:14px 16px">
            <div class="sec-head"><span class="h2">风味画像</span></div>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${segbar('浓郁',3)}${segbar('香草',2)}${segbar('烘烤',1)}${segbar('木香',2)}
            </div>
          </div>
          <div style="padding-top:22px">${secHead('用这瓶能做的', `${sampleDrinks.length} 杯`)}</div>
          ${sampleDrinks.length===0?`<div class="caption">这瓶暂时没有匹配配方，去酒圈看看别人怎么调。</div>`:''}
          <div class="grid2" style="gap:12px${sampleDrinks.length===1?';grid-template-columns:1fr':''}">
            ${sampleDrinks.map(d=>`<button class="vcard surface" data-goto="recipe" data-arg="${d.id}">
              <div class="ph"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
              <div class="ci"><div class="nm">${d.name}</div><div class="mt">${d.meta}</div></div>
            </button>`).join('')}
          </div>
          <div style="height:180px"></div>
        </div>
      </div>
    </div>
    <div class="ctabar glass g28">
      <div style="display:flex;gap:10px">
        <button class="btn secondary" style="flex:0 0 auto;padding:0 18px" data-act="none">编辑库存</button>
        <button class="btn primary" style="flex:1" data-goto="flow" data-arg="${b.id==='b02'?'d03':'d13'}">用它调一杯</button>
      </div>
    </div>
  `);
}

/* ============================ 屏幕：配方详情 ============================ */
function scrRecipe(id){
  const d = DRINKS.find(x=>x.id===id) || DRINKS[0];
  S.recipeStep = 0; S.doneStep = new Set();
  const mats = [
    ['威士忌', '60ml', true, ''],
    ['黄柠檬汁', '30ml', true, ''],
    ['单糖浆', '15ml', false, '可用蜂蜜 10ml 替代'],
    ['蛋清', '1 个', false, '可选'],
  ];
  const steps = [
    '材料入摇壶，先干摇 5 秒乳化蛋清',
    '加冰摇和 10 秒，滤入冰杯',
    '橙皮挤汁装饰，立即饮用',
  ];
  const comments = [
    ['a5.jpg','阿 May 调酒记','3 天前','蛋清先干摇再摇和，口感会更绵。冰杯提前放冰箱 15 分钟，喝完最后一滴都不会淡。'],
    ['a2.jpg','居家微醺','1 周前','第一次做，蜂蜜替代糖浆太咸了，不如干脆放弃。'],
  ];
  const gc = gemVariant();
  return frame(`
    <div class="screen">
      <div class="recipe-hero"><img src="assets/${d.img}" style="object-position:${d.pos}"><div class="veil"></div></div>
      ${navbar('配方详情', true, `<span class="navact" aria-hidden="true">${ic('share',17)}</span>`)}
      <div style="position:relative;margin-top:-40px;z-index:5">
        <div class="pad">
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:14px">
            <div style="flex:1;min-width:0">
              <div class="drink-name" style="font-size:28px;line-height:1.16">${d.name}</div>
              <div class="small" style="margin-top:4px;color:rgba(255,255,255,.88)">${d.en} · ${d.fam} · ${d.meta}</div>
            </div>
            ${icbtn('heart', 'plain', 19, '', '收藏')}
          </div>
          <div style="display:flex;gap:8px;margin-top:10px">
            ${d.tags.map(t=>`<span class="chip sm" style="height:24px;padding:0 9px;font-size:11px;border-radius:12px">${t}</span>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:120px 84px 120px;gap:12px;margin-top:14px">
            <div class="stat-tile surface"><span class="lb">用时</span><span class="vl" style="margin-top:auto;font-size:18px;justify-content:flex-end">${ic('clock',16,'1.5')}5 分钟</span></div>
            <div class="stat-tile surface" style="display:grid;grid-template-columns:1fr auto;padding-left:8px;padding-right:8px"><span class="lb" style="align-self:start">L${d.level}</span>${gemLevel(d, gc)}</div>
            <div class="stat-tile surface"><span class="lb">口碑</span><span class="vl" style="margin-top:auto;font-size:18px;justify-content:center">${icf('star',14)}<span>4.8<small style="font-size:14px;color:var(--ink-400);font-weight:400;margin-left:2px">·312</small></span></span></div>
          </div>
          <div style="padding-top:18px">
            <div class="sec-head">
              <span class="h2">风味</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${segbar('酸度',4)}${segbar('甜度',2)}${segbar('酒精感',3)}${segbar('圆润',2)}
            </div>
          </div>
          <div style="padding-top:18px">
            ${secHead('材料','4 项 · 酒库已有 2 项')}
            <div class="gcard surface g24" style="padding:3px 16px">
              ${mats.map(([n,q,ok,note],i)=>`
                <div class="mat-row">
                  <span style="flex:0 0 auto;color:${ok?'var(--amber-lift)':'var(--ink-300)'};display:flex">${ic(ok?'check':'alert',15,1.8)}</span>
                  <span style="font-size:13px;font-weight:500">${n}</span>
                  <span class="qty">${q}</span>
                  <span class="note" style="${ok?'color:#7ED957':'color:var(--amber-lift)'}">${note||(ok?'酒库有':'')}</span>
                </div>
                ${i<mats.length-1?'<div class="divider"></div>':''}`).join('')}
            </div>
          </div>
          <div style="padding-top:18px">
            ${secHead('步骤','共 '+steps.length+' 步')}
            <div style="display:flex;flex-direction:column;gap:7px">
              ${steps.map((s,i)=>`<div style="display:flex;align-items:center;gap:10px;font-size:13px;color:var(--ink-600)">
                <span class="num" style="color:var(--ink-300);font-size:11.5px;width:16px">0${i+1}</span>${s}</div>`).join('')}
            </div>
          </div>
          <div style="padding-top:22px">${secHead('留言')}</div>
          <div class="surface g20 r18" style="padding:12px 16px">
            ${comments.map(([av,nm,txt,body])=>`<div class="cm"><img src="assets/${av}"><div style="flex:1;min-width:0"><div class="who">${nm}<span>· ${txt}</span></div><div class="txt">${body}</div></div></div>`).join('')}
          </div>
          <div style="height:190px"></div>
        </div>
      </div>
    </div>
    <div class="ctabar glass g28">
      <div style="display:flex;gap:10px">
        <button class="btn secondary" style="flex:0 0 auto;padding:0 18px" data-act="none">手动标记已完成</button>
        <button class="btn primary" style="flex:1" data-act="none" data-goto="flow" data-arg="${d.id}">开调 →</button>
      </div>
    </div>
  `);
}

/* ============================ 屏幕：制作流程 ============================ */
function scrFlow(id){
  const d = DRINKS.find(x=>x.id===id) || DRINKS[0];
  const steps = [
    ['准备材料', '摆齐 4 份材料 + 工具', '1min'],
    ['干摇蛋清', '先不放冰，上下摇 10 秒', '10s'],
    ['冰摇', '加冰快摇 12 秒', '12s'],
    ['滤入冰杯', '用 double strainer 去蛋沫', '30s'],
  ];
  const i = S.recipeStep;
  const allDone = S.doneStep.size === steps.length;

  if (allDone) {
    return frame(`
      <div class="screen">
        <div style="padding-top:58px"></div>
        <div class="pad surface g26" style="border-radius:22px;padding:28px 24px">
          <div class="done-card">
            <div class="ring">${ic('glass',28)}</div>
            <div class="drink-name" style="font-size:22px;line-height:1.2">恭喜你调出了<br>${d.name}</div>
            <div class="small" style="margin-top:8px;color:rgba(255,255,255,.85)">L${d.level} 难度 · 4 步 · 5 分钟</div>
            <div style="display:flex;gap:10px;margin-top:20px;justify-content:center">
              <button class="btn primary" data-goto="home">存到我的调酒</button>
              <button class="btn secondary" data-goto="chat">发一条到酒圈</button>
            </div>
          </div>
        </div>
        <div style="height:160px"></div>
      </div>
    `);
  }

  const dots = steps.map((_, idx)=>{
    let cls = '';
    if (S.doneStep.has(idx)) cls = 'done';
    else if (idx === i) cls = 'on';
    return `<span class="dot ${cls}">${idx+1}</span>${idx<steps.length-1?`<span class="line ${S.doneStep.has(idx)?'on':''}"></span>`:''}`;
  }).join('');

  const stepInfo = steps[i];
  return frame(`
    <div class="screen">
      ${navbar('制作流程 · '+d.name, true)}
      <div class="pad" style="padding-top:110px">
        <div class="steps-rail">${dots}</div>
      </div>
      <div class="flow-photo"><img src="assets/${d.img}" style="object-position:${d.pos}"><div class="veil"></div></div>
      <div class="pad" style="padding-top:22px">
        <div class="flow-big num">0${i+1}</div>
        <div class="flow-title">${stepInfo[0]}</div>
        <div class="caption" style="margin-top:4px">${stepInfo[1]}</div>
        <div style="margin-top:14px"><span class="flow-timer">${ic('clock',14,'1.5')} 预计 ${stepInfo[2]}</span></div>
        <div style="padding-top:26px">
          <div class="sec-head"><span class="h2">本次流程</span></div>
          <div class="flow-list">
            ${steps.map((s,idx)=>`<button class="flow-check ${S.doneStep.has(idx)?'on':''}" data-flow-step="${idx}">
              <span class="box">${ic('check',12,'2')}</span>
              <span style="flex:1;text-align:left">${s[0]}</span>
              <span class="num small">${s[2]}</span>
            </button>`).join('')}
          </div>
        </div>
        <div style="height:200px"></div>
      </div>
    </div>
    <div class="ctabar glass g28" style="bottom:22px">
      <div style="display:flex;gap:10px">
        ${i>0?`<button class="btn secondary" style="flex:0 0 92px" data-flow-prev>上一步</button>`:'<span style="flex:0 0 92px"/>'}
        <button class="btn primary" style="flex:1" data-flow-next>${i===steps.length-1?'完成调酒':'标记已完成'}</button>
      </div>
    </div>
  `);
}

/* ============================ 屏幕：酒圈 ============================ */
function scrFeed(){
  const postsL = POSTS.filter((_,i)=>i%2===0);
  const postsR = POSTS.filter((_,i)=>i%2===1);
  const col = (arr) => arr.map(o=>`<div class="post" style="height:${o.h}px" data-goto="comment" data-arg="${o.id}">
    <img class="photo" src="assets/${o.img}" style="object-position:${o.pos}">
    <div class="scrim"></div>
    <span class="likes">${ic('heart',11,1.7)}${o.likes}</span>
    <div class="cap"><div class="t">${o.title}</div><div class="a"><img src="assets/${o.av}">${o.name}</div></div>
  </div>`).join('');
  return frame(`
    <div class="screen">
      <div class="pad topgap" style="padding-bottom:10px">
        <div style="display:flex;align-items:flex-end;justify-content:space-between">
          <div>
            <div class="eyebrow">COMMUNITY</div>
            <div class="display" style="font-size:29px;margin-top:5px">酒圈</div>
          </div>
          ${icbtn('camera','','18','goto:comment','发布')}
        </div>
        <div class="surface feedbar" style="margin:14px 0 0">
          <button class="${S.feedSeg==='f'?'on':''}" data-feed-seg="f">关注</button>
          <button class="${S.feedSeg==='rec'?'on':''}" data-feed-seg="rec">推荐</button>
          <button class="${S.feedSeg==='n'?'on':''}" data-feed-seg="n">最新</button>
          <button data-act="open-filter" aria-label="筛选">${ic('sliders',13,1.5)}筛选</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding:4px 20px 0">
        <div style="display:flex;flex-direction:column;gap:12px">${col(postsL)}</div>
        <div style="display:flex;flex-direction:column;gap:12px">${col(postsR)}</div>
      </div>
      <div style="height:130px"></div>
    </div>
  `);
}

/* ============================ 屏幕：帖子详情 ============================ */
function scrComment(postId){
  const p = POSTS.find(x=>x.id===postId) || POSTS[0];
  const d = DRINKS.find(x=>x.id===p.recipeId) || DRINKS[0];
  const comments = [
    ['a2.jpg','居家微醺','3 天前','第一次做，荔枝罐头汁放多了有点甜，下次减到 20ml。'],
    ['a5.jpg','阿 May 调酒记','3 天前','冰块一定要多加，摇和 12 秒就够；杯口擦一圈柠檬皮会更香。'],
    ['a8.jpg','盏盏','1 周前','试了两次，把伏特加换成金酒也好喝，杜松子香更明显。'],
  ];
  return frame(`
    <div class="screen">
      <div class="post-hero"><img src="assets/${p.img}" style="object-position:${p.pos}"><div class="veil"></div></div>
      ${navbar('', true)}
      <div style="position:relative;margin-top:-16px;z-index:5;padding:0 20px">
        <div class="glass g26" style="border-radius:22px;padding:14px">
          <div style="display:flex;align-items:center;gap:12px">
            <img class="avatar" src="assets/${p.av}" style="width:40px;height:40px">
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600">${p.name}</div>
              <div class="small">3 天前 · 2 分钟读完</div>
            </div>
            <button class="chip on sm" style="height:28px">关注</button>
          </div>
          <div style="font-size:13px;line-height:1.75;color:var(--ink-600);margin-top:14px">${p.title}<br>冰杯提前放冰箱 15 分钟，喝完最后一滴都不会淡。荔枝罐头的水别倒，和伏特加 1:1 兑进去更香；摇和 12 秒就够。</div>
          <div style="margin-top:14px">${secHead('关联配方','用了 1 款')}</div>
          <button class="vcard surface" style="text-align:left;width:100%" data-goto="recipe" data-arg="${d.id}">
            <div class="ph" style="height:100px"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
            <div class="ci"><div class="nm">${d.name}</div><div class="en">${d.en}</div><div class="mt">${d.fam} · ${d.meta}</div></div>
          </button>
        </div>
        <div style="padding-top:16px">${secHead('评论','3 条')}</div>
        <div class="surface g24" style="border-radius:20px;padding:0 16px">
          ${comments.map(([av,nm,txt,body])=>`<div class="cm"><img src="assets/${av}"><div style="flex:1;min-width:0"><div class="who">${nm}<span>· ${txt}</span></div><div class="txt">${body}</div></div></div>`).join('')}
        </div>
        <div style="height:200px"></div>
      </div>
    </div>
    <div class="ctabar glass g28" style="bottom:16px">
      <div class="actbar" style="margin-bottom:8px">
        <button class="${S.heartOn?'on':''}" data-heart aria-label="点赞">${ic('heart',16,'1.6')}${S.heartOn?p.likes+1:p.likes}</button>
        <button aria-label="评论">${ic('comment',16,'1.6')}12</button>
        <button aria-label="分享">${ic('share',16,'1.6')}</button>
      </div>
      <div class="comment-tray">
        <span class="field surface">说点什么…</span>
        ${icbtn('send','frost',17,'none','发送评论')}
      </div>
    </div>
  `);
}

/* ============================ 屏幕：我的 ============================ */
function scrMe(){
  return frame(`
    <div class="screen">
      <div class="pad topgap">
        <div class="eyebrow">PROFILE</div>
        <div class="display" style="font-size:29px;margin-top:5px">我的</div>
      </div>
      <div class="surface g24 pad" style="margin:16px 20px 0;border-radius:22px;padding:14px;display:flex;align-items:center;gap:13px">
        <img class="avatar" src="assets/a3.jpg" style="width:56px;height:56px">
        <div style="flex:1;min-width:0">
          <div style="font-size:17px;font-weight:600;letter-spacing:-.3px">杯中物</div>
          <div class="caption" style="margin-top:4px">2026 年 8 月加入 · l***@163.com</div>
          <div style="display:flex;gap:6px;margin-top:7px">${levelBadge(3)}</div>
        </div>
        ${icbtn('more','',17,'none','更多')}
      </div>
      <div class="surface g20 pad" style="margin:12px 20px 0;border-radius:20px;padding:14px 6px;display:flex">
        ${[['4','我的酒'],['8','我的调酒'],['8','收藏']].map(([n,lb],i)=>`<div style="flex:1;text-align:center;${i>0?'border-left:1px solid rgba(255,255,255,.09)':''}"><div class="num" style="font-size:23px;font-weight:600;line-height:1">${n}</div><div style="font-size:11px;color:var(--ink-400);margin-top:6px">${lb}</div></div>`).join('')}
      </div>
      <div class="sec-head pad" style="margin:14px 20px 8px"><span class="h2">口味偏好</span></div>
      <div class="gcard surface g24 pad" style="margin:0 20px">
        <div class="pref-row" style="height:auto;padding-top:12px;padding-bottom:12px">
          <span style="width:20px;color:var(--ink-400);display:flex">${ic('leaf',19)}</span>
          <span style="font-size:13px">我的常选风味</span>
          <div class="chips" style="margin-left:auto;gap:5px">
            <span class="chip on sm">酸甜</span><span class="chip sm">清爽</span><span class="chip sm">低度</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="pref-row">
          <span style="width:20px;color:var(--ink-400);display:flex">${ic('bell',19)}</span>
          <span style="font-size:13px;flex:1">消息通知</span>
          <span class="toggle on"></span>
        </div>
      </div>
      <div class="sec-head pad" style="margin:12px 20px 8px"><span class="h2">我的内容</span></div>
      <div class="gcard surface g24 pad" style="margin:0 20px">
        ${[['glass','我的调酒','8 杯','history'],['doc','我的帖子','1 条','chat'],['star','勋章','4 枚','me'],['gear','设置','','settings']].map(([i,t,v,g],idx)=>`
          ${idx?'<div class="divider"></div>':''}
          <button class="list-row" data-goto="${g}">
            <span class="ic">${ic(i,19)}</span><span class="tx">${t}</span>
            ${v?`<span class="v">${v}</span>`:''}
            <span class="ch">${ic('chevron-right',14)}</span>
          </button>
        `).join('')}
      </div>
      <div class="caption num" style="text-align:center;margin-top:22px;color:var(--ink-300)">盏 1.0.0 · 适量饮酒</div>
      <div style="height:130px"></div>
    </div>
  `);
}

/* ============================ 筛选弹层 ============================ */
function filterSheet(){
  const fams = ['全部','威士忌','金酒','朗姆','伏特加','龙舌兰'];
  const flavors = ['清爽','酸甜','浓郁','草本','辛香'];
  const strs = ['低 10%↓','中 10–20%','高 20%↑'];
  const srcs = ['全部','官方精编','DIY 配方'];
  const levelSel = S.filters.level.length ? S.filters.level : [1,2,3,4,5];
  const famSel = S.filters.fam.length ? S.filters.fam : ['全部'];
  const flavorSel = S.filters.flavor;
  const strSel = S.filters.strength;
  const srcSel = S.filters.src.length ? S.filters.src : ['全部'];
  const levelRow = [1,2,3,4,5].map(o=>{
    const on = levelSel.includes(o) ? 'on' : '';
    return `<button class="lvlopt ${on}" data-filter="level" data-v="${o}">
      <span style="opacity:${on?1:.52};display:flex">${gemGlyph(18)}</span>
      <span class="lb">L${o}</span>
    </button>`;
  }).join('');
  return `
    <div class="sheet-wrap on">
      <div class="sheet-bd" data-close-sheet></div>
      <div class="sheet glass g28" role="dialog" aria-modal="true" aria-label="筛选配方">
        <div class="grab"></div>
        <div class="sh-head">
          <button class="btn ghost" data-filter-reset>重置</button>
          <div class="h2" style="font-size:15px">筛选配方</div>
          <button class="btn ghost" data-close-sheet>关闭</button>
        </div>
        <div class="sh-body">
          <div class="frow"><div class="flb"><b>基酒家族</b><span>${famSel.includes('全部')?'0':famSel.length} 项</span></div>
            <div class="chips">${fams.map(f=>`<button class="chip ${famSel.includes(f)?'on':''}" data-filter="fam" data-v="${f}">${f}</button>`).join('')}</div>
          </div>
          <div class="frow"><div class="flb"><b>风味</b><span>${flavorSel.length||'0'} 项</span></div>
            <div class="chips">${flavors.map(f=>`<button class="chip ${flavorSel.includes(f)?'on':''}" data-filter="flavor" data-v="${f}">${f}</button>`).join('')}</div>
          </div>
          <div class="frow"><div class="flb"><b>酒精强度</b><span>${strSel.length||'0'} 项</span></div>
            <div class="chips">${strs.map(f=>`<button class="chip ${strSel.includes(f)?'on':''}" data-filter="strength" data-v="${f}">${f}</button>`).join('')}</div>
          </div>
          <div class="frow"><div class="flb"><b>等级 / 难度</b><span style="max-width:140px">数字即等级 · 色盲友好</span></div>
            <div class="lvlrow">${levelRow}</div>
          </div>
          <div class="frow"><div class="flb"><b>来源</b><span>${srcSel[0]}</span></div>
            <div class="chips">${srcs.map(f=>`<button class="chip ${srcSel[0]===f?'on':''}" data-filter="src" data-v="${f}" data-single="true">${f}</button>`).join('')}</div>
          </div>
        </div>
        <div class="sh-foot">
          <button class="btn secondary" data-filter-reset>重置</button>
          <button class="btn primary" data-filter-confirm>确认 · 命中 8 杯</button>
        </div>
      </div>
    </div>
  `;
}

function statHtml(lb, val){ return `<div class="stat-tile surface"><span class="lb">${lb}</span><span class="vl">${val}</span></div>`; }
function segbar(label, val){
  let segs = '';
  for (let i=1;i<=5;i++) segs += `<i class="${i<=val?'on':''}"></i>`;
  return `<div class="segbar"><span class="lbl">${label}</span><span class="segs">${segs}</span><span class="val">${val}/5</span></div>`;
}
function secHead(t, more = '查看全部'){ return `<div class="sec-head"><span class="h2">${t}</span><span class="arr">${more}${more==='查看全部'?ic('chevron-right',12,1.5):''}</span></div>`; }

/* ============================ 路由 ============================ */
const SCREENS = {
  home: scrHome,
  search: scrSearch,
  bottle: scrBottle,
  'bottle-detail': scrBottleDetail,
  recipe: scrRecipe,
  flow: scrFlow,
  chat: scrFeed,
  comment: scrComment,
  me: scrMe,
};

let _route = { name: 'home', arg: '', from: null };
function goto(name, arg = '', from = null, back = false){
  _route = { name, arg, from };
  const fn = SCREENS[name];
  if (!fn) return;
  const out = fn(arg);
  const frame = document.querySelector('.frame');
  frame.innerHTML = out;
  const viewport = frame.querySelector('.viewport');
  const screen = viewport.querySelector('.screen');
  if (screen) { screen.classList.toggle('back', !!back); screen.scrollTop = 0; }
  const h = `#/${name}${arg?'/'+arg:''}`;
  if (window.location.hash !== h) history[back?'replaceState':'pushState']({ name, arg }, '', h);
  if (_sheetOpen) attachSheet();
  attachHandlers();
  updateRail();
}

function back(){
  if (_route.from) {
    const f = _route.from;
    _route.from = null;
    goto(f.name, f.arg, null, true);
  } else goto('home');
}

let _sheetOpen = false;
function attachSheet(){
  const v = document.querySelector('.viewport');
  if (!v) return;
  const old = v.querySelector('.sheet-wrap');
  if (old) old.remove();
  if (_sheetOpen) {
    const kind = S.sheetKind || 'filter';
    const html = kind === 'report' ? reportSheet() : kind === 'done' ? doneSheet() : filterSheet();
    v.insertAdjacentHTML('beforeend', html);
  }
  const fr = document.querySelector('.frame');
  if (fr) fr.classList.toggle('sheet-open', _sheetOpen);
}

/* ============================ 事件 ============================ */
function attachHandlers(){
  const frame = document.querySelector('.frame');
  if (!frame) return;
  frame.onclick = null;
  frame.addEventListener('click', onAnyClick);
  const qf = frame.querySelector('#qfield');
  if (qf) {
    qf.addEventListener('input', ()=>{
      S.search = qf.value;
      const v = document.querySelector('.viewport');
      v.innerHTML = scrSearch();
      attachHandlers();
      const qf2 = document.querySelector('#qfield');
      if (qf2) { qf2.value = S.search; qf2.focus(); }
    });
    setTimeout(()=>{ const f = document.querySelector('#qfield'); if (f) f.focus(); }, 80);
  }
}

function onAnyClick(e){
  const t = e.target;
  const btn = t.closest('button, [data-chip], [data-goto], [data-act], [data-home-seg], [data-home-fam], [data-filter], [data-single], [data-filter-reset], [data-filter-confirm], [data-feed-seg], [data-bottle-tab], [data-flow-step], [data-flow-next], [data-flow-prev], [data-search-set], [data-home-rot], [data-heart], [data-close-sheet], [data-back]');
  if (!btn) return;

  if (btn.matches('[data-back]')) { back(); return; }
  if (btn.matches('[data-close-sheet]')) { _sheetOpen = false; attachSheet(); return; }
  if (btn.matches('[data-act="open-filter"]')) { _sheetOpen = !_sheetOpen; attachSheet(); return; }
  if (btn.matches('[data-filter]')) {
    const key = btn.dataset.filter, v = btn.dataset.v;
    const single = btn.dataset.single === 'true';
    if (single) S.filters[key] = [v];
    else {
      if (!S.filters[key]) S.filters[key] = [];
      if (S.filters[key].includes(v)) S.filters[key] = S.filters[key].filter(x=>x!==v);
      else S.filters[key].push(v);
    }
    attachSheet(); return;
  }
  if (btn.matches('[data-filter-reset]')) {
    S.filters = { fam:[], flavor:[], strength:[], level:[], src:[] };
    attachSheet(); return;
  }
  if (btn.matches('[data-filter-confirm]')) { toast('已应用筛选 · 命中 8 杯'); _sheetOpen = false; attachSheet(); goto('home', '', null, true); return; }
  if (btn.matches('[data-home-seg]')) { S.homeSeg = btn.dataset.homeSeg; goto('home'); return; }
  if (btn.matches('[data-home-fam],[data-chip]')) {
    const v = btn.dataset.v;
    if (v === '全部') S.filters.fam = ['全部'];
    else { S.filters.fam = S.filters.fam.filter(x=>x!=='全部'); if (!S.filters.fam.includes(v)) S.filters.fam.push(v); }
    goto('home'); return;
  }
  if (btn.matches('[data-home-rot]')) { toast('已换一批'); goto('home'); return; }
  if (btn.matches('[data-feed-seg]')) { S.feedSeg = btn.dataset.feedSeg; goto('chat'); return; }
  if (btn.matches('[data-bottle-tab]')) { S.bottleTab = btn.dataset.bottleTab; goto('bottle'); return; }
  if (btn.matches('[data-heart]')) { S.heartOn = !S.heartOn; goto(_route.name, _route.arg, null, true); return; }
  if (btn.matches('[data-flow-step]')) {
    const idx = +btn.dataset.flowStep;
    if (S.doneStep.has(idx)) S.doneStep.delete(idx);
    else { for (let k=0;k<=idx;k++) S.doneStep.add(k); S.recipeStep = Math.min(idx+1, 3); }
    goto('flow', _route.arg, null, true); return;
  }
  if (btn.matches('[data-flow-next]')) {
    S.doneStep.add(S.recipeStep);
    if (S.recipeStep < 3) S.recipeStep++;
    goto('flow', _route.arg, null, true); return;
  }
  if (btn.matches('[data-flow-prev]')) {
    if (S.recipeStep > 0) S.recipeStep--;
    goto('flow', _route.arg, null, true); return;
  }
  if (btn.matches('[data-search-set]')) {
    S.search = btn.textContent.trim();
    goto('search');
    setTimeout(()=>{ const f = document.querySelector('#qfield'); if (f) { f.value = S.search; f.focus(); } }, 80);
    return;
  }

  const gotoAttr = btn.getAttribute('data-goto');
  const actAttr = btn.getAttribute('data-act');
  let target = '', arg = '', skipAct = false;
  if (btn.matches('.tab')) {
    target = btn.dataset.goto;
  } else if (gotoAttr && gotoAttr !== 'none') {
    const parts = gotoAttr.split(':');
    target = parts[0]; arg = parts[1] || '';
  } else if (actAttr && actAttr.startsWith('goto:')) {
    const parts = actAttr.slice(5).split(':');
    target = parts[0]; arg = parts[1] || '';
  } else if (actAttr && actAttr !== 'none') {
    // nothing
    return;
  } else {
    return;
  }
  if (!SCREENS[target]) return;
  _route.from = { name: _route.name, arg: _route.arg };
  goto(target, arg);
}

/* ============================ 侧栏 ============================ */
const RAIL = [
  ['首页',[['推荐 / 我能做的','home'],['筛选弹层','home']]],
  ['酒库',[['酒库总览','bottle'],['酒款详情','bottle-detail']]],
  ['配方',[['配方详情','recipe'],['制作流程','flow']]],
  ['酒圈',[['酒圈瀑布流','chat'],['帖子详情','comment']]],
  ['搜索',[['搜索','search']]],
  ['我的',[['我的','me']]],
];
function updateRail(){
  const rail = document.querySelector('.rail .rlist');
  if (!rail) return;
  rail.innerHTML = '';
  RAIL.forEach(([grp, items])=>{
    rail.insertAdjacentHTML('beforeend', `<div class="rgrp">${grp}</div>`);
    items.forEach(([lb, name])=>{
      const on = _route.name === name;
      rail.insertAdjacentHTML('beforeend', `<button class="ritem ${on?'on':''}" data-rail="${name}"><i></i>${lb}</button>`);
    });
  });
}
document.addEventListener('click', (e)=>{
  const b = e.target.closest('[data-rail]');
  if (b) goto(b.dataset.rail);
});

/* ============================ 启动 ============================ */
window.addEventListener('DOMContentLoaded', ()=>{
  const hash = window.location.hash.slice(2);
  if (hash) {
    const [n, ...rest] = hash.split('/');
    if (SCREENS[n]) goto(n, rest.join('/'));
    else goto('home');
  } else goto('home');
});
window.addEventListener('popstate', ()=>{
  const hash = window.location.hash.slice(2);
  if (hash) {
    const [n, ...rest] = hash.split('/');
    if (SCREENS[n]) goto(n, rest.join('/'), null, true);
  } else goto('home');
});
