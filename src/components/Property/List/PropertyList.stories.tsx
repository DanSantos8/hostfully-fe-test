import { Meta, StoryObj } from "@storybook/react"
import PropertyList from "./PropertyList"

const meta: Meta<typeof PropertyList> = {
  component: PropertyList,
  title: "Property List",
}

export default meta

type Story = StoryObj<typeof meta>

const arr = Array(12).fill({
  id: "1001",
  title: "Apartamento Aconchegante no Centro da Cidade",
  location: "São Paulo, Brasil",
  type: "Apartamento",
  price: 150.0,
  amenities: ["Wi-Fi", "Cozinha Equipada", "Ar Condicionado"],
  rating: 4.8,
  number_of_reviews: 154,
  host: {
    name: "Carlos",
    member_since: "2019-05-20",
    response_rate: 98,
  },
  booked_periods: [
    {
      start_date: "2024-02-01",
      end_date: "2024-02-10",
    },
    {
      start_date: "2024-02-16",
      end_date: "2024-02-28",
    },
  ],
  images: [
    "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
})

export const Base: Story = {
  args: {
    properties: arr,
  },
  render: (args) => <PropertyList {...args} />,
}
