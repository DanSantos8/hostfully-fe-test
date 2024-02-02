import { Meta, StoryObj } from "@storybook/react"
import Loading from "@/components/Loading/Loading"

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["white", "blue"],
    },
    size: {
      control: { type: "number" },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const WhiteLoading: Story = {
  args: {
    color: "white",
    size: 15,
  },
}

export const BlueLoading: Story = {
  args: {
    color: "blue",
    size: 20,
  },
}

export const CustomSizeLoading: Story = {
  args: {
    color: "blue",
    size: 50,
  },
}
