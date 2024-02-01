import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { fetchPropertyFromMyBookings } from "@/store/Management/ManagementSlice"
import { updatePropertyBookedPeriod } from "@/store/Properties/PropertiesSlice"
import {
  updateUserPropertyBooking,
  updateUserPropertyBookingProps,
} from "@/store/User/UserSlice"
import moment from "moment"
import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface usePropertyBookingManagement extends PropertyBookingFormProps {
  handleAction: (value: number) => () => void
  action: number
}

const usePropertyBookingManagement = ({
  onClose,
}: {
  onClose: () => void
}): usePropertyBookingManagement => {
  const dispatch = useAppDispatch()
  const { property } = useAppSelector((state) => state.propertyManagement)
  const [action, setAction] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const { user } = property

  const getBookingId = useCallback(() => {
    const searchParams = new URLSearchParams(location.search)
    return Number(searchParams.get("bookingId"))
  }, [location.search])

  const removeBookingId = useCallback(() => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.delete("bookingId")

    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    )
  }, [location.search, location.pathname, navigate])

  const bookingFormValues = useBookingForm({
    bookedPeriods: property.bookedPeriods,
    cleaningFee: property.cleaningFee,
    maxGuest: property.maxGuest,
    price: property.price,
    regularPrice: property.regularPrice,
  })

  const handleAction = (value: number) => () => setAction(value)

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const { start_date, end_date } = user.bookedPeriod

    const newPeriod = {
      start_date: moment(bookingFormValues.startDate).format("YYYY-MM-DD"),
      end_date: moment(bookingFormValues.endDate).format("YYYY-MM-DD"),
    }
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
            newBookedPeriods: data.property.newBookedPeriods,
            propertyId: data.property.propertyId,
          })
        )
        removeBookingId()
        onClose()
      })
  }

  useEffect(() => {
    dispatch(fetchPropertyFromMyBookings(getBookingId()))
  }, [dispatch, getBookingId])

  return {
    handleAction,
    action,
    ...bookingFormValues,
    price: property?.price || 0,
    regularPrice: property?.regularPrice || 0,
    handleSubmit,
    maxGuest: property?.maxGuest || 0,
    loading: false,
  }
}

export default usePropertyBookingManagement
