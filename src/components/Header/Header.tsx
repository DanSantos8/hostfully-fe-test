import { ROUTES } from "@/constants/routes"
import Image from "../Image"
import * as S from "./Header.styles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Header = () => {
  return (
    <>
      <ToastContainer />
      <S.Header>
        <S.ImageWrapper to={ROUTES.HOME}>
          <Image
            src="https://www.hostfully.com/wp-content/uploads/2022/08/logo-1.svg"
            alt="Hostfully"
          />
        </S.ImageWrapper>
        <S.Navigation>
          <S.Navigate to={ROUTES.MY_BOOKINGS}>My Bookings</S.Navigate>
        </S.Navigation>
      </S.Header>
    </>
  )
}

export default Header
