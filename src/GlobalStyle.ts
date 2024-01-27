import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  img {
    width: 100%;
  }
`
