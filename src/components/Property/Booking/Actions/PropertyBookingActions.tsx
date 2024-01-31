import Modal from "@/components/Modal/Modal"
import * as S from "./PropertyBookingActions.styles"
import { ReactNode, useState } from "react"

type PropertyBookingCardActionsProps = {
  children: ReactNode
}

const PropertyBookingActions: React.FC<PropertyBookingCardActionsProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => setIsOpen((prev) => !prev)
  return (
    <>
      <S.Buttons>
        <S.Cancel>Cancel</S.Cancel>
        <S.Update onClick={handleIsOpen}>Update</S.Update>
      </S.Buttons>

      <Modal onClose={handleIsOpen} isOpen={isOpen}>
        {children}
      </Modal>
    </>
  )
}

export default PropertyBookingActions
