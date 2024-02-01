import { colors, fontSize, space, weight } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("small")};
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("small")};
  width: 100%;
`

export const Button = styled.button`
  border: none;
  padding: ${space("medium")};
  font-size: ${fontSize("medium")};
  border-radius: 6px;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.05);
    transform-origin: center;
  }
`

export const UpdateButton = styled(Button)`
  background-color: ${colors("primary")};
  color: white;
  font-weight: ${weight("semibold")};
`

export const GoBack = styled(Button)`
  background-color: transparent;
  margin-left: auto;
  padding: 0;
  text-decoration: underline;
`

export const Cancel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space("medium")};
  width: 100%;
`

export const Title = styled.span`
  font-size: ${fontSize("medium")};
  text-align: center;
  text-decoration: underline;
`
