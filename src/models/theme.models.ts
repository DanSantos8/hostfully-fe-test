export type Theme = {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    lightText: string
    border: string
  }
  spacing: {
    xxsmall: string
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
  }
  fontSize: {
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
    huge: string
  }
  weight: {
    light: number
    regular: number
    medium: number
    semibold: number
    bold: number
  }
  rounded: {
    small: string
    medium: string
  }
}
