import { fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${space("xxsmall")};
  padding-bottom: ${space("large")};
  border-bottom: 1px solid #ccc;
`

export const Title = styled.h4`
  font-size: ${fontSize("xxlarge")};
  font-weight: ${weight("semibold")};
`
