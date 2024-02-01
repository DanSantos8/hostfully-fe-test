import { space } from "@/utils/helpers"
import styled from "styled-components"

export const List = styled.div`
  display: grid;
  gap: ${space("large")};
  grid-template-columns: auto auto auto;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }
`
