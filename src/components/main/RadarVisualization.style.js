import styled from "styled-components";
import { theme } from "../../styles/theme";

const RadarContainer = styled.div`
  position: relative;
  width: 460px;
  height: 460px;
  flex-shrink: 0;
`;

const Ring = styled.div`
  position: absolute;
  inset: ${(props) => props.$inset};
  border-radius: 50%;
  border: 1px ${(props) => props.$borderStyle} rgba(0, ${(props) => props.$color}, 255, ${(props) => props.$opacity});
  animation: ${(props) => props.$animation};
`;

const SolidRing = styled.div`
  position: absolute;
  inset: 220px;
  border-radius: 50%;
  border: 1px dashed ${theme.COLOR.radarRingBorder};
`;

const SweepContainer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
`;

const SweepLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.$width};
  height: 1px;
  transform-origin: left center;
  background: ${(props) => props.$background};
  animation: rotateRing 6s linear infinite ${(props) => props.$delay};
`;

const TickMarksContainer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: rotateRing 60s linear infinite;
`;

const TickMark = styled.div`
  position: absolute;
  background: ${theme.COLOR.radarTickMark};
  transform: ${(props) => props.$transform};

  &.horizontal {
    width: 10px;
    height: 1px;
  }

  &.vertical {
    width: 1px;
    height: 10px;
  }
`;

const AxisLine = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, ${theme.COLOR.radarAxisLine}, transparent);
  }
`;

const AxisVertical = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    height: 100%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, ${theme.COLOR.radarAxisLine}, transparent);
  }
`;

const CenterGlow = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlowBg = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, ${theme.COLOR.radarGlowBg}, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
`;

const CenterDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${theme.COLOR.primary};
  box-shadow: 0 0 24px ${theme.COLOR.radarCenterGlowOuter}, 0 0 50px ${theme.COLOR.radarCenterGlowInner};
`;

const FloatingDot = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${(props) => props.$color};
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  animation: floatY ${(props) => props.$duration}s ease-in-out infinite ${(props) => props.$delay}s;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;

export {
  RadarContainer,
  Ring,
  SolidRing,
  SweepContainer,
  SweepLine,
  TickMarksContainer,
  TickMark,
  AxisLine,
  AxisVertical,
  CenterGlow,
  GlowBg,
  CenterDot,
  FloatingDot,
};
