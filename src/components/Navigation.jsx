import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  background: rgba(3, 8, 16, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 150, 255, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const LogoBox = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid rgba(0, 180, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #00aaff;
  box-shadow: 0 0 14px #00aaff;
`;

const RotatedBorder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid rgba(0, 200, 255, 0.2);
  transform: rotate(45deg);
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.div`
  font-family: Orbitron;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 3px;
`;

const LogoSubtitle = styled.div`
  font-size: 10px;
  color: rgba(160, 200, 240, 0.45);
  letter-spacing: 1px;
  margin-top: 1px;
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 13px;
  color: rgba(160, 200, 240, 0.6);
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #00aaff;
  }
`;

const ContactButton = styled.a`
  font-size: 13px;
  padding: 8px 22px;
  border: 1px solid rgba(0, 170, 255, 0.4);
  color: #00aaff;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border-color: #00aaff;
    box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <LogoContainer>
        <LogoBox>
          <LogoDot />
          <RotatedBorder />
        </LogoBox>
        <LogoText>
          <LogoTitle>MARINE ICT</LogoTitle>
          <LogoSubtitle>해양 ICT 솔루션</LogoSubtitle>
        </LogoText>
      </LogoContainer>
      <NavLinksContainer>
        <NavLink href="#about">소개</NavLink>
        <NavLink href="#ai">AI 기술</NavLink>
        <NavLink href="#tech">솔루션</NavLink>
        <ContactButton href="#contact">문의하기</ContactButton>
      </NavLinksContainer>
    </Nav>
  );
}
