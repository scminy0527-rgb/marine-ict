import styled from "styled-components";
import { theme } from "../../styles/theme";

const PageContainer = styled.div`
  background: ${theme.COLOR.background};
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export { PageContainer, CanvasWrapper, ContentWrapper };
