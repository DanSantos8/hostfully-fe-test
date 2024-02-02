import { space, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: ${space("xlarge")};
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
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
