import { colors, space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  height: ${toRem(80)};
  align-items: center;
  padding: 0 ${space("xlarge")};
  justify-content: center;
  border-bottom: 1px solid ${colors("border")};
`

export const ImageWrapper = styled.div`
  display: flex;
  height: 40px;
`

export const Navigation = styled.nav`
  display: flex;
  gap: ${space("xlarge")};
`
