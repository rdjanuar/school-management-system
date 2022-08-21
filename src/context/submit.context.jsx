import React, { createContext, useState } from "react";

export const SubmitContext = createContext({
  submit: false,
  handleSubmited: () => {},
});

export const SubmitProvider = ({ children }) => {
  const [submit, setSubmit] = useState(false);

  const handleSubmited = () => {
    setSubmit((prevSubmit) => (prevSubmit === false ? true : false));
  };

  const value = { submit, handleSubmited };

  return (
    <SubmitContext.Provider value={value}>{children}</SubmitContext.Provider>
  );
};
