import { DateRangePicker } from "react-dates"
import * as S from "./PropertyBookingForm.styles"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import Loading from "@/components/Loading/Loading"
import { PropertyBookingFormProps } from "@/models/property.models"
import Feedback from "@/components/Feedback/Feedback"

const PropertyBookingForm = (props: PropertyBookingFormProps) => {
  const {
    price,
    regularPrice,
    loading,
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
    success,
  } = props

  const renderForm = () => {
    if (success) {
      return <Feedback />
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
        <S.Button disabled={loading} onClick={(e) => handleSubmit(e)}>
          {loading ? <Loading /> : "Reservar"}
        </S.Button>
      </>
    )
  }

  return (
    <S.Container>
      <S.Pricing>
        <S.RegularPrice hasPromoPrice={hasPromoPrice}>
          R${regularPrice}
        </S.RegularPrice>
        {hasPromoPrice && <S.RegularPrice>R${price}</S.RegularPrice>}
        <S.Text>p/noite</S.Text>
      </S.Pricing>
      <S.Form>{renderForm()}</S.Form>
      <S.Summary>
        <S.SummaryRow>
          <S.Text>
            R${currentPrice} x {nightsBooked} noites
          </S.Text>
          <S.Text>R${totalBookedDaysWithNoCleaningFee}</S.Text>
        </S.SummaryRow>
        <S.SummaryRow>
          <S.Text>Taxa de serviço do Airbnb</S.Text>
          <S.Text>R${totalCleaningFee}</S.Text>
        </S.SummaryRow>
        <S.SummaryRow>
          <S.Text>Total (sem impostos)</S.Text>
          <S.Text>R${totalPriceWithNoTax}</S.Text>
        </S.SummaryRow>
      </S.Summary>
    </S.Container>
  )
}

export default PropertyBookingForm
