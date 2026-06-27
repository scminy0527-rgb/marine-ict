import styled from "styled-components";
import { useEffect, useState } from "react";

const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 120px 0 130px;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 56px;
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
  font-size: 46px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 64px;
  line-height: 1.2;
  word-break: keep-all;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;

  span {
    color: #00aaff;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  opacity: ${(props) => props.revealed ? 1 : 0};
  transform: ${(props) => props.revealed ? "translateY(0)" : "translateY(28px)"};
  transition: opacity 0.75s ease, transform 0.75s ease;
`;

const Card = styled.div`
  background: rgba(4, 13, 28, 0.9);
  border: 1px solid rgba(0, 155, 255, 0.18);
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
      props.color === "secondary"
        ? "linear-gradient(to bottom, transparent, #00e5c8, transparent)"
        : "linear-gradient(to bottom, transparent, #00aaff, transparent)"};
  }

  &:hover {
    border-color: ${(props) =>
      props.color === "secondary"
        ? "rgba(0, 229, 200, 0.35)"
        : "rgba(0, 155, 255, 0.35)"};
  }
`;

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid ${(props) =>
    props.color === "secondary"
      ? "rgba(0,229,200,0.3)"
      : "rgba(0,160,255,0.3)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 14px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: rgba(160, 200, 240, 0.6);
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
    background: #030810;
  }

  &::after {
    content: "";
    position: absolute;
    top: 16px;
    left: -2px;
    width: 4px;
    height: 4px;
    background: #030810;
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

export default function TechSection() {
  const [revealed, setRevealed] = useState({
    label: false,
    headline: false,
    grid: false,
  });

  useEffect(() => {
    const section = document.getElementById("tech");
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

  return (
    <Section id="tech">
      <Container>
        <SectionLabel data-reveal="label" data-delay="0" revealed={revealed.label}>
          <LabelText>CORE TECHNOLOGY</LabelText>
        </SectionLabel>

        <Headline data-reveal="headline" data-delay="80" revealed={revealed.headline}>
          AI 기술 핵심 <span>적용 분야</span>
        </Headline>

        <Grid data-reveal="grid" data-delay="160" revealed={revealed.grid}>
          {/* Feature 1 */}
          <Card>
            <IconBox>
              <ConcentricArcs>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,180,255,0.8)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 6,
                    borderRadius: "50%",
                    border: "1px solid rgba(0,180,255,0.5)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 12,
                    borderRadius: "50%",
                    background: "rgba(0,180,255,0.8)",
                  }}
                />
              </ConcentricArcs>
            </IconBox>
            <CardTitle>해양 환경 모니터링</CardTitle>
            <CardDescription>
              AI 기반 실시간 해양 기상·수질·수온 데이터를 수집·분석하여 이상 징후를 즉시
              감지하는 지능형 모니터링 시스템
            </CardDescription>
          </Card>

          {/* Feature 2 */}
          <Card color="secondary">
            <IconBox color="secondary">
              <ArrowPath />
            </IconBox>
            <CardTitle>선박 항로 최적화</CardTitle>
            <CardDescription>
              해양 기상과 해류 데이터를 AI로 분석하여 최적의 항로를 실시간 제안하고 연료
              효율 및 안전성을 동시에 향상
            </CardDescription>
          </Card>

          {/* Feature 3 */}
          <Card>
            <IconBox>
              <TriangleWarning />
            </IconBox>
            <CardTitle>해양 재난 예측</CardTitle>
            <CardDescription>
              딥러닝 모델이 파도·풍속·조류 패턴을 분석해 이상 징후를 조기 감지하고 위험
              상황을 선제적으로 경보
            </CardDescription>
          </Card>

          {/* Feature 4 */}
          <Card color="secondary">
            <IconBox color="secondary">
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                <WaveIcon viewBox="0 0 28 14" fill="none">
                  <path
                    d="M0,7 Q3.5,0 7,7 Q10.5,14 14,7 Q17.5,0 21,7 Q24.5,14 28,7"
                    stroke="rgba(0,229,200,0.8)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </WaveIcon>
                <WaveIcon viewBox="0 0 20 10" fill="none">
                  <path
                    d="M0,5 Q2.5,0 5,5 Q7.5,10 10,5 Q12.5,0 15,5 Q17.5,10 20,5"
                    stroke="rgba(0,229,200,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                </WaveIcon>
              </div>
            </IconBox>
            <CardTitle>수중 통신 최적화</CardTitle>
            <CardDescription>
              AI 기반 수중 음파 통신 신호 처리 알고리즘으로 전송 품질을 극대화하고 장거리
              해저 통신 신뢰성 향상
            </CardDescription>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
