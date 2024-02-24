// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "cursive"],
        mono: ["Roboto Mono", "monospace"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: '#3498db',      // Light Blue
        secondary: '#2c3e50',    // Dark Blue
        accent: '#16a085',       // Green
        neutral: '#ecf0f1',      // Light Gray
        // Add more colors here as needed
      },
    },
  },
  plugins: [],
};
