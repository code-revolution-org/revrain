+++
title = '시작하기'
date = 2026-09-09
draft = false
summary = 'revrain 테마를 설치하고 활성화하며, 최소 구성으로 로컬 미리보기를 시작한다.'
description = 'revrain 테마 시작 가이드: 사전 요구 사항, 테마 활성화, 최소 구성과 로컬 미리보기.'
tags = ['revrain', 'hugo']
categories = ['튜토리얼']
+++

## 사전 요구 사항

- Hugo ≥ 0.163.0(일반 버전 가능. IsBranch API는 v0.163.0 이상 필요)
- Dart Sass를 설치하고 PATH에 추가(SCSS 컴파일에 필요. Hugo가 자동으로 호출)

## 테마 설치

### 방법 1: Git 서브모듈(권장)

```bash
git submodule add https://github.com/code-revolution-org/revrain.git themes/revrain
```

### 방법 2: Hugo Modules(Git 및 Go 1.18+ 필요)

```bash
hugo mod init <모듈 이름>
hugo mod get github.com/code-revolution-org/revrain
```

사이트 설정에서 임포트를 선언합니다:

```toml
[module]
  [[module.imports]]
    path = 'github.com/code-revolution-org/revrain'
```

### 방법 3: 다운로드 또는 클론

[GitHub Releases](https://github.com/code-revolution-org/revrain/releases)에서 소스 ZIP을 다운로드하거나 `themes/revrain`에 클론합니다:

```bash
git clone https://github.com/code-revolution-org/revrain.git themes/revrain
```

## 테마 활성화

사이트 설정 `hugo.toml`에서 설정한다:

```toml
theme = "revrain"
```

이 테마 저장소의 `exampleSite`를 시작점으로 사용할 경우, `themesDir`을 테마의 상위 디렉터리로 설정한다:

```toml
theme = "revrain"
themesDir = "../../"
```

## 최소 구성

```toml
baseURL = 'https://example.org/'
defaultContentLanguage = 'zh-CN'
theme = "revrain"
enableRobotsTXT = true

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '내 사이트'
    weight = 10
```

`hugo.toml`로 저장하면 사용을 시작할 수 있다. 테마의 기본 언어는 간체 중국어다. `defaultContentLanguage`를 자신의 언어로 바꿀 수 있다.

## 로컬 미리보기

```bash
hugo server
```

브라우저로 `http://localhost:1313/`을 연다. 기본 언어는 간체 중국어다.

## 첫 글 작성

```bash
hugo new content posts/my-first-post.ko.md
```

생성된 파일은 `archetypes/default.md` 템플릿을 따른다. front matter와 본문을 편집해 저장하면 `hugo server`가 자동으로 핫 리로드한다.

`draft = true`인 글은 기본적으로 출력되지 않는다. 게시 전 `false`로 설정하라.
