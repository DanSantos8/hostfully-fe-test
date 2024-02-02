import { colors, fontSize, space, toRem } from "@/utils/helpers"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  max-width: ${toRem(1440)};
  height: ${toRem(80)};
  margin: 0 auto;
  padding: 0 ${space("xlarge")} 0;
  align-items: center;
  justify-content: space-between;
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

export const Navigation = styled.ul`
  display: flex;
  gap: ${space("xlarge")};
`

export const Navigate = styled(Link)`
  font-size: ${fontSize("large")};
  color: ${colors("primary")};
`
