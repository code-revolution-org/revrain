# revrain

由代码革命开发的 Hugo 主题，专为极客和开发者打造。

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 特性

- **数字雨** — Matrix 风格 Canvas 动画，完全可配置
- **毛玻璃效果** — 磨砂玻璃卡片，支持 backdrop 模糊
- **多语言** — 11 种语言，含语言切换器
- **SEO** — Open Graph、Twitter Card、JSON-LD 结构化数据、面包屑 Schema
- **响应式** — 移动优先，4 个断点（480 / 768 / 1024 / 1280px）
- **代码高亮** — Hugo 内置支持
- **数学公式** — Hugo 内置支持
- **深色主题** — 针对开发者优化的配色方案

## 快速开始

```toml
theme = "revrain"
```

## 配置

### 全局参数

```toml
[params]
  logo = "/logo.png"          # 导航栏 logo（可选）
  favicon = "/favicon.ico"    # 浏览器标签页图标（可选）
  description = "..."         # 站点描述，用于 SEO
  images = ["/og-image.png"]  # 默认社交分享图片

[params.social]
  twitter = "username"        # Twitter 账号，用于 twitter:site
```

### 页脚

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "我的博客 · 版权所有"  # 可选，未配置则不显示

  [[params.footer.links]]
    name = "链接名称"
    url = "https://example.com"
```

**版权声明行为：**
- 未配置 → 不显示
- 已配置 → 渲染为 `© 2026 我的博客 · 版权所有`（年份自动更新）
- 多语言站点：为每种语言单独配置（见下文）

### 数字雨

```toml
[params.digitalRain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  fontSize = 14       # 10–32 px
  moonChance = 0.02   # 月白色字符概率
  resetChance = 0.025 # 雨滴重置概率
```

### 多语言

为每种语言单独配置版权：

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.zh-CN]
  label = "简体中文"
  weight = 20
  [languages.zh-CN.params.footer]
    copyright = "我的博客 · 版权所有"
```

### 菜单

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key（可选）
  pageRef = "/"
  weight = 10
```

## 内容

### 首页

```markdown
+++
title = "我的站点"
subtitle = "欢迎来到我的站点"
logo = "/logo.png"
logoAlt = "站点 logo"

[primaryButton]
  url = "/browse"
  text = "开始探索"

[secondaryButton]
  url = "/about"
  text = "关于我们"
+++
```

### 关于页

```markdown
+++
title = "关于我们"
layout = "about"
subtitle = "用代码改变世界"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### 文章

```markdown
+++
title = "我的文章"
date = 2025-01-15
draft = false
tags = ["技术", "hugo"]
categories = ["教程"]
summary = "文章简介"
description = "SEO 描述"
+++
```

### 浏览页

```markdown
+++
title = "浏览"
layout = "directory"
+++
```

## 颜色系统

| 名称 | 色值 | 用途 |
|------|------|------|
| 深渊黑 | `#0A0A0F` | 背景色 |
| 雨丝绿 | `#00D4AA` | 强调色、数字雨、链接 |
| 暮光 | `#8B92A8` | 次要文字、边框 |
| 月白 | `#E8EAF0` | 主要文字、标题 |
| 幔雾 | `#2A2A35` | 毛玻璃面板、边框 |

## 字体栈

使用系统字体，包含 CJK 回退：

- 拉丁文：Inter、Noto Sans
- 中文：Noto Sans SC/TC、思源黑体
- 日文：Noto Sans JP、Source Han Sans JP
- 韩文：Noto Sans KR、Nanum Gothic
- 阿拉伯文：Noto Sans Arabic
- 西里尔文：Noto Sans

## 最低要求

- Hugo Extended >= 0.156.0

## 许可证

MIT 许可证。详见 [LICENSE](../LICENSE)。
