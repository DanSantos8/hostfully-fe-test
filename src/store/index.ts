import { configureStore } from "@reduxjs/toolkit"
import PropertiesSlice from "./Properties/PropertiesSlice"

export const store = configureStore({
  reducer: {
    properties: PropertiesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
