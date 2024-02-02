import { useParams } from "react-router-dom"
import * as S from "./PropertyDetailPage.styles"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/useStore"
import Property from "@/components/Property"
import { fetchPropertyById } from "@/store/Properties/PropertiesThunks"
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary"
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler"

const PropertyDetailPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id))
    }
  }, [dispatch, id])

  return (
    <ErrorBoundary
      fallback={<ErrorHandler message="Oops, something went wrong" />}
    >
      <S.Container>
        <S.Information>
          <Property.Detail />
        </S.Information>

        <Property.Booking />
      </S.Container>
    </ErrorBoundary>
  )
}

export default PropertyDetailPage
