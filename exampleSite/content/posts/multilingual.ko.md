+++
title = '다국어'
date = 2026-09-09
draft = false
summary = '다국어 사이트 설정: 기본 언어, 언어 정의, 콘텐츠 파일 명명과 언어별 매개변수.'
description = 'revrain 테마 다국어 가이드: 기본 언어, 언어 정의, 파일명 접미사와 언어별 매개변수.'
tags = ['revrain', 'hugo']
categories = ['튜토리얼']
+++

## 기본 언어

```toml
defaultContentLanguage = 'zh-CN'
```

언어 접미사가 없는 콘텐츠 파일은 기본 언어에 귀속된다.

## 언어 정의

```toml
[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '내 사이트'
    weight = 10

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'
    title = 'موقعي'
    weight = 30
```

- `label`: 언어 전환기 표시명
- `locale`: RFC 5646 언어 태그, `<html lang>`과 hreflang에 사용
- `weight`: 오름차순으로 전환기 정렬 순서 결정
- `direction = "rtl"`: 아랍어는 자동으로 오른쪽에서 왼쪽 레이아웃 활성화

## 콘텐츠 파일 명명

언어는 파일명 접미사로 구별하며, **접미사는 소문자여야 한다**:

| 파일 | 언어 |
| --- | --- |
| `about.zh-cn.md` | 简体中文 |
| `about.en-us.md` | English |
| `about.ar.md` | العربية |

기본 언어는 접미사를 생략할 수 있다. 예를 들어 기본이 `zh-CN`일 때 `about.md`는 `about.zh-cn.md`와 동등하다.

같은 섹션에서 같은 이름·다른 접미사의 파일은 자동으로 번역으로 연결되며, 테마는 해당 hreflang 교대 링크를 출력한다.

## 언어별 매개변수

언어마다 매개변수를 개별 설정할 수 있다. 예를 들어 푸터 저작권:

```toml
[languages.zh-CN.params.footer]
  copyright = "내 블로그 · 모든 권리 보유"

[languages.en-US.params.footer]
  copyright = "My Blog · All Rights Reserved"
```

언어 전환기는 드롭다운 메뉴로, 키보드 조작을 지원한다: 방향키로 포커스 이동, `Home`/`End`로 처음/끝으로, `Esc`로 닫기.
