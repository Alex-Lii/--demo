/* ============================================================================
   ZHAN · 盏 — 原型图渲染脚本
   23 页真实中文数据，统一 Design Contract
   ========================================================================== */

// ---------- Helpers ----------
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') n.className = v;
    else if (k === 'style') n.style.cssText = v;
    else n.setAttribute(k, v);
  });
  kids.forEach(k => {
    if (k == null) return;
    if (typeof k === 'string' || typeof k === 'number') n.appendChild(document.createTextNode(String(k)));
    else if (k instanceof Node) n.appendChild(k);
    else {
      console.warn('BAD CHILD:', tag, typeof k, k);
    }
  });
  return n;
};

const frame = (id, ...children) => {
  const f = el('section', { class: 'frame', 'data-frame-id': id });
  children.forEach(c => f.appendChild(c));
  return f;
};

const statusBar = () => el('div', { class: 'statusbar' },
  el('span', {}, '9:41'),
  el('div', { class: 'right' },
    el('span', {}, '5G'),
    el('div', { class: 'bars' }, el('span'), el('span'), el('span'), el('span')),
    el('span', {}, '🔋')
  )
);

const tabBar = (active) => {
  const tabs = [
    { k: 'home',    icon: '🏠', label: '首页' },
    { k: 'pantry',  icon: '🍶', label: '酒库' },
    { k: 'feed',    icon: '💬', label: '酒圈' },
    { k: 'profile', icon: '👤', label: '我的' },
  ];
  return el('div', { class: 'tabbar' },
    ...tabs.map(t => el('div', { class: 'item ' + (t.k === active ? 'active' : '') },
      el('div', { class: 'icon' }, t.icon),
      el('span', {}, t.label)
    ))
  );
};

const warnStrip = () =>
  el('div', { class: 'warning-strip' }, '⚠ 适量饮酒 · 请勿酒后驾车 · 禁止向未成年人售酒');

const levelBadge = (lv) => el('span', { class: 'level-badge l' + lv },
  lv === 1 ? 'L1 入门酒' :
  lv === 2 ? 'L2 进阶酒' :
  lv === 3 ? 'L3 精品酒' : 'L4 稀有酒'
);

const stars = (n) => el('span', { class: 'stars' },
  '★'.repeat(n) + '☆'.repeat(3 - n)
);

const recipeCard = ({ name, sub, level, difficulty, source, img }) => {
  const badge = source === 'diy'
    ? el('span', { class: 'corner-badge diy' }, 'DIY')
    : el('span', { class: 'corner-badge official' }, '盏 · 精编');
  return el('div', { class: 'recipe-card' },
    el('div', { class: 'img-wrap', style: `background:${img || getRecipeBg(name)};` }, badge),
    el('div', { class: 'info' },
      el('div', { class: 'name' }, name),
      el('div', { class: 'sub' }, sub),
      el('div', { style: 'margin-top:6px; display:flex; align-items:center; gap:6px;' },
        stars(difficulty),
        levelBadge(level)
      )
    )
  );
};

// deterministic recipe background palette per Chinese name
function getRecipeBg(name) {
  const palettes = [
    'linear-gradient(135deg,#E8C08C,#D99B5A)',
    'linear-gradient(135deg,#FBF1E3,#E8C08C)',
    'linear-gradient(135deg,#8AC8B8,#4A8C7D)',
    'linear-gradient(135deg,#FFE8D6,#E8843C)',
    'linear-gradient(135deg,#F7D8D0,#C0392B)',
    'linear-gradient(135deg,#D4E5F7,#4A6FA5)',
    'linear-gradient(135deg,#EDE0D4,#8A5C35)',
    'linear-gradient(135deg,#D0E5D0,#5C9C5C)',
  ];
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return palettes[h % palettes.length];
}

const btn = (cls, text) => el('button', { class: 'btn ' + cls }, text);
const chip = (label, active) => el('span', { class: 'chip' + (active ? ' active' : '') }, label);
const avatar = (text, size) => el('div', { class: 'avatar ' + (size || '') }, text.slice(0, 1));

// ============================================================
//  PAGE 1: L1  Age Confirm
// ============================================================
function renderL1() {
  return frame('L1-age-confirm',
    statusBar(),
    el('div', { class: 'scroll', style: 'background: linear-gradient(180deg,#FBF1E3 0%,#F7F1E8 100%); padding: 60px 24px 24px;' },
      el('div', { style: 'font:600 28px/1.3 var(--font); color:var(--ink-900); margin-top:80px;' }, '欢迎来到 盏'),
      el('div', { style: 'font:400 14px/1.8 var(--font); color:var(--ink-500); margin-top:12px;' },
        '一盏好调酒，在家就能做。',
        el('br'),
        '在继续之前，我们需要确认你的年龄。'
      ),
      el('div', { style: 'margin-top:40px;' },
        el('div', { class: 'modal-center' },
          el('div', { class: 'modal-card' },
            el('div', { style: 'font:600 18px/1.4 var(--font); color:var(--ink-900); text-align:center;' }, '请确认你的年龄'),
            el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300); text-align:center; margin-top:6px;' }, '我们需要确认你已年满 18 岁'),
            // fake wheel
            el('div', { style: 'display:flex; justify-content:center; align-items:center; margin-top:20px; gap:4px;' },
              el('div', { style: 'width:50px; height:120px; border:1px solid var(--ink-100); border-radius:8px; background:var(--paper); overflow:hidden;' },
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font-size:13px; color:var(--ink-300);' }, '—'),
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font:500 16px var(--font); color:var(--ink-900); background:var(--amber-50); border-top:1px solid var(--amber-500); border-bottom:1px solid var(--amber-500);' }, '05'),
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font-size:13px; color:var(--ink-300);' }, '—'),
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font-size:13px; color:var(--ink-300);' }, '—')
              ),
              el('div', { style: 'width:50px; height:120px; border:1px solid var(--ink-100); border-radius:8px; background:var(--paper); overflow:hidden;' },
                el('div', { style: 'height:30px;' }),
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font:500 16px var(--font); color:var(--ink-900); background:var(--amber-50); border-top:1px solid var(--amber-500); border-bottom:1px solid var(--amber-500);' }, '12'),
                el('div', { style: 'height:30px;' }),
                el('div', { style: 'height:30px;' })
              ),
              el('div', { style: 'width:70px; height:120px; border:1px solid var(--ink-100); border-radius:8px; background:var(--paper); overflow:hidden;' },
                el('div', { style: 'height:30px;' }),
                el('div', { style: 'height:30px; display:flex; align-items:center; justify-content:center; font:500 16px var(--font); color:var(--ink-900); background:var(--amber-50); border-top:1px solid var(--amber-500); border-bottom:1px solid var(--amber-500);' }, '1998'),
                el('div', { style: 'height:30px;' }),
                el('div', { style: 'height:30px;' })
              )
            ),
            el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300); text-align:center; margin-top:14px;' }, '我出生于 1998 年 05 月 12 日'),
            btn('block primary', '我已满 18 岁')
          )
        )
      )
    )
  );
}

// ============================================================
//  PAGE 2: L2  Apple Login
// ============================================================
function renderL2() {
  return frame('L2-login',
    statusBar(),
    el('div', { class: 'scroll', style: 'background: linear-gradient(180deg,#FBF1E3 0%,#F7F1E8 100%); padding: 80px 24px 24px;' },
      el('div', { style: 'text-align:center; margin-bottom:24px;' },
        el('div', { style: 'display:inline-flex; width:72px; height:72px; border-radius:50%; background:var(--amber-500); color:#fff; align-items:center; justify-content:center; font:700 32px/1 var(--font); box-shadow:var(--shadow-2);' }, '盏')
      ),
      el('div', { style: 'font:600 26px/1.3 var(--font); color:var(--ink-900); text-align:center;' }, '登录以保存你的酒库'),
      el('div', { style: 'font:400 13px/1.7 var(--font); color:var(--ink-500); text-align:center; margin-top:8px;' },
        '用 Apple 账号一键登录。',
        el('br'),
        '我们仅获取你的姓名首字和邮箱，',
        el('br'),
        '仅用于账号识别与必要通知，不做营销推送。'
      ),
      el('div', { style: 'margin-top:50px;' },
        el('div', { class: 'modal-center' },
          el('div', { class: 'modal-card' },
            el('div', { style: 'height:52px; border-radius:var(--r-btn); background:#1A1A1A; color:#fff; display:flex; align-items:center; justify-content:center; gap:10px; font:600 15px/1 var(--font);' },
              el('span', {}, ''), el('span', {}, '继续使用 Apple 登录')
            ),
            el('div', { style: 'font:400 11px/1.6 var(--font); color:var(--ink-300); text-align:center; margin-top:14px;' },
              '继续即代表同意我们的 用户协议 与 隐私政策。'
            )
          )
        )
      )
    )
  );
}

// ============================================================
//  PAGE 3: L3  Onboarding — pick base spirits
// ============================================================
function renderL3() {
  const spirits = [
    { n: '伏特加', s: '绝对伏特加', lv: 1, picked: true,  bg: 'linear-gradient(135deg,#FBF1E3,#E8C08C)' },
    { n: '金酒',   s: '孟买蓝宝石', lv: 2, picked: true,  bg: 'linear-gradient(135deg,#E4DFD2,#8A5C35)' },
    { n: '朗姆',   s: '百加得白朗姆', lv: 1, picked: true,  bg: 'linear-gradient(135deg,#FBF1E3,#C48344)' },
    { n: '龙舌兰', s: '唐胡里奥 Blanco', lv: 2, picked: false, bg: 'linear-gradient(135deg,#D0E5D0,#5C9C5C)' },
    { n: '威士忌', s: '尊尼获加红牌', lv: 1, picked: false, bg: 'linear-gradient(135deg,#E8C08C,#8A5C35)' },
    { n: '梅酒',   s: '三得利梅酒', lv: 1, picked: false, bg: 'linear-gradient(135deg,#F7D8D0,#C0392B)' },
  ];
  return frame('L3-onboarding',
    statusBar(),
    el('div', { class: 'scroll', style: 'padding: 40px 24px 24px;' },
      el('div', { style: 'font:600 24px/1.3 var(--font); color:var(--ink-900);' }, '你家里现在有哪些酒？'),
      el('div', { style: 'font:400 13px/1.7 var(--font); color:var(--ink-500); margin-top:6px;' },
        '多选，挑你手头有的基酒。',
        el('br'),
        '我们会帮你算一算"能做几杯"。'
      ),
      el('div', { style: 'margin-top:20px; display:grid; grid-template-columns: 1fr 1fr; gap:12px;' },
        ...spirits.map(s => el('div', {
          class: 'card',
          style: `padding:14px; border:2px solid ${s.picked ? 'var(--amber-500)' : 'transparent'}; box-shadow:none; background:${s.picked ? 'var(--porcelain)' : 'var(--cream)'};`
        },
          el('div', { style: `height:56px; border-radius:10px; background:${s.bg}; margin-bottom:8px; display:flex; align-items:center; justify-content:center; font-size:24px;` }, '🍶'),
          el('div', { style: 'font:600 14px/1.2 var(--font); color:var(--ink-900);' }, s.n),
          el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, s.s),
          levelBadge(s.lv)
        ))
      ),
      el('div', { style: 'display:flex; gap:12px; margin-top:28px;' },
        btn('ghost', '以后再说'),
        btn('block primary', '下一步')
      )
    )
  );
}

// ============================================================
//  PAGE 4: H1  Home — recommend tab
// ============================================================
function renderH1() {
  const cards = [
    { name: '金汤力',   sub: 'Gin Tonic · 清爽草本', lv: 1, diff: 1, source: 'official', img: null },
    { name: '螺丝刀',   sub: 'Screwdriver · 酸甜果汁', lv: 1, diff: 1, source: 'official', img: null },
    { name: '莫吉托',   sub: 'Mojito · 清爽薄荷', lv: 1, diff: 1, source: 'diy',      img: null, author: '@橙子味的夏天' },
    { name: 'Gin Fizz', sub: '金菲士 · 酸甜带气', lv: 2, diff: 2, source: 'official', img: null },
    { name: 'Vodka Coke', sub: '伏特加可乐 · 浓郁', lv: 1, diff: 1, source: 'official', img: null },
    { name: 'Daiquiri', sub: '代基里 · 酸甜柑橘', lv: 2, diff: 2, source: 'diy',      img: null, author: '@小酒怡情' },
  ];
  return frame('H1-home-recommend',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      // search + tabs
      el('div', { style: 'display:flex; align-items:center; gap:10px; margin-bottom:12px;' },
        el('div', { style: 'flex:1; height:38px; border-radius:19px; background:var(--porcelain); padding:0 14px; display:flex; align-items:center; gap:8px; box-shadow:var(--shadow-1);' },
          el('span', {}, '🔍'),
          el('span', { style: 'font:400 13px/1 var(--font); color:var(--ink-300);' }, '搜口味、基酒、配方名')
        ),
        el('div', { style: 'width:36px; height:36px; border-radius:50%; background:var(--porcelain); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-1);' }, '⚙')
      ),
      // Tabs
      el('div', { style: 'display:flex; gap:24px; border-bottom:1px solid var(--ink-100); padding-bottom:10px; margin-bottom:14px;' },
        el('div', { style: 'font:600 15px/1 var(--font); color:var(--amber-500); border-bottom:2px solid var(--amber-500); padding-bottom:10px;' }, '推荐'),
        el('div', { style: 'font:500 15px/1 var(--font); color:var(--ink-300); padding-bottom:10px;' }, '我能做的')
      ),
      // Cards
      el('div', { style: 'display:grid; grid-template-columns: 1fr 1fr; gap:12px;' },
        ...cards.map(c => recipeCard(c))
      )
    ),
    tabBar('home')
  );
}

// ============================================================
//  PAGE 5: H1b Home — "我能做的" tab
// ============================================================
function renderH1b() {
  const cards = [
    { name: '金汤力',   sub: 'Gin Tonic · 清爽草本', lv: 1, diff: 1, source: 'official' },
    { name: '莫吉托',   sub: 'Mojito · 清爽薄荷', lv: 1, diff: 1, source: 'diy', author: '@橙子味的夏天' },
    { name: '螺丝刀',   sub: 'Screwdriver · 酸甜果汁', lv: 1, diff: 1, source: 'official' },
    { name: 'Vodka Coke', sub: '伏特加可乐 · 浓郁', lv: 1, diff: 1, source: 'official' },
    { name: 'Rum Coke', sub: '朗姆可乐 · 甜而不腻', lv: 1, diff: 1, source: 'diy', author: '@下班一杯' },
    { name: '三得利梅酒苏打', sub: '梅酒苏打 · 清酸甜', lv: 1, diff: 1, source: 'official' },
  ];
  return frame('H1b-home-doable',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      el('div', { style: 'display:flex; align-items:center; gap:10px; margin-bottom:12px;' },
        el('div', { style: 'flex:1; height:38px; border-radius:19px; background:var(--porcelain); padding:0 14px; display:flex; align-items:center; gap:8px; box-shadow:var(--shadow-1);' },
          el('span', {}, '🔍'),
          el('span', { style: 'font:400 13px/1 var(--font); color:var(--ink-300);' }, '搜口味、基酒、配方名')
        ),
        el('div', { style: 'width:36px; height:36px; border-radius:50%; background:var(--porcelain); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-1);' }, '⚙')
      ),
      // Tabs
      el('div', { style: 'display:flex; gap:24px; border-bottom:1px solid var(--ink-100); padding-bottom:10px; margin-bottom:14px;' },
        el('div', { style: 'font:500 15px/1 var(--font); color:var(--ink-300); padding-bottom:10px;' }, '推荐'),
        el('div', { style: 'font:600 15px/1 var(--font); color:var(--amber-500); border-bottom:2px solid var(--amber-500); padding-bottom:10px;' }, '我能做的')
      ),
      // Summary strip
      el('div', { style: 'background:var(--amber-50); border-radius:var(--r-card); padding:12px 16px; margin-bottom:12px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900);' }, '根据你酒库里的 3 瓶基酒 + 5 种材料，'),
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--amber-600); margin-top:2px;' }, '你能调 12 杯 · 含 3 杯 DIY')
      ),
      el('div', { style: 'display:grid; grid-template-columns: 1fr 1fr; gap:12px;' },
        ...cards.map(c => recipeCard(c))
      )
    ),
    tabBar('home')
  );
}

// ============================================================
//  PAGE 6: H2  Filter sheet
// ============================================================
function renderH2() {
  return frame('H2-filter-sheet',
    statusBar(),
    warnStrip(),
    tabBar('home'),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px;' },
      el('div', { style: 'font:600 18px/1.4 var(--font); color:var(--ink-900); margin-bottom:12px;' }, '筛选配方'),
      el('div', { style: 'margin-bottom:18px;' },
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-500); margin-bottom:8px;' }, '① 基酒家族'),
        el('div', { style: 'display:flex; flex-wrap:wrap; gap:8px;' },
          chip('全部', true), chip('金酒', false), chip('伏特加', true), chip('朗姆', false), chip('龙舌兰', false), chip('威士忌', false), chip('梅酒清酒', false)
        )
      ),
      el('div', { style: 'margin-bottom:18px;' },
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-500); margin-bottom:8px;' }, '② 风味'),
        el('div', { style: 'display:flex; flex-wrap:wrap; gap:8px;' },
          chip('清爽', false), chip('酸甜', true), chip('浓郁', false), chip('草本', true), chip('辛香', false)
        )
      ),
      el('div', { style: 'margin-bottom:18px;' },
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-500); margin-bottom:8px;' }, '③ 酒精强度'),
        el('div', { style: 'display:flex; flex-wrap:wrap; gap:8px;' },
          chip('低 (≤10%)', true), chip('中 (10–20%)', false), chip('高 (>20%)', false)
        )
      ),
      el('div', { style: 'margin-bottom:18px;' },
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-500); margin-bottom:8px;' }, '④ 难度'),
        el('div', { style: 'display:flex; flex-wrap:wrap; gap:8px;' },
          chip('入门 ★☆☆', true), chip('进阶 ★★☆', false), chip('挑战 ★★★', false)
        )
      ),
      el('div', { style: 'margin-bottom:24px;' },
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-500); margin-bottom:8px;' }, '⑤ 来源'),
        el('div', { style: 'display:flex; gap:8px;' },
          chip('全部', true), chip('仅看 盏·精编', false), chip('仅看 DIY', false)
        )
      ),
      el('div', { style: 'display:flex; gap:12px;' },
        btn('ghost', '重置'),
        btn('block primary', '确认 · 24 杯')
      )
    )
  );
}

// ============================================================
//  PAGE 7: H3  Search result
// ============================================================
function renderH3() {
  return frame('H3-search-result',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll tab-content', style: 'padding: 0;' },
      // top search bar
      el('div', { style: 'padding: 10px 16px; background:var(--porcelain); border-bottom:1px solid var(--ink-100); display:flex; align-items:center; gap:8px;' },
        el('span', {}, '🔍'),
        el('span', { style: 'font:500 14px/1 var(--font); color:var(--ink-900);' }, '酸'),
        el('span', { style: 'margin-left:auto; font:500 14px/1 var(--font); color:var(--amber-500);' }, '取消')
      ),
      el('div', { style: 'padding: 16px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900); margin-bottom:8px;' }, '配方 · 8 条'),
        el('div', { style: 'display:grid; grid-template-columns: 1fr 1fr; gap:12px;' },
          recipeCard({ name: '螺丝刀', sub: 'Screwdriver', lv: 1, diff: 1, source: 'official' }),
          recipeCard({ name: 'Gimlet', sub: '吉姆雷特', lv: 1, diff: 1, source: 'official' }),
          recipeCard({ name: 'Daiquiri', sub: '代基里', lv: 2, diff: 2, source: 'official' }),
          recipeCard({ name: 'Whiskey Sour', sub: '威士忌酸', lv: 2, diff: 2, source: 'diy', author: '@柠檬控' })
        ),
        el('div', { style: 'height:1px; background:var(--ink-100); margin:20px 0;' }),
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900); margin-bottom:8px;' }, '相关酒款'),
        el('div', { style: 'display:flex; gap:10px; margin-bottom:8px;' },
          el('div', { style: 'flex:1; background:var(--porcelain); border-radius:12px; padding:10px; display:flex; align-items:center; gap:10px; box-shadow:var(--shadow-1);' },
            el('div', { style: 'width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,#E8C08C,#8A5C35);' }),
            el('div', { style: 'flex:1;' },
              el('div', { style: 'font:600 13px/1.3 var(--font); color:var(--ink-900);' }, 'Cointreau 君度橙酒'),
              levelBadge(2)
            ),
            el('span', { style: 'width:28px; height:28px; border-radius:50%; background:var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center;' }, '+')
          )
        ),
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900); margin-bottom:8px; margin-top:18px;' }, '相关材料'),
        el('div', { style: 'display:flex; gap:10px;' },
          el('div', { style: 'flex:1; background:var(--porcelain); border-radius:12px; padding:10px; display:flex; align-items:center; gap:10px; box-shadow:var(--shadow-1);' },
            el('div', { style: 'width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,#FFE8D6,#E8843C);' }),
            el('div', { style: 'flex:1;' },
              el('div', { style: 'font:600 13px/1.3 var(--font); color:var(--ink-900);' }, '新鲜柠檬'),
              el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300);' }, '必备酸料')
            )
          )
        )
      )
    ),
    tabBar('home')
  );
}

// ============================================================
//  PAGE 8: C1  Pantry overview (wine cellar → 酒库)
// ============================================================
function renderC1() {
  return frame('C1-pantry-overview',
    statusBar(),
    warnStrip(),
    tabBar('pantry'),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      el('div', { style: 'font:700 26px/1.2 var(--font); color:var(--ink-900);' }, '我的酒库'),
      el('div', { style: 'font:400 13px/1.6 var(--font); color:var(--ink-500); margin-top:4px;' }, '3 瓶基酒 · 5 种材料 · 12 杯收藏'),
      // Three big cards
      el('div', { style: 'display:flex; gap:12px; margin-top:18px;' },
        el('div', { class: 'card', style: 'flex:1; padding:14px;' },
          el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300);' }, '我的酒'),
          el('div', { style: 'font:700 32px/1 var(--font); color:var(--amber-600); margin-top:4px;' }, '3'),
          el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, '瓶基酒')
        ),
        el('div', { class: 'card', style: 'flex:1; padding:14px;' },
          el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300);' }, '我的材料'),
          el('div', { style: 'font:700 32px/1 var(--font); color:var(--amber-600); margin-top:4px;' }, '5'),
          el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, '种')
        ),
        el('div', { class: 'card', style: 'flex:1; padding:14px;' },
          el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300);' }, '收藏配方'),
          el('div', { style: 'font:700 32px/1 var(--font); color:var(--amber-600); margin-top:4px;' }, '12'),
          el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, '杯')
        )
      ),
      // Quick replenish
      el('div', { style: 'margin-top:22px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900); margin-bottom:10px;' }, '快速补货'),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:44px; height:44px; border-radius:10px; background:linear-gradient(135deg,#F7D8D0,#C0392B); display:flex; align-items:center; justify-content:center; font-size:20px;' }, '🍓'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 14px/1.3 var(--font); color:var(--ink-900);' }, '红石榴糖浆'),
            el('div', { style: 'font:400 12px/1.4 var(--font); color:var(--danger); margin-top:2px;' }, '缺料 · 3 杯配方需要它')
          ),
          btn('secondary', '一键补货')
        ),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px; margin-top:10px;' },
          el('div', { style: 'width:44px; height:44px; border-radius:10px; background:linear-gradient(135deg,#E8C08C,#8A5C35); display:flex; align-items:center; justify-content:center; font-size:20px;' }, '🍊'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 14px/1.3 var(--font); color:var(--ink-900);' }, 'Cointreau 君度橙酒'),
            el('div', { style: 'font:400 12px/1.4 var(--font); color:var(--danger); margin-top:2px;' }, '缺料 · 6 杯配方需要它')
          ),
          btn('secondary', '一键补货')
        )
      ),
      // Go to list shortcuts
      el('div', { style: 'margin-top:22px; display:flex; gap:12px;' },
        el('div', { class: 'card', style: 'flex:1; padding:16px; text-align:center;' },
          el('div', { style: 'font-size:24px; margin-bottom:4px;' }, '🍶'),
          el('div', { style: 'font:500 13px/1.3 var(--font); color:var(--ink-700);' }, '查看我的酒')
        ),
        el('div', { class: 'card', style: 'flex:1; padding:16px; text-align:center;' },
          el('div', { style: 'font-size:24px; margin-bottom:4px;' }, '🍋'),
          el('div', { style: 'font:500 13px/1.3 var(--font); color:var(--ink-700);' }, '查看我的材料')
        ),
        el('div', { class: 'card', style: 'flex:1; padding:16px; text-align:center;' },
          el('div', { style: 'font-size:24px; margin-bottom:4px;' }, '★'),
          el('div', { style: 'font:500 13px/1.3 var(--font); color:var(--ink-700);' }, '查看收藏')
        )
      )
    )
  );
}

// ============================================================
//  PAGE 9: C2  My Wine List
// ============================================================
function renderC2() {
  const wines = [
    { n: '绝对伏特加 原味', brand: 'Absolut', lv: 1, bg: 'linear-gradient(135deg,#FBF1E3,#E8C08C)' },
    { n: '孟买蓝宝石金酒', brand: 'Bombay Sapphire', lv: 2, bg: 'linear-gradient(135deg,#E4DFD2,#8A5C35)' },
    { n: '百加得白朗姆', brand: 'Bacardi Carta Blanca', lv: 1, bg: 'linear-gradient(135deg,#FBF1E3,#C48344)' },
  ];
  return frame('C2-pantry-wine-list',
    statusBar(),
    warnStrip(),
    tabBar('pantry'),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      el('div', { style: 'display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;' },
        el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900);' }, '我的酒'),
        btn('secondary', '+ 添加')
      ),
      el('div', { style: 'margin-bottom:14px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '金酒  ·  1 瓶'),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:56px; height:56px; border-radius:12px; background:' + wines[1].bg + '; display:flex; align-items:center; justify-content:center; font-size:24px;' }, '🍶'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, wines[1].n),
            el('div', { style: 'font:400 12px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, wines[1].brand),
            el('div', { style: 'margin-top:4px;' }, levelBadge(wines[1].lv))
          )
        )
      ),
      el('div', { style: 'margin-bottom:14px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '伏特加  ·  1 瓶'),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:56px; height:56px; border-radius:12px; background:' + wines[0].bg + '; display:flex; align-items:center; justify-content:center; font-size:24px;' }, '🍶'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, wines[0].n),
            el('div', { style: 'font:400 12px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, wines[0].brand),
            el('div', { style: 'margin-top:4px;' }, levelBadge(wines[0].lv))
          )
        )
      ),
      el('div', { style: 'margin-bottom:14px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '朗姆  ·  1 瓶'),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:56px; height:56px; border-radius:12px; background:' + wines[2].bg + '; display:flex; align-items:center; justify-content:center; font-size:24px;' }, '🍶'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, wines[2].n),
            el('div', { style: 'font:400 12px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, wines[2].brand),
            el('div', { style: 'margin-top:4px;' }, levelBadge(wines[2].lv))
          )
        )
      )
    )
  );
}

// ============================================================
//  PAGE 10: C3  Add Wine
// ============================================================
function renderC3() {
  return frame('C3-pantry-add',
    statusBar(),
    el('div', { class: 'scroll', style: 'padding: 0;' },
      el('div', { style: 'padding: 10px 16px; display:flex; align-items:center; gap:10px; border-bottom:1px solid var(--ink-100); background:var(--paper);' },
        el('span', { style: 'font:400 14px/1 var(--font); color:var(--amber-500);' }, '×'),
        el('div', { style: 'flex:1; height:36px; border-radius:18px; background:var(--porcelain); padding:0 14px; display:flex; align-items:center; gap:8px;' },
          el('span', {}, '🔍'),
          el('span', { style: 'font:400 13px/1 var(--font); color:var(--ink-300);' }, '添加一瓶… 比如"伏特加"')
        )
      ),
      el('div', { style: 'padding: 16px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '基酒家族'),
        el('div', { style: 'display:grid; grid-template-columns: repeat(4,1fr); gap:10px; margin-bottom:18px;' },
          ...['金酒', '伏特加', '朗姆', '龙舌兰', '威士忌', '白兰地', '利口酒', '梅酒清酒'].map((n, i) =>
            el('div', { class: 'card', style: 'text-align:center; padding:14px 6px; background:var(--porcelain);' },
              el('div', { style: 'font-size:22px; margin-bottom:4px;' }, ['🍸','🍶','🥃','🌵','🥃','🍷','🍫','🌸'][i]),
              el('div', { style: 'font:500 11px/1.3 var(--font); color:var(--ink-700);' }, n)
            )
          )
        ),
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '热门伏特加'),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px; margin-bottom:10px;' },
          el('div', { style: 'width:56px; height:56px; border-radius:12px; background:linear-gradient(135deg,#FBF1E3,#E8C08C);' }),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 14px/1.3 var(--font); color:var(--ink-900);' }, '绝对伏特加 原味'),
            el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, 'Absolut · 750ml'),
            el('div', { style: 'margin-top:4px;' }, levelBadge(1))
          ),
          el('span', { style: 'width:28px; height:28px; border-radius:50%; background:var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center;' }, '+')
        ),
        el('div', { class: 'card', style: 'padding:14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:56px; height:56px; border-radius:12px; background:linear-gradient(135deg,#E4DFD2,#8A5C35);' }),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 14px/1.3 var(--font); color:var(--ink-900);' }, '灰雁伏特加'),
            el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, 'Grey Goose · 750ml'),
            el('div', { style: 'margin-top:4px;' }, levelBadge(2))
          ),
          el('span', { style: 'width:28px; height:28px; border-radius:50%; background:var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center;' }, '+')
        )
      )
    )
  );
}

// ============================================================
//  PAGE 11: C4  Wine Detail
// ============================================================
function renderC4() {
  return frame('C4-wine-detail',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll', style: 'padding-bottom: 32px;' },
      el('div', { style: 'height: 260px; background: linear-gradient(135deg,#E4DFD2 0%,#8A5C35 100%); padding: 20px; display:flex; align-items:center; justify-content:center;' },
        el('div', { style: 'width: 120px; height: 200px; border-radius: 16px; background: var(--porcelain); box-shadow: 0 10px 30px rgba(0,0,0,.3); display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 10px;' },
          el('div', { style: 'font-size: 60px;' }, '🍶'),
          el('div', { style: 'font:600 12px/1 var(--font); color:var(--ink-700);' }, 'BOMBAY'),
          el('div', { style: 'font:600 11px/1 var(--font); color:var(--ink-500);' }, 'SAPPHIRE')
        )
      ),
      el('div', { style: 'padding: 20px;' },
        el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900);' }, '孟买蓝宝石金酒'),
        el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-500); margin-top:2px;' }, 'Bombay Sapphire London Dry Gin'),
        el('div', { style: 'margin-top: 10px;' }, levelBadge(2)),
        el('div', { style: 'display:flex; gap:12px; margin-top:16px;' },
          el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300);' }, '产地'),
          el('div', { style: 'font:500 12px/1.6 var(--font); color:var(--ink-700);' }, '英国 · Hampshire'),
          el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300); margin-left:auto;' }, '规格'),
          el('div', { style: 'font:500 12px/1.6 var(--font); color:var(--ink-700);' }, '750ml · 47% ABV')
        ),
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-300); margin-top:18px;' }, '风味笔记'),
        el('div', { style: 'font:400 13px/1.8 var(--font); color:var(--ink-700); margin-top:6px;' },
          '杜松、柑橘皮、鸢尾根、姜皮。入口干爽带香料感，余味有淡淡的薰衣草香。'
        ),
        el('div', { style: 'font:500 13px/1.4 var(--font); color:var(--ink-300); margin-top:18px;' }, '能做的 6 杯配方'),
        el('div', { style: 'display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:10px;' },
          recipeCard({ name: '金汤力',   sub: '清爽草本', lv: 1, diff: 1, source: 'official' }),
          recipeCard({ name: 'Gimlet',  sub: '酸甜清爽', lv: 1, diff: 1, source: 'official' }),
          recipeCard({ name: 'Gin Fizz', sub: '酸甜带气', lv: 2, diff: 2, source: 'official' }),
          recipeCard({ name: '新加坡司令', sub: '复杂层次', lv: 2, diff: 2, source: 'official' })
        )
      )
    )
  );
}

// ============================================================
//  PAGE 12: C5  Ingredients list
// ============================================================
function renderC5() {
  const groups = [
    { label: '水果', items: [{ n: '新鲜柠檬', h: true }, { n: '青柠', h: true }, { n: '薄荷叶', h: true }] },
    { label: '糖浆', items: [{ n: '红石榴糖浆', h: false, need: true }, { n: '蜂蜜', h: true }] },
    { label: '饮品', items: [{ n: '苏打水', h: true }, { n: '汤力水', h: false, need: true }] },
  ];
  return frame('C5-ingredient-list',
    statusBar(),
    warnStrip(),
    tabBar('pantry'),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      el('div', { style: 'display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;' },
        el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900);' }, '我的材料'),
        btn('secondary', '+ 添加')
      ),
      ...groups.map(g => el('div', { style: 'margin-bottom:18px;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px;' }, g.label + '  ·  ' + g.items.filter(i => i.h).length + '/' + g.items.length),
        el('div', { style: 'display:flex; flex-wrap:wrap; gap:8px;' },
          ...g.items.map(i => el('span', { class: 'chip', style: i.need ? 'background:#F7D8D0; color:#C0392B; border-color:#C0392B;' : (i.h ? '' : 'opacity:.55;') }, i.n + (i.need ? ' · 缺料' : '')))
        )
      ))
    )
  );
}

// ============================================================
//  PAGE 13: C6  Favorites
// ============================================================
function renderC6() {
  return frame('C6-favorites',
    statusBar(),
    warnStrip(),
    tabBar('pantry'),
    el('div', { class: 'scroll tab-content', style: 'padding: 12px 16px 16px;' },
      el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900); margin-bottom:14px;' }, '收藏配方'),
      el('div', { style: 'display:flex; gap:8px; margin-bottom:14px;' },
        chip('全部 (12)', true), chip('入门', false), chip('带气', false), chip('Gin 家族', false)
      ),
      el('div', { style: 'display:grid; grid-template-columns: 1fr 1fr; gap:12px;' },
        recipeCard({ name: '金汤力',   sub: 'Gin Tonic', lv: 1, diff: 1, source: 'official' }),
        recipeCard({ name: '莫吉托',   sub: 'Mojito',    lv: 1, diff: 1, source: 'diy', author: '@橙子味的夏天' }),
        recipeCard({ name: '螺丝刀',   sub: 'Screwdriver', lv: 1, diff: 1, source: 'official' }),
        recipeCard({ name: 'Daiquiri', sub: '代基里',    lv: 2, diff: 2, source: 'official' })
      )
    )
  );
}

// ============================================================
//  PAGE 14: S1  Feed (酒圈)
// ============================================================
function renderS1() {
  const posts = [
    { author: '@橙子味的夏天', likes: 2341, name: '自制莫吉托', img: 'linear-gradient(135deg,#8AC8B8,#4A8C7D)', diy: true },
    { author: '@小酒怡情', likes: 856, name: '周末第一杯金汤力', img: 'linear-gradient(135deg,#E8C08C,#8A5C35)', diy: true },
    { author: '@下班一杯', likes: 512, name: '伏特加可乐的一万种打开方式', img: 'linear-gradient(135deg,#D0E5D0,#5C9C5C)', diy: true },
    { author: '@柠檬控', likes: 1289, name: 'Whiskey Sour 一定要蛋清', img: 'linear-gradient(135deg,#E4DFD2,#3D362C)', diy: true },
  ];
  return frame('S1-feed',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll tab-content', style: 'padding-bottom: 30px;' },
      el('div', { style: 'font:700 20px/1.3 var(--font); color:var(--ink-900); padding: 14px 16px;' }, '酒圈 · 朋友们今晚在调'),
      el('div', { style: 'display:flex; gap:10px; padding: 0 16px;' },
        ...posts.slice(0, 2).map(p =>
          el('div', { style: 'flex:1;' },
            el('div', { style: 'height: 180px; border-radius: 12px; background:' + p.img + '; position:relative;' },
              el('span', { class: 'corner-badge diy', style: 'top:8px; right:8px;' }, 'DIY')
            ),
            el('div', { style: 'padding: 8px 2px 4px; font:500 13px/1.3 var(--font); color:var(--ink-900);' }, p.name),
            el('div', { style: 'display:flex; align-items:center; gap:6px;' },
              el('div', { class: 'avatar sm' }, p.author[1]),
              el('span', { style: 'font:400 11px/1 var(--font); color:var(--ink-300);' }, p.author),
              el('span', { style: 'margin-left:auto; font:400 11px/1 var(--font); color:var(--ink-300);' }, '❤ ' + p.likes)
            )
          )
        )
      ),
      el('div', { style: 'display:flex; gap:10px; padding: 10px 16px;' },
        ...posts.slice(2, 4).map(p =>
          el('div', { style: 'flex:1;' },
            el('div', { style: 'height: 220px; border-radius: 12px; background:' + p.img + '; position:relative;' },
              el('span', { class: 'corner-badge diy', style: 'top:8px; right:8px;' }, 'DIY')
            ),
            el('div', { style: 'padding: 8px 2px 4px; font:500 13px/1.3 var(--font); color:var(--ink-900);' }, p.name),
            el('div', { style: 'display:flex; align-items:center; gap:6px;' },
              el('div', { class: 'avatar sm' }, p.author[1]),
              el('span', { style: 'font:400 11px/1 var(--font); color:var(--ink-300);' }, p.author),
              el('span', { style: 'margin-left:auto; font:400 11px/1 var(--font); color:var(--ink-300);' }, '❤ ' + p.likes)
            )
          )
        )
      )
    ),
    el('div', { class: 'fab' }, '+'),
    tabBar('feed')
  );
}

// ============================================================
//  PAGE 15: S2  Post detail
// ============================================================
function renderS2() {
  const comments = [
    { u: '@小柠檬', t: '多放薄荷叶拍一下香气更好！', l: 86 },
    { u: '@Gin Lover', t: '这个颜色也太好看了吧，求教程！', l: 42 },
    { u: '@下班后一杯', t: '没有青柠用柠檬代替可以吗？', l: 17 },
    { u: '@调杯不翻车', t: '已经收藏了，今晚试试！', l: 9 },
  ];
  return frame('S2-post-detail',
    statusBar(),
    warnStrip(),
    tabBar('feed'),
    el('div', { class: 'scroll tab-content', style: 'padding-bottom: 40px;' },
      // big image
      el('div', { style: 'height: 320px; background: linear-gradient(135deg,#8AC8B8 0%,#4A8C7D 100%); position:relative;' },
        el('span', { class: 'corner-badge diy', style: 'top:14px; right:14px;' }, 'DIY · @橙子味的夏天')
      ),
      // author block
      el('div', { style: 'padding: 16px 16px 10px; display:flex; align-items:center; gap:12px;' },
        el('div', { class: 'avatar lg', style: 'background: linear-gradient(135deg,#E8C08C,#C48344);' }, '橙'),
        el('div', { style: 'flex:1;' },
          el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, '@橙子味的夏天'),
          el('div', { style: 'font:400 11px/1.6 var(--font); color:var(--ink-300);' }, '22岁 · 北京 · 11 月 2 日 20:34')
        ),
        btn('ghost', '关注')
      ),
      // title
      el('div', { style: 'padding: 0 16px; font:700 20px/1.4 var(--font); color:var(--ink-900);' }, '周末在家第一杯莫吉托 ✨'),
      el('div', { style: 'padding: 10px 16px 0; font:400 14px/1.8 var(--font); color:var(--ink-700);' },
        '一个人在家也能调得出来！记得薄荷叶拍一下，香气才会出来。'
      ),
      // recipe card (inline)
      el('div', { style: 'padding: 16px;' },
        el('div', { class: 'card', style: 'padding: 14px 16px;' },
          el('div', { style: 'display:flex; align-items:center; gap:10px;' },
            el('div', { style: 'width:54px; height:54px; border-radius:10px; background:linear-gradient(135deg,#8AC8B8,#4A8C7D);' }),
            el('div', { style: 'flex:1;' },
              el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, '莫吉托 · Mojito'),
              el('div', { style: 'margin-top:4px;' }, stars(1))
            ),
            btn('primary', '我也调一杯')
          ),
          el('div', { style: 'margin-top:10px; font:400 12px/1.6 var(--font); color:var(--ink-300);' },
            'DIY 贴士：薄荷叶拍一下香气更好；没有青柠可用柠檬汁 + 少量糖代替。'
          )
        )
      ),
      // interaction bar
      el('div', { style: 'display:flex; gap: 14px; padding: 0 16px; font:500 14px/1 var(--font);' },
        el('span', { style: 'color:var(--danger);' }, '❤ 2341'),
        el('span', { style: 'color:var(--ink-300);' }, '🖤 128'),
        el('span', { style: 'color:var(--ink-300);' }, '💬 126'),
        el('span', { style: 'color:var(--ink-300); margin-left:auto;' }, '⚠ 举报')
      ),
      // comments
      el('div', { style: 'padding: 20px 16px 0;' },
        el('div', { style: 'font:600 14px/1.4 var(--font); color:var(--ink-900); margin-bottom:14px;' }, '评论 126'),
        ...comments.map(c =>
          el('div', { style: 'display:flex; gap:10px; padding: 10px 0; border-top:1px solid var(--ink-100);' },
            avatar(c.u[1], 'sm'),
            el('div', { style: 'flex:1;' },
              el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--amber-500);' }, c.u),
              el('div', { style: 'font:400 13px/1.7 var(--font); color:var(--ink-700); margin-top:2px;' }, c.t),
              el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, '11 月 2 日 21:05 · ❤ ' + c.l)
            )
          )
        )
      )
    )
  );
}

// ============================================================
//  PAGE 16: S3  Post compose
// ============================================================
function renderS3() {
  return frame('S3-post-compose',
    statusBar(),
    el('div', { class: 'scroll', style: 'padding: 0;' },
      el('div', { style: 'height: 44px; padding: 0 16px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--ink-100);' },
        el('span', { style: 'font:400 15px/1 var(--font); color:var(--amber-500);' }, '取消'),
        el('span', { style: 'font:600 16px/1 var(--font); color:var(--ink-900);' }, '发布调酒'),
        el('span', { style: 'font:600 15px/1 var(--font); color:var(--amber-500);' }, '发布')
      ),
      el('div', { style: 'padding: 16px;' },
        // step 1 image
        el('div', { style: 'font:600 13px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px;' }, '① 选择图片'),
        el('div', { style: 'display:flex; gap:10px; margin-bottom:22px;' },
          el('div', { style: 'width: 90px; height: 90px; border-radius: 10px; background: linear-gradient(135deg,#8AC8B8,#4A8C7D); display:flex; align-items:center; justify-content:center; font-size:20px;' }, '✓'),
          el('div', { style: 'width: 90px; height: 90px; border-radius: 10px; background: var(--cream); border: 1px dashed var(--ink-200); display:flex; align-items:center; justify-content:center; color:var(--ink-300); font-size:24px;' }, '+'),
          el('div', { style: 'width: 90px; height: 90px; border-radius: 10px; background: var(--cream); border: 1px dashed var(--ink-200); display:flex; align-items:center; justify-content:center; color:var(--ink-300); font-size:24px;' }, '+')
        ),
        // step 2 recipe
        el('div', { style: 'font:600 13px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px;' }, '② 选配方（必填）'),
        el('div', { class: 'card', style: 'padding: 12px 14px; margin-bottom:22px; display:flex; align-items:center; gap:10px;' },
          el('div', { style: 'width:40px; height:40px; border-radius:8px; background:linear-gradient(135deg,#8AC8B8,#4A8C7D);' }),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 13px/1.3 var(--font); color:var(--ink-900);' }, '莫吉托 · Mojito'),
            el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, 'Gin 家族 · 入门 ★☆☆')
          ),
          el('span', { style: 'font:400 12px/1 var(--font); color:var(--amber-500);' }, '更换')
        ),
        // step 3 title
        el('div', { style: 'font:600 13px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px;' }, '③ 标题（≤ 20 字）'),
        el('div', { style: 'height: 44px; border-radius: 10px; background: var(--porcelain); border: 1px solid var(--ink-100); padding: 0 14px; display:flex; align-items:center; font:500 14px/1 var(--font); color:var(--ink-900); margin-bottom:22px;' }, '周末在家第一杯！  11 / 20'),
        // step 4 tip
        el('div', { style: 'font:600 13px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px;' }, '④ DIY 贴士（选填，≤ 100 字）'),
        el('div', { style: 'height: 100px; border-radius: 10px; background: var(--porcelain); border: 1px solid var(--ink-100); padding: 10px 14px; font:400 13px/1.6 var(--font); color:var(--ink-700);' }, '苏打水可以换成气泡水，更带劲。薄荷叶一定要用拍的，撕的没香气~'),
        // rules
        el('div', { style: 'margin-top: 24px; padding: 14px; border-radius: 10px; background: var(--amber-50); font:400 11px/1.6 var(--font); color:var(--ink-500);' },
          '⚠ 发布即视为同意 盏 社区公约。禁止发布鼓励过度饮酒、未成年人出镜、酒驾等内容。'
        )
      )
    )
  );
}

// ============================================================
//  PAGE 17: S4  Report sheet
// ============================================================
function renderS4() {
  const reasons = [
    '鼓励过度饮酒',
    '未成年人出镜',
    '违规营销',
    '色情低俗',
    '其他',
  ];
  return frame('S4-report-sheet',
    statusBar(),
    warnStrip(),
    tabBar('feed'),
    el('div', { class: 'scroll tab-content', style: 'padding: 20px 16px;' },
      el('div', { class: 'sheet-handle' }),
      el('div', { style: 'font:600 18px/1.4 var(--font); color:var(--ink-900); text-align:center;' }, '举报这条内容'),
      el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300); text-align:center; margin-top:4px;' }, '我们会在 24 小时内处理，处理结果会通知你。'),
      el('div', { style: 'margin-top:18px;' },
        ...reasons.map((r, i) => el('div', {
          style: 'padding: 14px 16px; border-radius: 12px; background: ' + (i === 0 ? 'var(--amber-50)' : 'var(--cream)') + '; margin-bottom: 10px; display:flex; align-items:center; gap:10px;'
        },
          el('div', { style: 'width:18px; height:18px; border-radius:50%; border:2px solid ' + (i === 0 ? 'var(--amber-500)' : 'var(--ink-200)') + '; background:' + (i === 0 ? 'var(--amber-500)' : 'transparent') + ';' }),
          el('span', { style: 'font:500 14px/1 var(--font); color:var(--ink-900);' }, r)
        ))
      ),
      btn('block primary', '提交举报')
    )
  );
}

// ============================================================
//  PAGE 18: G1  Recipe detail
// ============================================================
function renderG1() {
  const ings = [
    { n: '金酒', amount: '2 oz',  h: true,  alt: false },
    { n: '柠檬汁', amount: '¾ oz', h: true,  alt: false },
    { n: '红石榴糖浆', amount: '¼ oz', h: false, alt: true, alt_for: '蔓越莓汁（1:1，甜度偏高建议减 20%）' },
    { n: '苏打水', amount: '2 oz', h: true,  alt: false },
    { n: '薄荷叶', amount: '8 片', h: true,  alt: false },
    { n: '青柠角（装饰）', amount: '1 片', h: false, alt: false, optional: true },
  ];
  return frame('G1-recipe-detail',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll', style: 'padding-bottom: 32px;' },
      el('div', { style: 'height: 300px; background: linear-gradient(135deg,#8AC8B8 0%,#4A8C7D 100%); position:relative;' },
        el('div', { class: 'detail-corner' },
          el('div', { class: 'cb', style: 'background: var(--amber-500); color:#fff;' }, '盏 · 精编'),
          el('div', { class: 'cb', style: 'background: #fff; color: var(--ink-900); border-radius: 4px;' }, 'Gin 家族')
        )
      ),
      el('div', { style: 'padding: 20px;' },
        el('div', { style: 'font:700 28px/1.2 var(--font); color:var(--ink-900);' }, '莫吉托'),
        el('div', { style: 'font:400 13px/1.6 var(--font); color:var(--ink-500); margin-top:4px;' }, 'Mojito · 清爽薄荷 · 青柠苏打'),
        el('div', { style: 'display:flex; align-items:center; gap:10px; margin-top:12px;' },
          stars(1), levelBadge(1),
          el('span', { class: 'chip' }, '低酒精'),
          el('span', { class: 'chip' }, '冰饮'),
          el('span', { class: 'chip' }, '含气')
        ),
        el('div', { style: 'font:600 15px/1.4 var(--font); color:var(--ink-900); margin-top:22px; margin-bottom:10px;' }, '材料（6 种）'),
        el('div', { style: 'background: var(--porcelain); border-radius: 12px; overflow:hidden; box-shadow: var(--shadow-1);' },
          ...ings.map((ing, i) => el('div', {
            style: 'display:flex; align-items:center; gap:12px; padding: 12px 14px; border-bottom:' + (i < ings.length - 1 ? '1px solid var(--ink-100)' : 'none') + ';'
          },
            el('div', { style: 'width:24px; text-align:center;' },
              ing.h ? '✓' : (ing.alt ? '⚠' : (ing.optional ? '·' : '✗'))
            ),
            el('div', { style: 'flex:1;' },
              el('div', { style: 'font:500 14px/1.3 var(--font); color:var(--ink-900);' }, ing.n + (ing.optional ? ' · 装饰' : '')),
              ing.alt ? el('div', { style: 'font:400 11px/1.6 var(--font); color:var(--amber-600); margin-top:2px;' }, '可替代 → ' + ing.alt_for) : null
            ),
            el('div', { style: 'font:400 12px/1 var(--font); color:var(--ink-500);' }, ing.amount),
            !ing.h && !ing.optional ? btn('ghost', '补料') : null
          ))
        ),
        el('div', { style: 'font:600 15px/1.4 var(--font); color:var(--ink-900); margin-top:22px; margin-bottom:10px;' }, '步骤（3 步 · 约 5 分钟）'),
        el('div', { style: 'background: var(--porcelain); border-radius: 12px; padding: 14px; box-shadow: var(--shadow-1);' },
          el('div', { style: 'display:flex; gap:10px; margin-bottom:12px;' },
            el('div', { style: 'width:24px; height:24px; border-radius:50%; background: var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center; font:600 12px/1 var(--font); flex-shrink:0;' }, '1'),
            el('div', { style: 'flex:1; font:400 13px/1.7 var(--font); color:var(--ink-700);' }, '把 4-6 片薄荷叶和青柠角放入杯中，加少许糖，用捣棒轻轻拍压（不要过度捣碎）。')
          ),
          el('div', { style: 'display:flex; gap:10px; margin-bottom:12px;' },
            el('div', { style: 'width:24px; height:24px; border-radius:50%; background: var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center; font:600 12px/1 var(--font); flex-shrink:0;' }, '2'),
            el('div', { style: 'flex:1; font:400 13px/1.7 var(--font); color:var(--ink-700);' }, '加金酒和碎冰，用长勺搅匀。')
          ),
          el('div', { style: 'display:flex; gap:10px;' },
            el('div', { style: 'width:24px; height:24px; border-radius:50%; background: var(--amber-500); color:#fff; display:flex; align-items:center; justify-content:center; font:600 12px/1 var(--font); flex-shrink:0;' }, '3'),
            el('div', { style: 'flex:1; font:400 13px/1.7 var(--font); color:var(--ink-700);' }, '倒满苏打水，再拍一下薄荷叶放进去做装饰。')
          )
        ),
        el('div', { style: 'display:flex; gap:10px; margin-top:28px;' },
          btn('block secondary', '手动标记已完成'),
          btn('block primary', '开调 →')
        )
      )
    )
  );
}

// ============================================================
//  PAGE 19: G2  Making flow
// ============================================================
function renderG2() {
  const steps = [
    { label: '捣薄荷 · 加糖', done: true },
    { label: '加金酒 · 碎冰', done: true },
    { label: '倒苏打水 · 装饰', done: false },
  ];
  return frame('G2-making-flow',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll', style: 'padding: 20px;' },
      el('div', { style: 'display:flex; align-items:center; justify-content:space-between;' },
        el('div', { style: 'font:600 15px/1 var(--font); color:var(--ink-900);' }, '莫吉托 · 第 2 步 / 共 3 步'),
        el('div', { style: 'font:400 12px/1 var(--font); color:var(--ink-300);' }, '还剩约 2 分钟')
      ),
      // progress
      el('div', { style: 'display:flex; gap:8px; margin-top:14px;' },
        ...steps.map(s => el('div', { style: 'flex:1; height:4px; border-radius:2px; background:' + (s.done ? 'var(--amber-500)' : 'var(--ink-100)') + ';' }))
      ),
      // current step
      el('div', { style: 'margin-top: 30px;' },
        el('div', { style: 'font:400 13px/1.4 var(--font); color:var(--ink-300);' }, '当前步骤'),
        el('div', { style: 'font:700 22px/1.4 var(--font); color:var(--ink-900); margin-top:6px;' }, '倒入 2 oz 柠檬汁'),
        el('div', { style: 'background: linear-gradient(135deg,#E8C08C,#8A5C35); height: 200px; border-radius: 14px; margin-top:16px; display:flex; align-items:center; justify-content:center; font-size: 60px; color:#fff; box-shadow: var(--shadow-1);' }, '🍋'),
        el('div', { style: 'margin-top: 16px; font:400 14px/1.8 var(--font); color:var(--ink-700);' },
          '拿起柠檬切半，用榨汁器或手直接挤。别太用力把果皮里的苦汁挤出来。'
        )
      ),
      // all steps list
      el('div', { style: 'margin-top: 28px;' },
        el('div', { style: 'font:600 13px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, '全部步骤'),
        el('div', { class: 'card', style: 'padding:14px;' },
          ...steps.map((s, i) => el('div', {
            style: 'display:flex; align-items:center; gap:10px; padding: 8px 0; border-top:' + (i === 0 ? 'none' : '1px solid var(--ink-100)') + ';'
          },
            el('div', { style: 'width:22px; height:22px; border-radius:50%; background:' + (s.done ? 'var(--amber-500)' : 'var(--ink-100)') + '; color:' + (s.done ? '#fff' : 'var(--ink-300)') + '; display:flex; align-items:center; justify-content:center; font:600 11px/1 var(--font); flex-shrink:0;' }, s.done ? '✓' : (i + 1)),
            el('div', { style: 'font:400 13px/1.4 var(--font); color:' + (s.done ? 'var(--ink-300)' : 'var(--ink-900)') + ';' }, s.label)
          ))
        )
      ),
      el('div', { style: 'display:flex; gap:10px; margin-top:28px;' },
        btn('ghost', '上一步'),
        btn('block primary', '我完成了这一步 →')
      ),
      btn('block ghost', '跳过 · 直接标记已完成')
    )
  );
}

// ============================================================
//  PAGE 20: G3  Completion toast
// ============================================================
function renderG3() {
  return frame('G3-completion',
    statusBar(),
    warnStrip(),
    el('div', { class: 'scroll', style: 'background: linear-gradient(180deg,#FBF1E3 0%,#F7F1E8 100%); display:flex; align-items:center; justify-content:center; padding: 40px;' },
      el('div', { class: 'toast-center' },
        el('div', { class: 'toast-card' },
          el('div', { class: 'emoji' }, '🍸'),
          el('div', { class: 'head' }, '恭喜你调出了 莫吉托'),
          el('div', { class: 'sub' }, '清清爽爽，周末在家也能像个酒吧一样。'),
          el('div', { style: 'margin-top: 16px;' }, levelBadge(1)),
          el('div', { style: 'margin-top: 24px; display:flex; gap:10px;' },
            btn('ghost', '发一条到酒圈'),
            btn('block primary', '存到 我的调酒')
          )
        )
      )
    )
  );
}

// ============================================================
//  PAGE 21: M1  Profile
// ============================================================
function renderM1() {
  return frame('M1-profile',
    statusBar(),
    warnStrip(),
    tabBar('profile'),
    el('div', { class: 'scroll tab-content', style: 'padding: 20px 16px 24px;' },
      // profile header
      el('div', { style: 'display:flex; align-items:center; gap:14px; margin-bottom:22px;' },
        el('div', { class: 'avatar lg', style: 'background: linear-gradient(135deg,#E8C08C,#8A5C35);' }, '李'),
        el('div', { style: 'flex:1;' },
          el('div', { style: 'font:700 20px/1.3 var(--font); color:var(--ink-900);' }, '李盏'),
          el('div', { style: 'font:400 12px/1.6 var(--font); color:var(--ink-300); margin-top:2px;' }, '2026 年 11 月 1 日加入 · Apple 登录')
        )
      ),
      // three stats
      el('div', { style: 'display:flex; gap:10px; margin-bottom:22px;' },
        ...[['我的酒', '3', '瓶'], ['我的调酒', '7', '杯'], ['收藏', '12', '杯']].map(([l, n, u]) =>
          el('div', { class: 'card', style: 'flex:1; padding:14px; text-align:center;' },
            el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300);' }, l),
            el('div', { style: 'font:700 24px/1 var(--font); color:var(--amber-600); margin-top:4px;' }, n),
            el('div', { style: 'font:400 11px/1.4 var(--font); color:var(--ink-300); margin-top:2px;' }, u)
          )
        )
      ),
      // list groups
      el('div', { class: 'card', style: 'margin-bottom: 16px; overflow:hidden;' },
        ...[
          { icon: '🍸', t: '我的调酒', r: '7 杯' },
          { icon: '⭐', t: '我的收藏', r: '12 杯' },
          { icon: '🍶', t: '我的酒库', r: '3 瓶' },
        ].map((r, i) => el('div', {
          style: 'display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:' + (i < 2 ? '1px solid var(--ink-100)' : 'none') + ';'
        },
          el('div', { style: 'font-size:18px;' }, r.icon),
          el('span', { style: 'flex:1; font:500 14px/1 var(--font); color:var(--ink-900);' }, r.t),
          el('span', { style: 'font:400 12px/1 var(--font); color:var(--ink-300);' }, r.r + ' ›')
        ))
      ),
      el('div', { class: 'card', style: 'margin-bottom: 16px; overflow:hidden;' },
        ...[
          { icon: '⚙', t: '设置', r: '' },
          { icon: '📜', t: '用户协议', r: '' },
          { icon: '🔒', t: '隐私政策', r: '' },
          { icon: 'ℹ', t: '关于 盏', r: 'v1.0.0' },
        ].map((r, i) => el('div', {
          style: 'display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:' + (i < 3 ? '1px solid var(--ink-100)' : 'none') + ';'
        },
          el('div', { style: 'font-size:16px;' }, r.icon),
          el('span', { style: 'flex:1; font:500 14px/1 var(--font); color:var(--ink-900);' }, r.t),
          r.r ? el('span', { style: 'font:400 11px/1 var(--font); color:var(--ink-300);' }, r.r) : null
        ))
      ),
      btn('ghost', '退出登录')
    )
  );
}

// ============================================================
//  PAGE 22: M2  My Cocktails history
// ============================================================
function renderM2() {
  const records = [
    { date: '2026 年 11 月 2 日', time: '22:14', name: '莫吉托',   lv: 1, diff: 1, by_manual: true  },
    { date: '2026 年 11 月 1 日', time: '21:30', name: '金汤力',   lv: 1, diff: 1, by_manual: false },
    { date: '2026 年 10 月 31 日', time: '20:05', name: '螺丝刀',   lv: 1, diff: 1, by_manual: true  },
    { date: '2026 年 10 月 30 日', time: '23:40', name: 'Vodka Coke', lv: 1, diff: 1, by_manual: false },
  ];
  return frame('M2-my-cocktails',
    statusBar(),
    warnStrip(),
    tabBar('profile'),
    el('div', { class: 'scroll tab-content', style: 'padding: 20px 16px;' },
      el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900); margin-bottom:18px;' }, '我的调酒 · 共 7 杯'),
      ...records.map(r => el('div', { style: 'margin-bottom: 18px;' },
        el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300); margin-bottom:10px;' }, r.date + ' · ' + r.time),
        el('div', { class: 'card', style: 'padding: 14px; display:flex; align-items:center; gap:12px;' },
          el('div', { style: 'width:54px; height:54px; border-radius:12px; background:' + getRecipeBg(r.name) + '; display:flex; align-items:center; justify-content:center; font-size:20px;' }, '🍸'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'display:flex; align-items:center; gap:8px;' },
              el('div', { style: 'font:600 15px/1.3 var(--font); color:var(--ink-900);' }, r.name),
              levelBadge(r.lv)
            ),
            el('div', { style: 'display:flex; align-items:center; gap:8px; margin-top:4px; font:400 11px/1.4 var(--font); color:var(--ink-300);' },
              stars(r.diff),
              r.by_manual ? el('span', { style: 'padding: 2px 6px; border-radius: 4px; background: var(--cream); color: var(--ink-500); font:400 10px/1 var(--font);' }, '手动标记') : null
            )
          ),
          btn('ghost', '再调一次')
        )
      ))
    )
  );
}

// ============================================================
//  PAGE 23: M3  Settings
// ============================================================
function renderM3() {
  return frame('M3-settings',
    statusBar(),
    el('div', { class: 'scroll', style: 'padding: 20px 16px 32px;' },
      el('div', { style: 'font:700 22px/1.3 var(--font); color:var(--ink-900); margin-bottom:18px;' }, '设置'),
      // Account
      el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px; margin-top:4px;' }, '账号'),
      el('div', { class: 'card', style: 'overflow:hidden; margin-bottom: 18px;' },
        el('div', { style: 'display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:1px solid var(--ink-100);' },
          el('div', { class: 'avatar' }, '李'),
          el('div', { style: 'flex:1;' },
            el('div', { style: 'font:600 14px/1.3 var(--font); color:var(--ink-900);' }, '李盏'),
            el('div', { style: 'font:400 11px/1.6 var(--font); color:var(--ink-300); margin-top:2px;' }, 'Apple ID 已绑定 · li***@gmail.com')
          ),
          el('span', { style: 'font:400 11px/1 var(--font); color:var(--amber-500);' }, '管理 ›')
        ),
        el('div', { style: 'padding:14px 16px; font:500 14px/1 var(--font); color:var(--ink-900);' }, '退出登录')
      ),
      // Notifications
      el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px; margin-top:4px;' }, '偏好'),
      el('div', { class: 'card', style: 'overflow:hidden; margin-bottom: 18px;' },
        el('div', { style: 'display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:1px solid var(--ink-100);' },
          el('span', { style: 'flex:1; font:500 14px/1 var(--font); color:var(--ink-900);' }, '每次打开显示适量饮酒提示'),
          el('div', { style: 'width:46px; height:26px; border-radius:13px; background:var(--amber-500); position:relative;' },
            el('div', { style: 'width:22px; height:22px; border-radius:50%; background:#fff; position:absolute; top:2px; right:2px; box-shadow:var(--shadow-1);' })
          )
        ),
        el('div', { style: 'display:flex; align-items:center; gap:12px; padding:14px 16px;' },
          el('span', { style: 'flex:1; font:500 14px/1 var(--font); color:var(--ink-900);' }, '深色模式'),
          el('div', { style: 'width:46px; height:26px; border-radius:13px; background:var(--ink-100); position:relative;' },
            el('div', { style: 'width:22px; height:22px; border-radius:50%; background:#fff; position:absolute; top:2px; left:2px; box-shadow:var(--shadow-1);' })
          )
        )
      ),
      // About
      el('div', { style: 'font:600 12px/1.4 var(--font); color:var(--ink-300); margin-bottom:8px; margin-top:4px;' }, '关于'),
      el('div', { class: 'card', style: 'overflow:hidden; margin-bottom: 18px;' },
        ...[
          { t: '用户协议', r: '' },
          { t: '隐私政策', r: '' },
          { t: '关于 盏', r: 'v1.0.0 · 2026.11.02' },
          { t: '清除缓存', r: '12.3 MB' },
        ].map((r, i, arr) => el('div', {
          style: 'display:flex; align-items:center; gap:12px; padding:14px 16px; border-bottom:' + (i < arr.length - 1 ? '1px solid var(--ink-100)' : 'none') + ';'
        },
          el('span', { style: 'flex:1; font:500 14px/1 var(--font); color:var(--ink-900);' }, r.t),
          r.r ? el('span', { style: 'font:400 11px/1 var(--font); color:var(--ink-300);' }, r.r + ' ›') : null
        ))
      ),
      // legal note
      el('div', { style: 'margin-top: 24px; font:400 11px/1.8 var(--font); color:var(--ink-300); text-align:center; padding: 0 20px;' },
        '盏 仅面向年满 18 岁的成年用户。请勿酒后驾车。请勿向未成年人提供酒类。'
      )
    )
  );
}

// ============================================================
//  MAIN — render all 23 pages
// ============================================================
const PAGES = [
  renderL1(),     //  1
  renderL2(),     //  2
  renderL3(),     //  3
  renderH1(),     //  4
  renderH1b(),    //  5
  renderH2(),     //  6
  renderH3(),     //  7
  renderC1(),     //  8
  renderC2(),     //  9
  renderC3(),     // 10
  renderC4(),     // 11
  renderC5(),     // 12
  renderC6(),     // 13
  renderS1(),     // 14
  renderS2(),     // 15
  renderS3(),     // 16
  renderS4(),     // 17
  renderG1(),     // 18
  renderG2(),     // 19
  renderG3(),     // 20
  renderM1(),     // 21
  renderM2(),     // 22
  renderM3(),     // 23
];

const root = document.getElementById('root');
PAGES.forEach(f => root.appendChild(f));

// expose list for puppeteer: window.__ZhanFrames__
window.__ZhanFrames__ = PAGES.map(f => f.getAttribute('data-frame-id'));
