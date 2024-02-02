import { Meta, StoryObj } from "@storybook/react"
import PropertyCard from "./PropertyCard"

const meta: Meta<typeof PropertyCard> = {
  component: PropertyCard,
  title: "Property Card",
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    id: "",
    images: [],
    location: "",
    price: 0,
    rating: 0,
    title: "",
  },
}
