import { useMemo } from "react"
import Tags from "../Tags"
import * as S from "./Host.styles"
import { calculateYearsAndMonthsFromDate } from "@/utils/helpers"

type HostProps = {
  isSuperHost: boolean
  name: string
  memberSince: string
}

const Host = (props: HostProps) => {
  const { isSuperHost, name = "", memberSince } = props

  const superHostTag = isSuperHost ? "Superhost" : ""

  const time = useMemo(
    () => calculateYearsAndMonthsFromDate(memberSince),
    [memberSince]
  )

  const tags = useMemo(
    () => [
      superHostTag,
      `${time.years ? `${time.years} year(s)` : ""}  ${
        time.months ? `${time.months} months` : ""
      } `,
    ],
    [superHostTag, time.months, time.years]
  )
  return (
    <S.Host>
      <S.Image></S.Image>
      <S.Details>
        <S.Name>Host: {name}</S.Name>
        <Tags tags={tags} variant="medium" />
      </S.Details>
    </S.Host>
  )
}

export default Host
