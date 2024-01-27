import { colors, toRem } from "@/utils/helpers"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  gap: 12px;
  inset: 0;
  z-index: 20;
`

export const Button = styled.button`
  transition: box-shadow 0.1s linear;
  width: ${toRem(30)};
  height: ${toRem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${colors("background")};
  border: 1px solid ${colors("border")};
  position: absolute;
  top: calc(50% - ${toRem(15)});

  &:hover {
    box-shadow: 0 0 4px 1px #000;
  }

  &::before {
    content: "";
    width: ${toRem(8)};
    height: ${toRem(8)};
    border-top: 2px solid;
    border-right: 2px solid;
  }
`

export const NextButton = styled(Button)`
  right: ${toRem(10)};
  &::before {
    transform: rotate(45deg);
  }
`

export const PrevButton = styled(Button)`
  left: ${toRem(10)};
  &::before {
    transform: rotate(-135deg);
  }
`
