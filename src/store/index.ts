import { configureStore } from "@reduxjs/toolkit"
import PropertiesSlice from "./Properties/PropertiesSlice"
import UserSlice from "./User/UserSlice"
import ManagementSlice from "./PropertyManagement/PropertyManagementSlice"
import PropertyDetailSlice from "./PropertyDetail/PropertyDetailSlice"

export const store = configureStore({
  reducer: {
    properties: PropertiesSlice,
    user: UserSlice,
    propertyManagement: ManagementSlice,
    propertyDetail: PropertyDetailSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
