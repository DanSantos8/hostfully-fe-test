import * as S from "./Image.styles"

type ImageProps = {
  src: string
  alt?: string
}
const Image = (props: ImageProps) => {
  const { src, alt } = props

  return (
    <S.ImageWrapper>
      <img src={src} alt={alt} loading="lazy" />
    </S.ImageWrapper>
  )
}

export default Image
