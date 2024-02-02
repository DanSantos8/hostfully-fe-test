import React, { ReactNode } from "react"
import * as S from "./Feedback.styles"
interface Feedback {
  children: ReactNode
  message: string
}

const Feedback: React.FC<Feedback> = ({ children, message }) => {
  return (
    <S.Container>
      <S.Title>{message}</S.Title>
      {children}
    </S.Container>
  )
}

export default Feedback
