export const setTheme = (theme) => {
  return localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  return localStorage.getItem("theme" || null);
};
