import { useParams } from "react-router-dom"
import * as S from "./PropertyDetailPage.styles"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/useStore"
import Property from "@/components/Property"
import { fetchPropertyById } from "@/store/PropertyDetail/PropertyDetailThunks"

const PropertyDetailPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(+id))
    }
  }, [dispatch, id])

  return (
    <S.Container>
      <Property.Detail />
      <Property.Booking />
    </S.Container>
  )
}

export default PropertyDetailPage
