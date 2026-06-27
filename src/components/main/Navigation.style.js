import styled from "styled-components";
import { theme } from "../../styles/theme";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${theme.SPACING.navHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.SPACING.containerPadding};
  background: ${theme.COLOR.navBg};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${theme.COLOR.navBorder};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const LogoBox = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid ${theme.COLOR.navBorderBox};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${theme.COLOR.primaryLight};
  box-shadow: 0 0 14px ${theme.COLOR.primaryLight};
`;

const RotatedBorder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid ${theme.COLOR.navBorderRotated};
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
  color: ${theme.COLOR.white};
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
  color: ${theme.COLOR.navText};
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${theme.COLOR.primaryLight};
  }
`;

const ContactButton = styled.a`
  font-size: 13px;
  padding: 8px 22px;
  border: 1px solid rgba(0, 170, 255, 0.4);
  color: ${theme.COLOR.primaryLight};
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border-color: ${theme.COLOR.primaryLight};
    box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
  }
`;

export { Nav, LogoContainer, LogoBox, LogoDot, RotatedBorder, LogoText, LogoTitle, LogoSubtitle, NavLinksContainer, NavLink, ContactButton };
