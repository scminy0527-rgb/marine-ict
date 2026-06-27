# 프로젝트 지침

일정한 스타일로 페이지 만들기

## 스타일 관련

폰트 스타일은 D:\dev\workspace\react\rian\src\styles\ 디렉토리 하위에 보관되어있음

텍스트는 D:\dev\workspace\react\rian\src\styles\common.js 을 참고 하여 적절한 텍스트를 골라서 쓰기

컴포넌트 스타일 디렉토리 파일 내에 있는 텍스트 스타일 사용 (스타일 컴포넌트 정의 시 | 특히 텍스트 스타일, 색상 등은 하드코딩 금지)
단 사용하고자 하는 색상 등의 스타일이 theme 에 정의되지 않았다면 정의 후 불러와서 사용 (유지보수성 강화)

- D:\dev\workspace\react\rian\src\styles\theme.js
- D:\dev\workspace\react\rian\src\styles\common.js

### 스타일 컴포넌트 작성 시 재사용성 가이드

**스타일 컴포넌트 작성 전 필수 확인:**

만약 새롭게 정의해서 사용하고 싶은 스타일이 있다면 src/styles 디렉토리에 정의 가능 (그래야 재사용 가능)

### 스타일 컴포넌트 Props Interpolation

Props Interpolation - styled-components에서 ${} 문법으로 props를 동적 스타일 값에 전달하는 방식 사용해야함. Transient Props($ 접두사)로 DOM 오염 방지.

## Marine ICT 디자인 테마 및 시스템

### 🎨 색상 팔레트

**Primary Colors (핵심 색상)**
- Primary: `#00c8ff` - 밝은 시안 (강조 및 주요 요소)
- Primary Light: `#00aaff` - 표준 시안 (텍스트, 아이콘)
- Secondary: `#00e5c8` - 터콰이즈 (대체 강조, 진행도)
- Tertiary: `#7ec8ff` - 라이트 시안 (3번째 강조)

**Background & Neutral**
- Background: `#030810` - 깊은 검정색 (모든 배경)
- Text Primary: `#d0e8ff` - 밝은 파란-백색
- Text Secondary: `rgba(160, 200, 240, 0.6)` - 약한 파란색 (부가 텍스트)
- White: `#ffffff` (헤더 텍스트)

**Overlay & Borders**
- Border Light: `rgba(0, 155, 255, 0.4)`
- Border Medium: `rgba(0, 200, 255, 0.3)`
- Overlay Dark: `rgba(4, 13, 28, 0.98)`

### 📝 타이포그래피

**폰트**
- 헤더: `Orbitron` (futuristic, 굵기: 400, 600, 800)
  - 로고, 섹션 라벨, 큰 제목, 통계 숫자
- 본문: `Noto Sans KR` (굵기: 300, 400, 500, 700)
  - 일반 텍스트, 카드 제목, 설명

**크기 및 스타일**
```
- Hero Title: 62px, weight 700, line-height 1.15
- Section Headline: 50px, weight 700, line-height 1.2
- Card Title: 21px, weight 700
- Body Text: 17px, weight 300, line-height 1.9
- Small Label: 10px, Orbitron, letter-spacing 5px
```

### ✨ 애니메이션 및 효과

**CSS Animations (global.js에 정의됨)**
- `rotateRing` - 시계 방향 회전 (60s)
- `counterRing` - 반시계 방향 회전
- `glowPulse` - 부드러운 발광 맥동
- `shimmerText` - 텍스트 반짝임 효과 (그래디언트)
- `floatY` - 상하 부유 움직임
- `fadeInUp` - Fade in + translateY 동시 효과
- `dataDot` - 선을 따라 이동하는 점
- `blink` - 점멸 효과
- `scanDrop` - 위에서 아래로 스캔 드롭
- `borderGlow` - 테두리 발광

**사용 규칙**
```javascript
animation: rotateRing 60s linear infinite;
animation: glowPulse 3s ease-in-out infinite;
animation: floatY 4s ease-in-out infinite;
```

### 🏗️ 섹션 레이아웃

**공통 구조**
```
Section
├── Background Effects (GridPattern, AmbientGlow)
├── EdgeFades (위/아래)
└── Container (max-width: 1240px, padding: 0 56px)
    ├── SectionLabel (Orbitron)
    ├── Headline
    ├── Content
    └── [Optional] Stats/Additional Info
```

**섹션 패딩**
- 수평: `56px` (양측)
- 수직: Hero `80px`, AI/Tech `120px-130px`
- 섹션 간: `130px-140px` (상하단)

### 🎯 컴포넌트 가이드

**Card Component**
```javascript
const Card = styled.div`
  background: rgba(4, 13, 28, 0.9);
  border: 1px solid rgba(0, 155, 255, 0.18);
  padding: 48px 44px;
  
  &::before {  // 좌측 색상 바
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #00aaff, transparent);
  }
`;
```

**Button Component**
- Primary: 그래디언트 배경 + 밝은 시안 테두리
- Secondary: 투명 배경 + 약한 테두리
- Hover: 테두리 색상 밝아짐 + 그로우 효과

```javascript
box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
transition: all 0.25s;
```

**Badge/Label**
- Font: `Orbitron 10px`
- Color: `#00aaff`
- Letter-spacing: `5px` (섹션 라벨), `3px` (로고)

### 🎬 인터랙션 패턴

**Reveal Animation (스크롤 시 나타남)**
- IntersectionObserver 사용
- 초기: opacity 0, translateY(28px)
- 최종: opacity 1, translateY(0)
- Duration: 0.75s ease
- Stagger: data-delay 속성으로 순차 애니메이션

```javascript
<div data-reveal="true" data-delay="0">Label</div>
<div data-reveal="true" data-delay="100">Headline</div>
<div data-reveal="true" data-delay="180">Description</div>
```

**Stat Counter Animation**
- 숫자 카운팅 애니메이션
- Duration: 1600ms
- Easing: cubic-out (ease-out 3제곱)
- 요소별로 IntersectionObserver로 트리거

### 📐 네비게이션 (고정)

```
NavBar
├── Logo (34x34 회전 테두리 박스 + 닷)
├── Title & Subtitle
└── Nav Links (gap: 40px) + Contact Button
```

- Height: `68px`
- Background: `rgba(3, 8, 16, 0.85)` + `blur(16px)`
- Border-bottom: `1px solid rgba(0, 150, 255, 0.1)`
- Position: fixed, z-index: 100

### 🎨 배경 효과

**Neural Canvas (배경)**
- 72개의 움직이는 노드
- 노드 간 거리 155px 이내 시 선 연결
- 주기적 밝기 변화
- z-index: 0 (모든 콘텐츠 뒤)

**Section Backgrounds**
- Grid Pattern: `linear-gradient (64px 격자)`
- Ambient Glow: `radial-gradient (타원형)`
- Edge Fades: 위/아래 그래디언트 (섹션 구분)

### ✅ 새로운 페이지 생성 체크리스트

1. **스타일 정의**
   - 테마 색상만 사용 (theme.js 참고)
   - 새 색상 필요 시 theme.js에 먼저 추가

2. **레이아웃**
   - max-width 1240px 유지
   - 수평 padding 56px
   - Section 간 130px+ 수직 간격

3. **타이포그래피**
   - 헤더: Orbitron
   - 본문: Noto Sans KR
   - common.js의 mixin 활용

4. **애니메이션**
   - global.js의 keyframes 재사용
   - 필요한 새 애니메이션만 추가

5. **인터랙션**
   - Reveal animation 적용 (data-reveal, data-delay)
   - Hover 효과 (0.25s-0.3s transition)

6. **컴포넌트 구조**
   - Navigation 사용 (고정)
   - Section > Container > Content 구조
   - Footer 사용

## Claude Design 으로 만든페이지 샘플
