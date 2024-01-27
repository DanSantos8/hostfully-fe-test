import { Meta, StoryObj } from "@storybook/react"
import Example from "./Example"

const meta: Meta<typeof Example> = {
  component: Example,
  title: "Example",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["green", "red", "yellow"],
      defaultValue: "red",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
