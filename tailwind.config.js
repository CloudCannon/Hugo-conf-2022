module.exports = {
  mode: "jit",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./component-library/components/**/*.html",
    "./component-library/components/**/*.toml",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Permanent Marker", "serif"],
      },
      colors: {
        pink: "#C9177E",
        green: "#00A88A",
        blue: "#034AD8",
        yellow: "#FCD804",
        black: "#1C1C1C",
      },
      boxShadow: {
        'solid': '0 0 0 2px',
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        shake1: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        shake2: "shake 0.52s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0);",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
