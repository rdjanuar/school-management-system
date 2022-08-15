import * as yup from "yup";

export const errorYup = () => {
  const schema = yup.object().shape({
    username: yup.string().required().min(6).max(12),
    password: yup.string().required().min(6).max(12),
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
