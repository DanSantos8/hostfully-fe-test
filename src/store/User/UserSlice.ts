import { BookedPeriod, Property } from "@/models/property.models"
import { createSlice } from "@reduxjs/toolkit"
import { addUserBookedPeriod } from "../Properties/PropertiesSlice"

type UserState = {
  id: number
  name: string
  myBookings: {
    id: number
    bookedPeriod: BookedPeriod
    nightsBooked: number
    guests: number
    property: Property
  }[]
  error: boolean
  loading: boolean
}

/* interface AddBookingPayload {
  createdAt: Date
  bookedPeriod: BookedPeriod
  nightsBooked: number
  guests: number
  property: Property
} */

const initialState: UserState = {
  id: 1,
  name: "Daniel",
  myBookings: [
    {
      id: new Date().getMilliseconds(),
      guests: 5,
      nightsBooked: 2,
      bookedPeriod: {
        start_date: "2023-02-02",
        end_date: "2023-02-04",
      },
      property: {
        id: "1002",
        title: "Casa de Praia com Vista Incrível",
        location: "Rio de Janeiro, Brasil",
        type: "Casa",
        description:
          "Relaxe nesta deslumbrante casa de praia em Rio de Janeiro, onde o luxo encontra a natureza. Ideal para até 8 pessoas, esta propriedade oferece uma experiência única com sua piscina privativa e vistas espetaculares do mar. Equipada com estacionamento, esta casa é um refúgio tranquilo, perfeito para grupos que buscam conforto e exclusividade. A anfitriã Mariana, uma superhost, assegura um serviço de qualidade e uma estadia memorável, evidenciado pela excelente classificação de 4.9.",
        price: 250,
        regularPrice: 250,
        amenities: ["Piscina", "Vista para o Mar", "Estacionamento"],
        rating: 4.9,
        number_of_reviews: 89,
        host: {
          superhost: true,
          name: "Mariana",
          member_since: "2020-08-15",
          response_rate: 95,
        },
        availability: ["2024-03-01", "2024-03-10"],
        booked_periods: [
          {
            start_date: "2024-03-19",
            end_date: "2024-03-22",
          },
          {
            start_date: "2024-03-27",
            end_date: "2024-03-28",
          },
        ],
        images: [
          "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        maxGuest: 8,
        bedrooms: 3,
        beds: 5,
        cleaningFee: 50,
      },
    },
  ],
  error: false,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserBookedPeriod, (state, action) => {
      const payload = action.payload

      state.myBookings = [
        ...state.myBookings,
        {
          id: new Date().getMilliseconds(),
          bookedPeriod: payload.booking.period,
          nightsBooked: payload.booking.nightsBooked,
          guests: payload.booking.guests,
          property: payload.property,
        },
      ]
    })
  },
})

export default userSlice.reducer
