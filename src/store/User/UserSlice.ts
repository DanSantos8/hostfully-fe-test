import { BookedPeriod, Property } from "@/models/property.models"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUserBookedPeriod } from "../Properties/PropertiesSlice"
import axios from "axios"

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

export type updateUserPropertyBookingProps = {
  bookingId: number
  propertyId: number
  bookedPeriod: BookedPeriod
  newBookedPeriods: BookedPeriod[]
  nightsBooked: number
  guests: number
}

export const updateUserPropertyBooking = createAsyncThunk(
  "propertyManagement/updateUserPropertyBooking",
  async (property: updateUserPropertyBookingProps, { rejectWithValue }) => {
    const {
      bookingId,
      propertyId,
      bookedPeriod,
      guests,
      newBookedPeriods,
      nightsBooked,
    } = property
    try {
      //here we should call an endpoint to mutate user booking
      //...

      const response = {
        myBooking: {
          bookingId,
          bookedPeriod,
          guests,
          nightsBooked,
        },
        property: {
          propertyId,
          newBookedPeriods,
        },
      }
      return response
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data)
      }

      return rejectWithValue("An unknown error occurred")
    }
  }
)
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

        state.myBookings = [
          ...state.myBookings,
          {
            id: payload.booking.id,
            bookedPeriod: payload.booking.period,
            nightsBooked: payload.booking.nightsBooked,
            guests: payload.booking.guests,
            property: payload.property,
          },
        ]
      })
      .addCase(updateUserPropertyBooking.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUserPropertyBooking.fulfilled, (state, action) => {
        state.loading = false

        const { bookedPeriod, guests, bookingId, nightsBooked } =
          action.payload.myBooking

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

          return myBooking
        })
        state.myBookings = updatedMyBookings
      })
      .addCase(updateUserPropertyBooking.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const updatePropertyBooking = updateUserPropertyBooking.fulfilled

export default userSlice.reducer
