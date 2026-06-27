import styled from "styled-components";
import { useEffect, useState } from "react";

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 130px 0 140px;
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0, 100, 210, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 100, 210, 0.045) 1px, transparent 1px);
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
  background: radial-gradient(ellipse, rgba(0, 80, 180, 0.12), transparent 70%);
  pointer-events: none;
`;

const EdgeFade = styled.div`
  position: absolute;
  ${(props) => (props.top ? "top: 0;" : "bottom: 0;")}
  left: 0;
  right: 0;
  height: 80px;
  background: ${(props) =>
    props.top
      ? "linear-gradient(to bottom, #030810, transparent)"
      : "linear-gradient(to top, #030810, transparent)"};
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;

  &::before {
    content: "";
    width: 36px;
    height: 1px;
    background: linear-gradient(to right, transparent, #00aaff);
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, #00aaff 0%, transparent 40%);
  }
`;

const LabelText = styled.span`
  font-family: Orbitron;
  font-size: 10px;
  color: #00aaff;
  letter-spacing: 5px;
  white-space: nowrap;
`;

const Headline = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 22px 0;
  word-break: keep-all;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const Description = styled.p`
  font-size: 17px;
  color: rgba(160, 200, 240, 0.7);
  line-height: 2;
  max-width: 640px;
  font-weight: 300;
  margin: 0 0 72px;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const PipelineContainer = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  margin-bottom: 1px;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const PipelineCard = styled.div`
  flex: 1;
  background: rgba(4, 13, 28, 0.98);
  border: 1px solid rgba(0, 155, 255, 0.22);
  padding: 44px 36px 40px;
  position: relative;
  overflow: hidden;
  animation: ${(props) => props.animationName} 5s ease-in-out infinite ${(props) => props.delay || "0s"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) =>
      props.color === "secondary"
        ? "linear-gradient(90deg, transparent 0%, #00e5c8 50%, transparent 100%)"
        : props.color === "tertiary"
        ? "linear-gradient(90deg, transparent 0%, #7ec8ff 50%, transparent 100%)"
        : "linear-gradient(90deg, transparent 0%, #00aaff 50%, transparent 100%)"};
  }

  &.step-2 {
    border-left: none;
    border-color: rgba(0, 229, 200, 0.2);
  }

  &.step-3 {
    border-left: none;
    border-color: rgba(120, 200, 255, 0.22);
  }
`;

const StepNumber = styled.div`
  font-family: Orbitron;
  font-size: 56px;
  font-weight: 800;
  color: ${(props) => {
    if (props.color === "secondary") return "rgba(0,229,200,0.08)";
    if (props.color === "tertiary") return "rgba(120,200,255,0.09)";
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
    if (props.color === "secondary") return "rgba(0,229,200,0.35)";
    if (props.color === "tertiary") return "rgba(120,200,255,0.4)";
    return "rgba(0,160,255,0.35)";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  position: relative;
  ${(props) =>
    props.color === "tertiary"
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
      if (props.color === "secondary") return "#00e5c8";
      if (props.color === "tertiary") return "#7ec8ff";
      return "#00aaff";
    }};
    border-radius: 50%;
    box-shadow: ${(props) => {
      if (props.color === "secondary") return "0 0 10px #00e5c8";
      if (props.color === "tertiary") return "0 0 10px #7ec8ff";
      return "0 0 10px #00aaff";
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
    background: ${(props) => props.color};
    border-radius: 1px;
  }
`;

const CardTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px;
  line-height: 1.35;
`;

const CardLabel = styled.p`
  font-family: Orbitron;
  font-size: 10px;
  color: ${(props) => props.color};
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
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  padding: 4px 12px;
`;

const ConnectorArrow = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(3, 8, 16, 0.95);
  position: relative;
  border-top: 1px solid rgba(0, 155, 255, 0.12);
  border-bottom: 1px solid rgba(0, 155, 255, 0.12);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: rgba(0, 140, 255, 0.12);
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
    border-left: 11px solid ${(props) => props.borderColor};
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
  background: ${(props) => props.color};
  box-shadow: 0 0 14px ${(props) => props.glowColor};
  animation: dataDot 2.6s linear infinite ${(props) => props.delay};
`;

const StatsContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 140, 255, 0.14);
  border-top: none;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const StatItem = styled.div`
  flex: 1;
  padding: 36px 44px;
  ${(props) => !props.last && "border-right: 1px solid rgba(0, 140, 255, 0.14);"}
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: Orbitron;
  font-size: 44px;
  font-weight: 800;
  color: ${(props) => props.color};
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: -1px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: rgba(160, 200, 240, 0.55);
  letter-spacing: 1px;
`;

export default function AISection() {
  const [revealed, setRevealed] = useState({
    label: false,
    headline: false,
    description: false,
    pipeline: false,
    stats: false,
  });

  const [stats, setStats] = useState({
    accuracy: 0,
    speed: 0,
    data: 0,
    models: 0,
  });

  useEffect(() => {
    const section = document.getElementById("ai");
    if (!section) return;

    const revealElements = section.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const type = entry.target.dataset.reveal;
            setRevealed((prev) => ({ ...prev, [type]: true }));

            const delay = parseInt(entry.target.dataset.delay || 0, 10);
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 120px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const statElements = document.querySelectorAll("[data-stat]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const statType = entry.target.dataset.stat;
          const config = {
            accuracy: { end: 99.2, dec: 1, suffix: "%", color: "#00aaff" },
            speed: { end: 0.3, dec: 1, suffix: "ms", color: "#00e5c8" },
            data: { end: 5, dec: 0, suffix: "TB+", color: "#00aaff" },
            models: { end: 47, dec: 0, suffix: "+", color: "#00e5c8" },
          }[statType];

          if (!config) return;

          observer.unobserve(entry.target);

          const dur = 1600;
          const t0 = performance.now();

          const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            entry.target.textContent =
              (config.end * ease).toFixed(config.dec) + config.suffix;
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );

    statElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Section id="ai">
      <GridPattern />
      <AmbientGlow />
      <EdgeFade top />
      <EdgeFade />

      <Container>
        <SectionLabel data-reveal="label" data-delay="0" revealed={revealed.label}>
          <LabelText>ARTIFICIAL INTELLIGENCE</LabelText>
        </SectionLabel>

        <Headline data-reveal="headline" data-delay="100" revealed={revealed.headline}>
          AI 학습 및 전처리를 통한<br />
          <span style={{ color: "#00aaff" }}>최적 모델 개발 시스템</span>
        </Headline>

        <Description data-reveal="description" data-delay="180" revealed={revealed.description}>
          해양 ICT 전문 기업이 인공지능 학습과 정밀한 데이터 전처리를 통해<br />
          최적화된 AI 모델을 구현합니다. 바다의 복잡한 환경 데이터를<br />
          지능적으로 분석하고 예측하는 핵심 기술입니다.
        </Description>

        <PipelineContainer data-reveal="pipeline" data-delay="260" revealed={revealed.pipeline}>
          {/* Step 1 */}
          <PipelineCard animationName="borderGlow" delay="0s">
            <StepNumber>01</StepNumber>
            <IconBox color="primary">
              <DataIcon color="rgba(0,160,255,0.9)">
                <div>
                  <span style={{ opacity: 0.9 }} />
                  <span style={{ opacity: 0.5 }} />
                  <span style={{ opacity: 0.25 }} />
                </div>
                <div>
                  <span style={{ opacity: 0.5 }} />
                  <span style={{ opacity: 0.9 }} />
                  <span style={{ opacity: 0.5 }} />
                </div>
                <div>
                  <span style={{ opacity: 0.25 }} />
                  <span style={{ opacity: 0.5 }} />
                  <span style={{ opacity: 0.9 }} />
                </div>
              </DataIcon>
            </IconBox>
            <CardTitle>데이터 수집 및 학습</CardTitle>
            <CardLabel color="#00aaff">Data Collection & Training</CardLabel>
            <CardDescription>
              해양 환경의 다양한 센서와 장비로부터 방대한 데이터를 수집하고, AI 모델 학습에
              최적화된 형태로 구조화합니다.
            </CardDescription>
            <TagContainer>
              <Tag color="rgba(0,190,255,0.8)" borderColor="rgba(0,160,255,0.2)">
                센서 데이터
              </Tag>
              <Tag color="rgba(0,190,255,0.8)" borderColor="rgba(0,160,255,0.2)">
                딥러닝
              </Tag>
              <Tag color="rgba(0,190,255,0.8)" borderColor="rgba(0,160,255,0.2)">
                빅데이터
              </Tag>
            </TagContainer>
          </PipelineCard>

          {/* Connector 1→2 */}
          <ConnectorArrow borderColor="rgba(0,160,255,0.35)">
            <DataDot
              color="#00aaff"
              glowColor="rgba(0,200,255,0.9)"
              delay="0s"
              style={{ position: "absolute", width: "10px", height: "10px" }}
            />
          </ConnectorArrow>

          {/* Step 2 */}
          <PipelineCard className="step-2" animationName="borderGlow" delay="0s">
            <StepNumber color="secondary">02</StepNumber>
            <IconBox color="secondary">
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                <div style={{ width: "22px", height: "2px", background: "rgba(0,229,200,0.9)" }} />
                <div style={{ width: "16px", height: "2px", background: "rgba(0,229,200,0.65)" }} />
                <div style={{ width: "10px", height: "2px", background: "rgba(0,229,200,0.4)" }} />
                <div style={{ width: "6px", height: "2px", background: "rgba(0,229,200,0.25)" }} />
              </div>
            </IconBox>
            <CardTitle>데이터 전처리 최적화</CardTitle>
            <CardLabel color="#00e5c8">Preprocessing & Optimization</CardLabel>
            <CardDescription>
              노이즈 제거, 이상치 탐지, 특성 추출로 데이터 품질을 극대화하고 모델 성능을 위한
              최적 입력값을 생성합니다.
            </CardDescription>
            <TagContainer>
              <Tag color="rgba(0,229,200,0.8)" borderColor="rgba(0,229,200,0.2)">
                노이즈 제거
              </Tag>
              <Tag color="rgba(0,229,200,0.8)" borderColor="rgba(0,229,200,0.2)">
                특성 추출
              </Tag>
              <Tag color="rgba(0,229,200,0.8)" borderColor="rgba(0,229,200,0.2)">
                정규화
              </Tag>
            </TagContainer>
          </PipelineCard>

          {/* Connector 2→3 */}
          <ConnectorArrow borderColor="rgba(0,200,200,0.35)">
            <DataDot
              color="#00e5c8"
              glowColor="rgba(0,229,200,0.9)"
              delay="-1.3s"
              style={{ position: "absolute", width: "10px", height: "10px" }}
            />
          </ConnectorArrow>

          {/* Step 3 */}
          <PipelineCard className="step-3" animationName="borderGlow" delay="1.5s">
            <StepNumber color="tertiary">03</StepNumber>
            <IconBox color="tertiary">
              <div style={{ position: "relative", width: "28px", height: "28px" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid rgba(120,200,255,0.7)",
                    background: "rgba(120,200,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#7ec8ff",
                      boxShadow: "0 0 10px rgba(120,200,255,0.9)",
                    }}
                  />
                </div>
              </div>
            </IconBox>
            <CardTitle>최적 AI 모델 생성</CardTitle>
            <CardLabel color="#7ec8ff">Optimal Model Generation</CardLabel>
            <CardDescription>
              정밀하게 준비된 데이터를 기반으로 최고 정확도의 AI 모델을 완성하고 지속적인
              재학습으로 성능을 향상합니다.
            </CardDescription>
            <TagContainer>
              <Tag color="rgba(140,210,255,0.8)" borderColor="rgba(120,200,255,0.2)">
                모델 최적화
              </Tag>
              <Tag color="rgba(140,210,255,0.8)" borderColor="rgba(120,200,255,0.2)">
                재학습
              </Tag>
              <Tag color="rgba(140,210,255,0.8)" borderColor="rgba(120,200,255,0.2)">
                배포
              </Tag>
            </TagContainer>
          </PipelineCard>
        </PipelineContainer>

        <StatsContainer data-reveal="stats" data-delay="380" revealed={revealed.stats}>
          <StatItem>
            <StatNumber color="#00aaff" data-stat="accuracy">
              0%
            </StatNumber>
            <StatLabel>모델 정확도</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber color="#00e5c8" data-stat="speed">
              0ms
            </StatNumber>
            <StatLabel>추론 속도</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber color="#00aaff" data-stat="data">
              0TB+
            </StatNumber>
            <StatLabel>학습 데이터</StatLabel>
          </StatItem>
          <StatItem last>
            <StatNumber color="#00e5c8" data-stat="models">
              0+
            </StatNumber>
            <StatLabel>적용 AI 모델</StatLabel>
          </StatItem>
        </StatsContainer>
      </Container>
    </Section>
  );
}
