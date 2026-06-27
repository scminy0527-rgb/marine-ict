import styled from "styled-components";
import { theme } from "../../styles/theme";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  padding-top: ${theme.SPACING.navHeight};
`;

const AmbientGradient1 = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 900px 700px at 25% 55%,
    ${theme.COLOR.heroAmbientGradient1},
    transparent
  );
  pointer-events: none;
`;

const AmbientGradient2 = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 500px 500px at 75% 45%,
    ${theme.COLOR.heroAmbientGradient2},
    transparent
  );
  pointer-events: none;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${theme.SPACING.containerMaxWidth};
  margin: 0 auto;
  padding: ${theme.SPACING.sectionPaddingVerticalHero} ${theme.SPACING.containerPadding};
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
  background: ${theme.COLOR.primaryLight};
  box-shadow: 0 0 12px ${theme.COLOR.primaryLight};
  animation: blink 2.5s ease-in-out infinite;
`;

const BadgeText = styled.span`
  font-family: Orbitron;
  font-size: 10px;
  color: ${theme.COLOR.primaryLight};
  letter-spacing: 5px;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR";
  font-size: 62px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 28px;
  color: ${theme.COLOR.white};
  word-break: keep-all;

  span {
    background: linear-gradient(120deg, ${theme.COLOR.primaryLight} 0%, ${theme.COLOR.secondary} 50%, ${theme.COLOR.primaryLight} 100%);
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
    props.$primary
      ? theme.COLOR.heroButtonGradient
      : "transparent"};
  border: 1px solid
    ${(props) => (props.$primary ? theme.COLOR.heroButtonBorder : theme.COLOR.heroButtonSecondaryBorder)};
  color: ${(props) => (props.$primary ? "#00d4ff" : theme.COLOR.heroButtonSecondaryText)};
  font-size: 14px;
  font-family: "Noto Sans KR";
  letter-spacing: 1.5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    ${(props) =>
      props.$primary
        ? `border-color: ${theme.COLOR.primaryLight}; box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);`
        : `border-color: rgba(160,200,240,0.5); color: rgba(160,200,240,0.85);`}
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
  color: ${theme.COLOR.heroScrollText};
  letter-spacing: 4px;
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 44px;
  background: ${theme.COLOR.heroScrollLineGradient};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: ${theme.COLOR.heroScrollLineInner};
    animation: scanDrop 2s linear infinite;
  }
`;

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 180px;
  background: ${theme.COLOR.heroBottomFade};
  pointer-events: none;
  z-index: 2;
`;

export {
  Section,
  AmbientGradient1,
  AmbientGradient2,
  ContentContainer,
  LeftContent,
  Badge,
  BadgeDot,
  BadgeText,
  Title,
  Description,
  ButtonContainer,
  Button,
  RightContent,
  ScrollIndicator,
  ScrollText,
  ScrollLine,
  BottomFade,
};
