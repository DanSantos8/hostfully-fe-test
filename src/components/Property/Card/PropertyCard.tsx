import { useMemo } from "react"
import * as S from "./PropertyCard.styles"
import { Link } from "react-router-dom"

type PropertyCardProps = {
  id: number
  image: string
  title: string
  rate: number
  reference: string
  price: number
  priceType: string
}

const PropertyCard = (props: PropertyCardProps) => {
  const {
    id = "01",
    title = "São Vicente, Brasil",
    image = "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
    price = 345,
    priceType = "noite",
    rate = 4.97,
    reference = "8 minuto(s) a pé até Itararé Beach",
  } = props

  const url = useMemo(() => `/${id}`, [id])

  return (
    <Link to={url}>
      <S.Container>
        <S.Image src={image} />
        <S.Description>
          <S.Title>
            <S.Text>{title}</S.Text>
            <S.Rate>
              <S.LightText>{rate}</S.LightText>
            </S.Rate>
          </S.Title>
          <S.Reference>{reference}</S.Reference>
        </S.Description>
        <S.Price>
          <S.Text>R$ {price}</S.Text>
          <S.LightText>{priceType}</S.LightText>
        </S.Price>
      </S.Container>
    </Link>
  )
}

export default PropertyCard
