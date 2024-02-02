import usePropertyDetailBooking from "@/hooks/usePropertyDetailBooking"
import * as S from "./PropertyDetailBooking.styles"
import PropertyBookingForm from "../../Booking/Form/PropertyBookingForm"

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
