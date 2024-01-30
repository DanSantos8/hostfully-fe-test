import { useAppSelector } from "@/hooks/useStore"
import * as S from "./PropertyBooking.styles"
import PropertyBookingForm from "./Form/PropertyBookingForm"

const PropertyBooking = () => {
  const { price, regularPrice } = useAppSelector(
    (state) => state.properties.propertyDetail
  )

  return (
    <S.Container>
      <PropertyBookingForm price={price} regularPrice={regularPrice} />
    </S.Container>
  )
}

export default PropertyBooking
