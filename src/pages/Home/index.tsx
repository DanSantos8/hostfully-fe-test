import Property from "@/components/Property"
import * as S from "./Home.styles"
import { useAppDispatch } from "@/hooks/useStore"
import { useEffect } from "react"
import { fetchProperties } from "@/store/Properties/PropertiesThunks"

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  return (
    <S.Container>
      <Property.List />
    </S.Container>
  )
}

export default Home
