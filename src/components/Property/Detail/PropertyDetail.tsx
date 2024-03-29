import { useAppSelector } from "@/hooks/useStore"
import PropertyCarousel from "../Carousel/PropertyCarousel"
import * as S from "./PropertyDetail.styles"
import PropertyTags from "../../Tags/Tags"
import Rating from "@/components/Rating"
import Host from "@/components/Host/Host"
import Tags from "@/components/Tags"
import { useMemo } from "react"
import StateHandler from "@/components/Handlers/StateHandler/StateHandler"
import { StatusEnum } from "@/constants/status"

const PropertyDetail = () => {
  const {
    status,
    errors: { detail: errorDetail },
  } = useAppSelector((state) => state.propertyDetail)
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
  } = useAppSelector((state) => state.propertyDetail.property)

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
    <StateHandler
      error={errorDetail}
      loading={status.detail === StatusEnum.LOADING}
    >
      <S.Information>
        <PropertyCarousel images={images} />
        <S.Content>
          <S.Title>
            {title} - {location}
          </S.Title>
          <PropertyTags tags={mappedPropertyTags} />
          <Rating rating={rating} />
        </S.Content>
        <S.Content>
          <Host
            isSuperHost={host.superhost}
            name={host.name}
            memberSince={host.member_since}
          />
        </S.Content>
        <S.Content>
          <S.Description>{description}</S.Description>
          <Tags tags={amenities} variant="large" />
        </S.Content>
      </S.Information>
    </StateHandler>
  )
}

export default PropertyDetail
