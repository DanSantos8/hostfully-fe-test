import { Property } from "@/models/property.models"
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit"
import {
  addBookedPeriod,
  fetchPropertyById,
} from "../Properties/PropertiesThunks"
import { Status, StatusEnum } from "@/constants/status"

type PropertiesState = {
  property: Property
  status: {
    detail: Status
    bookingForm: Status
  }
  errors: {
    detail: string | null | undefined
    bookingForm: string | null | undefined
  }
}

const initialState: PropertiesState = {
  property: {
    id: null,
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
  status: {
    detail: "IDLE",
    bookingForm: "IDLE",
  },
  errors: {
    detail: null,
    bookingForm: null,
  },
}

type PropertiesStatesStatus = keyof PropertiesState["errors"]

const setLoading = (state: PropertiesState, keys: PropertiesStatesStatus[]) => {
  for (const currentKey of keys) {
    state.status[currentKey] = StatusEnum.LOADING
    state.errors[currentKey] = null
  }
}

const setError = (
  state: PropertiesState,
  action: PayloadAction<unknown, string, never, SerializedError>,
  key: PropertiesStatesStatus
) => {
  state.errors[key] = action.error.message
  state.status[key] = StatusEnum.REJECTED
}

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPropertyById.pending, (state) => {
        setLoading(state, ["detail"])
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.status.detail = StatusEnum.FULFILLED
        state.status.bookingForm = StatusEnum.IDLE
        state.property = action.payload
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        setError(state, action, "detail")
      })
      .addCase(addBookedPeriod.pending, (state) => {
        setLoading(state, ["bookingForm"])
      })
      .addCase(addBookedPeriod.fulfilled, (state, action) => {
        state.status.bookingForm = StatusEnum.FULFILLED
        state.property = { ...state.property, ...action.payload.property }
      })
      .addCase(addBookedPeriod.rejected, (state, action) => {
        setError(state, action, "bookingForm")
      })
  },
})

export const addUserBookedPeriod = addBookedPeriod.fulfilled

export default propertiesSlice.reducer
