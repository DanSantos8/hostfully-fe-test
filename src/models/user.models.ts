import { BookedPeriod, Property } from "./property.models"

export type MyBooking = {
  property: Property
  booking: {
    id: number
    period: BookedPeriod
    nightsBooked: number
    guests: number
  }
}

export type UpdatePropertyBookingModel = {
  myBooking: {
    bookingId: number
    bookedPeriod: BookedPeriod
    guests: number
    nightsBooked: number
  }
  property: {
    propertyId: number
    newBookedPeriods: BookedPeriod[]
  }
}

export type DeletePropertyBookingModel = {
  user: {
    bookingId: number
    propertyId: number
  }
  property: {
    propertyId: number
    bookedPeriods: BookedPeriod[]
  }
}
