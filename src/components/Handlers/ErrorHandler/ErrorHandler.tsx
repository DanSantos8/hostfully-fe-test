import { ROUTES } from "@/constants/routes"
import { Container, GoBack, Message } from "./ErrorHandler.styles"
import { MdErrorOutline } from "react-icons/md"

interface ErrorHandler {
  message: string
}

const ErrorHandler = (props: ErrorHandler) => {
  const { message } = props
  return (
    <Container>
      <MdErrorOutline size={50} />
      <Message>{message}</Message>
      <GoBack to={ROUTES.HOME}>Go back home</GoBack>
    </Container>
  )
}

export default ErrorHandler
