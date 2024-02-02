import client from "@/api/api"
import {
  fetchPropertiesApi,
  fetchPropertyByIdApi,
  updatePropertyApi,
} from "@/api/propertiesApi"
import {
  AddBookedPeriodModel,
  updatedPropertyBookedPeriodModel,
} from "@/models/requests.models"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  fetchPropertiesApi
)

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

export const updatePropertyBookedPeriod = createAsyncThunk(
  "properties/updateProperty",
  async (props: updatedPropertyBookedPeriodModel) => {
    const { propertyId, updatedBookedPeriods } = props
    return updatePropertyApi(propertyId, updatedBookedPeriods)
  }
)

export const deletePropertyBookedPeriod = createAsyncThunk(
  "properties/deletePropertyBookedPeriod",
  async (props: updatedPropertyBookedPeriodModel) => {
    const { updatedBookedPeriods, propertyId } = props

    const response = await client.patch(`properties/${propertyId}`, {
      booked_periods: updatedBookedPeriods,
    })

    return response
  }
)
