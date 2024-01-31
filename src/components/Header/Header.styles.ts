import { colors, space, toRem } from "@/utils/helpers"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  height: ${toRem(80)};
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors("border")};
  position: fixed;
  inset: 0;
  background-color: white;
  z-index: 90;
`

export const ImageWrapper = styled(Link)`
  display: flex;
  height: ${toRem(40)};
`

export const Navigation = styled.nav`
  display: flex;
  gap: ${space("xlarge")};
`
