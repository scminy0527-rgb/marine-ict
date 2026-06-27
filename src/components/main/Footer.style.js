import styled from "styled-components";
import { theme } from "../../styles/theme";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  border-top: 1px solid ${theme.COLOR.footerBorder};
  padding: 60px ${theme.SPACING.containerPadding};
`;

const ContentWrapper = styled.div`
  max-width: ${theme.SPACING.containerMaxWidth};
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
  border: 1px solid ${theme.COLOR.footerLogoBox};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoDot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${theme.COLOR.primaryLight};
  box-shadow: 0 0 10px ${theme.COLOR.primaryLight};
`;

const RotatedBorder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid ${theme.COLOR.footerLogoRotated};
  transform: rotate(45deg);
`;

const CompanyName = styled.span`
  font-family: Orbitron;
  font-size: 13px;
  font-weight: 600;
  color: ${theme.COLOR.white};
  letter-spacing: 3px;
`;

const CompanyDescription = styled.p`
  font-size: 13px;
  color: ${theme.COLOR.footerDescriptionText};
  margin: 0;
  letter-spacing: 0.5px;
`;

const RightSection = styled.div`
  text-align: right;
`;

const Copyright = styled.p`
  font-family: Orbitron;
  font-size: 11px;
  color: ${theme.COLOR.footerCopyright};
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
  color: ${(props) => (props.$highlight ? theme.COLOR.footerLinkHover : theme.COLOR.footerLinkText)};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => (props.$highlight ? theme.COLOR.primaryLight : theme.COLOR.footerLinkHover)};
  }
`;

export {
  FooterContainer,
  ContentWrapper,
  LeftSection,
  LogoContainer,
  LogoBox,
  LogoDot,
  RotatedBorder,
  CompanyName,
  CompanyDescription,
  RightSection,
  Copyright,
  LinkContainer,
  FooterLink,
};
