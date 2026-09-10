# Changelog

本專案的所有重要變更都記錄在此檔案中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.1.0/)，版本號遵循 [語意化版本](https://semver.org/lang/zh-TW/)。

## [未發布]

## [v0.0.1] - 2026-09-10

revrain 首個正式發布版本。

### Added

- **主題框架**：完整的深色 Hugo 主題，包含首頁、關於頁、瀏覽頁、404 頁與文章/欄目模板
- **數字雨**：Matrix 風格 Canvas 動畫，字元集、字號、月白機率、重置機率均可配置；遵循系統「減少動態效果」設定（僅繪製靜態幀），低效能裝置自動跳幀
- **毛玻璃**：卡片採用 backdrop-filter 磨砂模糊，玻璃質感
- **多語言**：內建 11 種語言（zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar），預設簡體中文；鍵盤可操作的语言切換器（方向鍵、Home/End、Esc）
- **SEO**：description / robots / canonical / hreflang 交替連結、分頁 rel=prev/next、Open Graph、Twitter Card、JSON-LD 結構化資料（WebSite / Article）、麵包屑 Schema、og:image 查找鏈與封面資源自動發現
- **無障礙（WCAG 2.2 AA）**：跳轉到主內容連結、ARIA 地標與標籤、鍵盤導覽、可見焦點、prefers-reduced-motion 支援、阿拉伯語 RTL 鏡像佈局
- **響應式**：行動優先，4 個斷點（480 / 768 / 1024 / 1280px）
- **數學公式**：建置時由 Hugo 內建 KaTeX（`transform.ToMath`）伺服器端渲染，無需用戶端 JS
- **程式碼高亮**：Hugo 內建支援
- **RSS**：首頁與欄目生成 RSS feed，支援多作者資訊與智慧訂閱入口
- **分類法**：標籤/分類雲，使用伺服器端分頁
- **文章目錄**：側邊欄 TOC，捲動高亮目前標題，巢狀項可摺疊
- **導覽**：麵包屑導覽、上下頁按鈕、返回按鈕
- **favicon**：標準多格式圖示集（SVG / 16 / 32 / apple-touch）與三級回退鏈
- **字型系統棧**：開源字型覆蓋主題支援的全部語言（拉丁、中日韓、阿拉伯、西里爾）
- **部署**：GitHub Actions 自動建置並部署到 GitHub Pages
- **範例站點**：11 種語言的首頁、關於、瀏覽、欄目及 5 篇多語言教學文章
- **最低要求**：Hugo >= 0.163.0（普通版即可），Dart Sass

[未發布]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
