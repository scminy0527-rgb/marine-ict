import * as S from "./AISection.style";
import { useEffect, useState } from "react";

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
    <S.Section id="ai">
      <S.GridPattern />
      <S.AmbientGlow />
      <S.EdgeFade $top />
      <S.EdgeFade />

      <S.Container>
        <S.SectionLabel data-reveal="label" data-delay="0" $revealed={revealed.label}>
          <S.LabelText>ARTIFICIAL INTELLIGENCE</S.LabelText>
        </S.SectionLabel>

        <S.Headline data-reveal="headline" data-delay="100" $revealed={revealed.headline}>
          AI 학습 및 전처리를 통한<br />
          <span style={{ color: "#00aaff" }}>최적 모델 개발 시스템</span>
        </S.Headline>

        <S.Description data-reveal="description" data-delay="180" $revealed={revealed.description}>
          해양 ICT 전문 기업이 인공지능 학습과 정밀한 데이터 전처리를 통해<br />
          최적화된 AI 모델을 구현합니다. 바다의 복잡한 환경 데이터를<br />
          지능적으로 분석하고 예측하는 핵심 기술입니다.
        </S.Description>

        <S.PipelineContainer data-reveal="pipeline" data-delay="260" $revealed={revealed.pipeline}>
          {/* Step 1 */}
          <S.PipelineCard $animationName="borderGlow" $delay="0s">
            <S.StepNumber>01</S.StepNumber>
            <S.IconBox $color="primary">
              <S.DataIcon $color="rgba(0,160,255,0.9)">
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
              </S.DataIcon>
            </S.IconBox>
            <S.CardTitle>데이터 수집 및 학습</S.CardTitle>
            <S.CardLabel $color="#00aaff">Data Collection & Training</S.CardLabel>
            <S.CardDescription>
              해양 환경의 다양한 센서와 장비로부터 방대한 데이터를 수집하고, AI 모델 학습에
              최적화된 형태로 구조화합니다.
            </S.CardDescription>
            <S.TagContainer>
              <S.Tag $color="rgba(0,190,255,0.8)" $borderColor="rgba(0,160,255,0.2)">
                센서 데이터
              </S.Tag>
              <S.Tag $color="rgba(0,190,255,0.8)" $borderColor="rgba(0,160,255,0.2)">
                딥러닝
              </S.Tag>
              <S.Tag $color="rgba(0,190,255,0.8)" $borderColor="rgba(0,160,255,0.2)">
                빅데이터
              </S.Tag>
            </S.TagContainer>
          </S.PipelineCard>

          {/* Connector 1→2 */}
          <S.ConnectorArrow $borderColor="rgba(0,160,255,0.35)">
            <S.DataDot
              $color="#00aaff"
              $glowColor="rgba(0,200,255,0.9)"
              $delay="0s"
              style={{ position: "absolute", width: "10px", height: "10px" }}
            />
          </S.ConnectorArrow>

          {/* Step 2 */}
          <S.PipelineCard className="step-2" $animationName="borderGlow" $delay="0s">
            <S.StepNumber $color="secondary">02</S.StepNumber>
            <S.IconBox $color="secondary">
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                <div style={{ width: "22px", height: "2px", background: "rgba(0,229,200,0.9)" }} />
                <div style={{ width: "16px", height: "2px", background: "rgba(0,229,200,0.65)" }} />
                <div style={{ width: "10px", height: "2px", background: "rgba(0,229,200,0.4)" }} />
                <div style={{ width: "6px", height: "2px", background: "rgba(0,229,200,0.25)" }} />
              </div>
            </S.IconBox>
            <S.CardTitle>데이터 전처리 최적화</S.CardTitle>
            <S.CardLabel $color="#00e5c8">Preprocessing & Optimization</S.CardLabel>
            <S.CardDescription>
              노이즈 제거, 이상치 탐지, 특성 추출로 데이터 품질을 극대화하고 모델 성능을 위한
              최적 입력값을 생성합니다.
            </S.CardDescription>
            <S.TagContainer>
              <S.Tag $color="rgba(0,229,200,0.8)" $borderColor="rgba(0,229,200,0.2)">
                노이즈 제거
              </S.Tag>
              <S.Tag $color="rgba(0,229,200,0.8)" $borderColor="rgba(0,229,200,0.2)">
                특성 추출
              </S.Tag>
              <S.Tag $color="rgba(0,229,200,0.8)" $borderColor="rgba(0,229,200,0.2)">
                정규화
              </S.Tag>
            </S.TagContainer>
          </S.PipelineCard>

          {/* Connector 2→3 */}
          <S.ConnectorArrow $borderColor="rgba(0,200,200,0.35)">
            <S.DataDot
              $color="#00e5c8"
              $glowColor="rgba(0,229,200,0.9)"
              $delay="-1.3s"
              style={{ position: "absolute", width: "10px", height: "10px" }}
            />
          </S.ConnectorArrow>

          {/* Step 3 */}
          <S.PipelineCard className="step-3" $animationName="borderGlow" $delay="1.5s">
            <S.StepNumber $color="tertiary">03</S.StepNumber>
            <S.IconBox $color="tertiary">
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
            </S.IconBox>
            <S.CardTitle>최적 AI 모델 생성</S.CardTitle>
            <S.CardLabel $color="#7ec8ff">Optimal Model Generation</S.CardLabel>
            <S.CardDescription>
              정밀하게 준비된 데이터를 기반으로 최고 정확도의 AI 모델을 완성하고 지속적인
              재학습으로 성능을 향상합니다.
            </S.CardDescription>
            <S.TagContainer>
              <S.Tag $color="rgba(140,210,255,0.8)" $borderColor="rgba(120,200,255,0.2)">
                모델 최적화
              </S.Tag>
              <S.Tag $color="rgba(140,210,255,0.8)" $borderColor="rgba(120,200,255,0.2)">
                재학습
              </S.Tag>
              <S.Tag $color="rgba(140,210,255,0.8)" $borderColor="rgba(120,200,255,0.2)">
                배포
              </S.Tag>
            </S.TagContainer>
          </S.PipelineCard>
        </S.PipelineContainer>

        <S.StatsContainer data-reveal="stats" data-delay="380" $revealed={revealed.stats}>
          <S.StatItem>
            <S.StatNumber $color="#00aaff" data-stat="accuracy">
              0%
            </S.StatNumber>
            <S.StatLabel>모델 정확도</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber $color="#00e5c8" data-stat="speed">
              0ms
            </S.StatNumber>
            <S.StatLabel>추론 속도</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber $color="#00aaff" data-stat="data">
              0TB+
            </S.StatNumber>
            <S.StatLabel>학습 데이터</S.StatLabel>
          </S.StatItem>
          <S.StatItem $last>
            <S.StatNumber $color="#00e5c8" data-stat="models">
              0+
            </S.StatNumber>
            <S.StatLabel>적용 AI 모델</S.StatLabel>
          </S.StatItem>
        </S.StatsContainer>
      </S.Container>
    </S.Section>
  );
}
