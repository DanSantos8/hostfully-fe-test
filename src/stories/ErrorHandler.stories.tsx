import ErrorHandler from "@/components/Handlers/ErrorHandler/ErrorHandler"
import { Meta, StoryObj } from "@storybook/react"
import { BrowserRouter as Router } from "react-router-dom"

const meta: Meta<typeof ErrorHandler> = {
  title: "Handlers/ErrorHandler",
  component: ErrorHandler,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: "An unexpected error has occurred.",
  },
}

export const CustomMessage: Story = {
  args: {
    message: "Sorry, the page you are looking for does not exist.",
  },
}
