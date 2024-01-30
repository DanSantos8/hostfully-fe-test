import { colors, fontSize, rounded, space } from "@/utils/helpers"
import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 300px;
  padding: ${space("large")};
  border-radius: ${rounded("medium")};
  background-color: white;
  border: 1px solid ${colors("border")};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
`

export const Pricing = styled.div`
  display: flex;
  gap: ${space("small")};
  align-items: center;
`

export const RegularPrice = styled.span<{ hasPromoPrice?: boolean }>`
  font-size: ${fontSize("xxxlarge")};

  ${({ hasPromoPrice }) =>
    hasPromoPrice &&
    css`
      text-decoration: line-through;
      color: ${colors("lightText")};
    `}
`

export const Text = styled.span`
  font-size: ${fontSize("medium")};
  color: ${colors("lightText")};
`
