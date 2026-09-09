+++
title = '内容组织'
date = 2026-09-09
draft = false
summary = '首页、关于页、浏览页、栏目与文章的 front matter 字段与目录约定。'
description = 'revrain 主题内容组织教程：各类页面的 front matter 字段与目录结构。'
tags = ['revrain', 'hugo']
categories = ['教程']
+++

## 首页

`content/_index.md`，支持主副标题、logo 与两个按钮：

```toml
+++
title = "我的站点"
subtitle = "欢迎来到我的站点"
logo = "/logo.png"
logo_alt = "站点 logo"

[primary_button]
url = "/browse"
text = "开始探索"

[secondary_button]
url = "/about"
text = "关于我们"
+++

首页正文，渲染在按钮下方的毛玻璃卡片中。
```

`logo`、`logo_alt` 与按钮均为可选；缺省则不显示对应元素。

## 关于页

`content/about.zh-cn.md`，需声明 `layout = "about"`：

```toml
+++
title = "关于我们"
layout = "about"
subtitle = "用代码改变世界"
avatar = "/avatar.png"
description = "页面 SEO 描述"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar`、`links` 可选。`links` 渲染为外链列表，自动添加 `target="_blank" rel="noopener"`。

## 浏览页

`content/browse.zh-cn.md`，需声明 `layout = "directory"`，自动列出全部栏目：

```toml
+++
title = "浏览"
layout = "directory"
description = "浏览所有栏目和文章"
+++
```

## 栏目

栏目首页 `content/posts/_index.md`，`summary` 显示在卡片列表：

```toml
+++
title = "文章"
summary = "涵盖技术分享、生活随笔等多个主题的文章合集。"
+++
```

## 文章

`content/posts/my-post.zh-cn.md`，普通文章无需指定 `layout`：

```toml
+++
title = "我的文章"
date = 2026-09-09
draft = false
tags = ["技术", "hugo"]
categories = ["教程"]
summary = "文章简介，显示在卡片列表"
description = "SEO 描述，缺省时自动取摘要"
+++

文章正文。
```

文章页自动渲染侧边栏目录（TOC）、面包屑与上下篇导航。`summary` 用于列表卡片，`description` 用于 SEO，缺省时自动取 `summary`。
