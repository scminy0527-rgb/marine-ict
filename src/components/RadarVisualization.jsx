import styled from "styled-components";

const RadarContainer = styled.div`
  position: relative;
  width: 460px;
  height: 460px;
  flex-shrink: 0;
`;

const Ring = styled.div`
  position: absolute;
  inset: ${(props) => props.inset};
  border-radius: 50%;
  border: 1px ${(props) => props.borderStyle} rgba(0, ${(props) => props.color}, 255, ${(props) => props.opacity});
  animation: ${(props) => props.animation};
`;

const SolidRing = styled.div`
  position: absolute;
  inset: 220px;
  border-radius: 50%;
  border: 1px dashed rgba(0, 220, 255, 0.5);
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
  width: ${(props) => props.width};
  height: 1px;
  transform-origin: left center;
  background: ${(props) => props.background};
  animation: rotateRing 6s linear infinite ${(props) => props.delay};
`;

const TickMarksContainer = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  animation: rotateRing 60s linear infinite;
`;

const TickMark = styled.div`
  position: absolute;
  background: rgba(0, 180, 255, 0.5);
  transform: ${(props) => props.transform};

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
    background: linear-gradient(to right, transparent, rgba(0, 150, 255, 0.08), transparent);
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
    background: linear-gradient(to bottom, transparent, rgba(0, 150, 255, 0.08), transparent);
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
  background: radial-gradient(circle, rgba(0, 180, 255, 0.12), transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
`;

const CenterDot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #00c8ff;
  box-shadow: 0 0 24px rgba(0, 210, 255, 0.9), 0 0 50px rgba(0, 210, 255, 0.4);
`;

const FloatingDot = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: floatY ${(props) => props.duration}s ease-in-out infinite ${(props) => props.delay}s;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export default function RadarVisualization() {
  return (
    <RadarContainer>
      {/* Rotating rings */}
      <Ring
        inset="0px"
        borderStyle="dashed"
        color="140"
        opacity="0.15"
        animation="rotateRing 60s linear infinite"
      />
      <Ring
        inset="52px"
        color="160"
        opacity="0.14"
        animation="counterRing 35s linear infinite"
      />
      <Ring
        inset="110px"
        borderStyle="dashed"
        color="180"
        opacity="0.22"
        animation="rotateRing 20s linear infinite"
      />
      <Ring
        inset="170px"
        color="200"
        opacity="0.3"
        animation="counterRing 13s linear infinite"
      />

      {/* Static solid ring */}
      <SolidRing />

      {/* Sweep arms */}
      <SweepContainer>
        <SweepLine width="50%" background="linear-gradient(to right, rgba(0,210,255,0.8), transparent)" delay="0s" />
        <SweepLine width="46%" background="linear-gradient(to right, rgba(0,210,255,0.35), transparent)" delay="-0.6s" />
        <SweepLine width="40%" background="linear-gradient(to right, rgba(0,210,255,0.12), transparent)" delay="-1.2s" />
      </SweepContainer>

      {/* Tick marks */}
      <TickMarksContainer>
        <TickMark top="0" left="50%" className="vertical" transform="translateX(-50%)" style={{ top: "0" }} />
        <TickMark bottom="0" left="50%" className="vertical" transform="translateX(-50%)" style={{ bottom: "0" }} />
        <TickMark top="50%" left="0" className="horizontal" transform="translateY(-50%)" style={{ left: "0" }} />
        <TickMark top="50%" right="0" className="horizontal" transform="translateY(-50%)" style={{ right: "0" }} />
      </TickMarksContainer>

      {/* Axis lines */}
      <AxisLine />
      <AxisVertical />

      {/* Center glow and dot */}
      <CenterGlow>
        <GlowBg />
        <CenterDot />
      </CenterGlow>

      {/* Floating data points */}
      <FloatingDot
        top="18%"
        left="22%"
        size={6}
        color="rgba(0,200,255,0.6)"
        duration={4}
        delay={0}
      />
      <FloatingDot
        top="65%"
        left="72%"
        size={5}
        color="rgba(0,220,200,0.5)"
        duration={5.5}
        delay={1}
      />
      <FloatingDot
        top="30%"
        left="78%"
        size={4}
        color="rgba(0,180,255,0.7)"
        duration={3.5}
        delay={0.5}
      />
    </RadarContainer>
  );
}
