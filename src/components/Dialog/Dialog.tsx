import Modal from "@/components/Modal/Modal"
import * as S from "./Dialog.styles"
import { ReactNode } from "react"

type PropertyBookingCardActionsProps = {
  children: ReactNode
  label: string
  handleIsOpen: () => void
  isOpen: boolean
}

const Dialog: React.FC<PropertyBookingCardActionsProps> = ({
  children,
  label = "",
  handleIsOpen,
  isOpen,
}) => {
  return (
    <>
      <S.Buttons>
        <S.Update onClick={handleIsOpen}>{label}</S.Update>
      </S.Buttons>

      <Modal onClose={handleIsOpen} isOpen={isOpen}>
        {children}
      </Modal>
    </>
  )
}

export default Dialog
