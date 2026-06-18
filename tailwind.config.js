module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 30px 90px rgba(0, 0, 0, 0.35)",
        glow: "0 0 80px rgba(255, 255, 255, 0.05)",
      },
      colors: {
        charcoal: "#0A0A0A",
      },
    },
  },
  plugins: [],
}