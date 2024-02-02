import { Meta, StoryObj } from "@storybook/react"
import Image from "../components/Image/Image"

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Image",
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    src: "https://hotelxtoronto.com/_novaimg/4922505-1481330_0_0_2200_1200_2200_1200.rc.jpg",
    alt: "fancy hotel",
  },
}
