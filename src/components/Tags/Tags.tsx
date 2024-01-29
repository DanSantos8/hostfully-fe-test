import { Theme } from "@/models/theme.models"
import * as S from "./Tags.styles"

type TagsProps = {
  tags: string[]
  variant?: keyof Theme["fontSize"]
}

const Tags = (props: TagsProps) => {
  const { tags = [], variant = "medium" } = props
  return (
    <S.Tags>
      {tags.map((tag) => tag && <S.Text variant={variant}>{tag}</S.Text>)}
    </S.Tags>
  )
}

export default Tags
