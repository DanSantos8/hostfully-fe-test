import * as S from "./PropertyList.styles"
import PropertyCard from "./Card/PropertyCard"
import { useAppSelector } from "@/hooks/useStore"
import StateHandler from "@/components/StateHandler/StateHandler"

const PropertyList = () => {
  const { list, error, loading } = useAppSelector((state) => state.properties)

  return (
    <S.Container data-testid="property-list">
      <StateHandler loading={loading} error={error}>
        {list.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </StateHandler>
    </S.Container>
  )
}

export default PropertyList
