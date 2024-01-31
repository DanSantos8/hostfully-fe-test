import { useAppSelector } from "@/hooks/useStore"
import PropertyBookingCardActions from "../Actions/PropertyBookingActions"
import PropertyBookingCard from "../Card/PropertyBookingCard"
import * as S from "./PropertyBookingList.styles"
import PropertyBookingForm from "../Form/PropertyBookingForm"

const PropertyBookingList = () => {
  const { myBookings } = useAppSelector((state) => state.user)
  return (
    <S.List>
      {myBookings.map((booking) => {
        const property = booking.property
        const props = {
          title: booking.property.title,
          bookedPeriod: booking.bookedPeriod,
          guests: booking.guests,
          nightsBooked: booking.nightsBooked,
          price: property.price,
        }

        return (
          <PropertyBookingCard {...props}>
            <PropertyBookingCardActions>
              <PropertyBookingForm
                bookedPeriods={property.booked_periods}
                availability={[
                  booking.bookedPeriod.start_date,
                  booking.bookedPeriod.end_date,
                ]}
                cleaningFee={property.cleaningFee}
                maxGuests={property.maxGuest}
                price={property.price}
                regularPrice={property.regularPrice}
                id={property.id}
                isLoading={false}
              />
            </PropertyBookingCardActions>
          </PropertyBookingCard>
        )
      })}
    </S.List>
  )
}

export default PropertyBookingList
