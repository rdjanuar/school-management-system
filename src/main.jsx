import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/theme.context";
import { MenuProvider } from "./context/menu.context";
import { SubmitProvider } from "./context/submit.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <SubmitProvider>
          <ThemeProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </ThemeProvider>
        </SubmitProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
