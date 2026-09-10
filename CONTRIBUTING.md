# 贡献指南

感谢你有兴趣为 revrain 做贡献！欢迎报告问题、改进文档或提交代码。

revrain 是一个 Hugo 主题，专为极客和开发者打造：深色设计、数字雨动画、毛玻璃风格，支持 11 种语言并对齐 WCAG 2.2 AA 无障碍标准。你的每一份贡献都很珍贵。

## 分支说明

本仓库主要有两个分支：

- `main`：正式版 / 稳定版。只由维护者从 `dev` 合并发布，**不接受直接 PR**。
- `dev`：开发分支。所有功能、修复、文档改动，请都提交到 `dev`。

> 重要：提交 Pull Request 时，目标分支请选择 `dev`，不要选择 `main`。

## 你可以如何贡献

- 报告 Bug
- 提出新功能建议
- 改进文档（含 `lang/` 下的多语言 README 翻译）
- 提交代码修复或新功能
- 帮助测试和反馈（尤其在不同浏览器、屏幕阅读器、RTL 语言下的表现）

## 开发环境

- Hugo >= 0.163.0（普通版即可，SCSS 由外部 Dart Sass 编译）
- Dart Sass（需安装并加入 PATH，Hugo 自动调用）

### 本地预览

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` 已通过 `themesDir = "../../"` 指向主题根目录，无需额外配置即可运行。构建生产版本：

```bash
cd exampleSite
hugo --minify --gc
```

## 报告问题

提交 Issue 前请先搜索是否已有类似问题。

请尽量提供：

- 你的环境（系统、Hugo 版本、浏览器等）
- 复现步骤
- 期望结果
- 实际结果
- 错误日志或截图（如果有）

无障碍相关的问题（键盘导航、屏幕阅读器、对比度、RTL 等）请注明使用的辅助技术与版本。

## 提交代码

1. Fork 本仓库。

2. 克隆你 Fork 后的仓库：

   ```bash
   git clone https://github.com/你的用户名/revrain.git
   cd revrain
   ```

3. 切换到 `dev` 分支：

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. 从 `dev` 创建你的分支：

   ```bash
   git checkout -b fix/问题描述
   ```

   分支名建议：

   - `feat/新功能`
   - `fix/修复问题`
   - `docs/文档更新`

5. 修改代码并提交：

   ```bash
   git add .
   git commit -m "fix: 修复了某个问题"
   ```

6. 推送到你的 Fork：

   ```bash
   git push origin fix/问题描述
   ```

7. 在 GitHub 上发起 Pull Request。

   **PR 目标分支一定要选 `dev`，不是 `main`。**

## Pull Request 要求

- 目标分支：`dev`
- 一个 PR 尽量只做一件事
- 说明改了什么、为什么改、怎么测试
- 大改动建议先开 Issue 讨论
- 不要提交无关的格式化或大范围改动
- 不要提交密码、密钥、个人信息
- 改动主题行为时，请同步更新 `README.md`（必要时更新 `lang/` 下的多语言文档）
- 修改样式或脚本后，请用 `hugo server` 本地验证，并确认在窄屏（移动端）下表现正常
- 新增或修改 UI 交互时，请保持现有无障碍约定：键盘可操作、可见焦点、`aria-*` 标签、`prefers-reduced-motion` 支持

## Commit 信息建议

推荐但不强制（保持现有提交风格）：

- `feat: 新功能`
- `fix: 修复问题`
- `docs: 文档更新`
- `test: 测试相关`
- `refactor: 重构`
- `chore: 杂项`

## 维护者发布流程

普通开发都在 `dev` 进行。
当 `dev` 测试稳定后，由维护者合并到 `main`，作为正式版发布。

## 交流方式

- 有问题请直接开 Issue，我们会尽快回复
- 请友善交流，尊重不同意见

## 许可证

你的贡献将按本项目的 MIT LICENSE 协议发布。详见 [LICENSE](LICENSE)。
