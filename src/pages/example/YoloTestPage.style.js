import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${theme.COLOR.background};
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const Section = styled.section`
  max-width: ${theme.SPACING.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${theme.SPACING.containerPadding};
`;

export const HeroSection = styled(Section)`
  padding-top: 140px;
  padding-bottom: 120px;
  text-align: center;
`;

export const SectionLabel = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: 5px;
  color: ${theme.COLOR.primaryLight};
  margin-bottom: 20px;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeInUp 0.75s ease-out 0.2s forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Headline = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: ${theme.FONT_SIZE.h2};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.COLOR.white};
  margin-bottom: 24px;
  line-height: 1.2;
  opacity: 0;
  animation: fadeInUp 0.75s ease-out 0.4s forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Description = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.COLOR.textSecondary};
  font-weight: ${theme.FONT_WEIGHT.light};
  line-height: 1.9;
  max-width: 600px;
  margin: 0 auto 60px;
  opacity: 0;
  animation: fadeInUp 0.75s ease-out 0.6s forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const UploadContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px ${theme.SPACING.containerPadding} 100px;
`;

export const UploadArea = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 300px;
  border: 2px dashed ${theme.COLOR.borderLight};
  border-radius: 8px;
  background: ${theme.COLOR.accentBlueUltraLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(0, 200, 255, 0.05),
      transparent
    );
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: ${theme.COLOR.primary};
    background: ${theme.COLOR.accentBlueLight};
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &.drag-active {
    border-color: ${theme.COLOR.primary};
    background: ${theme.COLOR.accentBlueMedium};
    box-shadow: 0 0 40px rgba(0, 200, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &.uploading {
    pointer-events: none;
    opacity: 0.6;
  }

  input[type="file"] {
    display: none;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: ${theme.COLOR.primary};
  animation: floatY 4s ease-in-out infinite;

  @keyframes floatY {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const UploadText = styled.div`
  text-align: center;
`;

export const UploadTitle = styled.h3`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.COLOR.textPrimary};
  margin-bottom: 8px;
`;

export const UploadSubtitle = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.COLOR.textSecondary};
  font-weight: ${theme.FONT_WEIGHT.light};
`;

export const UploadButton = styled.button`
  margin-top: 40px;
  padding: 12px 32px;
  background: linear-gradient(
    135deg,
    rgba(0, 160, 255, 0.18),
    rgba(0, 220, 200, 0.08)
  );
  border: 1px solid ${theme.COLOR.primary};
  border-radius: 4px;
  color: ${theme.COLOR.white};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.medium};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${theme.COLOR.primary};
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.3);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ProgressSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px ${theme.SPACING.containerPadding};
  min-height: 200px;
  justify-content: center;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const ProgressLabel = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.COLOR.textPrimary};
  margin-bottom: 12px;
  font-weight: ${theme.FONT_WEIGHT.medium};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${theme.COLOR.accentBlueDarkTransparent};
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid ${theme.COLOR.borderLight};
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${theme.COLOR.primary},
    ${theme.COLOR.secondary}
  );
  border-radius: 3px;
  transition: width 0.3s ease;
  width: ${(props) => props.$width}%;

  ${(props) =>
    props.$width === 100 &&
    `
    animation: glowPulse 0.5s ease-in-out;
  `}

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 8px rgba(0, 200, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 16px rgba(0, 200, 255, 0.8);
    }
  }
`;

export const ProgressText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.COLOR.textSecondary};
  margin-top: 8px;
  text-align: right;
`;

export const ProgressSubtext = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  color: ${theme.COLOR.textSecondary};
  margin-top: 12px;
  text-align: center;
  font-weight: ${theme.FONT_WEIGHT.light};
  animation: glowPulse 2s ease-in-out infinite;

  @keyframes glowPulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const ResultsSection = styled(Section)`
  padding: 80px ${theme.SPACING.containerPadding};
`;

export const ResultsTitle = styled.h2`
  font-family: "Orbitron", sans-serif;
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.COLOR.white};
  margin-bottom: 20px;
  text-align: center;

  opacity: 0;
  animation: fadeInUp 0.75s ease-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.div`
  background: ${theme.COLOR.aiCardBg};
  border: 1px solid ${theme.COLOR.aiCardBorder};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${theme.COLOR.primary};
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.2);
    transform: translateY(-4px);
  }

  opacity: 0;
  animation: fadeInUp 0.75s ease-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${theme.COLOR.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardLabel = styled.div`
  font-family: "Orbitron", sans-serif;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: 3px;
  color: ${theme.COLOR.primaryLight};
  text-transform: uppercase;
  padding: 16px 24px;
  border-bottom: 1px solid ${theme.COLOR.borderLight};
`;

export const CardContent = styled.div`
  padding: 24px;

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.COLOR.textPrimary};
    margin-bottom: 8px;
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${theme.FONT_SIZE.h10};
    color: ${theme.COLOR.textSecondary};
    font-weight: ${theme.FONT_WEIGHT.light};
    line-height: 1.6;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(255, 100, 100, 0.1);
  border: 1px solid rgba(255, 100, 100, 0.3);
  border-radius: 4px;
  padding: 16px;
  margin: 24px auto;
  max-width: 500px;
  color: #ff6464;
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  text-align: center;
  animation: fadeInUp 0.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${theme.FONT_SIZE.h10};
    color: ${theme.COLOR.textSecondary};
    font-weight: ${theme.FONT_WEIGHT.light};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  padding: 12px 32px;
  background: ${(props) =>
    props.$primary
      ? "linear-gradient(135deg, rgba(0, 160, 255, 0.18), rgba(0, 220, 200, 0.08))"
      : "transparent"};
  border: 1px solid
    ${(props) => (props.$primary ? theme.COLOR.primary : theme.COLOR.borderLight)};
  border-radius: 4px;
  color: ${theme.COLOR.white};
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.medium};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${theme.COLOR.primary};
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.3);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const DownloadButton = styled(ActionButton)`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "⬇";
    font-weight: bold;
  }
`;
