# revrain

由 [代码革命（Code Revolution）](https://github.com/code-revolution-org) 开发的 Hugo 主题，专为极客和开发者打造。深色系设计，融入数字雨与毛玻璃视觉风格。

[English](lang/README.en-US.md) | [繁體中文](lang/README.zh-TW.md) | [日本語](lang/README.ja.md) | [한국어](lang/README.ko.md) | [Deutsch](lang/README.de.md) | [Français](lang/README.fr.md) | [Español](lang/README.es.md) | [Português (Brasil)](lang/README.pt-BR.md) | [Русский](lang/README.ru.md) | [العربية](lang/README.ar.md)

## 特性

- **数字雨** — Matrix 风格 Canvas 动画，字符集、字号、月白概率、重置概率均可配置；遵循系统"减少动态效果"设置（仅绘制静态帧），低性能设备自动跳帧
- **毛玻璃** — 卡片采用 backdrop-filter 磨砂模糊，玻璃质感
- **多语言** — 内置 11 种语言及键盘可操作的语言切换器（下拉菜单支持方向键、Home/End、Esc）
- **SEO** — description / robots / canonical / hreflang 交替链接、分页 rel=prev/next、Open Graph、Twitter Card、JSON-LD 结构化数据（WebSite / Article）、面包屑 Schema
- **响应式** — 移动优先，4 个断点（480 / 768 / 1024 / 1280px）
- **代码高亮** — Hugo 内置支持
- **数学公式** — 构建时由 Hugo 内置 KaTeX（`transform.ToMath`）服务端渲染，无需客户端 JS
- **深色主题** — 面向开发者优化的配色（5 个意象色）
- **无障碍** — 对齐 WCAG 2.2 AA：跳转到主内容链接、ARIA 地标与标签、键盘导航、可见焦点、prefers-reduced-motion 支持、RTL 布局（阿拉伯语）
- **RSS** — 首页与栏目生成 RSS feed
- **文章目录** — 侧边栏 TOC，滚动高亮当前标题，嵌套项可折叠
- **服务端分页** — 栏目、分类与标签云均使用服务端分页

## 快速开始

在站点配置中启用主题：

```toml
theme = "revrain"
```

## 配置

### 全局参数

```toml
[params]
  logo = "/logo.png"          # 导航栏 logo（可选）
  description = "..."         # 站点描述，用于 SEO
  images = ["/og-image.png"]  # 默认社交分享图片

[params.social]
  twitter = "username"        # Twitter 账号，用于 twitter:site

[params.favicons]             # 浏览器标签页图标（全部可选）
  svg = "/favicon.svg"                # SVG 矢量图标
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS 主屏图标
```

**favicon 查找链：** 每个条目按 *配置路径 → `static/` 下的规范文件名 → 省略* 解析。若完全未配置或文件不存在，则输出空 `data:` URI 以抑制浏览器默认的 `/favicon.ico` 请求（避免 404）。路径可以是外部 URL 或站点相对路径。

### 页脚

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub 链接（可选）
  copyright = "我的博客 · 版权所有"                  # 版权声明（可选，未配置不显示）

  [[params.footer.links]]                         # 友情链接组（可选）
    name = "链接名称"
    identifier = "friendly_links"                 # 可选：i18n key，存在则优先使用翻译
    url = "https://example.com"
```

**版权声明行为：**
- 未配置 → 不显示
- 已配置 → 渲染为 `© <当前年份> <内容>`（年份自动更新）
- 多语言站点：可为每种语言单独配置（见"多语言"）

### 数字雨

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 月白色字符概率（0–1）
  reset_chance = 0.025 # 雨滴重置概率（0–1）
```

### 数学公式

公式在构建时由 Hugo 内置 KaTeX 引擎（`transform.ToMath`）渲染为 HTML + MathML，无需客户端 JS。在配置中启用 Goldmark passthrough 扩展：

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

内容中使用以下定界符：

- 行内：`\(...\)`
- 块级：`$$...$$` 或 `\[...\]`

**CDN 声明：** KaTeX 样式表（`katex.min.css` v0.17.0，`htmlAndMathml` 输出必需）从 jsDelivr CDN 加载，并带子资源完整性（SRI）校验。KaTeX 采用 [MIT 许可证](https://github.com/KaTeX/KaTeX/blob/main/LICENSE)。仅在包含公式的页面加载。

### 多语言

项目支持 11 种语言，默认语言为简体中文。每门语言可配置 `label`（显示名）、`locale`（RFC 5646）、`title`（站点标题）、`weight`（排序，升序）及独立参数：

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # 阿拉伯语从右到左布局
    title = 'موقعي'
    weight = 30
```

内容按文件名后缀区分语言，后缀必须小写（如 `about.en-us.md`、`about.zh-cn.md`）。未写后缀的文件归属默认语言。

### 菜单

```toml
[[menus.main]]
  name = "首页"
  identifier = "menu_home"  # i18n key（可选），存在则优先使用翻译
  pageRef = "/"
  weight = 10
```

## 内容

### 首页

首页使用 `_index.md`，支持以下 front matter：

```markdown
+++
title = "我的站点"            # 页面标题
subtitle = "欢迎来到我的站点"   # 副标题，显示在标题下方
logo = "/logo.png"           # 首页大图 logo（可选）
logo_alt = "站点 logo"        # logo 替代文本（无障碍）

[primary_button]             # 主按钮
  url = "/browse"
  text = "开始探索"

[secondary_button]           # 次按钮
  url = "/about"
  text = "关于我们"
+++

首页正文，渲染在按钮下方的毛玻璃卡片中。
```

### 关于页

使用 `layout = "about"` 的独立页面：

```markdown
+++
title = "关于我们"            # 页面标题
layout = "about"             # 使用关于页模板
subtitle = "用代码改变世界"     # 副标题
avatar = "/avatar.png"       # 头像图片（可选）
description = "站点描述，用于 SEO"  # SEO 描述

links = [                    # 社交/外链（可选）
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

关于页正文。
```

### 文章

普通文章（位于栏目目录下），支持以下 front matter：

```markdown
+++
title = "我的文章"            # 文章标题
date = 2025-01-15            # 发布日期
draft = false                # 草稿：true 时构建不输出
tags = ["技术", "hugo"]      # 标签（可选）
categories = ["教程"]         # 分类（可选）
summary = "文章简介，显示在卡片列表"  # 列表摘要
description = "SEO 描述，缺省时自动取摘要"  # SEO 描述
+++

文章正文。
```

### 浏览页

使用 `layout = "directory"` 展示全部栏目：

```markdown
+++
title = "浏览"                # 页面标题
layout = "directory"         # 使用栏目总览模板
description = "浏览所有栏目和文章"  # SEO 描述
+++
```

### 栏目

每个栏目（section）通过 `_index.md` 定义，`summary` 显示在卡片列表中：

```markdown
+++
title = '文章'                # 栏目标题
summary = '涵盖技术分享、生活随笔等多个主题的文章合集。'  # 栏目简介，显示在卡片列表
+++
```

## 无障碍（WCAG 2.2）

- 跳转到主内容链接（跳过导航，WCAG 2.4.1）
- ARIA 地标与标签：主导航、页脚导航、页面导航、语言切换器（role=listbox）
- 语言切换器完整键盘支持：方向键移动焦点、Home/End 首尾、Esc 关闭
- 移动菜单按钮带 `aria-expanded` / `aria-controls`
- 数字雨画布对辅助技术隐藏（`aria-hidden`，纯装饰），并遵循 prefers-reduced-motion
- 目录（TOC）滚动高亮与折叠均有键盘路径
- 阿拉伯语（ar）自动启用 RTL 布局
- 可见焦点样式、prefers-reduced-motion 全局支持

## 颜色系统

| 名称 | 色值 | 用途 |
|------|------|------|
| 深渊黑 Abyss Black | `#0A0A0F` | 背景色 |
| 雨丝绿 Rain Green | `#00D4AA` | 强调色、数字雨、链接 |
| 暮光 Twilight | `#8B92A8` | 次要文字、边框 |
| 月白 Moon White | `#E8EAF0` | 主要文字、标题 |
| 幔雾 Shroud | `#2A2A35` | 毛玻璃面板、边框 |

## 字体栈

使用开源系统字体，覆盖主题支持的全部语言：

- 拉丁文：Inter、Noto Sans
- 中文：Noto Sans SC/TC、思源黑体（Source Han Sans SC/TC）
- 日文：Noto Sans JP、Source Han Sans JP
- 韩文：Noto Sans KR、Source Han Sans KR、Nanum Gothic
- 阿拉伯文：Noto Sans Arabic、Noto Naskh Arabic
- 西里尔文：Noto Sans

## 最低要求

- Hugo Extended >= 0.156.0
- Dart Sass（SCSS 编译所需）

## 许可证

MIT 许可证。详见 [LICENSE](LICENSE)。

