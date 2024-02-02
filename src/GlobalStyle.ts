import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }

  ul {
    list-style: none;
  }
  
  body {
    box-sizing: border-box;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
  }

`
