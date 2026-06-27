export const theme = {
  FONT_SIZE: {
    h1: "72px",
    h2: "50px",
    h3: "40px",
    h4: "36px",
    h5: "28px",
    h6: "24px",
    h7: "24px",
    h8: "20px",
    h9: "16px",
    h10: "14px",
    h11: "12px",
    h12: "10px",
    h13: "8px",
  },
  FONT_LINE: {
    h1: "1.2",
    h2: "1.2",
    h3: "1.2",
    h4: "1.2",
    h5: "1.4",
    h6: "1.4",
    h7: "1.4",
    h8: "1.4",
    h9: "1.5",
    h10: "1.5",
    h11: "1.5",
    h12: "1.5",
    h13: "1.5",
  },
  FONT_WEIGHT: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  COLOR: {
    // Primary colors
    background: "#030810",
    primary: "#00c8ff",
    primaryLight: "#00aaff",
    secondary: "#00e5c8",
    tertiary: "#7ec8ff",

    // Neutral colors
    white: "#ffffff",
    lightGray: "rgba(160, 200, 240, 0.6)",
    mediumGray: "#666666",
    darkGray: "#333333",

    // Text colors
    textPrimary: "#d0e8ff",
    textSecondary: "rgba(160, 200, 240, 0.6)",

    // Accent colors
    accentBlue: "rgba(0, 160, 255, 0.12)",
    accentBlueMedium: "rgba(0, 180, 255, 0.5)",
    accentBlueBright: "rgba(0, 210, 255, 0.6)",
    accentBlueDark: "rgba(0, 140, 255, 0.18)",

    // Borders and overlays
    borderLight: "rgba(0, 155, 255, 0.4)",
    borderMedium: "rgba(0, 200, 255, 0.3)",
    borderBright: "rgba(0, 229, 200, 0.3)",
    overlayDark: "rgba(4, 13, 28, 0.98)",

    // Extended accent colors for components
    accentBlueDarkTransparent: "rgba(0, 140, 255, 0.12)",
    accentBlueLight: "rgba(0, 160, 255, 0.35)",
    accentBlueLighter: "rgba(0, 160, 255, 0.9)",
    accentBlueVeryLight: "rgba(0, 160, 255, 0.18)",
    accentBlueUltraLight: "rgba(0, 160, 255, 0.08)",

    // Secondary accent colors
    accentSecondary: "rgba(0, 229, 200, 0.2)",
    accentSecondaryLight: "rgba(0, 229, 200, 0.35)",
    accentSecondaryMedium: "rgba(0, 229, 200, 0.3)",
    accentSecondaryBright: "rgba(0, 229, 200, 0.8)",
    accentSecondaryVeryBright: "rgba(0, 229, 200, 0.9)",

    // Tertiary accent colors
    accentTertiary: "rgba(120, 200, 255, 0.22)",
    accentTertiaryLight: "rgba(120, 200, 255, 0.2)",
    accentTertiaryMedium: "rgba(120, 200, 255, 0.35)",
    accentTertiaryBright: "rgba(120, 200, 255, 0.4)",
    accentTertiaryText: "rgba(140, 210, 255, 0.8)",

    // Navigation bar
    navBg: "rgba(3, 8, 16, 0.85)",
    navBorder: "rgba(0, 150, 255, 0.1)",
    navText: "rgba(160, 200, 240, 0.6)",
    navBorderBox: "rgba(0, 180, 255, 0.5)",
    navBorderRotated: "rgba(0, 200, 255, 0.2)",

    // Hero section
    heroAmbientGradient1: "rgba(0, 60, 140, 0.22)",
    heroAmbientGradient2: "rgba(0, 80, 120, 0.18)",
    heroBadgeDotGlow: "rgba(0, 200, 255, 0.9)",
    heroButtonGradient: "linear-gradient(135deg, rgba(0,160,255,0.18), rgba(0,220,200,0.08))",
    heroButtonBorder: "rgba(0,190,255,0.5)",
    heroButtonSecondaryBorder: "rgba(160,200,240,0.18)",
    heroButtonSecondaryText: "rgba(160,200,240,0.65)",
    heroScrollText: "rgba(160, 200, 240, 0.35)",
    heroScrollLineGradient: "linear-gradient(to bottom, rgba(0, 160, 255, 0.6), transparent)",
    heroScrollLineInner: "linear-gradient(to bottom, #00aaff, transparent)",
    heroBottomFade: "linear-gradient(to bottom, transparent, #030810)",

    // AI Section
    aiCardBg: "rgba(4, 13, 28, 0.98)",
    aiCardBorder: "rgba(0, 155, 255, 0.22)",
    aiCardBorderSecondary: "rgba(0, 229, 200, 0.2)",
    aiCardBorderTertiary: "rgba(120, 200, 255, 0.22)",
    aiCardStep2Border: "rgba(0, 229, 200, 0.2)",
    aiCardStep3Border: "rgba(120, 200, 255, 0.22)",
    aiPipelineConnectorBg: "rgba(3, 8, 16, 0.95)",
    aiPipelineConnectorBorder: "rgba(0, 155, 255, 0.12)",
    aiPipelineConnectorLine: "rgba(0, 140, 255, 0.12)",
    aiStatsContainer: "rgba(0, 140, 255, 0.14)",
    aiGlowPulse: "radial-gradient(ellipse, rgba(0, 80, 180, 0.12), transparent 70%)",

    // Tech Section
    techCard: "rgba(4, 13, 28, 0.9)",
    techCardBorder: "rgba(0, 155, 255, 0.18)",
    techCardBorderSecondary: "rgba(0, 229, 200, 0.35)",
    techCardBorderHover: "rgba(0, 155, 255, 0.35)",
    techIconBorder: "rgba(0,160,255,0.3)",
    techIconBorderSecondary: "rgba(0,229,200,0.3)",
    techDescriptionText: "rgba(160, 200, 240, 0.6)",

    // Footer
    footerBorder: "rgba(0, 140, 255, 0.12)",
    footerLogoBox: "rgba(0, 180, 255, 0.4)",
    footerLogoRotated: "rgba(0, 200, 255, 0.15)",
    footerDescriptionText: "rgba(160, 200, 240, 0.45)",
    footerCopyright: "rgba(160, 200, 240, 0.3)",
    footerLinkText: "rgba(160,200,240,0.4)",
    footerLinkHover: "rgba(0,180,255,0.6)",

    // Radar visualization
    radarRingBorder: "rgba(0, 220, 255, 0.5)",
    radarTickMark: "rgba(0, 180, 255, 0.5)",
    radarAxisLine: "rgba(0, 150, 255, 0.08)",
    radarGlowBg: "rgba(0, 180, 255, 0.12)",
    radarCenterGlowOuter: "rgba(0, 210, 255, 0.9)",
    radarCenterGlowInner: "rgba(0, 210, 255, 0.4)",
    radarFloatingDot1: "rgba(0,200,255,0.6)",
    radarFloatingDot2: "rgba(0,220,200,0.5)",
    radarFloatingDot3: "rgba(0,180,255,0.7)",

    // Grid pattern
    gridPattern: "rgba(0, 100, 210, 0.045)",

    // Edge fades
    edgeFadeTop: "linear-gradient(to bottom, #030810, transparent)",
    edgeFadeBottom: "linear-gradient(to top, #030810, transparent)",
  },
  SPACING: {
    navHeight: "68px",
    containerMaxWidth: "1240px",
    containerPadding: "56px",
    sectionPaddingVerticalHero: "80px",
    sectionPaddingVerticalAI: "130px",
    sectionPaddingVerticalTech: "120px",
    sectionGapVertical: "130px",
  },
};
