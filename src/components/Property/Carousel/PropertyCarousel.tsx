import Carousel from "@/components/Carousel"
import Image from "@/components/Image"

type ProperyGalleryProps = {
  images: string[]
}
const PropertyCarousel = (props: ProperyGalleryProps) => {
  const { images } = props

  const hasControls = images.length > 1

  return (
    <Carousel controls={hasControls}>
      {images.map((image) => (
        <Image key={image} src={image} />
      ))}
    </Carousel>
  )
}

export default PropertyCarousel
