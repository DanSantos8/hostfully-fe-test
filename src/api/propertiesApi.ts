import client from "@/api/api"
import { BookedPeriod, Property } from "@/models/property.models"

export const fetchPropertiesApi = async (): Promise<Property[]> => {
  const response = await client.get("/properties")
  return response.data
}

export const fetchPropertyByIdApi = async (
  propertyId: string
): Promise<Property> => {
  const response = await client.get(`properties/${propertyId}`)
  if (response.status !== 200) {
    throw new Error(`Not Found: ${response.status}`)
  }
  return response.data
}

export const updatePropertyApi = async (
  propertyId: number,
  updatedBookedPeriods: BookedPeriod[]
): Promise<Property> => {
  const response = await client.patch(`properties/${propertyId}`, {
    booked_periods: updatedBookedPeriods,
  })
  return response.data
}
