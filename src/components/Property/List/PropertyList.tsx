import * as S from "./PropertyList.styles"
import { useAppSelector } from "@/hooks/useStore"
import StateHandler from "@/components/Handlers/StateHandler/StateHandler"
import PropertyCard from "./Card/PropertyCard"

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
