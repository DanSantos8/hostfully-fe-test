import * as S from "./CarouselControls.styles"

type CarouselControlsProps = {
  onNext: () => void
  onPrev: () => void
}

const CarouselControls = (props: CarouselControlsProps) => {
  const { onNext, onPrev } = props

  return (
    <S.Container>
      <S.PrevButton onClick={onPrev} />
      <S.NextButton onClick={onNext} />
    </S.Container>
  )
}

export default CarouselControls
