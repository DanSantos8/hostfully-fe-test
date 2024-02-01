import Modal from "@/components/Modal/Modal"
import * as S from "./Dialog.styles"
import { ReactNode, useCallback, useState } from "react"

type PropertyBookingCardActionsProps = {
  children: ReactNode
  label: string
  onClick: () => void
}

const Dialog: React.FC<PropertyBookingCardActionsProps> = ({
  children,
  label = "",
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
    onClick()
  }, [onClick])

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
