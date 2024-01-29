import PropertyGallery from "../../Detail/PropertyCarousel"
import * as S from "./PropertyCard.styles"

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
    //id = "01",
    location = "São Vicente, Brasil",
    images = [
      "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
      "https://www.bproperty.com/blog/wp-content/uploads/2021/04/house-1867187_1920.jpg",
    ],
    price = 345,
    rating = 4.97,
    title = "8 minuto(s) a pé até Itararé Beach",
  } = props

  //const url = useMemo(() => `/${id}`, [id])

  return (
    <S.Container>
      <PropertyGallery images={images} />

      <S.Description>
        <S.Title>
          <S.Text>{location}</S.Text>
          <S.Rate>
            <S.LightText>{rating}</S.LightText>
          </S.Rate>
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
