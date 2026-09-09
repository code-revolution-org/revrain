+++
title = '콘텐츠 구성'
date = 2026-09-09
draft = false
summary = '홈, 소개, 둘러보기, 섹션, 글 페이지의 front matter 항목과 디렉터리 규칙.'
description = 'revrain 테마 콘텐츠 구성 가이드: 각 페이지 유형의 front matter 항목과 디렉터리 구조.'
tags = ['revrain', 'hugo']
categories = ['튜토리얼']
+++

## 홈 페이지

`content/_index.md`는 제목, 부제, logo, 두 개의 버튼을 지원한다:

```toml
+++
title = "내 사이트"
subtitle = "내 사이트에 오신 것을 환영합니다"
logo = "/logo.png"
logo_alt = "사이트 logo"

[primary_button]
url = "/browse"
text = "둘러보기 시작"

[secondary_button]
url = "/about"
text = "소개"
+++

홈 페이지 본문, 버튼 아래 글래스 카드에 렌더링된다.
```

`logo`, `logo_alt`, 각 버튼은 모두 선택 사항이다. 생략하면 해당 요소가 표시되지 않는다.

## 소개 페이지

`content/about.ko.md`, `layout = "about"`을 선언한다:

```toml
+++
title = "소개"
layout = "about"
subtitle = "코드로 세상을 바꾼다"
avatar = "/avatar.png"
description = "페이지 SEO 설명"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar`, `links`는 선택 사항이다. `links`는 외부 링크 목록으로 렌더링되며 `target="_blank" rel="noopener"`가 자동으로 추가된다.

## 둘러보기 페이지

`content/browse.ko.md`, `layout = "directory"`를 선언하면 모든 섹션을 자동으로 나열한다:

```toml
+++
title = "둘러보기"
layout = "directory"
description = "모든 섹션과 글 둘러보기"
+++
```

## 섹션

섹션 인덱스 `content/posts/_index.md`, `summary`는 카드 목록에 표시된다:

```toml
+++
title = "글"
summary = "기술 공유, 생활 에세이 등 다양한 주제의 글 모음."
+++
```

## 글

`content/posts/my-post.ko.md`, 일반 글은 `layout` 지정이 불필요하다:

```toml
+++
title = "내 글"
date = 2026-09-09
draft = false
tags = ["기술", "hugo"]
categories = ["튜토리얼"]
summary = "글 요약, 카드 목록에 표시"
description = "SEO 설명, 미설정 시 자동으로 요약 사용"
+++

글 본문.
```

글 페이지는 사이드바 목차(TOC), 이동 경로, 이전/다음 글 탐색을 자동 렌더링한다. `summary`는 목록 카드에 쓰이고, `description`은 SEO용이며 미설정 시 `summary`가 자동 사용된다.
