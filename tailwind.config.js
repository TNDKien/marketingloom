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
        black: "#161616",
        white: "#F5F3F5",
        red: "#E94560",
        silver: "#AFAFAF",
        standard_red: "#de5246",
      },
      fontFamily: {
        serif: ["IBM Plex Serif", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        // Unique Desktop Typography
        "h1-desktop": ["32px", "auto"], // Page title
        "h2-desktop": ["24px", "32px"], // Headline
        "p-large-desktop": ["20px", "24px"], // Page description
        "h3-desktop": ["20px", "auto"], // Small headline
        "label-desktop": ["14px", "16px"], // Label
        "alt-desktop": ["12px", "auto"], // Alternative

        // Shared sizes for Desktop and Mobile
        paragraph: ["16px", "24px"], // Paragraph & Author/Information (Desktop) + Paragraph (Mobile)

        // Unique Mobile Typography
        "h1-mobile": ["24px", "28px"], // Page title
        "h3-mobile": ["20px", "24px"], // Headline
        "p-large-mobile": ["20px", "24px"], // Page description
        "info-mobile": ["14px", "16px"], // Author/Info
        "label-mobile": ["12px", "auto"], // Label/Alternative
      },
      animation: {},
      keyframes: {},
    },
  },
};
