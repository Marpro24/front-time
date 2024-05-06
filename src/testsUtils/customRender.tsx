import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import React from "react";

export const customRender = (children: React.ReactElement) =>
  render(
    <MemoryRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </MemoryRouter>,
  );

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>,
  );
};
