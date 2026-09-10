# Changelog

이 프로젝트의 모든 중요한 변경 사항은 이 파일에 기록됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)을 기반으로 하며, 버전 번호는 [시맨틱 버저닝](https://semver.org/lang/ko/)을 따릅니다.

## [미출시]

## [v0.0.1] - 2026-09-10

revrain의 첫 공식 릴리스.

### Added

- **테마 프레임워크**: 홈, 소개, 둘러보기, 404 페이지와 문서/섹션 템플릿을 포함한 완전한 다크 Hugo 테마
- **디지털 레인**: 매트릭스 스타일 Canvas 애니메이션. 문자 집합, 글꼴 크기, 월백색 확률, 리셋 확률을 모두 설정할 수 있습니다. 시스템의 "동작 줄이기" 설정을 따르며(정적 프레임만 그림), 저사양 기기에서는 자동으로 프레임을 건너뜁니다
- **글라스모피즘**: backdrop-filter 블러를 사용한 서리 낀 유리 카드
- **다국어**: 11개 언어 내장(zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), 기본값은 중국어 간체. 키보드로 조작 가능한 언어 전환기(방향키, Home/End, Esc)
- **SEO**: description / robots / canonical / hreflang 대체 링크, 페이지네이션 rel=prev/next, Open Graph, Twitter Card, JSON-LD 구조화 데이터(WebSite / Article), 브레드크럼 스키마, og:image 조회 체인과 커버 리소스 자동 발견
- **접근성(WCAG 2.2 AA)**: 본문으로 건너뛰기 링크, ARIA 랜드마크와 레이블, 키보드 탐색, 가시 포커스, prefers-reduced-motion 지원, 아랍어 RTL 미러 레이아웃
- **반응형**: 모바일 우선, 4개 중단점(480 / 768 / 1024 / 1280px)
- **수식 지원**: 빌드 시 Hugo 내장 KaTeX(`transform.ToMath`)로 서버 측 렌더링. 클라이언트 JS 불필요
- **구문 강조**: Hugo 내장 지원
- **RSS**: 홈과 섹션의 피드, 여러 작성자 정보와 스마트 구독 진입점 지원
- **분류법**: 태그/카테고리 클라우드. 서버 측 페이지네이션 사용
- **목차(TOC)**: 사이드바 목차, 스크롤 추적 하이라이트, 접을 수 있는 중첩 항목
- **내비게이션**: 브레드크럼, 이전/다음 글 버튼, 뒤로 가기 버튼
- **favicon**: 표준 멀티포맷 아이콘 세트(SVG / 16 / 32 / apple-touch)와 3단계 폴백 체인
- **폰트 시스템 스택**: 테마가 지원하는 모든 언어를 아우르는 오픈소스 폰트(라틴, CJK, 아랍어, 키릴)
- **배포**: GitHub Actions 자동 빌드 및 GitHub Pages 배포
- **예제 사이트**: 11개 언어의 홈/소개/둘러보기/섹션 페이지와 5개의 다국어 튜토리얼 문서
- **최소 요구 사항**: Hugo >= 0.163.0(일반 버전 가능), Dart Sass

[미출시]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
