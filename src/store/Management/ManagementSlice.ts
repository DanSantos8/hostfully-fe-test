import { BookedPeriod } from "@/models/property.models"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"

type PropertyManagementState = {
  property: {
    id: number
    bookedPeriods: BookedPeriod[]
    cleaningFee: number
    maxGuest: number
    price: number
    regularPrice: number
  }
  error: string | null | undefined
  loading: boolean
}

const initialState: PropertyManagementState = {
  property: {
    id: 1,
    bookedPeriods: [],
    cleaningFee: 0,
    maxGuest: 0,
    price: 0,
    regularPrice: 0,
  },

  error: null,
  loading: false,
}

export const fetchPropertyFromMyBookings = createAsyncThunk(
  "propertyManagement/fetchPropertyFromMyBookings",
  async (propertyId: number, { getState, rejectWithValue }) => {
    try {
      const { user } = getState() as RootState

      if (!user.myBookings.length) {
        throw new Error("No bookings found")
      }
      const booking = user.myBookings.find(
        (booking) => booking.id === propertyId
      )
      if (!booking) {
        throw new Error("Booking not found")
      }

      return booking
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data)
      }

      return rejectWithValue("An unknown error occurred")
    }
  }
)

const propertyManagementSlice = createSlice({
  name: "propertyManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyFromMyBookings.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPropertyFromMyBookings.fulfilled, (state, { payload }) => {
        state.loading = false
        state.property = {
          ...state.property,
          id: payload.id,
          bookedPeriods: payload.property.booked_periods,
          cleaningFee: payload.property.cleaningFee,
          maxGuest: payload.property.maxGuest,
          price: payload.property.price,
          regularPrice: payload.property.regularPrice,
        }
      })
      .addCase(fetchPropertyFromMyBookings.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default propertyManagementSlice.reducer
