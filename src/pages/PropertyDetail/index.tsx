import { useParams } from "react-router-dom"
import * as S from "./PropertyDetail.styles"
import { useEffect } from "react"
import { useAppDispatch } from "@/hooks/useStore"
import { fetchPropertyById } from "@/store/Properties/PropertiesSlice"
import Property from "@/components/Property"
const PropertyDetailPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id))
    }
  }, [dispatch, id])

  return (
    <S.Container>
      <S.Information>
        <Property.Detail />
      </S.Information>
      <S.Booking>
        <div></div>
      </S.Booking>
    </S.Container>
  )
}

export default PropertyDetailPage
