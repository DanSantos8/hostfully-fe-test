import { configureStore } from "@reduxjs/toolkit"
import PropertiesSlice from "./Properties/PropertiesSlice"
import UserSlice from "./User/UserSlice"

export const store = configureStore({
  reducer: {
    properties: PropertiesSlice,
    user: UserSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
