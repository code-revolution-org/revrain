+++
title = '수식'
date = 2026-09-09
draft = false
summary = 'Hugo 내장 KaTeX로 빌드 시 서버 측에서 수식을 렌더링, 클라이언트 JS 불필요.'
description = 'revrain 테마 수식 가이드: passthrough 설정, 구분자와 서버 측 렌더링.'
tags = ['revrain', 'hugo']
categories = ['튜토리얼']
+++

## passthrough 활성화

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## 구분자

행 내 수식은 `\(...\)`를 사용한다:

```md
이것은 행 내 수식 \(a^2 + b^2 = c^2\)의 예이다.
```

블록 수식은 `\[...\]` 또는 `$$...$$`를 사용한다:

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

`$...$`는 사용하지 마라. Markdown 텍스트의 통화 기호와 충돌할 수 있다.

## 렌더링 방식

수식은 빌드 시 Hugo 내장 KaTeX(`transform.ToMath`)로 서버 측 렌더링되어 HTML + MathML이 된다. 클라이언트 측 JavaScript는 불필요하다. KaTeX 스타일시트(`katex.min.css` v0.17.0)는 jsDelivr CDN에서 하위 자원 무결성(SRI) 검증과 함께 로드되며, 수식을 포함한 페이지에서만 로드된다.
