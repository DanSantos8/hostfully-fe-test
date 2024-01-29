import { colors, fontSize, rounded, space } from "@/utils/helpers"
import styled from "styled-components"

export const Host = styled.div`
  display: flex;
  gap: ${space("medium")};
  align-items: center;
`

export const Image = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors("primary")};
  border-radius: ${rounded("full")};
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: ${fontSize("medium")};
`
