import PropertyBookingList from "@/components/Property/Booking/List/PropertyBookingList"
import * as S from "./MyBookings.styles"
import ErrorBoundary from "@/components/Handlers/ErrorBoundary/ErrorBoundary"
import ErrorHandler from "@/components/Handlers/ErrorHandler/ErrorHandler"

const MyBookings = () => {
  return (
    <ErrorBoundary
      fallback={<ErrorHandler message="Oops, something went wrong." />}
    >
      <S.Container>
        <S.Title>My Bookings</S.Title>
        <PropertyBookingList />
      </S.Container>
    </ErrorBoundary>
  )
}

export default MyBookings
