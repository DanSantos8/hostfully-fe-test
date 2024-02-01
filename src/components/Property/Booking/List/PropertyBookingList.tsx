import { useAppSelector } from "@/hooks/useStore"
import PropertyBookingCard from "../Card/PropertyBookingCard"
import * as S from "./PropertyBookingList.styles"
import PropertyBookingDialog from "../Dialog/PropertyBookingDialog"

const PropertyBookingList = () => {
  const { myBookings } = useAppSelector((state) => state.user)

  return (
    <S.List>
      {myBookings.map((booking) => {
        const property = booking.property
        const props = {
          id: booking.id,
          title: booking.property.title,
          bookedPeriod: booking.bookedPeriod,
          guests: booking.guests,
          nightsBooked: booking.nightsBooked,
          price: property.price,
          images: property.images,
        }

        return (
          <PropertyBookingCard {...props} key={booking.id}>
            <PropertyBookingDialog {...props} />
          </PropertyBookingCard>
        )
      })}
    </S.List>
  )
}

export default PropertyBookingList
