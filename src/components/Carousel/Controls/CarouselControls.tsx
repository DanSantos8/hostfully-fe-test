import * as S from "./CarouselControls.styles"

type CarouselControlsProps = {
  onNext: () => void
  onPrev: () => void
}

const CarouselControls = (props: CarouselControlsProps) => {
  const { onNext, onPrev } = props

  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onNext()
  }

  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onPrev()
  }

  return (
    <S.Container>
      <S.PrevButton onClick={handlePrevClick} />
      <S.NextButton onClick={handleNextClick} />
    </S.Container>
  )
}

export default CarouselControls
