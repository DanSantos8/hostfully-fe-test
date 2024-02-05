import { Container, Message } from "./ErrorHandler.styles"
import { MdErrorOutline } from "react-icons/md"

interface ErrorHandler {
  message: string
}

const ErrorHandler = (props: ErrorHandler) => {
  const { message } = props
  return (
    <Container data-testid="error-handler">
      <MdErrorOutline size={50} />
      <Message>{message}</Message>
    </Container>
  )
}

export default ErrorHandler
