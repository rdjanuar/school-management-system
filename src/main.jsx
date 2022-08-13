import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { DataProvider } from "./context/data.context";
import { ThemeProvider } from "./context/theme.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
