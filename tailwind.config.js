export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)", "Jost"],
        overpass: ["var(--font-overpass)", "Overpass"],
        redhat: ["var(--font-redhat)", "Red Hat Display"],
      },
      colors: {
        primary: "#4756a2",
        accent: "#5865f2",
        dark: "#111115",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
