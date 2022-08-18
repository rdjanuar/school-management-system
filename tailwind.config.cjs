/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SidebarColor: "#333333",
        SettingSidebarColor: "#1e1e2d",
        bgColor: "rgba(242,247,255)",
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
};
