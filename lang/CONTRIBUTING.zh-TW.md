# 貢獻指南

感謝你有興趣為 revrain 貢獻！歡迎回報問題、改進文件或提交程式碼。

revrain 是一個 Hugo 主題，專為極客和開發者打造：深色設計、數字雨動畫、毛玻璃風格，支援 11 種語言並對齊 WCAG 2.2 AA 無障礙標準。你的每一份貢獻都很珍貴。

## 分支說明

本倉庫主要有兩個分支：

- `main`：正式版 / 穩定版。只由維護者從 `dev` 合併發布，**不接受直接 PR**。
- `dev`：開發分支。所有功能、修復、文件改動，請都提交到 `dev`。

> 重要：提交 Pull Request 時，目標分支請選擇 `dev`，不要選擇 `main`。

## 你可以如何貢獻

- 回報 Bug
- 提出新功能建議
- 改進文件（含 `lang/` 下的多語言 README 翻譯）
- 提交程式碼修復或新功能
- 協助測試與回饋（尤其在不同瀏覽器、螢幕閱讀器、RTL 語言下的表現）

## 開發環境

- Hugo >= 0.163.0（普通版即可，SCSS 由外部 Dart Sass 編譯）
- Dart Sass（需安裝並加入 PATH，Hugo 自動呼叫）

### 本機預覽

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` 已透過 `themesDir = "../../"` 指向主題根目錄，無需額外設定即可執行。建置正式版：

```bash
cd exampleSite
hugo --minify --gc
```

## 回報問題

提交 Issue 前請先搜尋是否已有類似問題。

請盡量提供：

- 你的環境（系統、Hugo 版本、瀏覽器等）
- 重現步驟
- 預期結果
- 實際結果
- 錯誤日誌或截圖（如果有）

無障礙相關的問題（鍵盤導覽、螢幕閱讀器、對比度、RTL 等）請註明使用的輔助技術與版本。

## 提交程式碼

1. Fork 本倉庫。

2. 複製你 Fork 後的倉庫：

   ```bash
   git clone https://github.com/你的使用者名稱/revrain.git
   cd revrain
   ```

3. 切換到 `dev` 分支：

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. 從 `dev` 建立你的分支：

   ```bash
   git checkout -b fix/問題描述
   ```

   分支名建議：

   - `feat/新功能`
   - `fix/修復問題`
   - `docs/文件更新`

5. 修改程式碼並提交：

   ```bash
   git add .
   git commit -m "fix: 修復了某個問題"
   ```

6. 推送到你的 Fork：

   ```bash
   git push origin fix/問題描述
   ```

7. 在 GitHub 上發起 Pull Request。

   **PR 目標分支一定要選 `dev`，不是 `main`。**

## Pull Request 要求

- 目標分支：`dev`
- 一個 PR 盡量只做一件事
- 說明改了什麼、為什麼改、怎麼測試
- 大改動建議先開 Issue 討論
- 不要提交無關的格式化或大範圍改動
- 不要提交密碼、密鑰、個人資訊
- 改動主題行為時，請同步更新 `README.md`（必要時更新 `lang/` 下的多語言文件）
- 修改樣式或腳本後，請用 `hugo server` 本機驗證，並確認在窄螢幕（行動端）下表現正常
- 新增或修改 UI 互動時，請保持現有無障礙約定：鍵盤可操作、可見焦點、`aria-*` 標籤、`prefers-reduced-motion` 支援

## Commit 資訊建議

推薦但不強制（保持現有提交風格）：

- `feat: 新功能`
- `fix: 修復問題`
- `docs: 文件更新`
- `test: 測試相關`
- `refactor: 重構`
- `chore: 雜項`

## 維護者發布流程

一般開發都在 `dev` 進行。
當 `dev` 測試穩定後，由維護者合併到 `main`，作為正式版發布。

## 交流方式

- 有問題請直接開 Issue，我們會盡快回覆
- 請友善交流，尊重不同意見

## 許可證

你的貢獻將按本專案的 MIT LICENSE 協議發布。詳見 [LICENSE](../LICENSE)。
