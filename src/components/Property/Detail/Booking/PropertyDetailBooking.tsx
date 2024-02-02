import * as S from "./PropertyDetailBooking.styles"
import PropertyBookingForm from "../../Booking/Form/PropertyBookingForm"
import usePropertyDetailBooking from "./usePropertyDetailBooking"

const PropertyDetailBooking = () => {
  const props = usePropertyDetailBooking()

  return (
    <S.Container>
      <S.Sticky>
        <PropertyBookingForm {...props} />
      </S.Sticky>
    </S.Container>
  )
}

export default PropertyDetailBooking
