import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { addBookedPeriod } from "@/store/Properties/PropertiesSlice"
import moment from "moment"
import { Moment } from "moment"

const usePropertyDetailBooking = (): PropertyBookingFormProps => {
  const store = useAppSelector((state) => state.properties)
  const {
    id,
    price,
    regularPrice,
    maxGuest,
    cleaningFee,
    booked_periods: bookedPeriods,
  } = store.propertyDetail

  const bookingFormValues = useBookingForm({
    bookedPeriods,
    maxGuest,
    cleaningFee,
    price,
    regularPrice,
  })

  const { loading } = store

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const format = (date: Moment) => moment(date).format("YYYY-MM-DD")
    const bookedPeriod = {
      start_date: format(bookingFormValues.startDate as Moment),
      end_date: format(bookingFormValues.endDate as Moment),
    }
    const newPeriod = [...bookedPeriods, bookedPeriod]

    dispatch(
      addBookedPeriod({
        propertyId: id,
        newPeriod,
        bookedPeriod,
        guests: bookingFormValues.guests,
        nightsBooked: bookingFormValues.nightsBooked,
      })
    )
  }
  return {
    price,
    regularPrice,
    maxGuest,
    loading,
    ...bookingFormValues,
    handleSubmit,
  }
}

export default usePropertyDetailBooking
