import { DateRangePicker } from "react-dates"
import * as S from "./PropertyBookingForm.styles"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import Loading from "@/components/Loading/Loading"
import { PropertyBookingFormProps } from "@/models/property.models"
import Feedback from "@/components/Feedback/Feedback"
import { StatusEnum } from "@/constants/status"
import StateHandler from "@/components/Handlers/StateHandler/StateHandler"
import { ROUTES } from "@/constants/routes"

const PropertyBookingForm = (props: PropertyBookingFormProps) => {
  const {
    price,
    regularPrice,
    status,
    endDate,
    focusedInput,
    guests,
    handleGuestsCount,
    isDayBlocked,
    onDatesChange,
    setFocusedInput,
    startDate,
    nightsBooked,
    currentPrice,
    hasPromoPrice,
    totalBookedDaysWithNoCleaningFee,
    totalCleaningFee,
    totalPriceWithNoTax,
    handleSubmit,
    maxGuest,
  } = props

  const renderForm = () => {
    if (status === StatusEnum.FULFILLED) {
      return (
        <Feedback message="Property booked!" variant="SUCCESS">
          <S.FeedbackButtons>
            <p>
              You can check your{" "}
              <S.Navigate to={ROUTES.MY_BOOKINGS}>bookings</S.Navigate> or keep{" "}
              <S.Navigate to={ROUTES.HOME}>discoverying</S.Navigate>
            </p>
          </S.FeedbackButtons>
        </Feedback>
      )
    }

    if (status === StatusEnum.REJECTED) {
      return (
        <Feedback message="Oops, we can't book right now :(">
          <S.FeedbackButtons>
            <p>
              You can keep navigating into your{" "}
              <S.Navigate to={ROUTES.MY_BOOKINGS}>bookings</S.Navigate> or keep{" "}
              <S.Navigate to={ROUTES.HOME}>discoverying</S.Navigate>
            </p>
          </S.FeedbackButtons>
        </Feedback>
      )
    }

    return (
      <>
        <S.Calendar>
          <S.CalendarRow>
            <S.CalendarLabel>CHECK-IN</S.CalendarLabel>
            <S.CalendarLabel>CHECKOUT</S.CalendarLabel>
          </S.CalendarRow>
          <DateRangePicker
            startDate={startDate}
            startDateId="startDate"
            endDate={endDate}
            endDateId="endDate"
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            readOnly
            startDatePlaceholderText="Checkin"
            endDatePlaceholderText="Checkout"
            customArrowIcon={<></>}
            displayFormat="MMM, DD - YYYY"
            isDayBlocked={isDayBlocked}
            numberOfMonths={1}
          />
        </S.Calendar>
        <S.Guests>
          <S.Text>Total Guests</S.Text>
          <S.GuestColumn>
            <S.GuestControl
              type="button"
              onClick={handleGuestsCount(-1)}
              disabled={guests === 1}
            >
              -
            </S.GuestControl>
            <S.GuestCounter>{guests}</S.GuestCounter>
            <S.GuestControl
              type="button"
              onClick={handleGuestsCount(1)}
              disabled={guests === maxGuest}
            >
              +
            </S.GuestControl>
          </S.GuestColumn>
        </S.Guests>
        <S.Button
          disabled={status === StatusEnum.LOADING}
          onClick={(e) => handleSubmit(e)}
        >
          {status === StatusEnum.LOADING ? <Loading /> : "Book!"}
        </S.Button>
      </>
    )
  }

  return (
    <S.Container>
      <StateHandler loading={status === StatusEnum.LOADING}>
        <S.Pricing>
          <S.RegularPrice hasPromoPrice={hasPromoPrice}>
            US${regularPrice}
          </S.RegularPrice>
          {hasPromoPrice && <S.RegularPrice>US${price}</S.RegularPrice>}
          <S.Text>p/night</S.Text>
        </S.Pricing>
        <S.Form>{renderForm()}</S.Form>
        <S.Summary>
          <S.SummaryRow>
            <S.Text>
              US${currentPrice} x {nightsBooked} nights
            </S.Text>
            <S.Text>US${totalBookedDaysWithNoCleaningFee}</S.Text>
          </S.SummaryRow>
          <S.SummaryRow>
            <S.Text>Cleaning Fee</S.Text>
            <S.Text>US${totalCleaningFee}</S.Text>
          </S.SummaryRow>
          <S.SummaryRow>
            <S.Text>Total (no taxes)</S.Text>
            <S.Text>US${totalPriceWithNoTax}</S.Text>
          </S.SummaryRow>
        </S.Summary>
      </StateHandler>
    </S.Container>
  )
}

export default PropertyBookingForm
