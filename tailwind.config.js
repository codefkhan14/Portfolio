module.exports = {
  content: [
    "./index.html", // For vanilla projects
    "./src/**/*.{js,ts,jsx,tsx}", // For React, Vite, etc.
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // For Next.js
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgb(39, 39, 239), rgb(215, 14, 246))",
      },
      colors: {
        paragraph: "#252525", // Added here under `colors`
      },
    },
  },
  plugins: [],
};
