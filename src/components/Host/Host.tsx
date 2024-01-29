import { useMemo } from "react"
import Tags from "../Tags"
import * as S from "./Host.styles"

type HostProps = {
  isSuperHost: boolean
}

const Host = (props: HostProps) => {
  const { isSuperHost } = props

  const superHostTag = isSuperHost ? "Superhost" : ""
  const tags = useMemo(() => [superHostTag, "1 ano hospedando"], [superHostTag])
  return (
    <S.Host>
      <S.Image></S.Image>
      <S.Details>
        <S.Name>Anfitriã(o): Lilian</S.Name>
        <Tags tags={tags} variant="medium" />
      </S.Details>
    </S.Host>
  )
}

export default Host
