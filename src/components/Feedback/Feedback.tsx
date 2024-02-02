import React, { ReactNode } from "react"
import * as S from "./Feedback.styles"
interface Feedback {
  children: ReactNode
  message: string
  variant?: "SUCCESS" | "WARNING"
}

const Feedback: React.FC<Feedback> = ({
  children,
  message,
  variant = "SUCCESS",
}) => {
  return (
    <S.Container variant={variant}>
      <S.Title>{message}</S.Title>
      {children}
    </S.Container>
  )
}

export default Feedback
