/**
 * Official Multicolor Academic Design System Tokens for Amina Mumtaz.
 * Mirrors the CSS custom properties declared in src/app/globals.css.
 */

export const DESIGN_TOKENS = {
  colors: {
    primaryNavy: "#253B70",
    deepNavy: "#192B50",
    teal: "#0D635F",
    purple: "#553388",
    terracotta: "#C25322",
    goldenYellow: "#D8A228",
    softBlue: "#EAF0FA",
    softTeal: "#D2EBE6",
    softPurple: "#DDD1EE",
    softGold: "#F2DFB4",
    coolWhite: "#F2F5FA",
    pureWhite: "#FFFFFF",
    mainText: "#273449",
    secondaryText: "#667085",
    border: "#E3E8F0",
  },
  fonts: {
    display: "Playfair Display",
    body: "Inter",
  },
  radii: {
    button: "0.75rem",
    card: "1rem",
    featureCard: "1.5rem",
    badge: "9999px",
  },
} as const;
