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
      animation: {},
      keyframes: {},
    },
  },
};
