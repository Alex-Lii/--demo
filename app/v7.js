/* ==========================================================================
   盏 V7 · PRD 6.2 缺口页（L1/L2/L3/L3b、C1/C2/C3/C5/C6、S3/S4、G3、M2/M3）
   沿用 v6 设计系统与 v12 钻石；不改主题
   ========================================================================== */

const V7 = {
  user: { name:'杯中物', av:'a3.jpg', email:'l***@163.com' },
  families: [
    { id:'f1', name:'伏特加', sub:'无色无味 · 最适合调酒入门', img:'b07.jpg', on:true },
    { id:'f2', name:'朗姆酒', sub:'甘蔗蒸馏 · 甜感突出', img:'b05.jpg', on:true },
    { id:'f3', name:'威士忌', sub:'谷物陈酿 · 木香与烘烤', img:'b02.jpg', on:true },
    { id:'f4', name:'金酒', sub:'杜松子香 · 清爽带草本', img:'b03.jpg', on:false },
    { id:'f5', name:'龙舌兰', sub:'植物心蒸馏 · 青草与柑橘', img:'d05.jpg', on:false },
    { id:'f6', name:'利口酒', sub:'加甜加香 · 风味强烈', img:'d09.jpg', on:false },
  ],
  skus: [
    { fam:'f1', id:'b07', name:'绝对伏特加原味', brand:'Absolut', abv:40, ml:700, price:99, on:true },
    { fam:'f2', id:'b05', name:'百加得白朗姆', brand:'Bacardi', abv:40, ml:750, price:89, on:true },
    { fam:'f2', id:'s2', name:'哈瓦那俱乐部 3 年', brand:'Havana Club', abv:40, ml:700, price:118, on:false },
    { fam:'f3', id:'b02', name:'尊尼获加黑牌', brand:"Johnnie Walker", abv:40, ml:700, price:229, on:true },
  ],
  mats: [
    { id:'i01', name:'黄柠檬', qty:'4 个', used:false },
    { id:'i02', name:'柑橘', qty:'3 个', used:false },
    { id:'i03', name:'甜橙', qty:'2 个', used:false },
    { id:'i04', name:'草莓', qty:'1 盒', used:false },
    { id:'i05', name:'西瓜', qty:'半只', used:true },
  ],
  addSku: [
    { id:'b03', name:'孟买蓝宝石金酒', brand:'Bombay Sapphire', fam:'金酒', abv:40, ml:750, price:135, owned:true },
    { id:'k1', name:'必富达金酒', brand:'Beefeater', fam:'金酒', abv:40, ml:700, price:128, owned:false },
    { id:'k2', name:'唐胡里奥龙舌兰', brand:'Don Julio', fam:'龙舌兰', abv:38, ml:750, price:158, owned:false },
    { id:'k3', name:'金宾波本威士忌', brand:'Jim Beam', fam:'威士忌', abv:40, ml:700, price:119, owned:false },
  ],
  replenish: [
    { n:'青柠', use:'莫吉托 需要', tag:'缺' },
    { n:'苏打水', use:'金菲士 · 自由古巴 需要', tag:'缺' },
    { n:'西柚汁', use:'西柚帕洛玛 需要', tag:'缺' },
  ],
  history: [
    { date:'11.03', id:'d09', pub:false },
    { date:'11.01', id:'d13', pub:false },
    { date:'10.28', id:'d16', pub:true },
    { date:'10.24', id:'d03', pub:false },
    { date:'10.19', id:'d01', pub:false },
    { date:'10.12', id:'d17', pub:false },
    { date:'10.05', id:'d05', pub:false },
    { date:'09.28', id:'d02', pub:false },
  ],
};

function appleMark(){
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.4.7 1 1.6 2.1 2.7 2.1 1.1 0 1.5-.7 2.8-.7.3 0 1.1 0 1.7.4-.4 2.4-1.4 3.4-2.9-.7-.4-2.1-1-2.3-3.4ZM14.6 6.3c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7.9 0 2-.5 2.6-1.3Z"/></svg>`;
}

/* ============================ L1 年龄确认 ============================ */
function scrAge(){
  return frame(`
    <div class="screen auth col">
      <div class="auth-hero pad">
        <div class="brand-seal">盏</div>
        <div class="eyebrow" style="margin-top:20px">ZHAN · 适量饮酒</div>
        <div class="display" style="font-size:28px;margin-top:9px">欢迎来到盏</div>
        <div class="body" style="margin-top:8px">先确认你的年龄，我们好为你推荐合适的配方。</div>
      </div>
      <div class="pad" style="padding-top:24px">
        <div class="surface bd-card">
          <div class="bd-mask">
            <div class="bd-cols">
              <div class="bd-col"><span>1996 年</span><span>1997 年</span><span class="on">1998 年</span><span>1999 年</span><span>2000 年</span></div>
              <div class="bd-col"><span>4 月</span><span>5 月</span><span class="on">6 月</span><span>7 月</span><span>8 月</span></div>
              <div class="bd-col"><span>10 日</span><span>11 日</span><span class="on">12 日</span><span>13 日</span><span>14 日</span></div>
            </div>
            <div class="bd-sel"></div>
          </div>
          <div class="caption" style="text-align:center;padding:2px 0 14px">1998 年 6 月 12 日 · 已满 18 岁</div>
        </div>
      </div>
      <div class="dock pad">
        <button class="btn primary" style="width:100%" data-goto="login">我已满 18 岁</button>
        <button class="btn secondary" style="width:100%;margin-top:10px" data-act="none">我未满 18 岁（退出）</button>
      </div>
    </div>
  `);
}

/* ============================ L2 Apple 登录 ============================ */
function scrLogin(){
  return frame(`
    <div class="screen auth">
      <div class="auth-hero pad">
        <div class="brand-seal">盏</div>
        <div class="display" style="font-size:28px;margin-top:24px">登录以保存你的酒库</div>
        <div class="body" style="margin-top:8px">酒款库存、调酒记录与收藏配方都会同步到你的账号。</div>
      </div>
      <div class="pad" style="padding-top:32px">
        <button class="apple-btn" data-goto="pick1">${appleMark()}<span>使用 Apple 登录</span></button>
        <div style="display:flex;align-items:center;gap:12px;margin-top:22px">
          <span style="flex:1;height:1px;background:rgba(255,255,255,.09)"></span>
          <span class="caption">或</span>
          <span style="flex:1;height:1px;background:rgba(255,255,255,.09)"></span>
        </div>
        <div style="text-align:center;margin-top:20px"><button class="linkbtn" data-goto="home">继续浏览</button></div>
        <div class="caption" style="margin-top:26px;line-height:1.75">我们仅获取你的姓名首字和邮箱，仅用于账号识别与必要通知，不做营销推送。</div>
      </div>
      <div style="position:absolute;left:0;right:0;bottom:38px" class="pad">
        <div class="caption" style="text-align:center">登录即表示同意《用户协议》与《隐私政策》</div>
      </div>
    </div>
  `);
}

/* ============================ L3 首次引导 Step 1 ============================ */
function scrPick1(){
  const on = V7.families.filter(f=>f.on).length;
  return frame(`
    <div class="screen col">
      ${navbar('', true)}
      <div class="pad" style="padding-top:96px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
          <div>
            <div class="display" style="font-size:24px;line-height:1.25">你家里现在有哪些酒？</div>
            <div class="caption" style="margin-top:7px">先按酒类勾选，不用分辨品牌</div>
          </div>
          <span class="step-pill">1/2</span>
        </div>
        <div class="pick-list" style="margin-top:16px">
          ${V7.families.map(f=>`<button class="pick-row ${f.on?'on':''}">
            <span class="pick-thumb"><img src="assets/${f.img}"></span>
            <span class="pick-inf"><i class="pick-name">${f.name}</i><i class="pick-sub">${f.sub}</i></span>
            <span class="check ${f.on?'on':''}">${ic('check',13,'2.2')}</span>
          </button>`).join('')}
        </div>
      </div>
      <div class="dock pad">
        <div class="dock-note">已选 ${on} 类 · 可解锁 7 款配方</div>
        <div style="display:flex;gap:10px">
          <button class="btn secondary" style="flex:0 0 auto;padding:0 18px" data-goto="addwine">手动添加</button>
          <button class="btn primary" style="flex:1" data-goto="pick2">下一步（已选 ${on} 类）</button>
        </div>
      </div>
    </div>
  `);
}

/* ============================ L3b 首次引导 Step 2 ============================ */
function scrPick2(){
  const fams = V7.families.filter(f=>f.on);
  const cur = 'f2';
  const rows = V7.skus.filter(s=>s.fam===cur);
  const total = V7.skus.filter(s=>s.on).length;
  const step = (f)=>`<button class="fam-tab ${f.id===cur?'on':''}">
      <i></i>${f.name}<em>·${V7.skus.filter(s=>s.fam===f.id&&s.on).length}</em>
    </button>`;
  return frame(`
    <div class="screen col">
      ${navbar('', true)}
      <div class="pad" style="padding-top:98px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
          <div>
            <div class="display" style="font-size:24px;line-height:1.25">挑具体酒款</div>
            <div class="caption" style="margin-top:8px">落成 SKU，「我能做的」才确定</div>
          </div>
          <span class="step-pill">2/2</span>
        </div>
        <div class="fam-chips" style="margin-top:16px">
          ${fams.map(f=>`<span class="chip sm on">${f.name}</span>`).join('')}
          <button class="linkbtn" style="margin-left:auto" data-goto="pick1">‹ 重选</button>
        </div>
        <div class="fam-line" style="margin-top:14px">
          ${fams.map(step).join('')}
        </div>
        <div class="pick-list" style="margin-top:10px">
          ${rows.map(s=>`<button class="pick-row ${s.on?'on':''}" data-goto="pick2">
            <span class="pick-thumb">${s.id.startsWith('b')?`<img src="assets/${s.id}.jpg">`:`<span class="sku-ph">${ic('bottle',20)}</span>`}</span>
            <span class="pick-inf">
              <i class="pick-name">${s.name}</i>
              <i class="pick-sub num">${s.abv}%vol · ${s.ml}ml · <b style="color:var(--amber-lift);font-weight:500">¥${s.price}</b></i>
            </span>
            <span class="check ${s.on?'on':''}">${ic('check',13,'2.2')}</span>
          </button>`).join('')}
        </div>
        <div class="caption" style="margin-top:10px;text-align:center">展开更多 · 还有 2 款</div>
      </div>
      <div class="dock pad">
        <div class="dock-note">已选 ${total} 瓶 · 可解锁 7 款配方</div>
        <div style="display:flex;gap:10px">
          <button class="btn secondary" style="flex:0 0 auto;padding:0 18px" data-goto="home">跳过</button>
          <button class="btn primary" style="flex:1" data-goto="home">完成（已选 ${total} 瓶）</button>
        </div>
      </div>
    </div>
  `);
}

/* ============================ C1 酒库首页（聚合） ============================ */
function scrCellar(){
  const entries = [
    ['我的酒','bottle', '4', '瓶', 'bottle'],
    ['我的材料','materials', '5', '种', 'leaf'],
    ['收藏配方','saved', '8', '杯', 'star'],
  ];
  return frame(`
    <div class="screen">
      <div class="pad topgap">
        <div style="display:flex;align-items:flex-start;justify-content:space-between">
          <div>
            <div class="eyebrow">MY BAR</div>
            <div class="display" style="margin-top:5px">我的酒库</div>
          </div>
          <img class="avatar" src="assets/${V7.user.av}" style="width:44px;height:44px">
        </div>
        <div class="caption" style="margin-top:8px">4 瓶基酒 · 5 种材料 · 能做 7 杯</div>
      </div>
      <div class="cellar-cards">
        ${entries.map(([lb,go,n,unit,i])=>`
          <button class="cellar-card surface" data-goto="${go}">
            <div class="ic">${ic(i,19)}</div>
            <div>
              <div class="n num">${n}<span>${unit}</span></div>
              <div class="l">${lb}<span style="margin-left:auto;color:var(--ink-300);display:flex">${ic('chevron-right',13)}</span></div>
            </div>
          </button>`).join('')}
      </div>
      <div class="pad" style="padding-top:22px">
        ${secHead('快速补货','3 项')}
        <div class="gcard surface g24" style="padding:0 16px">
          ${V7.replenish.map((r,i)=>`
            <div class="list-row" style="padding:0">
              <span class="ic">${ic('cart',18)}</span>
              <span class="tx" style="flex:1;font-size:15px">${r.n}<span style="display:block;font-size:11.5px;color:var(--ink-400);margin-top:3px">${r.use}</span></span>
              <span class="chip sm" style="color:var(--amber-lift);border-color:rgba(211,161,113,.34)">去补货</span>
            </div>
            ${i<V7.replenish.length-1?'<div class="divider"></div>':''}`).join('')}
        </div>
      </div>
      <div class="pad" style="padding-top:20px">
        ${secHead('最近可做','7 杯')}
        <div class="grid2">
          ${DRINKS.slice(0,2).map(d=>`<button class="vcard surface" data-goto="recipe" data-arg="${d.id}">
            <div class="ph"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
            <div class="ci"><div class="nm">${d.name}</div><div class="mt">${d.fam} · ${d.meta}</div></div>
          </button>`).join('')}
        </div>
      </div>
      <div style="height:124px"></div>
    </div>
  `);
}

/* ============================ C3 添加酒（搜索选择） ============================ */
function scrAddwine(){
  const cats = ['全部','金酒','伏特加','朗姆','龙舌兰','威士忌'];
  return frame(`
    <div class="screen">
      ${navbar('添加酒', true)}
      <div class="pad" style="padding-top:104px">
        <div class="searchbar surface field">
          ${ic('search',16,1.6)}<input placeholder="搜酒名、品牌或酒类" aria-label="搜索酒款">
        </div>
        <div class="chips scroll" style="margin-top:12px">
          ${cats.map((c,i)=>`<span class="chip ${i===0?'on':''}">${c}</span>`).join('')}
        </div>
        <div class="caption" style="margin-top:18px">热门酒款 · 点「+」直接入库</div>
        <div style="display:flex;flex-direction:column;gap:9px;margin-top:9px">
          ${V7.addSku.map(s=>`
            <div class="sku-card surface">
              <span class="pick-thumb" style="width:52px;height:52px;border-radius:13px">
                ${s.id==='b03'?`<img src="assets/${s.id}.jpg">`:`<span class="sku-ph">${ic('bottle',20)}</span>`}
              </span>
              <span style="flex:1;min-width:0">
                <span class="pick-name" style="font-size:15px">${s.name}</span>
                <span class="pick-sub num" style="display:block;margin-top:4px">${s.abv}%vol · ${s.ml}ml · <b style="color:var(--amber-lift);font-weight:500">¥${s.price}</b></span>
              </span>
              ${s.owned
                ? `<span class="chip sm" style="color:var(--ink-300)">已入库</span>`
                : `<button class="chip sm on" data-act="none">+ 添加</button>`}
            </div>`).join('')}
        </div>
        <div class="caption" style="margin-top:16px;text-align:center">没找到？<span style="color:var(--amber-lift)">手动添加</span></div>
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ C5 我的材料 ============================ */
function scrMaterials(){
  const cats = [['水果',5],['糖浆',0],['饮品',0],['香料',0]];
  return frame(`
    <div class="screen">
      ${navbar('我的材料', true, `<button class="navact" style="width:auto;padding:0 6px;color:var(--amber-lift)">${ic('plus',18)}</button>`)}
      <div class="pad" style="padding-top:104px">
        <div class="chips scroll">
          ${cats.map(([n,c],i)=>`<span class="chip ${i===0?'on':''}">${n} ${c}</span>`).join('')}
        </div>
        <div class="gcard surface g24" style="padding:0 16px;margin-top:14px">
          ${V7.mats.map((m,i)=>`
            <div class="list-row" style="padding:0;height:60px">
              <span class="pick-thumb" style="width:40px;height:40px;border-radius:11px;${m.used?'opacity:.42':''}"><img src="assets/${m.id}.jpg"></span>
              <span class="tx" style="flex:1;font-size:15px;${m.used?'color:var(--ink-300)':''}">${m.name}<span style="display:block;font-size:11.5px;color:var(--ink-400);margin-top:3px">${m.qty}</span></span>
              ${m.used?`<span class="chip sm" style="color:var(--ink-300)">已用完</span>`:`<span class="small">在用</span>`}
            </div>
            ${i<V7.mats.length-1?'<div class="divider"></div>':''}`).join('')}
        </div>
        <div class="caption" style="margin-top:14px;line-height:1.7">标记「已用完」的材料会从「我能做的」匹配中临时剔除，补货后自动恢复。</div>
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ C6 收藏配方 ============================ */
function scrSaved(){
  return frame(`
    <div class="screen">
      ${navbar('收藏配方', true)}
      <div class="pad" style="padding-top:104px">
        <div style="display:flex;align-items:flex-end;justify-content:space-between">
          <div class="h1" style="font-size:22px">8 杯收藏</div>
          <span class="caption">按收藏时间排序</span>
        </div>
        <div class="chips" style="margin-top:12px"><span class="chip on">全部</span></div>
        <div class="grid2" style="margin-top:14px">
          ${DRINKS.map(d=>`<button class="vcard surface" data-goto="recipe" data-arg="${d.id}">
            <div class="ph"><img src="assets/${d.img}" style="object-position:${d.pos}">${srcBadge(d)}${gemBadge(d)}</div>
            <div class="ci"><div class="nm">${d.name}</div><div class="en">${d.en}</div><div class="mt">${d.fam} · L${d.level}</div></div>
          </button>`).join('')}
        </div>
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ S3 发布调酒 ============================ */
function scrPublish(){
  const d = DRINKS.find(x=>x.id==='d09');
  const steps = [['图片','done'],['配方','done'],['标题','on'],['贴士','next']];
  return frame(`
    <div class="screen col">
      ${navbar('发布调酒', true, `<button class="navact" style="width:auto;padding:0 6px;font-size:15px;color:var(--ink-300)">草稿</button>`)}
      <div style="padding-top:104px">
        <div class="pub-steps">
          ${steps.map(([n,st])=>`<div class="pub-step ${st==='next'?'':st}"><span class="bar"></span><span>${n}</span></div>`).join('')}
        </div>
        <div class="pad" style="padding-top:20px">
          <div class="caption" style="margin-bottom:7px">成品图</div>
          <div class="pub-photo">
            <img src="assets/${d.img}" style="object-position:50% 48%">
            <span class="pub-photo-tag">已选 1 张<span style="color:var(--amber-lift);margin-left:8px">更换</span></span>
          </div>
          <div class="caption" style="margin:18px 0 7px">使用的配方</div>
          <div class="surface" style="border-radius:16px;padding:10px;display:flex;align-items:center;gap:11px">
            <span class="pick-thumb" style="width:44px;height:44px;border-radius:11px"><img src="assets/${d.img}" style="object-position:${d.pos}"></span>
            <span style="flex:1;min-width:0"><span class="pick-name" style="font-size:15px">${d.name}</span><span class="pick-sub" style="display:block;margin-top:3px">${d.en} · L${d.level}</span></span>
            ${gemBadge(d)}
            <span class="linkbtn">换</span>
          </div>
          <div class="caption" style="margin:18px 0 7px">标题</div>
          <div class="surface pub-field">
            <div class="pub-input">第一次复刻荔枝马天尼</div>
            <div class="caption num" style="text-align:right;margin-top:6px">12/20</div>
          </div>
          <div class="caption" style="margin:18px 0 7px">DIY 贴士（选填）</div>
          <div class="surface pub-field" style="min-height:92px">
            <div style="font-size:13px;line-height:1.7;color:var(--ink-600)">荔枝罐头的水别倒，和伏特加 1:1 兑进去更香；摇和 12 秒就够了。</div>
            <div class="caption num" style="text-align:right;margin-top:6px">48/100</div>
          </div>
        </div>
      </div>
      <div class="dock pad">
        <button class="btn primary" style="width:100%" data-goto="chat">发布到酒圈</button>
      </div>
    </div>
  `);
}

/* ============================ G3 完成弹层 ============================ */
function donePanel(d){
  return `<div class="done-panel glass g28">
    <div class="done-badge">${ic('glass',28)}</div>
    <div class="drink-name" style="font-size:24px;line-height:1.25">恭喜你调出了<br>${d.name}</div>
    <div style="display:flex;justify-content:center;margin-top:14px">${gemBlock(d,24,true)}</div>
    <div class="done-stats num">4 步 · ${d.meta.split(' · ')[0]} · 用了 1 瓶${d.fam}</div>
    <div class="done-acts">
      <button class="btn primary" data-goto="history">存到我的调酒</button>
      <button class="btn secondary" data-goto="publish">发一条到酒圈</button>
    </div>
  </div>`;
}
function scrDone(){
  const d = DRINKS.find(x=>x.id===(_route.arg||S.doneId)) || DRINKS[0];
  return frame(`
    <div class="screen done-screen">
      <img class="done-bg" src="assets/${d.img}" style="object-position:${d.pos}">
      <div class="done-veil"></div>
      ${donePanel(d)}
    </div>
  `);
}
function doneSheet(){
  const d = DRINKS.find(x=>x.id===S.doneId) || DRINKS[0];
  return `<div class="sheet-wrap on"><div class="sheet-bd" data-close-sheet></div>${donePanel(d)}</div>`;
}

/* ============================ S4 举报弹层 ============================ */
function reportSheet(){
  const reasons = ['鼓励过度饮酒','未成年人出镜','违规营销','色情低俗','其他'];
  return `<div class="sheet-wrap on">
    <div class="sheet-bd" data-close-sheet></div>
    <div class="sheet glass g28" role="dialog" aria-modal="true" aria-label="举报内容">
      <div class="grab"></div>
      <div class="sh-head">
        <button class="btn ghost" data-close-sheet>取消</button>
        <div class="h2" style="font-size:15px">举报内容</div>
        <span style="width:44px"></span>
      </div>
      <div class="sh-body">
        <div class="caption" style="padding:6px 0 4px">请选择最符合的一项，我们会在 24 小时内处理。</div>
        <div class="rep-list">
          ${reasons.map((r,i)=>`<button class="rep-row ${i===0?'on':''}">
            <span class="rep-radio"></span><span style="flex:1">${r}</span>
          </button>`).join('')}
        </div>
        <div class="surface" style="border-radius:14px;padding:11px 13px;margin-top:12px">
          <span class="caption">补充说明（选填，50 字内）</span>
        </div>
      </div>
      <div class="sh-foot">
        <button class="btn ghost" data-close-sheet>取消</button>
        <button class="btn primary" style="flex:1" data-close-sheet>提交</button>
      </div>
    </div>
  </div>`;
}

/* ============================ M2 我的调酒 ============================ */
function scrHistory(){
  return frame(`
    <div class="screen">
      ${navbar('我的调酒', true)}
      <div class="pad" style="padding-top:104px">
        <div style="display:flex;align-items:flex-end;justify-content:space-between">
          <div class="h1" style="font-size:22px">8 杯 · 按时间倒序</div>
          <span class="caption">2026 年</span>
        </div>
        <div class="gcard surface g24" style="padding:0 16px;margin-top:14px">
          ${V7.history.map((h,idx)=>{
            const d = DRINKS.find(x=>x.id===h.id) || DRINKS[0];
            return `<div class="hist-row">
              <div class="hist-date num">${h.date}</div>
              ${gemBadge(d,true)}
              <div class="hist-inf">
                <div class="hist-nm">
                  <span class="drink-name">${d.name}</span>
                  ${h.pub?'<span class="badge-pub">已发布</span>':''}
                </div>
                <div class="hist-mt num">${d.fam} · L${d.level} · ${d.meta.split(' · ')[0]}</div>
              </div>
              <button class="chip sm" style="flex:0 0 auto" data-goto="recipe" data-arg="${d.id}">再调一次</button>
            </div>`;
          }).join('<div class="divider"></div>')}
        </div>
        <div class="caption" style="margin-top:14px;text-align:center">仅保留最近 90 天 · 长按可删除</div>
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ M3 设置 ============================ */
function scrSettings(){
  const rows = (arr)=>arr.map(([i,t,v],idx)=>`
    ${idx?'<div class="divider"></div>':''}
    <div class="list-row">
      <span class="ic">${ic(i,18)}</span><span class="tx" style="flex:1">${t}</span>
      ${v}
    </div>`).join('');
  return frame(`
    <div class="screen">
      ${navbar('设置', true)}
      <div class="pad" style="padding-top:104px">
        <div class="set-lb">账号</div>
        <div class="gcard surface g24" style="padding:0 16px">
          ${rows([['user','Apple ID','l***@163.com'],['arrow-right','退出登录','']])}
        </div>
        <div class="set-lb">通知</div>
        <div class="gcard surface g24" style="padding:0 16px">
          ${rows([['bell','消息通知','<span class="caption" style="color:var(--ink-300)">P1 上线</span>']])}
        </div>
        <div class="set-lb">偏好</div>
        <div class="gcard surface g24" style="padding:0 16px">
          <div class="list-row"><span class="ic">${ic('alert',18)}</span><span class="tx" style="flex:1">每次打开显示适量饮酒提示</span><span class="toggle on"></span></div>
          <div class="divider"></div>
          <div class="list-row"><span class="ic">${ic('glass',18)}</span><span class="tx" style="flex:1">默认只看「我能做的」</span><span class="toggle"></span></div>
        </div>
        <div class="set-lb">关于</div>
        <div class="gcard surface g24" style="padding:0 16px">
          ${rows([['doc','用户协议',''],['doc','隐私政策',''],['gear','版本','1.0.0']])}
        </div>
      </div>
      <div style="height:40px"></div>
    </div>
  `);
}

/* ============================ 注册（覆盖/新增） ============================ */
Object.assign(SCREENS, {
  bottle: scrCellar,
  mywine: scrBottle,
  age: scrAge,
  login: scrLogin,
  pick1: scrPick1,
  pick2: scrPick2,
  addwine: scrAddwine,
  materials: scrMaterials,
  saved: scrSaved,
  publish: scrPublish,
  done: scrDone,
  history: scrHistory,
  settings: scrSettings,
});

/* 侧栏补全 */
RAIL.length = 0;
RAIL.push(
  ['登录注册',[['L1 年龄确认','age'],['L2 Apple 登录','login'],['L3 选酒类','pick1'],['L3b 选酒款','pick2']]],
  ['首页',[['H1 首页 · 推荐','home'],['H3 搜索','search']]],
  ['酒库',[['C1 酒库首页','bottle'],['C2 我的酒','mywine'],['C3 添加酒','addwine'],['C4 酒款详情','bottle-detail'],['C5 我的材料','materials'],['C6 收藏配方','saved']]],
  ['配方',[['G1 配方详情','recipe'],['G2 制作流程','flow'],['G3 完成弹层','done']]],
  ['酒圈',[['S1 酒圈首页','chat'],['S2 帖子详情','comment'],['S3 发布调酒','publish']]],
  ['我的',[['M1 我的','me'],['M2 我的调酒','history'],['M3 设置','settings']]],
);
