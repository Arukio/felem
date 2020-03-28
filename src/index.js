import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "styled-components";
import * as theme from "./theme";
import GlobalStyle from "./components/GlobalStyle";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
