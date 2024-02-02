import { BookedPeriod, Property } from "@/models/property.models"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"
import client from "@/api/api"

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

type deleteUserPropertyBookingProps = {
  bookingId: number
  propertyId: number
  period: BookedPeriod
}

export const deleteUserPropertyBooking = createAsyncThunk(
  "propertyManagement/deleteUserPropertyBooking",
  async (props: deleteUserPropertyBookingProps, { rejectWithValue }) => {
    const { period, propertyId, bookingId } = props
    try {
      const res = await client.get<Property>(`/properties/${propertyId}`)

      const updatedPropertyBookedPeriods = res.data.booked_periods.filter(
        (response) =>
          response.start_date !== period.start_date &&
          response.end_date !== period.end_date
      )

      return {
        user: {
          bookingId,
          propertyId,
        },
        property: {
          propertyId,
          bookedPeriods: updatedPropertyBookedPeriods,
        },
      }
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
          propertyId: payload.property.id as number,
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
      .addCase(deleteUserPropertyBooking.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteUserPropertyBooking.fulfilled, () => {})
      .addCase(deleteUserPropertyBooking.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const deletePropertyBooking = deleteUserPropertyBooking.fulfilled
export const updatePropertyBooking = updateUserPropertyBooking.fulfilled

export default propertyManagementSlice.reducer
