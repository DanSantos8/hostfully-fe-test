import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { addBookedPeriod } from "@/store/Properties/PropertiesThunks"
import moment from "moment"
import { Moment } from "moment"
import { toast } from "react-toastify"

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
    availability,
  } = store.property

  const bookingFormValues = useBookingForm({
    bookedPeriods,
    maxGuest,
    cleaningFee,
    price,
    regularPrice,
    dateRange: availability,
  })

  const {
    status: { bookingForm },
  } = store

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const format = (date: Moment) => moment(date).format("YYYY-MM-DD")

    const startDate = format(bookingFormValues.startDate as Moment)
    const endDate = format(bookingFormValues.endDate as Moment)

    const overlaps = bookingFormValues.doesOverlap(
      moment(startDate).add("1", "days") as Moment,
      moment(endDate) as Moment
    )

    if (startDate === "Invalid date" || endDate === "Invalid date") {
      toast.error("Select a valid booking period!")

      return
    }

    if (overlaps) {
      toast.error("Oops, your booking period is no longer available!")

      return
    }

    const bookedPeriod = {
      start_date: startDate,
      end_date: endDate,
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
