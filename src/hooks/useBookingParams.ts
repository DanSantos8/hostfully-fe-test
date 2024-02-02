import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useBookingParams = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const getBookingId = useCallback(() => {
    const searchParams = new URLSearchParams(location.search)
    return Number(searchParams.get("bookingId"))
  }, [location.search])

  const removeBookingId = useCallback(() => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.delete("bookingId")

    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    )
  }, [location.search, location.pathname, navigate])
  return {
    getBookingId,
    removeBookingId,
  }
}

export default useBookingParams
