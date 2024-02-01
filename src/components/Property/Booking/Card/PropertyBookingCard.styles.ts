import { fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("medium")};
  height: 100%;
  width: 100%;
`
export const Carousel = styled.div`
  height: 100%;
  width: 100%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("xxsmall")};
`

export const Title = styled.span`
  font-size: ${fontSize("medium")};
`

export const Text = styled.span`
  font-size: ${fontSize("small")};
  font-weight: ${weight("medium")};
`
