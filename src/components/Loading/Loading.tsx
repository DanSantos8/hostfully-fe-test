import * as S from "./Loading.styles"

import { BeatLoader } from "react-spinners"

const Loading = (props: { color?: "white" | "blue"; size?: number }) => {
  const { color = "white", size = 15 } = props
  return (
    <S.Spinner>
      <BeatLoader color={color} size={size} />
    </S.Spinner>
  )
}

export default Loading
