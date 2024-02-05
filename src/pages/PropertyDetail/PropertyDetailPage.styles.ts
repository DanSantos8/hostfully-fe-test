import { space } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: ${space("xlarge")};
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
