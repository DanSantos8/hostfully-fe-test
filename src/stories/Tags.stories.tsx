import { Meta, StoryObj } from "@storybook/react"
import Tags from "@/components/Tags/Tags"

const meta: Meta<typeof Tags> = {
  title: "Components/Tags",
  component: Tags,
  argTypes: {
    tags: {
      control: "array",
      description: "Array of tag strings",
    },
    variant: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Font size variant",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tags: ["Tag 1", "Tag 2", "Superhost"],
    variant: "medium",
  },
}

export const Small: Story = {
  args: {
    tags: ["Small Tag 1", "Small Tag 2"],
    variant: "small",
  },
}

export const Large: Story = {
  args: {
    tags: ["Large Tag 1", "Large Tag 2", "Large Superhost"],
    variant: "large",
  },
}
