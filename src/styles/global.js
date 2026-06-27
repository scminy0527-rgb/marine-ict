// 전역 스타일 — 폰트 선언, CSS 리셋, body 기본값
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #030810;
    color: #d0e8ff;
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-14px); }
  }

  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0,170,255,0.3), 0 0 50px rgba(0,170,255,0.1); }
    50% { box-shadow: 0 0 50px rgba(0,170,255,0.7), 0 0 100px rgba(0,170,255,0.25); }
  }

  @keyframes rotateRing {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes counterRing {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  @keyframes dataDot {
    0%   { left: -6%; opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { left: 106%; opacity: 0; }
  }

  @keyframes shimmerText {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes scanDrop {
    0%   { top: 0%; opacity: 0; }
    5%   { opacity: 1; }
    95%  { opacity: 0.6; }
    100% { top: 100%; opacity: 0; }
  }

  @keyframes borderGlow {
    0%, 100% { border-color: rgba(0,160,255,0.2); }
    50%       { border-color: rgba(0,220,255,0.55); }
  }
`;

export default GlobalStyle;
