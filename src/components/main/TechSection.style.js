import styled from "styled-components";
import { theme } from "../../styles/theme";

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: ${theme.SPACING.sectionPaddingVerticalTech} 0 ${theme.SPACING.sectionGapVertical};
`;

const Container = styled.div`
  max-width: ${theme.SPACING.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${theme.SPACING.containerPadding};
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
  font-size: 46px;
  font-weight: 700;
  color: ${theme.COLOR.white};
  margin: 0 0 64px;
  line-height: 1.2;
  word-break: keep-all;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;

  span {
    color: ${theme.COLOR.primaryLight};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  opacity: ${(props) => props.$revealed ? 1 : 0};
  transform: ${(props) => props.$revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const Card = styled.div`
  background: ${theme.COLOR.techCard};
  border: 1px solid ${theme.COLOR.techCardBorder};
  padding: 48px 44px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${(props) =>
      props.$color === "secondary"
        ? `linear-gradient(to bottom, transparent, ${theme.COLOR.secondary}, transparent)`
        : `linear-gradient(to bottom, transparent, ${theme.COLOR.primaryLight}, transparent)`};
  }

  &:hover {
    border-color: ${(props) =>
      props.$color === "secondary"
        ? theme.COLOR.techCardBorderSecondary
        : theme.COLOR.techCardBorderHover};
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid ${(props) =>
    props.$color === "secondary"
      ? theme.COLOR.techIconBorderSecondary
      : theme.COLOR.techIconBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.COLOR.white};
  margin: 0 0 14px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: ${theme.COLOR.techDescriptionText};
  line-height: 1.85;
  margin: 0;
`;

const ConcentricArcs = styled.div`
  position: relative;
  width: 28px;
  height: 28px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TriangleWarning = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 22px solid rgba(0, 160, 255, 0.7);

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: 4px;
    height: 9px;
    background: ${theme.COLOR.background};
  }

  &::after {
    content: "";
    position: absolute;
    top: 16px;
    left: -2px;
    width: 4px;
    height: 4px;
    background: ${theme.COLOR.background};
  }
`;

const ArrowPath = styled.div`
  position: relative;
  width: 28px;
  height: 20px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 229, 200, 0.5);
    background-image: repeating-linear-gradient(
      to right,
      rgba(0, 229, 200, 0.7) 0px,
      rgba(0, 229, 200, 0.7) 4px,
      transparent 4px,
      transparent 8px
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 14px solid rgba(0, 229, 200, 0.9);
  }
`;

const WaveIcon = styled.svg`
  width: 28px;
  height: 24px;
`;

export {
  Section,
  Container,
  SectionLabel,
  LabelText,
  Headline,
  Grid,
  Card,
  IconBox,
  CardTitle,
  CardDescription,
  ConcentricArcs,
  TriangleWarning,
  ArrowPath,
  WaveIcon,
};
