import { Link } from "react-router-dom"
import {
  colors,
  rounded,
  space,
  toRem,
  weight,
} from "../../../../utils/helpers"
import styled from "styled-components"

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${space("medium")};
  max-width: ${toRem(375)};
  height: 100%;
  width: 100%;
`
export const Image = styled.img`
  border-radius: ${rounded("medium")};
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${space("xxsmall")};
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.span`
  color: ${colors("text")};
  font-weight: ${weight("semibold")};
`

export const Rate = styled.div`
  display: flex;
  gap: ${space("small")};
`

export const LightText = styled.span`
  color: ${colors("text")};
  font-weight: ${weight("regular")};
`

export const Reference = styled.p`
  color: ${colors("lightText")};
`

export const Price = styled.div`
  display: flex;
  gap: ${space("xxsmall")};
`
