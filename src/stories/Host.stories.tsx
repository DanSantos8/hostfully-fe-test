import { Meta, StoryObj } from "@storybook/react"
import Host from "@/components/Host/Host"

const meta: Meta<typeof Host> = {
  title: "Components/Host",
  component: Host,
  argTypes: {
    isSuperHost: { control: "boolean" },
    name: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultHost: Story = {
  args: {
    isSuperHost: false,
    name: "Alex",
  },
}

export const SuperHost: Story = {
  args: {
    isSuperHost: true,
    name: "Jordan",
  },
}
