# revrain

코드 혁명이 만든 Hugo 테마로, 개발자와 매니아를 위해 제작되었습니다.

[简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [English](../README.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 기능

- **디지털 비** — 매트릭스 스타일 캔버스 애니메이션, 완전히 구성 가능
- **글래스모피즘** — 안개 유리 카드, backdrop 블러 지원
- **다국어** — 11개 언어 지원, 언어 전환기 포함
- **SEO** — Open Graph, Twitter Card, JSON-LD 구조화 데이터, 브레드크럼 스키마
- **반응형** — 모바일 퍼스트, 4개 브레이크포인트 (488 / 768 / 1024 / 1280px)
- **구문 강조** — Hugo 내장 지원
- **수학 공식** — Hugo 서버 측 KaTeX 렌더링(transform.ToMath), 클라이언트 JS 불필요
- **다크 테마** — 개발자 최적화 색상 팔레트

## 빠른 시작

```toml
theme = "revrain"
```

## 설정

### 전역 매개변수

```toml
[params]
  logo = "/logo.png"          # 네비게이션 바 로고 (선택사항)
  favicon = "/favicon.ico"    # 브라우저 탭 아이콘 (선택사항)
  description = "..."         # SEO용 사이트 설명
  images = ["/og-image.png"]  # 기본 소셜 공유 이미지

[params.social]
  twitter = "username"        # Twitter 계정 (twitter:site용)
```

### 푸터

```toml
[params.footer]
  github = "https://github.com/username"
  rss = "/index.xml"
  copyright = "내 블로그 · 모든 권리 보유"  # 선택사항, 미설정 시 표시 안 함

  [[params.footer.links]]
    name = "링크 이름"
    url = "https://example.com"
```

**저작권 표시 동작:**
- 미설정 → 표시 안 함
- 설정됨 → `© 2026 내 블로그 · 모든 권리 보유`로 렌더링 (연도 자동 업데이트)
- 다국어 사이트: 언어별 개별 설정 (아래 참조)

### 디지털 비

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 문 흰색 문자 확률
  reset_chance = 0.025 # 비 리셋 확률
```

### 수학 공식

수학 공식은 빌드 시 Hugo에 내장된 KaTeX 엔진(`transform.ToMath`)으로 렌더링됩니다——클라이언트 측 JavaScript가 필요 없습니다. 설정에서 Goldmark passthrough 확장을 활성화하세요:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

콘텐츠에서 다음 구분 기호를 사용하세요:

- 인라인: `\(...\)`
- 블록: `$$...$$` 또는 `\[...\]`

**CDN 고지:** KaTeX 스타일시트(`katex.min.css` v0.17.0, `htmlAndMathml` 출력에 필수)는 jsDelivr CDN에서 로드되며 SRI(Subresource Integrity) 검증이 적용됩니다. KaTeX는 [MIT 라이선스](https://github.com/KaTeX/KaTeX/blob/main/LICENSE)(Copyright (c) 2013-2020 Khan Academy and other contributors)로 제공됩니다. 수학 공식이 포함된 페이지만 로드됩니다.

### 다국어

언어별 저작권 설정:

```toml
[languages.en-US]
  label = "English"
  weight = 10
  [languages.en-US.params.footer]
    copyright = "My Blog · All Rights Reserved"

[languages.ko]
  label = "한국어"
  weight = 20
  [languages.ko.params.footer]
    copyright = "내 블로그 · 모든 권리 보유"
```

### 메뉴

```toml
[[menus.main]]
  name = "Home"
  identifier = "menu_home"  # i18n key (선택사항)
  pageRef = "/"
  weight = 10
```

## 콘텐츠

### 홈페이지

```markdown
+++
title = "내 사이트"
subtitle = "내 사이트에 오신 것을 환영합니다"
logo = "/logo.png"
logo_alt = "사이트 로고"

[primary_button]
  url = "/browse"
  text = "시작하기"

[secondary_button]
  url = "/about"
  text = "소개"
+++
```

### 소개 페이지

```markdown
+++
title = "소개"
layout = "about"
subtitle = "코드로 세상을 바꾸다"
avatar = "/avatar.png"

links = [
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++
```

### 글

```markdown
+++
title = "내 글"
date = 2025-01-15
draft = false
tags = ["기술", "hugo"]
categories = ["튜토리얼"]
summary = "글 요약"
description = "SEO 설명"
+++
```

### 브라우즈 페이지

```markdown
+++
title = "브라우즈"
layout = "directory"
+++
```

## 색상 시스템

| 이름 | 색상 값 | 용도 |
|------|---------|------|
| 어비스 블랙 | `#0A0A0F` | 배경색 |
| 레인 그린 | `#00D4AA` | 강조색, 디지털 비, 링크 |
| 트와일라이트 | `#8B92A8` | 보조 텍스트, 테두리 |
| 문 화이트 | `#E8EAF0` | 주요 텍스트, 제목 |
| 쉬라우드 | `#2A2A35` | 유리 패널, 테두리 |

## 폰트 스택

CJK 폴백이 포함된 시스템 폰트 사용:

- 라틴어: Inter, Noto Sans
- 중국어: Noto Sans SC/TC, Source Han Sans
- 일본어: Noto Sans JP, Source Han Sans JP
- 한국어: Noto Sans KR, Nanum Gothic
- 아랍어: Noto Sans Arabic
- 키릴 문자: Noto Sans

## 최소 요구사항

- Hugo Extended >= 0.156.0
- Dart Sass（SCSS 컴파일에 필요）

## 라이선스

MIT 라이선스. 자세한 내용은 [LICENSE](../LICENSE) 참조.
