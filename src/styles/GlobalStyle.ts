import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2 {
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font.mainFontFamily};
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
  }

  input,
  textarea,
  select {
    font: inherit;
    border: none;
  }
`;

export default GlobalStyle;
