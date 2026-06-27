import * as S from "./Navigation.style";

export default function Navigation() {
  return (
    <S.Nav>
      <S.LogoContainer>
        <S.LogoBox>
          <S.LogoDot />
          <S.RotatedBorder />
        </S.LogoBox>
        <S.LogoText>
          <S.LogoTitle>MARINE ICT</S.LogoTitle>
          <S.LogoSubtitle>해양 ICT 솔루션</S.LogoSubtitle>
        </S.LogoText>
      </S.LogoContainer>
      <S.NavLinksContainer>
        <S.NavLink href="#about">소개</S.NavLink>
        <S.NavLink href="#ai">AI 기술</S.NavLink>
        <S.NavLink href="#tech">솔루션</S.NavLink>
        <S.ContactButton href="#contact">문의하기</S.ContactButton>
      </S.NavLinksContainer>
    </S.Nav>
  );
}
