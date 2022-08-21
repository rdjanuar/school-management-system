/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SidebarColor: "#1e1e2d",
        SettingSidebarColor: "#1e1e2d",
        bgColor: "rgba(242,247,255)",
        darkSidebarColor: "#9899ac",
      },
      fontFamily: {
        sidebarFont: ["Nunito"],
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
  },
  plugins: [require("tailwind-scrollbar")],
};
