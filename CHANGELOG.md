# Changelog

本项目的所有重要变更都记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

## [v0.0.1] - 2026-09-10

revrain 首个正式发布版本。

### Added

- **主题框架**：完整的深色 Hugo 主题，包含首页、关于页、浏览页、404 页与文章/栏目模板
- **数字雨**：Matrix 风格 Canvas 动画，字符集、字号、月白概率、重置概率均可配置；遵循系统"减少动态效果"设置（仅绘制静态帧），低性能设备自动跳帧
- **毛玻璃**：卡片采用 backdrop-filter 磨砂模糊，玻璃质感
- **多语言**：内置 11 种语言（zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar），默认简体中文；键盘可操作的语言切换器（方向键、Home/End、Esc）
- **SEO**：description / robots / canonical / hreflang 交替链接、分页 rel=prev/next、Open Graph、Twitter Card、JSON-LD 结构化数据（WebSite / Article）、面包屑 Schema、og:image 查找链与封面资源自动发现
- **无障碍（WCAG 2.2 AA）**：跳转到主内容链接、ARIA 地标与标签、键盘导航、可见焦点、prefers-reduced-motion 支持、阿拉伯语 RTL 镜像布局
- **响应式**：移动优先，4 个断点（480 / 768 / 1024 / 1280px）
- **数学公式**：构建时由 Hugo 内置 KaTeX（`transform.ToMath`）服务端渲染，无需客户端 JS
- **代码高亮**：Hugo 内置支持
- **RSS**：首页与栏目生成 RSS feed，支持多作者信息与智能订阅入口
- **分类法**：标签/分类云，使用服务端分页
- **文章目录**：侧边栏 TOC，滚动高亮当前标题，嵌套项可折叠
- **导航**：面包屑导航、上下页按钮、返回按钮
- **favicon**：标准多格式图标集（SVG / 16 / 32 / apple-touch）与三级回退链
- **字体系统栈**：开源字体覆盖主题支持的全部语言（拉丁、中日韩、阿拉伯、西里尔）
- **部署**：GitHub Actions 自动构建并部署到 GitHub Pages
- **示例站点**：11 种语言的首页、关于、浏览、栏目及 5 篇多语言教程文章
- **最低要求**：Hugo >= 0.163.0（普通版即可），Dart Sass

[未发布]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
