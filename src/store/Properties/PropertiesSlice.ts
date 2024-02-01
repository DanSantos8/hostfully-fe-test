import client from "@/api/api"
import { BookedPeriod, Property } from "@/models/property.models"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type PropertiesState = {
  propertiesList: Property[]
  propertyDetail: Property
  loading: boolean
  error: string | null | undefined
}

export const fetchProperties = createAsyncThunk<Property[]>(
  "properties/fetchProperties",
  async () => {
    const response = await client.get("/properties")
    return response.data
  }
)

export const fetchPropertyById = createAsyncThunk<Property, string>(
  "properties/fetchPropertyById",
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await client.get(`properties/${propertyId}`)

      if (response.status !== 200) {
        return rejectWithValue(`Not Found: ${response.status}`)
      }

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data)
      }

      return rejectWithValue("An unknown error occurred")
    }
  }
)

export const addBookedPeriod = createAsyncThunk(
  "properties/addBookedPeriod",
  async (props: {
    propertyId: string
    bookedPeriod: BookedPeriod
    newPeriod: BookedPeriod[]
    nightsBooked: number
    guests: number
  }) => {
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
  "properties/updateBookedPeriod",
  async (props: { propertyId: number; newBookedPeriods: BookedPeriod[] }) => {
    const { newBookedPeriods, propertyId } = props

    const response = await client.patch(`properties/${propertyId}`, {
      booked_periods: newBookedPeriods,
    })

    return response
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

        state.propertyDetail = action.payload.property
      })
      .addCase(addBookedPeriod.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(updatePropertyBookedPeriod.pending, (state) => {
        state.loading = true
      })
      .addCase(updatePropertyBookedPeriod.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updatePropertyBookedPeriod.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const addUserBookedPeriod = addBookedPeriod.fulfilled

export default propertiesSlice.reducer
