import { fontSize, space, weight } from "@/utils/helpers"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("xlarge")};
  margin: auto;

  svg {
    margin: auto;
  }
`

export const Message = styled.h1`
  font-size: ${fontSize("huge")};
  font-weight: ${weight("semibold")};
`

export const GoBack = styled(Link)`
  background-color: transparent;
  border: none;
  font-size: ${fontSize("large")};
  text-decoration: underline;
`
