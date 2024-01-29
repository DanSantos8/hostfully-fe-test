import PropertyCard from "./Card/PropertyCard"
import * as S from "./PropertyList.styles"
import { Property } from "@/models/property.models"

type PropertyListProps = {
  properties: Property[]
}

const PropertyList = (props: PropertyListProps) => {
  const { properties } = props

  if (!properties) {
    //TODO add empty list component
    return <div>Empty</div>
  }

  return (
    <S.Container data-testid="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </S.Container>
  )
}

export default PropertyList
