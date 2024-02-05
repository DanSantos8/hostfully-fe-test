import { useParams } from "react-router-dom"
import * as S from "./PropertyDetailPage.styles"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/useStore"
import { fetchPropertyById } from "@/store/PropertyDetail/PropertyDetailThunks"
import PropertyDetail from "@/components/Property/Detail/PropertyDetail"
import PropertyDetailBooking from "@/components/Property/Detail/Booking/PropertyDetailBooking"

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
      <PropertyDetail />
      <PropertyDetailBooking />
    </S.Container>
  )
}

export default PropertyDetailPage
