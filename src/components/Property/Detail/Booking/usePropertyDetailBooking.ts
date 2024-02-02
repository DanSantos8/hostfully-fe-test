import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { addBookedPeriod } from "@/store/Properties/PropertiesThunks"
import moment from "moment"
import { Moment } from "moment"

interface usePropertyDetailBooking extends PropertyBookingFormProps {}

const usePropertyDetailBooking = (): usePropertyDetailBooking => {
  const store = useAppSelector((state) => state.propertyDetail)
  const {
    id,
    price,
    regularPrice,
    maxGuest,
    cleaningFee,
    booked_periods: bookedPeriods,
  } = store.property

  const bookingFormValues = useBookingForm({
    bookedPeriods,
    maxGuest,
    cleaningFee,
    price,
    regularPrice,
  })

  const {
    status: { bookingForm },
  } = store

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const format = (date: Moment) => moment(date).format("YYYY-MM-DD")
    const bookedPeriod = {
      start_date: format(bookingFormValues.startDate as Moment),
      end_date: format(bookingFormValues.endDate as Moment),
    }

    //! reusing bookedPeriods from Property Detail store to concat new Booked Period
    const newPeriod = [...bookedPeriods, bookedPeriod]

    dispatch(
      addBookedPeriod({
        propertyId: id as number,
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
    status: bookingForm,
    ...bookingFormValues,
    handleSubmit,
  }
}

export default usePropertyDetailBooking
