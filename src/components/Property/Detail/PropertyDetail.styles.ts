import { colors, fontSize, space, toRem, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${space("xxsmall")};
  padding-bottom: ${space("large")};
  border-bottom: 1px solid #ccc;
`
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("large")};
  flex: 1;
  max-width: ${toRem(800)};
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`

export const Title = styled.h4`
  font-size: ${fontSize("xxlarge")};
  font-weight: ${weight("semibold")};
`

export const Description = styled.p`
  font-size: ${fontSize("large")};
  color: ${colors("text")};
  margin-bottom: ${space("small")};
`
