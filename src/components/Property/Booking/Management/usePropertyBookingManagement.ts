import useBookingForm from "@/hooks/useBookingForm"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { PropertyBookingFormProps } from "@/models/property.models"
import { fetchPropertyFromMyBookings } from "@/store/Management/ManagementSlice"
import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

interface usePropertyBookingManagement extends PropertyBookingFormProps {
  handleAction: (value: number) => () => void
  action: number
}

const usePropertyBookingManagement = (): usePropertyBookingManagement => {
  const dispatch = useAppDispatch()
  const { property } = useAppSelector((state) => state.propertyManagement)
  const [action, setAction] = useState(0)
  const location = useLocation()

  const getBookingId = useCallback(() => {
    const searchParams = new URLSearchParams(location.search)
    return Number(searchParams.get("bookingId"))
  }, [location.search])

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

  const handleAction = (value: number) => () => setAction(value)

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
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
