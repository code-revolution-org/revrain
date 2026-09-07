# revrain

[Code Revolution](https://github.com/code-revolution-org)이 개발한 Hugo 테마. 개발자와 극(極)커를 위해 만들어졌습니다. 다크 톤 디자인에 디지털 레인과 글라스모피즘 비주얼을 결합했습니다.

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## 특징

- **디지털 레인** — 매트릭스 스타일 Canvas 애니메이션. 문자 집합, 글꼴 크기, 문백색 확률, 리셋 확률을 모두 설정할 수 있습니다. 시스템의 "동작 줄이기" 설정을 따르며(정적 프레임만 그림), 저사양 기기에서는 자동으로 프레임을 건너뜁니다
- **글라스모피즘** — backdrop-filter 블러로 만든 젖빛 유리 카드
- **다국어** — 11개 언어 내장, 키보드로 조작 가능한 언어 전환 드롭다운(방향키, Home/End, Esc)
- **SEO** — description / robots / canonical / hreflang 대체 링크, 페이지네이션 rel=prev/next, Open Graph, Twitter Card, JSON-LD 구조화 데이터(WebSite / Article), 브레드크럼 Schema
- **반응형** — 모바일 우선, 4개 중단점(480 / 768 / 1024 / 1280px)
- **코드 하이라이트** — Hugo 내장 지원
- **수식 지원** — 빌드 시 Hugo 내장 KaTeX(`transform.ToMath`)로 서버 사이드 렌더링. 클라이언트 JS 불필요
- **다크 테마** — 개발자용으로 최적화된 색상(5개 이미지 컬러)
- **접근성** — WCAG 2.2 AA 정렬: 본문으로 건너뛰기 링크, ARIA 랜드마크·레이블, 키보드 내비게이션, 가시 포커스, prefers-reduced-motion 지원, RTL 레이아웃(아랍어)
- **RSS** — 홈과 섹션에서 RSS 피드 생성
- **목차** — 사이드바 TOC, 스크롤 시 현재 제목 강조, 중첩 항목 접기 가능
- **서버 사이드 페이지네이션** — 섹션, 분류, 태그 클라우드 모두 서버 사이드

## 빠른 시작

사이트 설정에서 테마 활성화:

```toml
theme = "revrain"
```

## 설정

### 전역 매개변수

```toml
[params]
  logo = "/logo.png"          # 내비게이션 바 logo(선택)
  description = "..."         # 사이트 설명, SEO용
  images = ["/og-image.png"]  # 기본 소셜 공유 이미지

[params.social]
  twitter = "username"        # Twitter 계정, twitter:site용

[params.favicons]             # 브라우저 탭 아이콘(모두 선택)
  svg = "/favicon.svg"                # SVG 벡터 아이콘
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # iOS 홈 화면 아이콘
```

**favicon 검색 체인:** 각 항목은 *설정 경로 → `static/`의 규약 파일명 → 생략* 순으로 확인됩니다. 아무것도 설정되어 있지 않거나 파일이 없으면 빈 `data:` URI를 출력해 브라우저의 기본 `/favicon.ico` 요청을 억제합니다(404 방지). 경로는 외부 URL 또는 사이트 상대 경로를 쓸 수 있습니다.

### 푸터

```toml
[params.footer]
  github = "https://github.com/username"          # GitHub 링크(선택)
  copyright = "내 블로그 · 판권 소유"               # 저작권 표시(선택, 미설정 시 숨김)

  [[params.footer.links]]                         # 링크 그룹(선택)
    name = "링크 이름"
    identifier = "friendly_links"                 # 선택: i18n key, 있으면 번역 우선
    url = "https://example.com"
```

**저작권 표시 동작:**
- 미설정 → 표시하지 않음
- 설정 → `© <현재 연도> <내용>`으로 렌더링(연도 자동 갱신)
- 다국어 사이트: 언어별로 개별 설정 가능("다국어" 참조)

### 디지털 레인

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # 문백색 문자 확률(0–1)
  reset_chance = 0.025 # 빗방울 리셋 확률(0–1)
```

### 수식

수식은 빌드 시 Hugo 내장 KaTeX 엔진(`transform.ToMath`)으로 HTML + MathML로 렌더링되며 클라이언트 JS가 필요 없습니다. 설정에서 Goldmark passthrough 확장을 활성화:

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

콘텐츠에서 다음 구분자를 사용:

- 인라인: `\(...\)`
- 블록: `$$...$$` 또는 `\[...\]`

**CDN 공지:** KaTeX 스타일시트(`katex.min.css` v0.17.0, `htmlAndMathml` 출력에 필수)는 jsDelivr CDN에서 Subresource Integrity(SRI) 검증과 함께 로드됩니다. KaTeX는 [MIT 라이선스](https://github.com/KaTeX/KaTeX/blob/main/LICENSE)입니다. 수식이 포함된 페이지에서만 로드됩니다.

### 다국어

프로젝트는 11개 언어를 지원하며 기본 언어는 간체 중국어입니다. 각 언어에서 `label`(표시 이름), `locale`(RFC 5646), `title`(사이트 제목), `weight`(정렬, 오름차순) 및 언어별 매개변수를 설정할 수 있습니다:

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
    direction = 'rtl'   # 아랍어는 오른쪽에서 왼쪽 레이아웃
    title = 'موقعي'
    weight = 30
```

콘텐츠는 파일 이름 접미사로 언어가 지정됩니다. 접미사는 소문자여야 합니다(예: `about.en-us.md`, `about.zh-cn.md`). 접미사가 없는 파일은 기본 언어에 속합니다.

### 메뉴

```toml
[[menus.main]]
  name = "홈"
  identifier = "menu_home"  # i18n key(선택), 있으면 번역 우선
  pageRef = "/"
  weight = 10
```

## 콘텐츠

### 홈페이지

홈페이지는 `_index.md`를 사용하며 다음 front matter를 지원:

```markdown
+++
title = "내 사이트"            # 페이지 제목
subtitle = "내 사이트에 오신 것을 환영합니다"  # 제목 아래에 표시되는 부제목
logo = "/logo.png"           # 히어로 로고(선택)
logo_alt = "사이트 logo"       # 로고 대체 텍스트(접근성)

[primary_button]             # 기본 버튼
  url = "/browse"
  text = "시작하기"

[secondary_button]           # 보조 버튼
  url = "/about"
  text = "소개"
+++

홈페이지 본문. 버튼 아래 글라스 카드에 렌더링됩니다.
```

### 소개 페이지

`layout = "about"`을 사용하는 독립 페이지:

```markdown
+++
title = "소개"                # 페이지 제목
layout = "about"             # about 레이아웃 사용
subtitle = "코드로 세상을 바꾸다"  # 부제목
avatar = "/avatar.png"       # 아바타 이미지(선택)
description = "사이트 설명, SEO용"  # SEO 설명

links = [                    # 소셜·외부 링크(선택)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

소개 페이지 본문.
```

### 글

일반 글(섹션 디렉터리 안)은 다음 front matter를 지원:

```markdown
+++
title = "내 글"                # 글 제목
date = 2025-01-15            # 발행일
draft = false                # 임시 글: true면 빌드에서 제외
tags = ["기술", "hugo"]      # 태그(선택)
categories = ["튜토리얼"]     # 분류(선택)
summary = "글 요약. 카드 목록에 표시"  # 목록 요약
description = "SEO 설명. 미설정 시 요약 자동 사용"  # SEO 설명
+++

글 본문.
```

### 둘러보기 페이지

`layout = "directory"`를 사용해 모든 섹션 표시:

```markdown
+++
title = "둘러보기"            # 페이지 제목
layout = "directory"         # 디렉터리 레이아웃 사용
description = "모든 섹션과 글 둘러보기"  # SEO 설명
+++
```

### 섹션

각 섹션은 `_index.md`로 정의하며 `summary`는 카드 목록에 표시됩니다:

```markdown
+++
title = '글'                  # 섹션 제목
summary = '기술 공유, 생활 에세이 등 다양한 주제의 글 모음.'  # 카드 목록에 표시되는 요약
+++
```

## 접근성(WCAG 2.2)

- 본문으로 건너뛰기 링크(내비게이션 건너뜀, WCAG 2.4.1)
- ARIA 랜드마크·레이블: 메인 내비게이션, 푸터 내비게이션, 페이지 내비게이션, 언어 전환(role=listbox)
- 언어 전환 전체 키보드 지원: 방향키로 포커스 이동, Home/End로 처음/끝, Esc로 닫기
- 모바일 메뉴 버튼에 `aria-expanded` / `aria-controls` 노출
- 디지털 레인 캔버스는 보조 기술에서 숨겨지며(`aria-hidden`, 순수 장식) prefers-reduced-motion을 따름
- TOC 스크롤 강조와 접기는 모두 키보드로 조작 가능
- 아랍어(ar)는 자동으로 RTL 레이아웃
- 가시 포커스 스타일, prefers-reduced-motion 전역 지원

## 색상 시스템

| 이름 | 색상값 | 용도 |
|------|------|------|
| 어비스 블랙 Abyss Black | `#0A0A0F` | 배경색 |
| 레인 그린 Rain Green | `#00D4AA` | 강조색, 디지털 레인, 링크 |
| 트와일라잇 Twilight | `#8B92A8` | 보조 텍스트, 테두리 |
| 문 화이트 Moon White | `#E8EAF0` | 주요 텍스트, 제목 |
| 슈라우드 Shroud | `#2A2A35` | 글라스 패널, 테두리 |

## 글꼴 스택

테마가 지원하는 모든 언어를 아우르는 오픈소스 시스템 글꼴:

- 라틴: Inter, Noto Sans
- 중국어: Noto Sans SC/TC, Source Han Sans SC/TC
- 일본어: Noto Sans JP, Source Han Sans JP
- 한국어: Noto Sans KR, Source Han Sans KR, Nanum Gothic
- 아랍어: Noto Sans Arabic, Noto Naskh Arabic
- 키릴 문자: Noto Sans

## 최소 요구 사항

- Hugo Extended >= 0.156.0
- Dart Sass(SCSS 컴파일 필수)

## 라이선스

MIT 라이선스. 자세한 내용은 [LICENSE](../LICENSE) 참조.

