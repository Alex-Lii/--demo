# 盏 ZHAN · 家庭调酒 App — 初版设计交付

「盏」是一款面向家庭场景的调酒 App：用户录入手边的酒与配料形成「酒库」，App 据此推荐当下能做的配方，并提供分步制作引导、酒款/配料管理与社区分享。Slogan：**一盏好调酒，在家就能做**。

本仓库是**初版设计交付**，包含 PRD 正文、各版本静态视觉稿、一套可点击的前端演示稿，以及 3D 等级图标的多个探索版本。全部为设计/演示用途，不含后端与真实业务逻辑。

## 目录结构

| 路径 | 内容 |
|---|---|
| `docs/cocktail-app-prd.md` | 《盏》App 产品需求文档 v1.0（品牌、场景、模块、规则、数据模型、埋点等） |
| `mockups/v1/` | 最早一版静态稿（23 张 PNG，含 `index.html` / `render.js` / `styles.css`） |
| `mockups/hifi/` | 高保真静态稿，24 张 PNG（390×844，3x）+ `assets/` 图片素材 |
| `mockups/v3/` | 玻璃拟态方向的早期探索（5 张 PNG） |
| `mockups/v4/` | Liquid Glass 方向定稿，6 张 PNG，含 `compare-H1-glass.png` 与高保真稿的对比 |
| `mockups/v5-a/`、`mockups/v5-b/` | 两套品牌色方案（A / B），各 4 张 PNG，含与 v4 的对比图 |
| `app/` | **V6 可运行前端稿**：`index.html` + `app.js` + `styles.css` + `assets/`，纯 HTML/CSS/JS，无 CDN、无构建 |
| `app/levels/levels.html` | 等级方案规格页（等级定义、图标尺寸与用法说明） |
| `icons-3d/v1/` … `icons-3d/v6/` | 3D 等级图标各探索版本，见下文 |

历史版本按版本号原样保留，不覆盖。

## 如何打开

- 可运行前端稿：直接双击或拖进浏览器打开 `app/index.html`。左侧栏为页面导航，筛选弹层、配方跳转、评论等均为真实交互；页面内可跳转到 `app/levels/levels.html`。
- 等级方案页：单独打开 `app/levels/levels.html` 亦可，页内「回到可点击原型」链接指回 `app/index.html`。
- 静态稿：`mockups/*/index.html` 是对应版本的渲染页，双击即可在浏览器中打开；`mockups/*/*.png` 为逐帧截图，可直接看图。
- 3D 图标动效：打开 `icons-3d/v1`–`v5` 下的 `rotating-icons.html`（内含内联 three.js，离线可运行，可拖动旋转查看）。

> 无需 npm 安装、无需启动服务；`file://` 直接打开即可（`app/index.html` 也是双击可用）。

## 图片 / 动效的对照方式

- **静态稿 PNG 命名 = 页面编码**，前缀代表模块：
  - `H1`/`H1b` 首页推荐 / 可制作列表，`H2` 筛选弹层，`H3` 搜索结果
  - `C1`–`C6` 酒库（总览 / 酒款列表 / 添加 / 酒款详情 / 配料清单 / 收藏）
  - `G1`–`G3` 配方详情 / 制作流程 / 完成页
  - `S1`–`S4` 社区信息流 / 帖子详情 / 发布 / 举报弹层
  - `M1`–`M3` 我的 / 我的调酒 / 设置
  - `L1`–`L3b` 年龄确认 / 登录 / 首次引导（酒类 → 具体酒款）
- 文件名与渲染脚本中的 frame id 一一对应（`render.js` 末尾的 `window.__ZhanFrames__` 即截图顺序），`screenshot.js` 按该列表逐帧输出 PNG。
- **3D 图标版本目录内**：
  - `L1.png`–`L5.png` 为大尺寸预览（设计评审用）
  - `L1@24.png`–`L5@24.png` 为 24px 实际使用尺寸的对照图（判断小尺寸可读性看这组）
  - `levels-overview.png` 为等级总览，`in-app-usage.png` 为在 App 内的实际排版示意
  - `compare-*.png` / `v4-vs-v5.png` / `palette-compare.png` 等为版本间对比图
  - 版本演进：v1 基础几何 → v2/v3 材质与配色探索 → v4 材质/透明度/调色板对比 → v5 细化与 v4 对比 → v6 背景适配矩阵（`bg-matrix.png`）
- 本仓库**没有 GIF**；动效以 `rotating-icons.html` 的实时渲染为准，静态帧以各版本 PNG 为准。

## 已知限制

1. `mockups/` 下全部是**静态截图**，不可点击；交互行为以 `app/` 可运行稿为准。
2. `app/` 是前端演示稿：数据硬编码在 `app.js`，刷新即重置；无后端、无账号体系。仅还原 `home / search / bottle / bottle-detail / recipe / flow / chat / comment / me` 9 个路由，PRD 中的设置、我的调酒等页面未做可运行实现，仅以静态 PNG 呈现。
3. PRD 中提出的电商（美团闪购单渠道）、UGC 发布、扫码入库等能力在原型里均未接入，只有界面表达。
4. 3D 图标早期版本（v2 / v3）的 `@24` 小尺寸版本在深色背景上对比度偏低；后续 v4–v6 针对小尺寸做了调整，选型时请以 `@24` 组图为准。
5. `icons-3d/v7` 的渲染产物尚未完成，本仓库未收录；各版本的构建脚手架 `_src`（含 `node_modules` 与临时渲染帧）亦未收录。
6. `mockups/*/screenshot.js` 中写死了原机器的 Chrome 路径与 puppeteer 依赖路径，直接复跑需先改路径并安装依赖。
7. `assets/` 内图片来自 Unsplash（见 `mockups/hifi/dl.sh` 中的原始链接），仅作设计演示，商用需另行授权。
8. PRD 内部分字段为占位（如作者栏、部分评审日期标 `[TBD]`）。
