import styled from "styled-components";
import RadarVisualization from "./RadarVisualization";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  padding-top: 68px;
`;

const AmbientGradient1 = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 900px 700px at 25% 55%,
    rgba(0, 60, 140, 0.22),
    transparent
  );
  pointer-events: none;
`;

const AmbientGradient2 = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 500px 500px at 75% 45%,
    rgba(0, 80, 120, 0.18),
    transparent
  );
  pointer-events: none;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 80px 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const LeftContent = styled.div`
  max-width: 580px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 36px;
`;

const BadgeDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00aaff;
  box-shadow: 0 0 12px #00aaff;
  animation: blink 2.5s ease-in-out infinite;
`;

const BadgeText = styled.span`
  font-family: Orbitron;
  font-size: 10px;
  color: #00aaff;
  letter-spacing: 5px;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR";
  font-size: 62px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 28px;
  color: #fff;
  word-break: keep-all;

  span {
    background: linear-gradient(120deg, #00aaff 0%, #00e5c8 50%, #00aaff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmerText 3.5s linear infinite;
  }
`;

const Description = styled.p`
  font-size: 17px;
  color: rgba(160, 200, 240, 0.72);
  line-height: 1.9;
  margin: 0 0 52px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 14px 32px;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, rgba(0,160,255,0.18), rgba(0,220,200,0.08))"
      : "transparent"};
  border: 1px solid
    ${(props) => (props.primary ? "rgba(0,190,255,0.5)" : "rgba(160,200,240,0.18)")};
  color: ${(props) => (props.primary ? "#00d4ff" : "rgba(160,200,240,0.65)")};
  font-size: 14px;
  font-family: "Noto Sans KR";
  letter-spacing: 1.5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    ${(props) =>
      props.primary
        ? "border-color: #00aaff; box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);"
        : "border-color: rgba(160,200,240,0.5); color: rgba(160,200,240,0.85);"}
  }
`;

const RightContent = styled.div`
  position: relative;
  width: 460px;
  height: 460px;
  flex-shrink: 0;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ScrollText = styled.span`
  font-family: Orbitron;
  font-size: 9px;
  color: rgba(160, 200, 240, 0.35);
  letter-spacing: 4px;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(0, 160, 255, 0.6), transparent);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, #00aaff, transparent);
    animation: scanDrop 2s linear infinite;
  }
`;

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: linear-gradient(to bottom, transparent, #030810);
  pointer-events: none;
  z-index: 2;
`;

export default function HeroSection() {
  return (
    <Section id="about">
      <AmbientGradient1 />
      <AmbientGradient2 />

      <ContentContainer>
        <LeftContent>
          <Badge>
            <BadgeDot />
            <BadgeText>MARINE ICT SOLUTIONS</BadgeText>
          </Badge>

          <Title>
            해양의 미래를<br />
            <span>기술로 설계하다</span>
          </Title>

          <Description>
            바다의 방대한 데이터를 인공지능으로 분석하고<br />
            최적화된 솔루션을 제공하는 해양 ICT 전문 기업
          </Description>

          <ButtonContainer>
            <Button href="#ai" primary>
              AI 기술 알아보기
            </Button>
            <Button href="#tech">솔루션 보기</Button>
          </ButtonContainer>
        </LeftContent>

        <RightContent>
          <RadarVisualization />
        </RightContent>
      </ContentContainer>

      <ScrollIndicator>
        <ScrollText>SCROLL</ScrollText>
        <ScrollLine />
      </ScrollIndicator>

      <BottomFade />
    </Section>
  );
}
