import * as S from "./Home.styles"
import { useAppDispatch } from "@/hooks/useStore"
import { useEffect } from "react"
import { fetchProperties } from "@/store/Properties/PropertiesThunks"
import PropertyList from "@/components/Property/List/PropertyList"

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  return (
    <S.Container>
      <PropertyList />
    </S.Container>
  )
}

export default Home
