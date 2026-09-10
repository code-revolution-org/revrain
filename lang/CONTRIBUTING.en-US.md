# Contributing Guide

Thank you for your interest in contributing to revrain! We welcome bug reports, documentation improvements, and code contributions.

revrain is a Hugo theme built for geeks and developers: dark-first design with a digital rain animation and glassmorphism aesthetic, supporting 11 languages and aligned with the WCAG 2.2 AA accessibility standard. Every contribution you make is valuable.

## Branches

This repository has two main branches:

- `main`: Stable / production branch. Merged and released only by maintainers from `dev`. **Direct PRs are not accepted.**
- `dev`: Development branch. All features, fixes, and documentation changes should target `dev`.

> Important: when opening a Pull Request, select `dev` as the target branch, not `main`.

## Ways to Contribute

- Report bugs
- Suggest new features
- Improve documentation (including the multilingual README translations under `lang/`)
- Submit code fixes or new features
- Help with testing and feedback (especially across browsers, screen readers, and RTL languages)

## Development Environment

- Hugo >= 0.163.0 (any edition; SCSS is compiled by the external Dart Sass)
- Dart Sass (must be installed and on your PATH; Hugo invokes it automatically)

### Local Preview

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` already points to the theme root via `themesDir = "../../"`, so no extra setup is needed. To build the production version:

```bash
cd exampleSite
hugo --minify --gc
```

## Reporting Issues

Before opening an Issue, please search to see whether a similar issue already exists.

Please provide as much of the following as possible:

- Your environment (OS, Hugo version, browser, etc.)
- Steps to reproduce
- Expected result
- Actual result
- Error logs or screenshots (if any)

For accessibility-related issues (keyboard navigation, screen readers, contrast, RTL, etc.), please mention the assistive technology and its version.

## Submitting Code

1. Fork this repository.

2. Clone your fork:

   ```bash
   git clone https://github.com/your-username/revrain.git
   cd revrain
   ```

3. Switch to the `dev` branch:

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. Create your branch from `dev`:

   ```bash
   git checkout -b fix/issue-description
   ```

   Suggested branch names:

   - `feat/feature-name`
   - `fix/issue-description`
   - `docs/documentation-update`

5. Make your changes and commit:

   ```bash
   git add .
   git commit -m "fix: fix a specific issue"
   ```

6. Push to your fork:

   ```bash
   git push origin fix/issue-description
   ```

7. Open a Pull Request on GitHub.

   **The PR target branch must be `dev`, not `main`.**

## Pull Request Requirements

- Target branch: `dev`
- One PR should ideally do one thing
- Explain what was changed, why, and how it was tested
- For large changes, open an Issue to discuss first
- Do not include unrelated formatting or large-scale changes
- Do not commit passwords, secrets, or personal information
- When changing theme behavior, update `README.md` accordingly (and the multilingual docs under `lang/` when necessary)
- After modifying styles or scripts, verify locally with `hugo server` and confirm it works well on narrow (mobile) screens
- When adding or changing UI interactions, keep the existing accessibility conventions: keyboard operable, visible focus, `aria-*` labels, and `prefers-reduced-motion` support

## Commit Message Suggestions

Recommended but not required (keep the existing commit style):

- `feat: new feature`
- `fix: bug fix`
- `docs: documentation update`
- `test: tests`
- `refactor: refactoring`
- `chore: misc`

## Maintainer Release Process

Regular development happens on `dev`.
Once `dev` is stable after testing, maintainers merge it into `main` and release it as a production version.

## Communication

- Please open an Issue for any questions; we will reply as soon as possible
- Be kind and respectful of differing opinions

## License

Your contributions will be released under the project's MIT LICENSE. See [LICENSE](../LICENSE).
