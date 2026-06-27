import * as S from "./Footer.style";

export default function Footer() {
  return (
    <S.FooterContainer id="contact">
      <S.ContentWrapper>
        <S.LeftSection>
          <S.LogoContainer>
            <S.LogoBox>
              <S.LogoDot />
              <S.RotatedBorder />
            </S.LogoBox>
            <S.CompanyName>MARINE ICT</S.CompanyName>
          </S.LogoContainer>
          <S.CompanyDescription>해양 ICT 전문 기업 | AI 솔루션 개발사</S.CompanyDescription>
        </S.LeftSection>

        <S.RightSection>
          <S.Copyright>© 2025 MARINE ICT. ALL RIGHTS RESERVED.</S.Copyright>
          <S.LinkContainer>
            <S.FooterLink href="#">개인정보처리방침</S.FooterLink>
            <S.FooterLink href="#">이용약관</S.FooterLink>
            <S.FooterLink href="#" $highlight>
              문의하기
            </S.FooterLink>
          </S.LinkContainer>
        </S.RightSection>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
}
