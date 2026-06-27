import * as S from "./YOLOSection.style";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function YOLOSection() {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState({
    label: false,
    headline: false,
    description: false,
    demo: false,
    stats: false,
  });

  const [stats, setStats] = useState({
    detections: 0,
    fps: 0,
    accuracy: 0,
    latency: 0,
  });

  const [detectionBoxes, setDetectionBoxes] = useState([
    {
      id: 1,
      x: 15,
      y: 20,
      w: 25,
      h: 35,
      confidence: 0.94,
      visible: false,
      color: "#00e5c8",
    },
    {
      id: 2,
      x: 55,
      y: 35,
      w: 20,
      h: 30,
      confidence: 0.87,
      visible: false,
      color: "#00aaff",
    },
    {
      id: 3,
      x: 70,
      y: 10,
      w: 18,
      h: 25,
      confidence: 0.91,
      visible: false,
      color: "#7ec8ff",
    },
  ]);

  useEffect(() => {
    const section = document.getElementById("yolo");
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
      { threshold: 0.05, rootMargin: "0px 0px 120px 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    if (!revealed.demo) return;

    const sequence = [
      { boxes: [0], delay: 300 },
      { boxes: [0, 1], delay: 500 },
      { boxes: [0, 1, 2], delay: 500 },
      { boxes: [], delay: 800 },
    ];

    let currentStep = 0;
    let timeoutId = null;

    const runSequence = () => {
      const step = sequence[currentStep];
      setDetectionBoxes((prev) =>
        prev.map((box, idx) => ({
          ...box,
          visible: step.boxes.includes(idx),
        })),
      );

      currentStep = (currentStep + 1) % sequence.length;
      timeoutId = setTimeout(runSequence, step.delay);
    };

    timeoutId = setTimeout(runSequence, 500);
    return () => clearTimeout(timeoutId);
  }, [revealed.demo]);

  useEffect(() => {
    const statElements = document.querySelectorAll("[data-stat]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const statType = entry.target.dataset.stat;
          const config = {
            detections: { end: 1250, dec: 0, suffix: "+", color: "#00e5c8" },
            fps: { end: 60, dec: 0, suffix: " FPS", color: "#00aaff" },
            accuracy: { end: 97.3, dec: 1, suffix: "%", color: "#7ec8ff" },
            latency: { end: 12, dec: 0, suffix: "ms", color: "#00e5c8" },
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
      { threshold: 0.5 },
    );

    statElements.forEach((el) => observer.observe(el));
  }, []);

  const handleExperienceClick = () => {
    navigate("/yolo-test");
  };

  return (
    <S.Section id="yolo">
      <S.GridPattern />
      <S.AmbientGlow />
      <S.EdgeFade $top />
      <S.EdgeFade />

      <S.Container>
        <S.SectionLabel
          data-reveal="label"
          data-delay="0"
          $revealed={revealed.label}
        >
          <S.LabelText>OBJECT DETECTION</S.LabelText>
        </S.SectionLabel>

        <S.Headline
          data-reveal="headline"
          data-delay="100"
          $revealed={revealed.headline}
        >
          AI 기반 <span>영상 객체탐지</span> 분석
          <br />
          실시간 감지 및 추적 시스템
        </S.Headline>

        <S.Description
          data-reveal="description"
          data-delay="180"
          $revealed={revealed.description}
        >
          YOLO 기반 고성능 객체탐지 모델을 활용하여 해양 영상 데이터에서
          <br />
          실시간으로 선박, 해양생물, 부표 등을 감지하고 추적합니다.
          <br />
          밀리초 단위의 초저지연 처리로 긴급 상황에 즉각 대응합니다.
        </S.Description>

        <S.DemoContainer
          data-reveal="demo"
          data-delay="260"
          $revealed={revealed.demo}
        >
          <S.FrameBox>
            {detectionBoxes.map((box) => (
              <S.DetectionBox
                key={box.id}
                $visible={box.visible}
                $color={box.color}
                style={{
                  left: `${box.x}%`,
                  top: `${box.y}%`,
                  width: `${box.w}%`,
                  height: `${box.h}%`,
                }}
              >
                <S.Label $color={box.color}>
                  선박 감지
                  <S.Confidence>
                    {Math.round(box.confidence * 100)}%
                  </S.Confidence>
                </S.Label>
              </S.DetectionBox>
            ))}
          </S.FrameBox>

          <S.InfoBox>
            <S.InfoCard>
              <S.CardTitle>실시간 객체 감지</S.CardTitle>
              <S.CardDescription>
                YOLO v8 기반의 고속 객체탐지 모델로 60FPS 이상의 실시간 처리
                성능을 구현합니다.
              </S.CardDescription>
              <S.FeatureList>
                <S.FeatureItem>선박·어선 자동 감지</S.FeatureItem>
                <S.FeatureItem>해양생물 추적</S.FeatureItem>
                <S.FeatureItem>부표·로프 인식</S.FeatureItem>
              </S.FeatureList>
            </S.InfoCard>

            <S.InfoCard>
              <S.CardTitle>멀티클래스 분류</S.CardTitle>
              <S.CardDescription>
                다양한 해양 객체를 동시에 인식하고 분류하며, 각 객체의 신뢰도를
                함께 표시합니다.
              </S.CardDescription>
              <S.FeatureList>
                <S.FeatureItem>고신뢰도 감지 (97%+)</S.FeatureItem>
                <S.FeatureItem>낮은 지연율 (12ms)</S.FeatureItem>
                <S.FeatureItem>복잡한 환경 대응</S.FeatureItem>
              </S.FeatureList>
            </S.InfoCard>
          </S.InfoBox>
        </S.DemoContainer>

        <S.ButtonContainer
          data-reveal="demo"
          data-delay="340"
          $revealed={revealed.demo}
        >
          <S.Button $primary onClick={handleExperienceClick}>
            체험하기
          </S.Button>
          <S.Button>상세 정보</S.Button>
        </S.ButtonContainer>

        <S.StatsContainer
          data-reveal="stats"
          data-delay="340"
          $revealed={revealed.stats}
        >
          <S.StatItem>
            <S.StatNumber $color="#00e5c8" data-stat="detections">
              0+
            </S.StatNumber>
            <S.StatLabel>누적 감지 건수</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber $color="#00aaff" data-stat="fps">
              0 FPS
            </S.StatNumber>
            <S.StatLabel>처리 속도</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber $color="#7ec8ff" data-stat="accuracy">
              0%
            </S.StatNumber>
            <S.StatLabel>탐지 정확도</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber $color="#00e5c8" data-stat="latency">
              0ms
            </S.StatNumber>
            <S.StatLabel>추론 지연시간</S.StatLabel>
          </S.StatItem>
        </S.StatsContainer>
      </S.Container>
    </S.Section>
  );
}
