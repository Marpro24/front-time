import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/fraunces";
import "@fontsource/fraunces/400.css";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import mainTheme from "./styles/mainTheme.ts";
import GlobalStyle from "./styles/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
