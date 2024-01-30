import { useMemo } from "react"
import * as S from "./PropertyBookingForm.styles"

type PropertyBookingFormProps = {
  regularPrice: number
  price: number
}

const PropertyBookingForm = (props: PropertyBookingFormProps) => {
  const { price = 0, regularPrice = 0 } = props
  const hasPromoPrice = useMemo(
    () => regularPrice > price,
    [price, regularPrice]
  )

  return (
    <S.Container>
      <S.Pricing>
        <S.RegularPrice hasPromoPrice={hasPromoPrice}>
          R${regularPrice}
        </S.RegularPrice>
        {hasPromoPrice && <S.RegularPrice>R${price}</S.RegularPrice>}
        <S.Text>p/noite</S.Text>
      </S.Pricing>
    </S.Container>
  )
}

export default PropertyBookingForm
