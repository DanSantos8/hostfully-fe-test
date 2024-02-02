import StateHandler from "@/components/Handlers/StateHandler/StateHandler"
import { Meta, StoryObj } from "@storybook/react"
import { BrowserRouter as Router } from "react-router-dom"

const meta: Meta<typeof StateHandler> = {
  title: "Handlers/StateHandler",
  component: StateHandler,
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
    isEmpty: { control: "boolean" },
    emptyMessage: { control: "text" },
  },
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

export const LoadingState: Story = {
  args: {
    loading: true,
  },
}

export const ErrorState: Story = {
  args: {
    error: "An unexpected error has occurred.",
  },
}

export const EmptyState: Story = {
  args: {
    isEmpty: true,
  },
}

export const ContentState: Story = {
  render: (args) => (
    <StateHandler {...args}>
      <div>This is the content when everything is loaded correctly.</div>
    </StateHandler>
  ),
  args: {},
}
