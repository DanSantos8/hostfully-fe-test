import { Status } from "@/constants/status"
import { Moment } from "moment"
import { FocusedInputShape } from "react-dates"

export type CalendarDate = Moment | null
export interface Booking {
  id: number
  bookedPeriod: BookedPeriod
  nightsBooked: number
  guests: number
  property: Property
}

type Host = {
  superhost: boolean
  name: string
  member_since: string
  response_rate: number
}

export type BookedPeriod = {
  start_date: string
  end_date: string
}

export interface Property {
  id: number | null
  title: string
  location: string
  description: string
  type: string
  price: number
  regularPrice: number
  amenities: string[]
  rating: number
  number_of_reviews: number
  host: Host
  availability: string[]
  booked_periods: BookedPeriod[]
  images: string[]
  maxGuest: number
  bedrooms: number
  beds: number
  cleaningFee: number
}

export interface PropertyBookingFormProps {
  success?: boolean
  maxGuest: number
  guests: number
  regularPrice: number
  price: number
  currentPrice: number
  hasPromoPrice: boolean
  totalBookedDaysWithNoCleaningFee: number
  totalCleaningFee: number
  totalPriceWithNoTax: number
  nightsBooked: number
  startDate: CalendarDate
  endDate: CalendarDate
  focusedInput: FocusedInputShape | null
  isDayBlocked: (day: Moment) => boolean
  onDatesChange: ({
    startDate,
    endDate,
  }: {
    startDate: CalendarDate
    endDate: CalendarDate
  }) => void
  setFocusedInput: React.Dispatch<
    React.SetStateAction<FocusedInputShape | null>
  >
  handleGuestsCount: (value: number) => () => void
  handleSubmit: (e: React.FormEvent<Element>) => void
  status: Status
}
