import PropertyBookingList from "@/components/Property/Booking/List/PropertyBookingList"
import * as S from "./MyBookings.styles"

const MyBookings = () => {
  return (
    <S.Container>
      <S.Title>My Bookings</S.Title>
      <PropertyBookingList />
    </S.Container>
  )
}

export default MyBookings
