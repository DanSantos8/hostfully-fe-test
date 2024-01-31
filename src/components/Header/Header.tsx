import { Link } from "react-router-dom"
import Image from "../Image"
import * as S from "./Header.styles"

const Header = () => {
  return (
    <S.Header>
      <S.ImageWrapper to="/">
        <Image
          src="https://www.hostfully.com/wp-content/uploads/2022/08/logo-1.svg"
          alt="Hostfully"
        />
      </S.ImageWrapper>
      <div>
        <Link to="/my-bookings">My Bookings</Link>
      </div>
    </S.Header>
  )
}

export default Header
