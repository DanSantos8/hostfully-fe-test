import { BookedPeriod, Property } from "@/models/property.models"
import { createSlice } from "@reduxjs/toolkit"

type UserState = {
  id: number
  name: string
  myBookings: {
    createdAt: Date
    bookedPeriod: BookedPeriod
    nightsBooked: number
    guests: number
    property: Property
  }[]
  error: boolean
  loading: boolean
}

const initialState: UserState = {
  id: 1,
  name: "Daniel",
  myBookings: [
    {
      createdAt: new Date(),
      bookedPeriod: {
        start_date: "2024-04-22",
        end_date: "2024-04-24",
      },
      nightsBooked: 2,
      guests: 4,
      property: {
        id: "1001",
        title: "Apartamento Aconchegante no Centro da Cidade",
        location: "São Paulo, Brasil",
        type: "Apartamento",
        description:
          "Descubra a vibrante São Paulo hospedando-se neste apartamento aconchegante e moderno no coração da cidade. Perfeito para até 4 hóspedes, oferece uma experiência imersiva na vida urbana, combinando conforto e conveniência. Desfrute de comodidades como Wi-Fi de alta velocidade, cozinha equipada e ar condicionado, tornando sua estadia agradável em qualquer época do ano. Com uma classificação de 4.8 e mais de 150 avaliações, este apartamento, gerenciado pelo superhost Carlos, promete uma experiência de hospedagem excepcional.",
        price: 120,
        regularPrice: 150,
        amenities: ["Wi-Fi", "Cozinha Equipada", "Ar Condicionado"],
        rating: 4.8,
        number_of_reviews: 154,
        host: {
          superhost: true,
          name: "Carlos",
          member_since: "2019-05-20",
          response_rate: 98,
        },
        availability: ["2024-04-01", "2024-04-10"],
        booked_periods: [
          {
            start_date: "2024-04-22",
            end_date: "2024-04-24",
          },
          {
            start_date: "2024-04-18",
            end_date: "2024-04-20",
          },
        ],
        images: [
          "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        maxGuest: 8,
        bedrooms: 3,
        beds: 5,
        cleaningFee: 50,
      },
    },
    {
      createdAt: new Date(),
      bookedPeriod: {
        start_date: "2024-04-22",
        end_date: "2024-04-24",
      },
      nightsBooked: 2,
      guests: 4,
      property: {
        id: "1001",
        title: "Apartamento Aconchegante no Centro da Cidade",
        location: "São Paulo, Brasil",
        type: "Apartamento",
        description:
          "Descubra a vibrante São Paulo hospedando-se neste apartamento aconchegante e moderno no coração da cidade. Perfeito para até 4 hóspedes, oferece uma experiência imersiva na vida urbana, combinando conforto e conveniência. Desfrute de comodidades como Wi-Fi de alta velocidade, cozinha equipada e ar condicionado, tornando sua estadia agradável em qualquer época do ano. Com uma classificação de 4.8 e mais de 150 avaliações, este apartamento, gerenciado pelo superhost Carlos, promete uma experiência de hospedagem excepcional.",
        price: 120,
        regularPrice: 150,
        amenities: ["Wi-Fi", "Cozinha Equipada", "Ar Condicionado"],
        rating: 4.8,
        number_of_reviews: 154,
        host: {
          superhost: true,
          name: "Carlos",
          member_since: "2019-05-20",
          response_rate: 98,
        },
        availability: ["2024-04-01", "2024-04-10"],
        booked_periods: [
          {
            start_date: "2024-04-22",
            end_date: "2024-04-24",
          },
          {
            start_date: "2024-04-18",
            end_date: "2024-04-20",
          },
        ],
        images: [
          "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
})

export default userSlice.reducer
