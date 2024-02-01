import { BookedPeriod, Property } from "@/models/property.models"
import { createSlice } from "@reduxjs/toolkit"
import { addUserBookedPeriod } from "../Properties/PropertiesSlice"

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
  error: boolean
  loading: boolean
}

/* interface AddBookingPayload {
  createdAt: Date
  bookedPeriod: BookedPeriod
  nightsBooked: number
  guests: number
  property: Property
} */

const initialState: UserState = {
  id: 1,
  name: "Daniel",
  myBookings: [],
  error: false,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserBookedPeriod, (state, action) => {
      const payload = action.payload

      state.myBookings = [
        ...state.myBookings,
        {
          id: new Date().getMilliseconds(),
          bookedPeriod: payload.booking.period,
          nightsBooked: payload.booking.nightsBooked,
          guests: payload.booking.guests,
          property: payload.property,
        },
      ]
    })
  },
})

export default userSlice.reducer
