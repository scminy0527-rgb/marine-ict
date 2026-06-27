import styled from "styled-components";

const Page = styled.div`
  background: #030810;
  color: #d0e8ff;
  min-height: 100vh;
  padding: 100px 56px 80px;
  max-width: 1240px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: Orbitron;
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 60px;
  letter-spacing: 2px;
`;

const SectionTitle = styled.h2`
  font-family: Orbitron;
  font-size: 28px;
  font-weight: 600;
  color: #00aaff;
  margin: 60px 0 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 150, 255, 0.2);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const ColorBox = styled.div`
  background: ${(props) => props.color};
  border: 1px solid rgba(0, 150, 255, 0.3);
  padding: 24px;
  border-radius: 4px;
  text-align: center;
`;

const ColorName = styled.div`
  font-family: Orbitron;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: 2px;
`;

const ColorCode = styled.div`
  font-size: 12px;
  color: rgba(160, 200, 240, 0.6);
  font-family: monospace;
  word-break: break-all;
`;

const AnimationDemo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const AnimationBox = styled.div`
  border: 1px solid rgba(0, 155, 255, 0.2);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border-radius: 4px;
`;

const RotatingDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #00aaff;
  box-shadow: 0 0 20px #00aaff;
  animation: rotateRing 4s linear infinite;
`;

const PulsingDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #00e5c8;
  box-shadow: 0 0 20px #00e5c8;
  animation: glowPulse 3s ease-in-out infinite;
`;

const FloatingDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #7ec8ff;
  box-shadow: 0 0 20px #7ec8ff;
  animation: floatY 2s ease-in-out infinite;
`;

const BlinkingDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #00aaff;
  animation: blink 1.5s ease-in-out infinite;
`;

const ShimmerText = styled.div`
  background: linear-gradient(120deg, #00aaff 0%, #00e5c8 50%, #00aaff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmerText 2s linear infinite;
  font-family: Orbitron;
  font-weight: 600;
  font-size: 14px;
`;

const AnimationLabel = styled.div`
  font-family: Orbitron;
  font-size: 10px;
  color: #00aaff;
  letter-spacing: 2px;
  margin-top: 12px;
  text-align: center;
`;

const CodeBlock = styled.pre`
  background: rgba(4, 13, 28, 0.9);
  border: 1px solid rgba(0, 155, 255, 0.2);
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  color: #00aaff;
  font-family: monospace;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: rgba(160, 200, 240, 0.7);
  line-height: 1.8;
  margin-bottom: 20px;
`;

export default function DesignSystemPage() {
  return (
    <Page>
      <Title>🎨 Marine ICT Design System</Title>

      <SectionTitle>색상 팔레트</SectionTitle>
      <Description>
        Marine ICT의 시각적 정체성을 구성하는 핵심 색상들입니다. 모든 페이지에서 이 색상들을
        사용하여 일관된 디자인을 유지합니다.
      </Description>

      <h3 style={{ color: "#00aaff", marginBottom: "12px" }}>Primary Colors</h3>
      <Grid>
        <ColorBox color="#00c8ff">
          <ColorName>Primary</ColorName>
          <ColorCode>#00c8ff</ColorCode>
        </ColorBox>
        <ColorBox color="#00aaff">
          <ColorName>Primary Light</ColorName>
          <ColorCode>#00aaff</ColorCode>
        </ColorBox>
        <ColorBox color="#00e5c8">
          <ColorName>Secondary</ColorName>
          <ColorCode>#00e5c8</ColorCode>
        </ColorBox>
        <ColorBox color="#7ec8ff">
          <ColorName>Tertiary</ColorName>
          <ColorCode>#7ec8ff</ColorCode>
        </ColorBox>
      </Grid>

      <h3 style={{ color: "#00aaff", marginBottom: "12px" }}>Neutral Colors</h3>
      <Grid>
        <ColorBox color="#030810" style={{ border: "2px solid #00aaff" }}>
          <ColorName>Background</ColorName>
          <ColorCode>#030810</ColorCode>
        </ColorBox>
        <ColorBox color="#ffffff">
          <ColorName>White</ColorName>
          <ColorCode>#ffffff</ColorCode>
        </ColorBox>
        <ColorBox color="rgba(160, 200, 240, 0.6)">
          <ColorName>Text Secondary</ColorName>
          <ColorCode>rgba(160, 200, 240, 0.6)</ColorCode>
        </ColorBox>
      </Grid>

      <SectionTitle>애니메이션</SectionTitle>
      <Description>
        모든 애니메이션은 global.js에 정의되어 있습니다. 아래는 각 애니메이션의 프리뷰입니다.
      </Description>

      <AnimationDemo>
        <div>
          <AnimationBox>
            <RotatingDot />
          </AnimationBox>
          <AnimationLabel>rotateRing</AnimationLabel>
        </div>
        <div>
          <AnimationBox>
            <PulsingDot />
          </AnimationBox>
          <AnimationLabel>glowPulse</AnimationLabel>
        </div>
        <div>
          <AnimationBox>
            <FloatingDot />
          </AnimationBox>
          <AnimationLabel>floatY</AnimationLabel>
        </div>
        <div>
          <AnimationBox>
            <BlinkingDot />
          </AnimationBox>
          <AnimationLabel>blink</AnimationLabel>
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <AnimationBox>
            <ShimmerText>Shimmer Effect</ShimmerText>
          </AnimationBox>
          <AnimationLabel>shimmerText</AnimationLabel>
        </div>
      </AnimationDemo>

      <SectionTitle>타이포그래피</SectionTitle>
      <Description>Orbitron(헤더)과 Noto Sans KR(본문) 폰트를 사용합니다.</Description>

      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#00aaff", marginBottom: "16px", fontFamily: "Orbitron" }}>
          Orbitron (Header)
        </h3>
        <div style={{ fontSize: "32px", color: "#fff", fontFamily: "Orbitron", marginBottom: "8px" }}>
          MARINE ICT SOLUTIONS
        </div>
        <div style={{ fontSize: "24px", color: "#00aaff", fontFamily: "Orbitron", marginBottom: "8px" }}>
          Hero Headline
        </div>
        <CodeBlock>{`font-family: Orbitron;
font-weight: 600 | 800;
letter-spacing: 2px-5px;`}</CodeBlock>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#00aaff", marginBottom: "16px", fontFamily: "Noto Sans KR" }}>
          Noto Sans KR (Body)
        </h3>
        <div style={{ fontSize: "20px", color: "#fff", fontFamily: "Noto Sans KR", marginBottom: "8px" }}>
          섹션 제목 (20px, weight 700)
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "rgba(160, 200, 240, 0.7)",
            fontFamily: "Noto Sans KR",
            lineHeight: "1.8",
            marginBottom: "8px",
          }}
        >
          본문 텍스트입니다. 해양 ICT 솔루션은 바다의 방대한 데이터를 인공지능으로 분석하고
          최적화된 솔루션을 제공합니다.
        </div>
        <CodeBlock>{`font-family: Noto Sans KR;
font-weight: 300 | 400 | 500 | 700;
line-height: 1.6-1.9;`}</CodeBlock>
      </div>

      <SectionTitle>컴포넌트 패턴</SectionTitle>

      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#00aaff", marginBottom: "16px" }}>버튼</h3>
        <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
          <button
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg, rgba(0,160,255,0.18), rgba(0,220,200,0.08))",
              border: "1px solid rgba(0,190,255,0.5)",
              color: "#00d4ff",
              fontFamily: "Noto Sans KR",
              letterSpacing: "1.5px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 0 20px rgba(0, 170, 255, 0.3)";
              e.target.style.borderColor = "#00aaff";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.borderColor = "rgba(0,190,255,0.5)";
            }}
          >
            Primary Button
          </button>
          <button
            style={{
              padding: "14px 32px",
              background: "transparent",
              border: "1px solid rgba(160,200,240,0.18)",
              color: "rgba(160,200,240,0.65)",
              fontFamily: "Noto Sans KR",
              letterSpacing: "1.5px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(160,200,240,0.5)";
              e.target.style.color = "rgba(160,200,240,0.85)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(160,200,240,0.18)";
              e.target.style.color = "rgba(160,200,240,0.65)";
            }}
          >
            Secondary Button
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#00aaff", marginBottom: "16px" }}>카드</h3>
        <div
          style={{
            background: "rgba(4, 13, 28, 0.9)",
            border: "1px solid rgba(0, 155, 255, 0.18)",
            borderLeft: "3px solid #00aaff",
            padding: "24px",
            borderRadius: "4px",
          }}
        >
          <div style={{ fontSize: "16px", color: "#fff", fontWeight: 600, marginBottom: "8px" }}>
            Card Title
          </div>
          <div style={{ fontSize: "13px", color: "rgba(160, 200, 240, 0.6)", lineHeight: "1.6" }}>
            카드는 짙은 배경에 밝은 테두리를 가지며, 좌측에는 색상 강조선이 있습니다. 호버
            시 테두리 색상이 밝아집니다.
          </div>
        </div>
      </div>

      <SectionTitle>레이아웃 가이드</SectionTitle>
      <CodeBlock>{`// 섹션 기본 구조
<Section id="sectionId">
  <GridPattern />
  <AmbientGlow />
  <EdgeFade top />
  <EdgeFade />

  <Container>
    <SectionLabel data-reveal="label" data-delay="0">
      LABEL TEXT
    </SectionLabel>
    <Headline data-reveal="headline" data-delay="100">
      Main Title
    </Headline>
    <Description data-reveal="description" data-delay="180">
      Description text
    </Description>
  </Container>
</Section>

// 색상 사용
background: rgba(4, 13, 28, 0.9);  // 카드 배경
border: 1px solid rgba(0, 155, 255, 0.18);  // 카드 테두리
color: #00aaff;  // 주요 텍스트
color: rgba(160, 200, 240, 0.6);  // 보조 텍스트`}</CodeBlock>

      <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(0, 150, 255, 0.2)" }}>
        <p style={{ color: "rgba(160, 200, 240, 0.5)", fontSize: "12px" }}>
          이 디자인 시스템은 모든 새로운 페이지에 적용됩니다.
          <br />
          일관된 디자인을 위해 theme.js의 색상을 사용하고, 새 색상은 먼저 theme.js에 추가하세요.
        </p>
      </div>
    </Page>
  );
}
