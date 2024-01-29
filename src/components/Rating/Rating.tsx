import * as S from "./Rating.styles"
import { FaStar } from "react-icons/fa"

type RatingProps = {
  rating: number
}
const Rating = (props: RatingProps) => {
  const { rating } = props
  return (
    <S.Rating>
      <FaStar />
      {rating}
    </S.Rating>
  )
}

export default Rating
