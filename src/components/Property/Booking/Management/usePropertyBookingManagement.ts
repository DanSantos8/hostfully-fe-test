import { ACTIONS } from "@/constants/actions"
import useBookingForm from "@/hooks/useBookingForm"
import useBookingParams from "@/hooks/useBookingParams"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import {
  deleteUserPropertyBooking,
  fetchPropertyFromMyBookings,
  updateUserPropertyBooking,
  updateUserPropertyBookingProps,
} from "@/store/Management/ManagementSlice"
import {
  deletePropertyBookedPeriod,
  updatePropertyBookedPeriod,
} from "@/store/Properties/PropertiesThunks"

import moment from "moment"
import { useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"

interface usePropertyBookingManagement extends PropertyBookingFormProps {
  handleAction: (value: number) => () => void
  action: number
  handleDeleteBooking: () => void
}

const usePropertyBookingManagement = ({
  onClose,
}: {
  onClose: () => void
}): usePropertyBookingManagement => {
  const { getBookingId, removeBookingId } = useBookingParams()
  const [action, setAction] = useState(ACTIONS.GO_BACK)
  const dispatch = useAppDispatch()
  const { property, status } = useAppSelector(
    (state) => state.propertyManagement
  )

  const bookingFormValues = useBookingForm({
    bookedPeriods: property.bookedPeriods,
    cleaningFee: property.cleaningFee,
    maxGuest: property.maxGuest,
    price: property.price,
    regularPrice: property.regularPrice,
    dateRange: [
      property.user.bookedPeriod.start_date,
      property.user.bookedPeriod.end_date,
    ],
  })

  const { user } = property

  const bookingPeriod = useMemo(
    () => ({
      startDate: moment(bookingFormValues.startDate).format("YYYY-MM-DD"),
      endDate: moment(bookingFormValues.endDate).format("YYYY-MM-DD"),
    }),
    [bookingFormValues.endDate, bookingFormValues.startDate]
  )

  const handleAction = (value: ACTIONS) => () => setAction(value)

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const { start_date, end_date } = user.bookedPeriod

    if (
      bookingPeriod.startDate === "Invalid date" ||
      bookingPeriod.endDate === "Invalid date"
    ) {
      toast.error("Please, select a valid booking period")
      return
    }
    const newPeriod = {
      start_date: bookingPeriod.startDate,
      end_date: bookingPeriod.endDate,
    }

    //grabing booked periods to filter before updating
    const newPropertyBookedPeriods = property.bookedPeriods
      .filter(
        (bookedPeriod) =>
          bookedPeriod.start_date !== start_date &&
          bookedPeriod.end_date !== end_date
      )
      .concat(newPeriod)

    const updateUserPropertyBookingProps: updateUserPropertyBookingProps = {
      bookedPeriod: newPeriod,
      guests: bookingFormValues.guests,
      newBookedPeriods: newPropertyBookedPeriods,
      bookingId: property.id,
      propertyId: property.propertyId,
      nightsBooked: bookingFormValues.nightsBooked,
    }

    dispatch(updateUserPropertyBooking(updateUserPropertyBookingProps))
      .unwrap()
      .then((data) => {
        dispatch(
          updatePropertyBookedPeriod({
            updatedBookedPeriods: data.property.newBookedPeriods,
            propertyId: data.property.propertyId,
          })
        )
        removeBookingId()
        onClose()
        toast.success("Booking updated!")
      })
      .catch(() => toast.success("Error trying to update your booking :("))
  }

  const handleDeleteBooking = () => {
    dispatch(
      deleteUserPropertyBooking({
        bookingId: property.id,
        period: property.user.bookedPeriod,
        propertyId: property.propertyId,
      })
    )
      .unwrap()
      .then((data) => {
        dispatch(
          deletePropertyBookedPeriod({
            updatedBookedPeriods: data.property.bookedPeriods,
            propertyId: data.property.propertyId,
          })
        )
        removeBookingId()
        onClose()
        toast.success("Booking canceled!")
      })
      .catch(() => toast.error("Error trying to cancel booking :("))
  }

  useEffect(() => {
    dispatch(fetchPropertyFromMyBookings(getBookingId()))
  }, [dispatch, getBookingId])

  return {
    handleAction,
    action,
    price: property.price,
    regularPrice: property.regularPrice,
    handleSubmit,
    maxGuest: property.maxGuest,
    status,
    handleDeleteBooking,
    ...bookingFormValues,
  }
}

export default usePropertyBookingManagement
