import usePropertyDetailBooking from "@/hooks/usePropertyDetailBooking"
import * as S from "./PropertyDetailBooking.styles"
import PropertyBookingForm from "../../Booking/Form/PropertyBookingForm"
import { useState } from "react"

const PropertyDetailBooking = () => {
  const [showForm, setShowForm] = useState(false)
  const props = usePropertyDetailBooking()

  return (
    <S.Booking showForm={showForm}>
      <S.Container>
        <S.Sticky>
          <PropertyBookingForm {...props} />
        </S.Sticky>
      </S.Container>
    </S.Booking>
  )
}

export default PropertyDetailBooking
