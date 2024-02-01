import { BookedPeriod } from "@/models/property.models"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"
import { fetchPropertyById } from "../Properties/PropertiesSlice"

type PropertyManagementState = {
  property: {
    id: number
    propertyId: number
    bookedPeriods: BookedPeriod[]
    cleaningFee: number
    maxGuest: number
    price: number
    regularPrice: number
    user: {
      bookedPeriod: BookedPeriod
    }
  }
  error: string | null | undefined
  loading: boolean
}

const initialState: PropertyManagementState = {
  property: {
    id: 0,
    propertyId: 0,
    bookedPeriods: [],
    cleaningFee: 0,
    maxGuest: 0,
    price: 0,
    regularPrice: 0,
    user: {
      bookedPeriod: {
        start_date: "",
        end_date: "",
      },
    },
  },

  error: null,
  loading: false,
}

export const fetchPropertyFromMyBookings = createAsyncThunk(
  "propertyManagement/fetchPropertyFromMyBookings",
  async (propertyId: number, { getState, rejectWithValue, dispatch }) => {
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

      //const propertyResponse = await dispatch(fetchPropertyById(propertyId.toString()));

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
          propertyId: Number(payload.property.id),
          bookedPeriods: payload.property.booked_periods,
          cleaningFee: payload.property.cleaningFee,
          maxGuest: payload.property.maxGuest,
          price: payload.property.price,
          regularPrice: payload.property.regularPrice,
          user: {
            bookedPeriod: payload.bookedPeriod,
          },
        }
      })
      .addCase(fetchPropertyFromMyBookings.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default propertyManagementSlice.reducer
