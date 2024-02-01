import moment from "moment"
import { Moment } from "moment"
import { useMemo, useState } from "react"
import { FocusedInputShape } from "react-dates"
import { BookedPeriod } from "@/models/property.models"
type CalendarDate = Moment | null

type useBookingFormProps = {
  bookedPeriods: BookedPeriod[]
  maxGuest: number
  cleaningFee: number
  price: number
  regularPrice: number
  dateRange?: string[] | null[]
}

const useBookingForm = (props: useBookingFormProps) => {
  const {
    bookedPeriods,
    maxGuest,
    cleaningFee,
    price,
    regularPrice,
    // dateRange = ["", ""],
  } = props

  //const [startRange, endRange] = dateRange

  const [guests, setGuests] = useState(1)
  const [startDate, setStartDate] = useState<CalendarDate>(null)
  const [endDate, setEndDate] = useState<CalendarDate>(null)
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  )

  const handleGuestsCount = (value: number) => () =>
    setGuests((prev) => {
      const newValue = prev + value
      if (newValue > maxGuest || newValue < 1) {
        return prev
      }

      return newValue
    })

  const findLastAvailableDate = (startDate: Moment): Moment | null => {
    const nextAvailableDate = startDate.clone()

    while (
      !doesOverlap(nextAvailableDate, nextAvailableDate.clone().add(1, "days"))
    ) {
      nextAvailableDate.add(1, "days")
    }

    if (nextAvailableDate.isSame(startDate)) {
      return null
    }

    return nextAvailableDate
  }

  const doesOverlap = (
    startDate: CalendarDate,
    endDate: CalendarDate
  ): boolean => {
    if (!startDate || !endDate) return false

    return bookedPeriods.some((period) => {
      const bookedStart = moment(period.start_date)
      const bookedEnd = moment(period.end_date)

      return (
        startDate.isBetween(bookedStart, bookedEnd, null, "[]") ||
        endDate.isBetween(bookedStart, bookedEnd, null, "[]") ||
        bookedStart.isBetween(startDate, endDate, null, "[]") ||
        bookedEnd.isBetween(startDate, endDate, null, "[]")
      )
    })
  }

  const onDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: CalendarDate
    endDate: CalendarDate
  }) => {
    setStartDate(startDate)

    if (!startDate && endDate) {
      setStartDate(startDate)
      setEndDate(endDate)

      return
    }

    if (startDate && endDate && doesOverlap(startDate, endDate)) {
      const adjustedEndDate =
        endDate && !doesOverlap(startDate, endDate)
          ? endDate
          : findLastAvailableDate(startDate as Moment)

      console.log(adjustedEndDate)
      setStartDate(startDate)
      setEndDate(adjustedEndDate)

      return
    }

    if (doesOverlap(startDate, endDate)) {
      setEndDate(null)

      return
    }
    setEndDate(endDate)
  }

  const isOutsideRange = (day: Moment) => {
    if (startDate) {
      return day.diff(startDate, "days") < 2
    }
    return false
  }

  const isDayBlocked = (day: Moment) => {
    return bookedPeriods.some((period) => {
      const start = moment(period.start_date, "YYYY-MM-DD")
      const end = moment(period.end_date, "YYYY-MM-DD")
      return day.isSameOrAfter(start) && day.isSameOrBefore(end)
    })
  }

  const hasPromoPrice = useMemo(
    () => regularPrice > price,
    [price, regularPrice]
  )

  const currentPrice = useMemo(
    () => (hasPromoPrice ? price : regularPrice),
    [hasPromoPrice, price, regularPrice]
  )

  const nightsBooked =
    endDate && startDate ? endDate.diff(startDate, "days") : 0
  const totalBookedDaysWithNoCleaningFee = nightsBooked * currentPrice
  const totalCleaningFee = cleaningFee * nightsBooked
  const totalPriceWithNoTax =
    totalBookedDaysWithNoCleaningFee + totalCleaningFee

  return {
    guests,
    startDate,
    endDate,
    focusedInput,
    setFocusedInput,
    handleGuestsCount,
    onDatesChange,
    isDayBlocked,
    nightsBooked,
    totalBookedDaysWithNoCleaningFee,
    currentPrice,
    hasPromoPrice,
    totalCleaningFee,
    totalPriceWithNoTax,
    isOutsideRange,
  }
}

export default useBookingForm
