import { ReactNode } from "react"
import * as S from "./PropertyBookingManagement.styles"
import usePropertyBookingManagement from "./usePropertyBookingManagement"
import PropertyBookingForm from "../Form/PropertyBookingForm"

type PropertyBookingManagement = {
  children: ReactNode
}
const PropertyBookingManagement = (props: PropertyBookingManagement) => {
  const { children } = props
  const { handleAction, action, ...rest } = usePropertyBookingManagement()

  const actions = {
    0: (
      <S.Buttons>
        <S.UpdateButton onClick={handleAction(1)}>
          Update your booking
        </S.UpdateButton>
        <S.Button onClick={handleAction(2)}>Cancel your booking</S.Button>
      </S.Buttons>
    ),
    1: <PropertyBookingForm {...rest} />,
    2: <div>Cancel</div>,
  }

  return (
    <S.Container>
      {children}

      {actions[action as keyof typeof actions]}
    </S.Container>
  )
}

export default PropertyBookingManagement
