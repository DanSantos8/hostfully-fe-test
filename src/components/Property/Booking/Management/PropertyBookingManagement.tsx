import { ReactNode } from "react"
import * as S from "./PropertyBookingManagement.styles"
import PropertyBookingForm from "../Form/PropertyBookingForm"
import { MANAGEMENT_ACTIONS } from "@/constants/management"
import usePropertyBookingManagement from "@/hooks/usePropertyBookingManagement"

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
    [MANAGEMENT_ACTIONS.GO_BACK]: (
      <S.Buttons>
        <S.UpdateButton
          onClick={handleAction(MANAGEMENT_ACTIONS.UPDATE_BOOKING)}
        >
          Update your booking
        </S.UpdateButton>
        <S.Button onClick={handleAction(MANAGEMENT_ACTIONS.CANCEL_BOOKING)}>
          Cancel your booking
        </S.Button>
      </S.Buttons>
    ),
    [MANAGEMENT_ACTIONS.UPDATE_BOOKING]: (
      <PropertyBookingForm {...rest} status={status} />
    ),
    [MANAGEMENT_ACTIONS.CANCEL_BOOKING]: (
      <S.Cancel>
        <S.Title>Are you sure?</S.Title>
        <S.UpdateButton onClick={handleDeleteBooking}>
          Yes, I want to cancel it.
        </S.UpdateButton>
        <S.Button onClick={handleAction(MANAGEMENT_ACTIONS.GO_BACK)}>
          Go back
        </S.Button>
      </S.Cancel>
    ),
  }

  return (
    <S.Container>
      {children}

      {action === MANAGEMENT_ACTIONS.UPDATE_BOOKING && (
        <S.GoBack onClick={handleAction(MANAGEMENT_ACTIONS.GO_BACK)}>
          I don't want to update it.
        </S.GoBack>
      )}

      {actions[action as keyof typeof actions]}
    </S.Container>
  )
}

export default PropertyBookingManagement
