import { useAppSelector } from "@/hooks/useStore"
import * as S from "./PropertyBooking.styles"
import PropertyBookingForm from "./Form/PropertyBookingForm"

const PropertyBooking = () => {
  const store = useAppSelector((state) => state.properties)
  const {
    id,
    price,
    regularPrice,
    availability,
    maxGuest,
    booked_periods,
    cleaningFee,
  } = store.propertyDetail

  const { loading } = store

  return (
    <S.Container>
      <PropertyBookingForm
        price={price}
        regularPrice={regularPrice}
        maxGuests={maxGuest}
        availability={availability}
        bookedPeriods={booked_periods}
        cleaningFee={cleaningFee}
        id={id}
        isLoading={loading}
      />
    </S.Container>
  )
}

export default PropertyBooking
