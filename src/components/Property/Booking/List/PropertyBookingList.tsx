import { useAppSelector } from "@/hooks/useStore"
import PropertyBookingCard from "../Card/PropertyBookingCard"
import * as S from "./PropertyBookingList.styles"
import PropertyBookingDialog from "../Dialog/PropertyBookingDialog"
import StateHandler from "@/components/Handlers/StateHandler/StateHandler"

const PropertyBookingList = () => {
  const { myBookings, error } = useAppSelector((state) => state.user)

  return (
    <StateHandler
      error={error}
      isEmpty={!myBookings.length}
      emptyMessage="You don't have any booking yet"
    >
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
    </StateHandler>
  )
}

export default PropertyBookingList
