import { Property } from "@/models/property.models"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

type PropertiesState = {
  propertiesList: Property[]
  propertyDetail: Property
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
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/properties/${propertyId}`
      )

      if (!response.ok) {
        return rejectWithValue(`Not Found: ${response.status}`)
      }

      const property: Property = await response.json()
      return property
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }

      return rejectWithValue("An unknown error occurred")
    }
  }
)

export const addBookedPeriod = createAsyncThunk(
  "properties/addBookedPeriod",
  async (props: {
    propertyId: string
    newPeriod: {
      start_date: string
      end_date: string
    }[]
  }) => {
    const { newPeriod, propertyId } = props
    const response = await fetch(
      `http://localhost:5000/properties/${propertyId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ booked_periods: newPeriod }),
      }
    )
    const property = await response.json()
    return property
  }
)

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
      .addCase(fetchPropertyById.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false
        state.propertyDetail = action.payload
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? String(action.payload)
          : "Could not fetch property"
      })
      .addCase(addBookedPeriod.pending, (state) => {
        state.loading = true
      })
      .addCase(addBookedPeriod.fulfilled, (state, action) => {
        state.loading = false

        state.propertyDetail = action.payload
      })
      .addCase(addBookedPeriod.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default propertiesSlice.reducer
