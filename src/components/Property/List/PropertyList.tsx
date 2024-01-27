import { ReactNode } from "react"
import * as S from "./PropertyList.styles"

type PropertyListProps = {
  children: ReactNode
}

const PropertyList: React.FC<PropertyListProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export default PropertyList
