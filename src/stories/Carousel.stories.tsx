import { Meta, StoryObj } from "@storybook/react"
import Carousel from "@/components/Carousel/Carousel"
import Image from "@/components/Image"

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: "Carousel",
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    controls: true,
    children: <div></div>,
  },
  render: (args) => {
    return (
      <Carousel {...args}>
        <Image src="https://hotelxtoronto.com/_novaimg/4922505-1481330_0_0_2200_1200_2200_1200.rc.jpg" />
        <Image src="https://media.istockphoto.com/id/104731717/pt/foto/resort-de-luxo.jpg?s=612x612&w=0&k=20&c=6rJBstFwB4tA-y7Fk8oEp9b8icCtQpS7-aKhKUxAbE4=" />
      </Carousel>
    )
  },
}
