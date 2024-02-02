import * as S from "./EmptyListHandler.styles"

const EmptyListHandler = ({ message }: { message: string }) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}

export default EmptyListHandler
