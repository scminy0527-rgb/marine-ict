import * as S from "./HeroSection.style";
import RadarVisualization from "./RadarVisualization";

export default function HeroSection() {
  return (
    <S.Section id="about">
      <S.AmbientGradient1 />
      <S.AmbientGradient2 />

      <S.ContentContainer>
        <S.LeftContent>
          <S.Badge>
            <S.BadgeDot />
            <S.BadgeText>MARINE ICT SOLUTIONS</S.BadgeText>
          </S.Badge>

          <S.Title>
            해양의 미래를<br />
            <span>기술로 설계하다</span>
          </S.Title>

          <S.Description>
            바다의 방대한 데이터를 인공지능으로 분석하고<br />
            최적화된 솔루션을 제공하는 해양 ICT 전문 기업
          </S.Description>

          <S.ButtonContainer>
            <S.Button href="#ai" $primary>
              AI 기술 알아보기
            </S.Button>
            <S.Button href="#tech">솔루션 보기</S.Button>
          </S.ButtonContainer>
        </S.LeftContent>

        <S.RightContent>
          <RadarVisualization />
        </S.RightContent>
      </S.ContentContainer>

      <S.ScrollIndicator>
        <S.ScrollText>SCROLL</S.ScrollText>
        <S.ScrollLine />
      </S.ScrollIndicator>

      <S.BottomFade />
    </S.Section>
  );
}
