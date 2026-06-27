import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: ${theme.SPACING.sectionPaddingVerticalAI} 0;
  background-color: ${theme.COLOR.background};
  overflow: hidden;
`;

export const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      0deg,
      ${theme.COLOR.gridPattern} 1px,
      transparent 1px
    ),
    linear-gradient(90deg, ${theme.COLOR.gridPattern} 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 1;
`;

export const AmbientGlow = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: ${theme.COLOR.aiGlowPulse};
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
`;

export const EdgeFade = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 140px;
  pointer-events: none;
  z-index: 2;
  background: ${(props) =>
    props.$top ? theme.COLOR.edgeFadeTop : theme.COLOR.edgeFadeBottom};
  top: ${(props) => (props.$top ? "0" : "auto")};
  bottom: ${(props) => (props.$top ? "auto" : "0")};
`;

export const Container = styled.div`
  position: relative;
  max-width: ${theme.SPACING.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${theme.SPACING.containerPadding};
  z-index: 3;
`;

export const SectionLabel = styled.div`
  margin-bottom: 20px;
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

export const LabelText = styled.span`
  font-family: "Orbitron", sans-serif;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: 400;
  letter-spacing: 5px;
  color: ${theme.COLOR.primaryLight};
  text-transform: uppercase;
`;

export const Headline = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h2};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h2};
  color: ${theme.COLOR.textPrimary};
  margin-bottom: 28px;
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;

  span {
    color: ${theme.COLOR.primaryLight};
  }
`;

export const Description = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 17px;
  font-weight: ${theme.FONT_WEIGHT.light};
  line-height: 1.9;
  color: ${theme.COLOR.textSecondary};
  margin-bottom: 60px;
  max-width: 800px;
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

export const DemoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 80px;
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
  align-items: center;
`;

export const FrameBox = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: rgba(4, 13, 28, 0.6);
  border: 2px solid ${theme.COLOR.primaryLight};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 170, 255, 0.2), inset 0 0 20px rgba(0, 170, 255, 0.08);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 200, 255, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const DetectionBox = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.$color || theme.COLOR.secondary};
  background: transparent;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props) => props.$color || theme.COLOR.secondary};
    opacity: 0.7;
  }
`;

export const Label = styled.div`
  position: absolute;
  top: -32px;
  left: 0;
  background: ${(props) => props.$color || theme.COLOR.secondary};
  color: ${theme.COLOR.background};
  padding: 4px 8px;
  font-family: "Orbitron", sans-serif;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 0 15px ${(props) => props.$color || theme.COLOR.secondary};
`;

export const Confidence = styled.span`
  margin-left: 6px;
  opacity: 0.8;
  font-size: 11px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoCard = styled.div`
  background: rgba(4, 13, 28, 0.8);
  border: 1px solid rgba(0, 170, 255, 0.2);
  padding: 28px;
  border-radius: 8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, transparent, ${theme.COLOR.secondary}, transparent);
  }
`;

export const CardTitle = styled.h3`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 21px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.COLOR.textPrimary};
  margin-bottom: 12px;
`;

export const CardDescription = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  font-weight: ${theme.FONT_WEIGHT.light};
  line-height: 1.7;
  color: ${theme.COLOR.textSecondary};
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  color: ${theme.COLOR.textSecondary};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "•";
    color: ${theme.COLOR.secondary};
    font-weight: bold;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 40px;
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
  width: 100%;
`;

export const Button = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: ${theme.FONT_WEIGHT.medium};
  border: 1.5px solid;
  border-color: ${(props) =>
    props.$primary ? theme.COLOR.secondary : "rgba(160, 200, 240, 0.3)"};
  background: ${(props) =>
    props.$primary
      ? `linear-gradient(135deg, rgba(0, 229, 200, 0.2), rgba(0, 200, 255, 0.08))`
      : "transparent"};
  color: ${(props) =>
    props.$primary ? theme.COLOR.secondary : "rgba(160, 200, 240, 0.65)"};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${(props) =>
    props.$primary
      ? "0 0 20px rgba(0, 229, 200, 0.3)"
      : "0 0 15px rgba(0, 160, 255, 0.15)"};

  &:hover {
    border-color: ${(props) =>
      props.$primary
        ? "rgba(0, 229, 200, 0.8)"
        : "rgba(160, 200, 240, 0.6)"};
    box-shadow: ${(props) =>
      props.$primary
        ? "0 0 30px rgba(0, 229, 200, 0.5)"
        : "0 0 25px rgba(0, 160, 255, 0.3)"};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid ${theme.COLOR.borderMedium};
  opacity: ${(props) => (props.$revealed ? 1 : 0)};
  transform: translateY(${(props) => (props.$revealed ? 0 : "28px")});
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StatNumber = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.$color};
  text-shadow: 0 0 20px ${(props) => props.$color};
`;

export const StatLabel = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: ${theme.COLOR.textSecondary};
  text-align: center;
`;
