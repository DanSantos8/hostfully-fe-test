import EmptyListHandler from "@/components/Handlers/EmptyListHandler/EmptyListHandler"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EmptyListHandler> = {
  title: "Handlers/EmptyListHandler",
  component: EmptyListHandler,
  argTypes: {
    message: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: "No items found.",
  },
}

export const CustomMessage: Story = {
  args: {
    message: "Your search returned no results.",
  },
}
