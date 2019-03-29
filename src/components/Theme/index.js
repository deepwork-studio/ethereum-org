import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primarydark};
  }
`;

const Theme = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle theme={theme} />
      {props.children}
    </>
  </ThemeProvider>
);

export default Theme;
