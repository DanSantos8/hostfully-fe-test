import "styled-components"
import { Theme } from "./models/theme.models"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
