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
    <S.Container data-testid="carousel-controls">
      <S.PrevButton
        onClick={handlePrevClick}
        data-testid="prev-button"
        aria-label="Prev"
      />
      <S.NextButton
        onClick={handleNextClick}
        data-testid="next-button"
        aria-label="Next"
      />
    </S.Container>
  )
}

export default CarouselControls
