import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from "axios"
import { updateUserPropertyBookingProps } from "@/models/requests.models"
import { BookedPeriod } from "@/models/property.models"
import { fetchPropertyByIdApi } from "@/api/propertiesApi"

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
      //here we should call an endpoint (deletePropertyBookingApi) to mutate user booking
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
      const res = await fetchPropertyByIdApi(propertyId)

      const updatedPropertyBookedPeriods = res.booked_periods.filter(
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
