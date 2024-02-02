import { Property } from "@/models/property.models"
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit"
import { fetchProperties, updatePropertyBookedPeriod } from "./PropertiesThunks"

type PropertiesState = {
  list: Property[]
  loading: boolean
  error: string | null | undefined
}

const initialState: PropertiesState = {
  list: [],
  loading: false,
  error: null,
}

const setLoading = (state: PropertiesState) => {
  state.loading = true
  state.error = null
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
          state.list = action.payload
          state.error = null
          state.loading = false
        }
      )
      .addCase(fetchProperties.rejected, setError)
      .addCase(updatePropertyBookedPeriod.pending, setLoading)
      .addCase(updatePropertyBookedPeriod.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(updatePropertyBookedPeriod.rejected, setError)
  },
})

export default propertiesSlice.reducer
