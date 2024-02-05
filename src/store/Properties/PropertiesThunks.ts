import client from "@/api/api"
import { fetchPropertiesApi, updatePropertyApi } from "@/api/propertiesApi"
import { updatedPropertyBookedPeriodModel } from "@/models/requests.models"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  fetchPropertiesApi
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
