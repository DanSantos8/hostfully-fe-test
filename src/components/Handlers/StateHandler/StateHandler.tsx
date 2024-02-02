import React, { ReactNode } from "react"
import Loading from "../../Loading/Loading"
import ErrorHandler from "../ErrorHandler/ErrorHandler"
import EmptyListHandler from "../EmptyListHandler/EmptyListHandler"

interface StateHandlerProps {
  loading?: boolean
  error?: string | undefined | null
  isEmpty?: boolean
  emptyMessage?: string
  children: ReactNode
}

const StateHandler: React.FC<StateHandlerProps> = ({
  loading,
  error,
  isEmpty,
  emptyMessage = "It seems like your list is empty",
  children,
}) => {
  if (loading) {
    return <Loading color="blue" size={40} />
  }

  if (error) {
    return <ErrorHandler message={error} />
  }

  if (isEmpty) {
    return <EmptyListHandler message={emptyMessage} />
  }

  return children
}

export default StateHandler
