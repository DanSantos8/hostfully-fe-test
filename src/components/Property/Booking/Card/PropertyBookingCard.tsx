import Tags from "@/components/Tags"
import * as S from "./PropertyBookingCard.styles"
import React, { ReactNode, useCallback } from "react"
import PropertyCarousel from "../../Carousel/PropertyCarousel"
import moment from "moment"

type PropertyBookingCardsProps = {
  children?: ReactNode
  title: string
  bookedPeriod: {
    start_date: string
    end_date: string
  }
  guests: number
  nightsBooked: number
  price: number
}

const PropertyBookingCard: React.FC<PropertyBookingCardsProps> = (props) => {
  const {
    children,
    bookedPeriod,
    guests = 0,
    title = "",
    nightsBooked = 1,
    price = 0,
  } = props

  const { start_date, end_date } = bookedPeriod

  const formatDate = useCallback(
    (date: string) => moment(date).format("DD/MM"),
    []
  )

  return (
    <S.Card>
      <S.Carousel>
        <PropertyCarousel
          images={[
            "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
            "https://www.bproperty.com/blog/wp-content/uploads/2021/04/house-1867187_1920.jpg",
          ]}
        />
      </S.Carousel>

      <S.Details>
        <S.Title>{title}</S.Title>
        <Tags
          tags={["Piscina", "Vista para o Mar", "Estacionamento"]}
          variant="small"
        />
        <S.Text>
          {formatDate(start_date)} - {formatDate(end_date)}
        </S.Text>
        <S.Text>
          R${price} x {nightsBooked} noites, {guests} guests
        </S.Text>
        {children}
      </S.Details>
    </S.Card>
  )
}

export default PropertyBookingCard
