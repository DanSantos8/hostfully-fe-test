import { colors, fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("xlarge")};
`

export const Message = styled.h1`
  font-size: ${fontSize("huge")};
  font-weight: ${weight("medium")};
  color: ${colors("lightText")};
`
