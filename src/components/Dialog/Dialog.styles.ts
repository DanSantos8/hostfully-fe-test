import { colors, fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${space("medium")};
  margin-top: auto;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${fontSize("small")};
  padding: ${space("xsmall")} ${space("large")};
  margin-top: auto;
  border-radius: 4px;
`

export const Cancel = styled(Button)``

export const Update = styled(Button)`
  background-color: ${colors("primary")};
  color: white;
  font-weight: ${weight("semibold")};
`
