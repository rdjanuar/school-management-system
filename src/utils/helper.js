import * as yup from "yup";

export const setTheme = (theme) => {
  return localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  return localStorage.getItem("theme" || null);
};

export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token" || null);
};

export const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const userData = (key) => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const userDataTranslated = JSON.parse(userData);
    return userDataTranslated[key] ? userDataTranslated[key] : null;
  } else {
    return null;
  }
};

export const isLogin = () => {
  return localStorage.getItem("token") && localStorage.getItem("user");
};

export const validatorSchema = () => {
  const schema = yup.object().shape({
    username: yup.string().required().min(4).max(16),
    password: yup.string().required().min(4).max(16),
    email: yup
      .string()
      .email()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password not match"),
  });

  return schema;
};
