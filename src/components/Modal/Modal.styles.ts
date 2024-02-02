import { toRem } from "@/utils/helpers"
import styled from "styled-components"

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: ${toRem(480)};
  max-height: 80vh;
  overflow-y: auto;
`

export const Close = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;

  svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`
