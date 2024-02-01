import { BookedPeriod, Property } from "@/models/property.models"
import { createSlice } from "@reduxjs/toolkit"
import { addUserBookedPeriod } from "../Properties/PropertiesSlice"
import {
  deletePropertyBooking,
  updatePropertyBooking,
} from "../Management/ManagementSlice"

type UserState = {
  id: number
  name: string
  myBookings: {
    id: number
    bookedPeriod: BookedPeriod
    nightsBooked: number
    guests: number
    property: Property
  }[]
  error: string | null | undefined
  loading: boolean
}

const initialState: UserState = {
  id: 1,
  name: "Daniel",
  myBookings: [],
  error: null,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserBookedPeriod, (state, action) => {
        const payload = action.payload

        const updatedAllMyBookingsPeriod = state.myBookings.map((myBooking) => {
          if (myBooking.property.id === payload.property.id) {
            return {
              ...myBooking,
              property: {
                ...myBooking.property,
                booked_periods: payload.property.booked_periods,
              },
            }
          }

          return myBooking
        })

        state.myBookings = [
          ...updatedAllMyBookingsPeriod,
          {
            id: payload.booking.id,
            bookedPeriod: payload.booking.period,
            nightsBooked: payload.booking.nightsBooked,
            guests: payload.booking.guests,
            property: payload.property,
          },
        ]
      })
      .addCase(updatePropertyBooking, (state, action) => {
        state.loading = false

        const { bookedPeriod, guests, bookingId, nightsBooked } =
          action.payload.myBooking

        //UPDATING MY CURRENT BOOKING
        const updatedMyBookings = state.myBookings.map((myBooking) => {
          if (myBooking.id === action.payload.myBooking.bookingId) {
            return {
              ...myBooking,
              bookedPeriod,
              guests,
              id: bookingId,
              nightsBooked,
              property: {
                ...myBooking.property,
                booked_periods: action.payload.property.newBookedPeriods,
              },
            }
          }

          //UPDATING THE BOOKED_PERIODS FOR THE OTHERS BOOKINGS THATS EQUALS TO MY CURRENT
          const isMyPropertyBooked =
            Number(myBooking.property.id) === action.payload.property.propertyId
          if (isMyPropertyBooked) {
            return {
              ...myBooking,
              property: {
                ...myBooking.property,
                booked_periods: action.payload.property.newBookedPeriods,
              },
            }
          }

          return myBooking
        })
        state.myBookings = updatedMyBookings
      })
      .addCase(deletePropertyBooking, (state, action) => {
        const payload = action.payload

        const filteredMyBookings = state.myBookings.filter(
          (myBooking) => myBooking.id !== payload.user.bookingId
        )

        const updatedMyBookings = filteredMyBookings.map((myBooking) => {
          if (Number(myBooking.property.id) === payload.user.propertyId) {
            return {
              ...myBooking,
              property: {
                ...myBooking.property,
                booked_periods: payload.property.bookedPeriods,
              },
            }
          }
          return myBooking
        })

        return {
          ...state,
          myBookings: updatedMyBookings,
        }
      })
  },
})

export default userSlice.reducer
