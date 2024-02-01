import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  border: 5px solid white 0.3;
  border-top: 5px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 2s linear infinite;
  margin: auto;
`
