module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      colors: {
        zwart: "#161616",
        wit: "#F5F3F5",
        rood: "#E94560",
        zilver: "#AFAFAF",
      },
      fontFamily: {
        paragraaf: ["IBM Plex Serif", "serif"],
        standaard: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "h1-desktop": ["32px", { lineHeight: "auto", fontWeight: "700" }], // Page Title (Desktop)
        "h2-desktop": ["24px", { lineHeight: "32px", fontWeight: "600" }], // Headline (Desktop)
        "p-desktop": ["20px", { lineHeight: "24px", fontWeight: "400" }], // Page Description / Paragraph (Desktop)
        "h3-desktop": ["20px", { lineHeight: "auto", fontWeight: "500" }], // Small Headline (Desktop)
        "label-desktop": ["14px", { lineHeight: "16px", fontWeight: "400" }], // Label (Desktop)
        "alt-desktop": ["12px", { lineHeight: "auto", fontWeight: "400" }], // Alternative (Desktop)
        "h1-mobile": ["24px", { lineHeight: "28px", fontWeight: "700" }], // Page Title (Mobile)
        "h2-mobile": ["20px", { lineHeight: "24px", fontWeight: "600" }], // Headline (Mobile)
        "p-mobile": ["16px", { lineHeight: "24px", fontWeight: "400" }], // Paragraph / Small Headline (Mobile)
        "label-mobile": ["14px", { lineHeight: "16px", fontWeight: "400" }], // Author / Info (Mobile)
        "alt-mobile": ["12px", { lineHeight: "auto", fontWeight: "400" }], // Label/Alternative (Mobile)
      },
      animation: {},
      keyframes: {},
    },
  },
};
