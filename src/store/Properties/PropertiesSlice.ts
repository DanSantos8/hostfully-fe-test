import { Property } from "@/models/property.models"
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit"
import {
  addBookedPeriod,
  fetchProperties,
  fetchPropertyById,
  updatePropertyBookedPeriod,
} from "./PropertiesThunks"

type PropertiesState = {
  propertiesList: Property[]
  propertyDetail: Property
  loading: boolean
  error: string | null | undefined
}

const initialState: PropertiesState = {
  propertiesList: [],
  propertyDetail: {
    id: "",
    images: [],
    location: "",
    number_of_reviews: 0,
    price: 0,
    regularPrice: 0,
    rating: 0,
    title: "",
    type: "",
    amenities: [],
    booked_periods: [],
    host: {
      superhost: false,
      member_since: "",
      name: "",
      response_rate: 0,
    },
    availability: [],
    description: "",
    maxGuest: 0,
    cleaningFee: 0,
    bedrooms: 0,
    beds: 0,
  },
  loading: false,
  error: null,
}

const setLoading = (state: PropertiesState) => {
  state.loading = true
}

const setError = (
  state: PropertiesState,
  action: PayloadAction<unknown, string, never, SerializedError>
) => {
  state.error = action.error.message
  state.loading = false
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, setLoading)
      .addCase(
        fetchProperties.fulfilled,
        (state, action: PayloadAction<Property[]>) => {
          state.propertiesList = action.payload
          state.error = null
          state.loading = false
        }
      )
      .addCase(fetchProperties.rejected, setError)
      .addCase(fetchPropertyById.pending, setLoading)
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.propertyDetail = action.payload
      })
      .addCase(fetchPropertyById.rejected, setError)
      .addCase(addBookedPeriod.pending, setLoading)
      .addCase(addBookedPeriod.fulfilled, (state, action) => {
        state.loading = false
        state.error = null

        state.propertyDetail = action.payload.property
      })
      .addCase(addBookedPeriod.rejected, setError)
      .addCase(updatePropertyBookedPeriod.pending, setLoading)
      .addCase(updatePropertyBookedPeriod.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updatePropertyBookedPeriod.rejected, setError)
  },
})

export const addUserBookedPeriod = addBookedPeriod.fulfilled

export default propertiesSlice.reducer
