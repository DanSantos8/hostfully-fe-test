type Host = {
  superhost: boolean
  name: string
  member_since: string
  response_rate: number
}

type BookedPeriod = {
  start_date: string
  end_date: string
}

export interface Property {
  id: string
  title: string
  location: string
  description: string
  type: string
  price: number
  regularPrice: number
  amenities: string[]
  rating: number
  number_of_reviews: number
  host: Host
  booked_periods: BookedPeriod[]
  images: string[]
  maxGuest: number
  bedrooms: number
  beds: number
}
