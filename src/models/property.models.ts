type Host = {
  name: string
  member_since: string
  response_rate: number
}

type BookedPeriod = {
  start_date: string
  end_date: string
}

export type Property = {
  id: string
  title: string
  location: string
  type: string
  price: number
  amenities: string[]
  rating: number
  number_of_reviews: number
  host: Host
  booked_periods: BookedPeriod[]
  images: string[]
}
