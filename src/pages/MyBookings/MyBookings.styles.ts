import { fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${space("large")};
`

export const Title = styled.h1`
  font-size: ${fontSize("xxlarge")};
  font-weight: ${weight("semibold")};
`
