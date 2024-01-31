import { Theme } from "@/models/theme.models"
import {
  colors,
  fontSize,
  rounded,
  space,
  toRem,
  weight,
} from "@/utils/helpers"
import styled from "styled-components"

export const Tags = styled.div`
  display: flex;
  gap: 0 ${space("small")};
  align-items: center;
  flex-wrap: wrap;
`

export const Text = styled.span<{ variant: keyof Theme["fontSize"] }>`
  display: flex;
  align-items: center;
  color: ${colors("lightText")};
  gap: ${space("small")};
  font-size: ${({ variant }) => fontSize(variant)};
  font-weight: ${weight("regular")};

  &:not(:last-child):after {
    content: "";
    display: flex;
    width: ${toRem(4)};
    height: ${toRem(4)};
    background-color: black;
    border-radius: ${rounded("full")};
  }
`
