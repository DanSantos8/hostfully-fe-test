import client from "@/api/api"
import { fetchPropertyByIdApi } from "@/api/propertiesApi"
import { AddBookedPeriodModel } from "@/models/requests.models"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPropertyById = createAsyncThunk(
  "propertyDetail/fetchPropertyById",
  fetchPropertyByIdApi
)

export const addBookedPeriod = createAsyncThunk(
  "propertyDetail/addBookedPeriod",
  async (props: AddBookedPeriodModel) => {
    const { newPeriod, propertyId, bookedPeriod, guests, nightsBooked } = props

    const response = await client.patch(`properties/${propertyId}`, {
      booked_periods: newPeriod,
    })

    return {
      property: { ...response.data },
      booking: {
        id: new Date().getMilliseconds(),
        period: bookedPeriod,
        nightsBooked,
        guests,
      },
    }
  }
)
