import { Property } from "@/models/property.models"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

type PropertiesState = {
  propertiesList: Property[]
  propertyDetail: Property | undefined
  loading: boolean
  error: string | null | undefined
}

export const fetchProperties = createAsyncThunk<Property[]>(
  "properties/fetchProperties",
  async () => {
    const response = await fetch("http://localhost:5000/properties")
    const properties: Property[] = await response.json()
    return properties
  }
)

export const fetchPropertyById = createAsyncThunk<Property, string>(
  "properties/fetchPropertyById",
  async (propertyId) => {
    const response = await fetch(
      `http://localhost:5000/properties/${propertyId}`
    )
    const property: Property = await response.json()
    return property
  }
)

const initialState: PropertiesState = {
  propertiesList: [],
  propertyDetail: undefined,
  loading: false,
  error: null,
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true
      })
      .addCase(
        fetchProperties.fulfilled,
        (state, action: PayloadAction<Property[]>) => {
          state.loading = false
          state.propertiesList = action.payload
        }
      )
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default propertiesSlice.reducer
