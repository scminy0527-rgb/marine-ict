import styled from "styled-components";
import { theme } from "../../styles/theme";

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: ${theme.SPACING.sectionPaddingVerticalAI} 0;
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(${theme.COLOR.gridPattern} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.COLOR.gridPattern} 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 500px;
  background: ${theme.COLOR.aiGlowPulse};
  pointer-events: none;
`;

const EdgeFade = styled.div`
  position: absolute;
  ${(props) => (props.$top ? "top: 0;" : "bottom: 0;")}
  left: 0;
  right: 0;
  height: 80px;
  background: ${(props) =>
    props.$top
      ? theme.COLOR.edgeFadeTop
      : theme.COLOR.edgeFadeBottom};
  pointer-events: none;
`;

const Container = styled.div`
  max-width: ${theme.SPACING.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${theme.SPACING.containerPadding};
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;

  &::before {
    content: "";
    width: 36px;
    height: 1px;
    background: linear-gradient(to right, transparent, ${theme.COLOR.primaryLight});
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, ${theme.COLOR.primaryLight} 0%, transparent 40%);
  }
`;

const LabelText = styled.span`
  font-family: Orbitron;
  font-size: 10px;
  color: ${theme.COLOR.primaryLight};
  letter-spacing: 5px;
  white-space: nowrap;
`;

const Headline = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: ${theme.COLOR.white};
  line-height: 1.2;
  margin: 0 0 22px 0;
  word-break: keep-all;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const Description = styled.p`
  font-size: 17px;
  color: rgba(160, 200, 240, 0.7);
  line-height: 2;
  max-width: 640px;
  font-weight: 300;
  margin: 0 0 72px;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const PipelineContainer = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  margin-bottom: 1px;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const PipelineCard = styled.div`
  flex: 1;
  background: ${theme.COLOR.aiCardBg};
  border: 1px solid ${theme.COLOR.aiCardBorder};
  padding: 44px 36px 40px;
  position: relative;
  overflow: hidden;
  animation: ${(props) => props.$animationName} 5s ease-in-out infinite ${(props) => props.$delay || "0s"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) =>
      props.$color === "secondary"
        ? `linear-gradient(90deg, transparent 0%, ${theme.COLOR.secondary} 50%, transparent 100%)`
        : props.$color === "tertiary"
        ? `linear-gradient(90deg, transparent 0%, ${theme.COLOR.tertiary} 50%, transparent 100%)`
        : `linear-gradient(90deg, transparent 0%, ${theme.COLOR.primaryLight} 50%, transparent 100%)`};
  }

  &.step-2 {
    border-left: none;
    border-color: ${theme.COLOR.aiCardStep2Border};
  }

  &.step-3 {
    border-left: none;
    border-color: ${theme.COLOR.aiCardStep3Border};
  }
`;

const StepNumber = styled.div`
  font-family: Orbitron;
  font-size: 56px;
  font-weight: 800;
  color: ${(props) => {
    if (props.$color === "secondary") return "rgba(0,229,200,0.08)";
    if (props.$color === "tertiary") return "rgba(120,200,255,0.09)";
    return "rgba(0,160,255,0.09)";
  }};
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 1;
  user-select: none;
  letter-spacing: -2px;
`;

const IconBox = styled.div`
  width: 54px;
  height: 54px;
  border: 1px solid ${(props) => {
    if (props.$color === "secondary") return theme.COLOR.accentSecondaryLight;
    if (props.$color === "tertiary") return theme.COLOR.accentTertiaryBright;
    return theme.COLOR.accentBlueLight;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  position: relative;
  ${(props) =>
    props.$color === "tertiary"
      ? `
      border-radius: 50%;
      animation: glowPulse 3s ease-in-out infinite;
    `
      : ""}

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    width: 8px;
    height: 8px;
    background: ${(props) => {
      if (props.$color === "secondary") return theme.COLOR.secondary;
      if (props.$color === "tertiary") return theme.COLOR.tertiary;
      return theme.COLOR.primaryLight;
    }};
    border-radius: 50%;
    box-shadow: ${(props) => {
      if (props.$color === "secondary") return `0 0 10px ${theme.COLOR.secondary}`;
      if (props.$color === "tertiary") return `0 0 10px ${theme.COLOR.tertiary}`;
      return `0 0 10px ${theme.COLOR.primaryLight}`;
    }};
  }
`;

const DataIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div {
    display: flex;
    gap: 3px;
  }

  span {
    width: 6px;
    height: 6px;
    background: ${(props) => props.$color};
    border-radius: 1px;
  }
`;

const CardTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: ${theme.COLOR.white};
  margin: 0 0 10px;
  line-height: 1.35;
`;

const CardLabel = styled.p`
  font-family: Orbitron;
  font-size: 10px;
  color: ${(props) => props.$color};
  letter-spacing: 2.5px;
  margin: 0 0 18px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: rgba(160, 200, 240, 0.62);
  line-height: 1.85;
  margin: 0 0 28px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 11px;
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$borderColor};
  padding: 4px 12px;
`;

const ConnectorArrow = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${theme.COLOR.aiPipelineConnectorBg};
  position: relative;
  border-top: 1px solid ${theme.COLOR.aiPipelineConnectorBorder};
  border-bottom: 1px solid ${theme.COLOR.aiPipelineConnectorBorder};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${theme.COLOR.aiPipelineConnectorLine};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    right: -1px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 11px solid ${(props) => props.$borderColor};
    z-index: 1;
  }
`;

const DataDot = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: 0 0 14px ${(props) => props.$glowColor};
  animation: dataDot 2.6s linear infinite ${(props) => props.$delay};
`;

const StatsContainer = styled.div`
  display: flex;
  border: 1px solid ${theme.COLOR.aiStatsContainer};
  border-top: none;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const StatItem = styled.div`
  flex: 1;
  padding: 36px 44px;
  ${(props) => !props.$last && `border-right: 1px solid ${theme.COLOR.aiStatsContainer};`}
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: Orbitron;
  font-size: 44px;
  font-weight: 800;
  color: ${(props) => props.$color};
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: -1px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: rgba(160, 200, 240, 0.55);
  letter-spacing: 1px;
`;

export {
  Section,
  GridPattern,
  AmbientGlow,
  EdgeFade,
  Container,
  SectionLabel,
  LabelText,
  Headline,
  Description,
  PipelineContainer,
  PipelineCard,
  StepNumber,
  IconBox,
  DataIcon,
  CardTitle,
  CardLabel,
  CardDescription,
  TagContainer,
  Tag,
  ConnectorArrow,
  DataDot,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
};
