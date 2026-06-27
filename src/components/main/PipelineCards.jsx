import * as S from "./PipelineCards.style";

export default function PipelineCards() {
  const pipeline = [
    {
      number: "01",
      title: "데이터 수집",
      description:
        "위성, IoT 센서, 해양 관측소에서 실시간으로 데이터를 수집하고 전처리합니다.",
      borderColor: "rgba(0, 155, 255, 0.4)",
      accentColor: "#00aaff",
      arrowColor: "rgba(0, 170, 255, 0.5)",
    },
    {
      number: "02",
      title: "AI 모델 처리",
      description:
        "수집된 데이터를 머신러닝 모델로 분석하여 해양 환경 패턴을 식별합니다.",
      borderColor: "rgba(0, 229, 200, 0.3)",
      accentColor: "#00e5c8",
      arrowColor: "rgba(0, 200, 200, 0.5)",
    },
    {
      number: "03",
      title: "결과 시각화",
      description:
        "분석 결과를 대시보드에 시각화하여 의사결정을 지원합니다.",
      borderColor: "rgba(120, 200, 255, 0.35)",
      accentColor: "#7ec8ff",
      arrowColor: null,
    },
  ];

  return (
    <S.CardsContainer>
      {pipeline.map((card, index) => (
        <div key={index} style={{ position: "relative" }}>
          <S.CardBase
            $borderColor={card.borderColor}
            $accentColor={card.accentColor}
          >
            <div>
              <S.CardNumber $accentColor={card.accentColor}>
                {card.number}
              </S.CardNumber>
              <S.CardTitle>{card.title}</S.CardTitle>
            </div>
            <S.CardDescription>{card.description}</S.CardDescription>
          </S.CardBase>
          {card.arrowColor && (
            <S.ArrowConnector $color={card.arrowColor} />
          )}
        </div>
      ))}
    </S.CardsContainer>
  );
}
