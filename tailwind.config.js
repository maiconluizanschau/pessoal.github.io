// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // azul (pode personalizar)
        secondary: "#0ea5e9", // azul claro
      },
    },
  },
  plugins: [],
};
