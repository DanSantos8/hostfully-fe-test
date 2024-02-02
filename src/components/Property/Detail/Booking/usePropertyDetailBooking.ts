import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { addBookedPeriod } from "@/store/Properties/PropertiesThunks"
import moment from "moment"
import { Moment } from "moment"
import { useState } from "react"

interface usePropertyDetailBooking extends PropertyBookingFormProps {
  success: boolean
}

const usePropertyDetailBooking = (): usePropertyDetailBooking => {
  const [success, setSuccess] = useState(false)
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
    loadings: { bookingForm },
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
      .unwrap()
      .then(() => setSuccess(true))
  }
  return {
    price,
    regularPrice,
    maxGuest,
    loading: bookingForm,
    ...bookingFormValues,
    handleSubmit,
    success,
  }
}

export default usePropertyDetailBooking
