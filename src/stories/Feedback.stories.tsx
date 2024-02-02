import { Meta, StoryObj } from "@storybook/react"
import Feedback from "@/components/Feedback/Feedback"

const meta: Meta<typeof Feedback> = {
  title: "Components/Feedback",
  component: Feedback,
  argTypes: {
    variant: {
      control: { type: "select", options: ["SUCCESS", "WARNING"] },
    },
    message: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const SuccessFeedback: Story = {
  args: {
    message: "This is a success message!",
    variant: "SUCCESS",
    children: (
      <div>This is additional content that can go along with the message.</div>
    ),
  },
}

export const WarningFeedback: Story = {
  args: {
    message: "This is a warning message!",
    variant: "WARNING",
    children: <div>Be cautious about the next steps you take.</div>,
  },
}
