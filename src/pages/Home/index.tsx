import Property from "@/components/Property"
import * as S from "./Home.styles"
import { useAppDispatch } from "@/hooks/useStore"
import { useEffect } from "react"
import { fetchProperties } from "@/store/Properties/PropertiesThunks"
import ErrorBoundary from "@/components/Handlers/ErrorBoundary/ErrorBoundary"
import ErrorHandler from "@/components/Handlers/ErrorHandler/ErrorHandler"

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  return (
    <S.Container>
      <ErrorBoundary
        fallback={<ErrorHandler message="Oops, something went wrong." />}
      >
        <Property.List />
      </ErrorBoundary>
    </S.Container>
  )
}

export default Home
