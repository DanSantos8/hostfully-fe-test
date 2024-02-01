import { space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  padding: ${toRem(120)} ${space("xlarge")} ${toRem(40)};
`
