import Dialog from "@/components/Dialog/Dialog"
import PropertyBookingManagement from "../Management/PropertyBookingManagement"
import PropertyBookingCard from "../Card/PropertyBookingCard"
import { BookedPeriod } from "@/models/property.models"
import { useNavigate } from "react-router-dom"
import { useCallback, useState } from "react"

interface PropertyBookingDialog {
  title: string
  bookedPeriod: BookedPeriod
  guests: number
  nightsBooked: number
  price: number
  images: string[]
  id: number
}

const PropertyBookingDialog = (props: PropertyBookingDialog) => {
  const { id } = props
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addQueryParam = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("bookingId", id.toString())
    navigate({ search: `?${searchParams}` })
  }, [id, navigate])

  const onCloseDialog = useCallback(() => {
    setIsDialogOpen((prev) => !prev)
  }, [])

  const handleOpenDialog = useCallback(() => {
    setIsDialogOpen((prev) => !prev)
    addQueryParam()
  }, [addQueryParam])

  return (
    <Dialog
      label="Manage"
      handleIsOpen={handleOpenDialog}
      isOpen={isDialogOpen}
    >
      <PropertyBookingManagement onClose={onCloseDialog}>
        <PropertyBookingCard {...props} />
      </PropertyBookingManagement>
    </Dialog>
  )
}

export default PropertyBookingDialog
