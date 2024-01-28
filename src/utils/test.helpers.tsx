import { GlobalStyles } from "@/GlobalStyle"
import theme from "@/theme"
import { ReactElement } from "react"
import { ThemeProvider } from "styled-components"

export const withThemeProvider = (Component: ReactElement): ReactElement => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {Component}
  </ThemeProvider>
)
