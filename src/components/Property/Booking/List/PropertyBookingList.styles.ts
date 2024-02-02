import { space } from "@/utils/helpers"
import styled from "styled-components"

export const List = styled.div`
  display: grid;
  gap: ${space("large")};
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
