import styled from "styled-components";
import { flexCenter, flexBetweenRow, h6Bold, h7Regular, h9Medium } from "../styles/common";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const CardBase = styled.div`
  position: relative;
  padding: 24px 20px;
  min-height: 140px;
  border-radius: 4px;
  background: ${({ theme }) => theme.COLOR.overlayDark};
  border: 1px solid ${({ $borderColor, theme }) => $borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $accentColor }) => $accentColor};
  }

  &:hover {
    border-color: ${({ $accentColor }) => $accentColor};
    box-shadow: 0 0 20px ${({ $accentColor }) => $accentColor}33;
  }
`;

const CardNumber = styled.div`
  ${h9Medium}
  color: ${({ $accentColor }) => $accentColor};
  font-weight: 600;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  ${h6Bold}
  color: ${({ theme }) => theme.COLOR.white};
  margin: 0 0 8px 0;
`;

const CardDescription = styled.p`
  ${h9Medium}
  color: ${({ theme }) => theme.COLOR.lightGray};
  margin: 0;
  line-height: 1.5;
`;

const ArrowConnector = styled.div`
  position: absolute;
  top: 50%;
  right: -40px;
  width: 30px;
  height: 1.5px;
  background: ${({ $color }) => $color};
  transform: translateY(-50%);
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    right: -6px;
    top: -3px;
    width: 0;
    height: 0;
    border-left: 8px solid ${({ $color }) => $color};
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

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
    <CardsContainer>
      {pipeline.map((card, index) => (
        <div key={index} style={{ position: "relative" }}>
          <CardBase
            $borderColor={card.borderColor}
            $accentColor={card.accentColor}
          >
            <div>
              <CardNumber $accentColor={card.accentColor}>
                {card.number}
              </CardNumber>
              <CardTitle>{card.title}</CardTitle>
            </div>
            <CardDescription>{card.description}</CardDescription>
          </CardBase>
          {card.arrowColor && (
            <ArrowConnector $color={card.arrowColor} />
          )}
        </div>
      ))}
    </CardsContainer>
  );
}
