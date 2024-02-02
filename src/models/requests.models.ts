import { BookedPeriod } from "./property.models"

export type AddBookedPeriodModel = {
  propertyId: string
  bookedPeriod: BookedPeriod
  newPeriod: BookedPeriod[]
  nightsBooked: number
  guests: number
}

export type updatedPropertyBookedPeriodModel = {
  propertyId: number
  updatedBookedPeriods: BookedPeriod[]
}
