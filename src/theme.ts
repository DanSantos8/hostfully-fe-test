import { Theme } from "./models/theme.models"

const theme: Theme = {
  colors: {
    primary: "#FF5A5F",
    secondary: "#00A699",
    background: "#FFF",
    text: "#333",
    lightText: "#767676",
    border: "#EBEBEB",
  },
  spacing: {
    xxsmall: "0.25rem",
    xsmall: "0.5rem",
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "3rem",
  },
  fontSize: {
    small: "0.75rem",
    medium: "0.875rem",
    large: "1rem",
    xlarge: "1.125rem",
    xxlarge: "1.5rem",
    huge: "2rem",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  rounded: {
    small: "0.75rem",
    medium: "0.875rem",
  },
}

export default theme
