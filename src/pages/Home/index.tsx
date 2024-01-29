import Property from "@/components/Property"
import * as S from "./Home.styles"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { useEffect } from "react"
import { fetchProperties } from "@/store/Properties/PropertiesSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const { propertiesList, ...rest } = useAppSelector(
    (state) => state.properties
  )

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  return (
    <S.Container>
      <Property.List properties={propertiesList} {...rest} />
    </S.Container>
  )
}

export default Home
