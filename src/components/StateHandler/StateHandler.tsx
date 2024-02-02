import React, { ReactNode } from "react"
import Loading from "../Loading/Loading"
import ErrorHandler from "../ErrorHandler/ErrorHandler"

interface StateHandlerProps {
  loading?: boolean
  error?: string | undefined | null
  isEmpty?: boolean
  children: ReactNode
}

const StateHandler: React.FC<StateHandlerProps> = ({
  loading,
  error,
  isEmpty,
  children,
}) => {
  if (loading) {
    return <Loading color="blue" size={40} />
  }

  if (error) {
    return <ErrorHandler message={error} />
  }

  if (isEmpty) {
    return <div>Empty List</div>
  }

  return children
}

export default StateHandler
