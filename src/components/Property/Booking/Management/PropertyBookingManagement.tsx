import { ReactNode } from "react"
import * as S from "./PropertyBookingManagement.styles"
import usePropertyBookingManagement from "./usePropertyBookingManagement"
import PropertyBookingForm from "../Form/PropertyBookingForm"
import { ACTIONS } from "@/constants/actions"

type PropertyBookingManagement = {
  children: ReactNode
  onClose: () => void
}
const PropertyBookingManagement = (props: PropertyBookingManagement) => {
  const { children, onClose } = props
  const { handleAction, action, handleDeleteBooking, status, ...rest } =
    usePropertyBookingManagement({
      onClose,
    })

  const actions = {
    [ACTIONS.GO_BACK]: (
      <S.Buttons>
        <S.UpdateButton onClick={handleAction(ACTIONS.UPDATE_BOOKING)}>
          Update your booking
        </S.UpdateButton>
        <S.Button onClick={handleAction(ACTIONS.CANCEL_BOOKING)}>
          Cancel your booking
        </S.Button>
      </S.Buttons>
    ),
    [ACTIONS.UPDATE_BOOKING]: <PropertyBookingForm {...rest} status={status} />,
    [ACTIONS.CANCEL_BOOKING]: (
      <S.Cancel>
        <S.Title>Are you sure?</S.Title>
        <S.UpdateButton onClick={handleDeleteBooking}>
          Yes, I want to cancel it.
        </S.UpdateButton>
        <S.Button onClick={handleAction(ACTIONS.GO_BACK)}>Go back</S.Button>
      </S.Cancel>
    ),
  }

  return (
    <S.Container>
      {children}

      {action === ACTIONS.UPDATE_BOOKING && (
        <S.GoBack onClick={handleAction(ACTIONS.GO_BACK)}>
          I don't want to update it.
        </S.GoBack>
      )}

      {actions[action as keyof typeof actions]}
    </S.Container>
  )
}

export default PropertyBookingManagement
