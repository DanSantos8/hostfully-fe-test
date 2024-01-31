import React from "react"
import * as S from "./Modal.styles"
import ReactDOM from "react-dom"
type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.ModalBackground onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContainer>
    </S.ModalBackground>,
    modalRoot
  )
}

export default Modal
