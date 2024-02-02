import { Meta, StoryObj } from "@storybook/react"
import PropertyBookingForm from "@/components/Property/Booking/Form/PropertyBookingForm"
import { FocusedInputShape } from "react-dates"
import React from "react"
import moment from "moment"
import { StatusEnum } from "@/constants/status"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

const meta: Meta<typeof PropertyBookingForm> = {
  title: "Components/PropertyBookingForm",
  component: PropertyBookingForm,
  parameters: {
    layout: "centered",
  },
}

export default meta

//I found this solution to fix setFocusedInput typescript
const mockSetState = <T,>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  return [initialValue, (value) => console.log(value)]
}

export const Default: StoryObj<typeof PropertyBookingForm> = {
  args: {
    startDate: moment(),
    endDate: moment().add(3, "days"),
    setFocusedInput: mockSetState<FocusedInputShape | null>(null)[1],
    guests: 2,
    maxGuest: 4,
    regularPrice: 200,
    price: 180,
    currentPrice: 180,
    hasPromoPrice: true,
    totalBookedDaysWithNoCleaningFee: 3,
    totalCleaningFee: 50,
    totalPriceWithNoTax: 540,
    nightsBooked: 3,
    focusedInput: null,
    isDayBlocked: () => false,
    onDatesChange: ({ startDate, endDate }) => console.log(startDate, endDate),
    handleGuestsCount: () => () => {},
    handleSubmit: (e) => e.preventDefault(),
    status: StatusEnum.IDLE,
  },
}
