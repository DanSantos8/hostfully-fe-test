import { Meta, StoryObj } from "@storybook/react"
import Rating from "@/components/Rating/Rating"

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
      description: "Rating value from 0 to 5",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultRating: Story = {
  args: {
    rating: 3.5,
  },
}

export const FullRating: Story = {
  args: {
    rating: 5,
  },
}

export const NoRating: Story = {
  args: {
    rating: 0,
  },
}
