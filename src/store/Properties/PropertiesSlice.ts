import client from "@/api/api"
import {
  fetchPropertiesApi,
  fetchPropertyByIdApi,
  updatePropertyApi,
} from "@/api/propertiesApi"
import { BookedPeriod, Property } from "@/models/property.models"
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit"

type PropertiesState = {
  propertiesList: Property[]
  propertyDetail: Property
  loading: boolean
  error: string | null | undefined
}

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  fetchPropertiesApi
)

export const fetchPropertyById = createAsyncThunk(
  "properties/fetchPropertyById",
  fetchPropertyByIdApi
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
  "properties/updateProperty",
  async (props: {
    propertyId: number
    updatedBookedPeriods: BookedPeriod[]
  }) => {
    const { propertyId, updatedBookedPeriods } = props
    return updatePropertyApi(propertyId, updatedBookedPeriods)
  }
)

export const deletePropertyBookedPeriod = createAsyncThunk(
  "properties/deletePropertyBookedPeriod",
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
          state.loading = false
        }
      )
      .addCase(fetchProperties.rejected, setError)
      .addCase(fetchPropertyById.pending, setLoading)
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false
        state.propertyDetail = action.payload
      })
      .addCase(fetchPropertyById.rejected, setError)
      .addCase(addBookedPeriod.pending, setLoading)
      .addCase(addBookedPeriod.fulfilled, (state, action) => {
        state.loading = false

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
