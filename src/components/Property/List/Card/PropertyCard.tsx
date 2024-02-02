import Rating from "@/components/Rating"
import PropertyGallery from "../../Carousel/PropertyCarousel"
import * as S from "./PropertyCard.styles"
import { useMemo } from "react"

type PropertyCardProps = {
  id: string
  images: string[]
  location: string
  rating: number
  title: string
  price: number
}

const PropertyCard = (props: PropertyCardProps) => {
  const {
    id,
    location = "São Vicente, Brasil",
    images = [
      "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
      "https://www.bproperty.com/blog/wp-content/uploads/2021/04/house-1867187_1920.jpg",
    ],
    price = 345,
    rating = 4.97,
    title = "8 minuto(s) a pé até Itararé Beach",
  } = props

  const url = useMemo(() => `/property-detail/${id}`, [id])

  return (
    <S.Container to={url}>
      <PropertyGallery images={images} />
      <S.Description>
        <S.Title>
          <S.Text>{location}</S.Text>
          <Rating rating={rating} />
        </S.Title>
        <S.Reference>{title}</S.Reference>
      </S.Description>
      <S.Price>
        <S.Text>R$ {price}</S.Text>
        <S.LightText>noite</S.LightText>
      </S.Price>
    </S.Container>
  )
}

export default PropertyCard
