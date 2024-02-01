import { useAppSelector } from "@/hooks/useStore"
import PropertyBookingCard from "../Card/PropertyBookingCard"
import * as S from "./PropertyBookingList.styles"
import Dialog from "@/components/Dialog/Dialog"
import PropertyBookingManagement from "../Management/PropertyBookingManagement"
import { useNavigate } from "react-router-dom"

const PropertyBookingList = () => {
  const { myBookings } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
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

        const addQueryParam = () => {
          const searchParams = new URLSearchParams(window.location.search)
          searchParams.set("bookingId", booking.id.toString())
          navigate({ search: `?${searchParams}` })
        }

        return (
          <PropertyBookingCard {...props} key={booking.id}>
            <Dialog label="Manage" onClick={addQueryParam}>
              <PropertyBookingManagement>
                <PropertyBookingCard {...props} />
              </PropertyBookingManagement>
            </Dialog>
          </PropertyBookingCard>
        )
      })}
    </S.List>
  )
}

export default PropertyBookingList
