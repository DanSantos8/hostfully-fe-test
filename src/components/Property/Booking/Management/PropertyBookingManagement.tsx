import { ReactNode } from "react"
import * as S from "./PropertyBookingManagement.styles"
import usePropertyBookingManagement from "./usePropertyBookingManagement"
import PropertyBookingForm from "../Form/PropertyBookingForm"

type PropertyBookingManagement = {
  children: ReactNode
  onClose: () => void
}
const PropertyBookingManagement = (props: PropertyBookingManagement) => {
  const { children, onClose } = props
  const { handleAction, action, ...rest } = usePropertyBookingManagement({
    onClose,
  })

  const actions = {
    0: (
      <S.Buttons>
        <S.UpdateButton onClick={handleAction(1)}>
          Update your booking
        </S.UpdateButton>
        <S.Button onClick={handleAction(2)}>Cancel your booking</S.Button>
      </S.Buttons>
    ),
    1: <PropertyBookingForm {...rest} loading={false} />,
    2: (
      <S.Cancel>
        <S.Title>Are you sure?</S.Title>
        <S.UpdateButton>Yes, I want to cancel it.</S.UpdateButton>
        <S.Button onClick={handleAction(0)}>Go back</S.Button>
      </S.Cancel>
    ),
  }

  return (
    <S.Container>
      {children}

      {action === 1 && (
        <S.GoBack onClick={handleAction(0)}>
          I don't want to update it.
        </S.GoBack>
      )}

      {actions[action as keyof typeof actions]}
    </S.Container>
  )
}

export default PropertyBookingManagement
