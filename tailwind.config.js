module.exports = {
    content: ["./layouts/**/*.html", "./content/**/*.{md,html}", "./component-library/components/**/*.html"],
    theme: {
      extend: {
          fontFamily: {
            sans: ["Nunito","sans-serif"],
            serif: ["Permanent Marker", "serif"]
          },
          colors: {
            pink: "#C9177E",
            green: "#00A88A",
            blue: "#034AD8",
            yellow: "#FCD804",
            black: "#1C1C1C"
          },
        },
    },
    plugins: [],
};
