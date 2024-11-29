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
        "h1-desktop": ["32px", "auto"], // Page Title (Desktop)
        "h2-desktop": ["24px", "32px"], // Headline (Desktop)
        "p-desktop": ["20px", "24px"], // Page Description / Paragraph (Desktop)
        "h3-desktop": ["20px", "auto"], // Small Headline (Desktop)
        "label-desktop": ["14px", "16px"], // Label (Desktop)
        "alt-desktop": ["12px", "auto"], // Alternative (Desktop)
        "h1-mobile": ["24px", "28px"], // Page Title (Mobile)
        "h2-mobile": ["20px", "24px"], // Headline (Mobile)
        "p-mobile": ["16px", "24px"], // Paragraph / Small Headline (Mobile)
        "label-mobile": ["14px", "16px"], // Author / Info (Mobile)
        "alt-mobile": ["12px", "auto"], // Label/Alternative (Mobile)
      },
      animation: {},
      keyframes: {},
    },
  },
};
