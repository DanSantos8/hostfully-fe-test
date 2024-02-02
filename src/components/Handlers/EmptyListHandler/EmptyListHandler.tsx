import * as S from "./EmptyListHandler.styles"

const EmptyListHandler = ({ message }: { message: string }) => {
  return (
    <S.Container data-testid="empty-list">
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}

export default EmptyListHandler
