import { Meta, StoryObj } from "@storybook/react"
import CarouselControls from "./CarouselControls"

const meta: Meta<typeof CarouselControls> = {
  component: CarouselControls,
  title: "Carousel Controls",
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
