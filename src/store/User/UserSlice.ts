import { BookedPeriod, Booking } from "@/models/property.models"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  deletePropertyBooking,
  updatePropertyBooking,
} from "../Management/ManagementSlice"
import {
  DeletePropertyBookingModel,
  MyBooking,
  UpdatePropertyBookingModel,
} from "@/models/user.models"
import { addUserBookedPeriod } from "../PropertyDetail/PropertyDetailSlice"

interface UserState {
  id: number
  name: string
  myBookings: Booking[]
  error: string | null | undefined
  //status: Status
}

const initialState: UserState = {
  id: 1,
  name: "Daniel",
  myBookings: [],
  error: null,
  //status: StatusEnum.IDLE,
}

const updateBookedPeriodsInBookings = (
  bookings: Booking[],
  propertyId: number,
  newBookedPeriods: BookedPeriod[]
): Booking[] => {
  return bookings.map((booking) => {
    if (booking.property.id === propertyId) {
      return {
        ...booking,
        property: {
          ...booking.property,
          booked_periods: newBookedPeriods,
        },
      }
    }
    return booking
  })
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addUserBookedPeriod,
        (state, action: PayloadAction<MyBooking>) => {
          const payload = action.payload
          state.myBookings = [
            ...updateBookedPeriodsInBookings(
              state.myBookings,
              payload.property.id as number,
              payload.property.booked_periods
            ),
            {
              id: payload.booking.id,
              bookedPeriod: payload.booking.period,
              nightsBooked: payload.booking.nightsBooked,
              guests: payload.booking.guests,
              property: payload.property,
            },
          ]
        }
      )
      .addCase(
        updatePropertyBooking,
        (state, action: PayloadAction<UpdatePropertyBookingModel>) => {
          const { myBooking, property } = action.payload
          const { bookingId } = myBooking

          state.myBookings = updateBookedPeriodsInBookings(
            state.myBookings,
            property.propertyId,
            property.newBookedPeriods
          ).map((booking) => {
            if (booking.id === bookingId) {
              return { ...booking, ...myBooking }
            }
            return booking
          })
        }
      )
      .addCase(
        deletePropertyBooking,
        (state, action: PayloadAction<DeletePropertyBookingModel>) => {
          const payload = action.payload
          state.myBookings = state.myBookings
            .filter((booking) => booking.id !== payload.user.bookingId)
            .map((booking) => {
              if (booking.property.id === payload.user.propertyId) {
                return {
                  ...booking,
                  property: {
                    ...booking.property,
                    booked_periods: payload.property.bookedPeriods,
                  },
                }
              }
              return booking
            })
        }
      )
  },
})

export default userSlice.reducer
