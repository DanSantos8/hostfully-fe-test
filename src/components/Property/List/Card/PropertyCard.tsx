import Rating from "@/components/Rating"
import PropertyGallery from "../../Carousel/PropertyCarousel"
import * as S from "./PropertyCard.styles"
import { useMemo } from "react"

export type PropertyCardProps = {
  id: number | null
  images: string[]
  location: string
  rating: number
  title: string
  price: number
}

const PropertyCard = (props: PropertyCardProps) => {
  const {
    id,
    location = "",
    images = [],
    price = 0,
    rating = 0,
    title = "",
  } = props

  const url = useMemo(() => `/property-detail/${id}`, [id])

  return (
    <S.Container to={url} data-testid="property-card">
      <PropertyGallery images={images} />
      <S.Description>
        <S.Title>
          <S.Text>{location}</S.Text>
          <Rating rating={rating} />
        </S.Title>
        <S.Reference>{title}</S.Reference>
      </S.Description>
      <S.Price>
        <S.Text>US$ {price}</S.Text>
        <S.LightText>night</S.LightText>
      </S.Price>
    </S.Container>
  )
}

export default PropertyCard
