import styled from "styled-components";
import { theme } from "../styles/theme";
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

export { CardsContainer, CardBase, CardNumber, CardTitle, CardDescription, ArrowConnector };
