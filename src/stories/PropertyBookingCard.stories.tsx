import PropertyBookingCard from "@/components/Property/Booking/Card/PropertyBookingCard"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PropertyBookingCard> = {
  title: "Components/PropertyBookingCard",
  component: PropertyBookingCard,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Beachfront Villa",
    bookedPeriod: {
      start_date: "2023-04-01",
      end_date: "2023-04-05",
    },
    guests: 4,
    nightsBooked: 4,
    price: 250,
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    children: (
      <div>Additional details like cancellation policy could go here.</div>
    ),
  },
}
