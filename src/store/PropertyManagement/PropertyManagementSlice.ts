import { BookedPeriod } from "@/models/property.models"
import { createSlice } from "@reduxjs/toolkit"

import { Status, StatusEnum } from "@/constants/status"
import {
  deleteUserPropertyBooking,
  fetchPropertyFromMyBookings,
  updateUserPropertyBooking,
} from "./PropertyManagementThunks"

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
  status: Status
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
  status: "IDLE",
}

const propertyManagementSlice = createSlice({
  name: "propertyManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyFromMyBookings.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(fetchPropertyFromMyBookings.fulfilled, (state, { payload }) => {
        state.status = StatusEnum.IDLE
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
        state.status = StatusEnum.REJECTED
        state.error = action.error.message
      })
      .addCase(deleteUserPropertyBooking.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(deleteUserPropertyBooking.fulfilled, (state) => {
        state.status = StatusEnum.FULFILLED
      })
      .addCase(deleteUserPropertyBooking.rejected, (state, action) => {
        state.status = StatusEnum.REJECTED
        state.error = action.error.message
      })
  },
})

export const deletePropertyBooking = deleteUserPropertyBooking.fulfilled
export const updatePropertyBooking = updateUserPropertyBooking.fulfilled

export default propertyManagementSlice.reducer
