import Property from "@/components/Property"
import * as S from "./Home.styles"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { useEffect } from "react"
import PropertyCard from "@/components/Property/List/Card/PropertyCard"
import { fetchProperties } from "@/store/Properties/PropertiesThunks"

const Home = () => {
  const dispatch = useAppDispatch()
  const { propertiesList } = useAppSelector((state) => state.properties)

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  return (
    <S.Container>
      <Property.List>
        {propertiesList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </Property.List>
    </S.Container>
  )
}

export default Home
