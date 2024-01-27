import { Meta, StoryObj } from "@storybook/react"
import PropertyList from "./PropertyList"
import PropertyCard from "../Card/PropertyCard"

const meta: Meta<typeof PropertyList> = {
  component: PropertyList,
  title: "Property List",
}

export default meta

type Story = StoryObj<typeof meta>

const arr = Array(12).fill({
  title: "São Vicente, Brasil",
  image:
    "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
  price: 345,
  priceType: "noite",
  rate: 4.97,
  reference: "8 minuto(s) a pé até Itararé Beach",
})

export const Base: Story = {
  args: {},
  render: () => (
    <PropertyList>
      {arr.map((property) => (
        <PropertyCard {...property} />
      ))}
    </PropertyList>
  ),
}
