import * as S from "./TechSection.style";
import { useEffect, useState } from "react";

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
    <S.Section id="tech">
      <S.Container>
        <S.SectionLabel data-reveal="label" data-delay="0" $revealed={revealed.label}>
          <S.LabelText>CORE TECHNOLOGY</S.LabelText>
        </S.SectionLabel>

        <S.Headline data-reveal="headline" data-delay="80" $revealed={revealed.headline}>
          AI 기술 핵심 <span>적용 분야</span>
        </S.Headline>

        <S.Grid data-reveal="grid" data-delay="160" $revealed={revealed.grid}>
          {/* Feature 1 */}
          <S.Card>
            <S.IconBox>
              <S.ConcentricArcs>
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
              </S.ConcentricArcs>
            </S.IconBox>
            <S.CardTitle>해양 환경 모니터링</S.CardTitle>
            <S.CardDescription>
              AI 기반 실시간 해양 기상·수질·수온 데이터를 수집·분석하여 이상 징후를 즉시
              감지하는 지능형 모니터링 시스템
            </S.CardDescription>
          </S.Card>

          {/* Feature 2 */}
          <S.Card $color="secondary">
            <S.IconBox $color="secondary">
              <S.ArrowPath />
            </S.IconBox>
            <S.CardTitle>선박 항로 최적화</S.CardTitle>
            <S.CardDescription>
              해양 기상과 해류 데이터를 AI로 분석하여 최적의 항로를 실시간 제안하고 연료
              효율 및 안전성을 동시에 향상
            </S.CardDescription>
          </S.Card>

          {/* Feature 3 */}
          <S.Card>
            <S.IconBox>
              <S.TriangleWarning />
            </S.IconBox>
            <S.CardTitle>해양 재난 예측</S.CardTitle>
            <S.CardDescription>
              딥러닝 모델이 파도·풍속·조류 패턴을 분석해 이상 징후를 조기 감지하고 위험
              상황을 선제적으로 경보
            </S.CardDescription>
          </S.Card>

          {/* Feature 4 */}
          <S.Card $color="secondary">
            <S.IconBox $color="secondary">
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                <S.WaveIcon viewBox="0 0 28 14" fill="none">
                  <path
                    d="M0,7 Q3.5,0 7,7 Q10.5,14 14,7 Q17.5,0 21,7 Q24.5,14 28,7"
                    stroke="rgba(0,229,200,0.8)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </S.WaveIcon>
                <S.WaveIcon viewBox="0 0 20 10" fill="none">
                  <path
                    d="M0,5 Q2.5,0 5,5 Q7.5,10 10,5 Q12.5,0 15,5 Q17.5,10 20,5"
                    stroke="rgba(0,229,200,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                </S.WaveIcon>
              </div>
            </S.IconBox>
            <S.CardTitle>수중 통신 최적화</S.CardTitle>
            <S.CardDescription>
              AI 기반 수중 음파 통신 신호 처리 알고리즘으로 전송 품질을 극대화하고 장거리
              해저 통신 신뢰성 향상
            </S.CardDescription>
          </S.Card>
        </S.Grid>
      </S.Container>
    </S.Section>
  );
}
