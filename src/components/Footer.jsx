import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(0, 140, 255, 0.12);
  padding: 60px 56px;
`;

const ContentWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const LogoBox = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid rgba(0, 180, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoDot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #00aaff;
  box-shadow: 0 0 10px #00aaff;
`;

const RotatedBorder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid rgba(0, 200, 255, 0.15);
  transform: rotate(45deg);
`;

const CompanyName = styled.span`
  font-family: Orbitron;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 3px;
`;

const CompanyDescription = styled.p`
  font-size: 13px;
  color: rgba(160, 200, 240, 0.45);
  margin: 0;
  letter-spacing: 0.5px;
`;

const RightSection = styled.div`
  text-align: right;
`;

const Copyright = styled.p`
  font-family: Orbitron;
  font-size: 11px;
  color: rgba(160, 200, 240, 0.3);
  letter-spacing: 2px;
  margin: 0 0 8px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  font-size: 12px;
  color: ${(props) => (props.highlight ? "rgba(0,180,255,0.6)" : "rgba(160,200,240,0.4)")};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => (props.highlight ? "#00aaff" : "rgba(160,200,240,0.6)")};
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <ContentWrapper>
        <LeftSection>
          <LogoContainer>
            <LogoBox>
              <LogoDot />
              <RotatedBorder />
            </LogoBox>
            <CompanyName>MARINE ICT</CompanyName>
          </LogoContainer>
          <CompanyDescription>해양 ICT 전문 기업 | AI 솔루션 개발사</CompanyDescription>
        </LeftSection>

        <RightSection>
          <Copyright>© 2025 MARINE ICT. ALL RIGHTS RESERVED.</Copyright>
          <LinkContainer>
            <FooterLink href="#">개인정보처리방침</FooterLink>
            <FooterLink href="#">이용약관</FooterLink>
            <FooterLink href="#" highlight>
              문의하기
            </FooterLink>
          </LinkContainer>
        </RightSection>
      </ContentWrapper>
    </FooterContainer>
  );
}
