import { BookedPeriod } from "@/models/property.models"
import moment from "moment"
import { Moment } from "moment"
import { useCallback, useEffect, useMemo, useState } from "react"
import { FocusedInputShape } from "react-dates"
import { useAppDispatch } from "./useStore"
import { addBookedPeriod } from "@/store/Properties/PropertiesSlice"
type CalendarDate = Moment | null

type usePropertyBookingForm = {
  id: string
  startAvailability: string | null
  endAvailability: string | null
  bookedPeriods: BookedPeriod[]
  maxGuests: number
  price: number
  regularPrice: number
  cleaningFee: number
}
const usePropertyBookingForm = (props: usePropertyBookingForm) => {
  const {
    id,
    bookedPeriods,
    endAvailability,
    maxGuests,
    startAvailability,
    price,
    regularPrice,
    cleaningFee,
  } = props
  const [guests, setGuests] = useState(1)
  const [startDate, setStartDate] = useState<CalendarDate>(null)
  const [endDate, setEndDate] = useState<CalendarDate>(null)
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  )

  const dispatch = useAppDispatch()

  const handleGuestsCount = (value: number) => () =>
    setGuests((prev) => {
      const newValue = prev + value
      if (newValue > maxGuests || newValue < 1) {
        return prev
      }

      return newValue
    })

  const findLastAvailableDate = (startDate: Moment): Moment => {
    const nextAvailableDate = startDate.clone()

    while (
      !doesOverlap(nextAvailableDate, nextAvailableDate.clone().add(1, "days"))
    ) {
      nextAvailableDate.add(1, "days")
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

  const isDayBlocked = (day: Moment) => {
    return bookedPeriods.some((period) => {
      const start = moment(period.start_date, "YYYY-MM-DD")
      const end = moment(period.end_date, "YYYY-MM-DD")
      return day.isSameOrAfter(start) && day.isSameOrBefore(end)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    const format = (date: Moment) => moment(date).format("YYYY-MM-DD")
    const newPeriod = [
      ...bookedPeriods,
      {
        start_date: format(startDate as Moment),
        end_date: format(endDate as Moment),
      },
    ]

    dispatch(
      addBookedPeriod({
        propertyId: id,
        newPeriod,
      })
    )
  }

  const hasPromoPrice = useMemo(
    () => regularPrice > price,
    [price, regularPrice]
  )

  const currentPrice = useMemo(
    () => (hasPromoPrice ? price : regularPrice),
    [hasPromoPrice, price, regularPrice]
  )

  const bookedDays = endDate && startDate ? endDate.diff(startDate, "days") : 0
  const totalBookedDaysWithNoCleaningFee = bookedDays * currentPrice
  const totalCleaningFee = cleaningFee * bookedDays
  const totalPriceWithNoTax =
    totalBookedDaysWithNoCleaningFee + totalCleaningFee

  const initDates = useCallback(
    (startAvailability: string | null, endAvailability: string | null) => {
      if (startAvailability && endAvailability) {
        setStartDate(moment(startAvailability))
        setEndDate(moment(endAvailability))
      }
    },
    []
  )

  useEffect(() => {
    initDates(startAvailability, endAvailability)
  }, [endAvailability, initDates, startAvailability])
  return {
    guests,
    startDate,
    endDate,
    focusedInput,
    setFocusedInput,
    handleGuestsCount,
    onDatesChange,
    isDayBlocked,
    bookedDays,
    totalBookedDaysWithNoCleaningFee,
    currentPrice,
    hasPromoPrice,
    totalCleaningFee,
    totalPriceWithNoTax,
    handleSubmit,
  }
}

export default usePropertyBookingForm
