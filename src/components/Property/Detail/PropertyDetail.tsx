import { useAppSelector } from "@/hooks/useStore"
import PropertyCarousel from "./PropertyCarousel"
import * as S from "./PropertyDetail.styles"
import PropertyTags from "../../Tags/Tags"
import Rating from "@/components/Rating"
import Host from "@/components/Host/Host"
const PropertyDetail = () => {
  const { images, location, title, amenities, rating, host } = useAppSelector(
    (state) => state.properties.propertyDetail
  )
  return (
    <>
      <PropertyCarousel images={images} />
      <S.Content>
        <S.Title>
          {title} - {location}
        </S.Title>
        <PropertyTags tags={amenities} />
        <Rating rating={rating} />
      </S.Content>
      <S.Content>
        <Host isSuperHost={host.superhost} />
      </S.Content>
    </>
  )
}

export default PropertyDetail
