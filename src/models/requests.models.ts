import { BookedPeriod } from "./property.models"

export type AddBookedPeriodModel = {
  propertyId: number
  bookedPeriod: BookedPeriod
  newPeriod: BookedPeriod[]
  nightsBooked: number
  guests: number
}

export type updatedPropertyBookedPeriodModel = {
  propertyId: number
  updatedBookedPeriods: BookedPeriod[]
}

export type updateUserPropertyBookingProps = {
  bookingId: number
  propertyId: number
  bookedPeriod: BookedPeriod
  newBookedPeriods: BookedPeriod[]
  nightsBooked: number
  guests: number
}
