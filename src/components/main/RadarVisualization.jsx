import * as S from "./RadarVisualization.style";

export default function RadarVisualization() {
  return (
    <S.RadarContainer>
      {/* Rotating rings */}
      <S.Ring
        $inset="0px"
        $borderStyle="dashed"
        $color="140"
        $opacity="0.15"
        $animation="rotateRing 60s linear infinite"
      />
      <S.Ring
        $inset="52px"
        $color="160"
        $opacity="0.14"
        $animation="counterRing 35s linear infinite"
      />
      <S.Ring
        $inset="110px"
        $borderStyle="dashed"
        $color="180"
        $opacity="0.22"
        $animation="rotateRing 20s linear infinite"
      />
      <S.Ring
        $inset="170px"
        $color="200"
        $opacity="0.3"
        $animation="counterRing 13s linear infinite"
      />

      {/* Static solid ring */}
      <S.SolidRing />

      {/* Sweep arms */}
      <S.SweepContainer>
        <S.SweepLine $width="50%" $background="linear-gradient(to right, rgba(0,210,255,0.8), transparent)" $delay="0s" />
        <S.SweepLine $width="46%" $background="linear-gradient(to right, rgba(0,210,255,0.35), transparent)" $delay="-0.6s" />
        <S.SweepLine $width="40%" $background="linear-gradient(to right, rgba(0,210,255,0.12), transparent)" $delay="-1.2s" />
      </S.SweepContainer>

      {/* Tick marks */}
      <S.TickMarksContainer>
        <S.TickMark top="0" left="50%" className="vertical" $transform="translateX(-50%)" style={{ top: "0" }} />
        <S.TickMark bottom="0" left="50%" className="vertical" $transform="translateX(-50%)" style={{ bottom: "0" }} />
        <S.TickMark top="50%" left="0" className="horizontal" $transform="translateY(-50%)" style={{ left: "0" }} />
        <S.TickMark top="50%" right="0" className="horizontal" $transform="translateY(-50%)" style={{ right: "0" }} />
      </S.TickMarksContainer>

      {/* Axis lines */}
      <S.AxisLine />
      <S.AxisVertical />

      {/* Center glow and dot */}
      <S.CenterGlow>
        <S.GlowBg />
        <S.CenterDot />
      </S.CenterGlow>

      {/* Floating data points */}
      <S.FloatingDot
        $top="18%"
        $left="22%"
        $size={6}
        $color="rgba(0,200,255,0.6)"
        $duration={4}
        $delay={0}
      />
      <S.FloatingDot
        $top="65%"
        $left="72%"
        $size={5}
        $color="rgba(0,220,200,0.5)"
        $duration={5.5}
        $delay={1}
      />
      <S.FloatingDot
        $top="30%"
        $left="78%"
        $size={4}
        $color="rgba(0,180,255,0.7)"
        $duration={3.5}
        $delay={0.5}
      />
    </S.RadarContainer>
  );
}
