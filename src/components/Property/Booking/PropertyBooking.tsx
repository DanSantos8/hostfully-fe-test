import { useAppSelector } from "@/hooks/useStore"
import * as S from "./PropertyBooking.styles"
import PropertyBookingForm from "./Form/PropertyBookingForm"

const PropertyBooking = () => {
  const {
    id,
    price,
    regularPrice,
    availability,
    maxGuest,
    booked_periods,
    cleaningFee,
  } = useAppSelector((state) => state.properties.propertyDetail)

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
      />
    </S.Container>
  )
}

export default PropertyBooking
