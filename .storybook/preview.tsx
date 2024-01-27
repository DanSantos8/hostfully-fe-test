import React from "react"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"

import type { Preview } from "@storybook/react"
import { GlobalStyles } from "../src/GlobalStyle"
import { ThemeProvider } from "styled-components"
import theme from "../src/theme"

export const decorators = [
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
    GlobalStyles,
    themes: {
      light: theme,
      dark: theme,
    },
  }),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
