import { ReactNode, useState, Children } from "react"
import * as S from "./Carousel.styles"
import CarouselControls from "./Controls/CarouselControls"

type CarouselProps = {
  children: ReactNode
  controls?: boolean
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { children, controls = true } = props

  const [index, setIndex] = useState<number>(0)

  const childrenArray = Children.toArray(children)

  const onNext = () =>
    setIndex((prev) => (prev + 1 < childrenArray.length ? prev + 1 : 0))

  const onPrev = () =>
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : childrenArray.length - 1))

  return (
    <S.Container>
      {controls && <CarouselControls onNext={onNext} onPrev={onPrev} />}
      <S.ContentWrapper>
        <S.Content>{childrenArray[index]}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default Carousel
