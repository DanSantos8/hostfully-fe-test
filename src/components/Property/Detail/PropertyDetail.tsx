import { useAppSelector } from "@/hooks/useStore"
import PropertyCarousel from "./PropertyCarousel"
import * as S from "./PropertyDetail.styles"
import PropertyTags from "../../Tags/Tags"
import Rating from "@/components/Rating"
import Host from "@/components/Host/Host"
import Tags from "@/components/Tags"
import { useMemo } from "react"
const PropertyDetail = () => {
  const {
    images,
    location,
    title,
    amenities,
    rating,
    host,
    description,
    maxGuest,
    beds,
    bedrooms,
  } = useAppSelector((state) => state.properties.propertyDetail)

  const propertyTags = useMemo(
    () => ({
      guests: maxGuest,
      beds,
      bedrooms,
    }),
    [bedrooms, beds, maxGuest]
  )

  const mappedPropertyTags = useMemo(
    () =>
      Object.keys(propertyTags).map(
        (tag) => `${propertyTags[tag as keyof typeof propertyTags]} ${tag}`
      ),
    [propertyTags]
  )

  return (
    <>
      <PropertyCarousel images={images} />
      <S.Content>
        <S.Title>
          {title} - {location}
        </S.Title>
        <PropertyTags tags={mappedPropertyTags} />
        <Rating rating={rating} />
      </S.Content>
      <S.Content>
        <Host isSuperHost={host.superhost} name={host.name} />
      </S.Content>
      <S.Content>
        <S.Description>{description}</S.Description>
        <Tags tags={amenities} variant="large" />
      </S.Content>
    </>
  )
}

export default PropertyDetail
