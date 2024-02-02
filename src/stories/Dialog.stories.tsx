import { Meta, StoryObj } from "@storybook/react"
import Dialog from "@/components/Dialog/Dialog"
import { useState } from "react"

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Dialog",
}

export default meta

type Story = StoryObj<typeof meta>

const DialogStatefull = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDialog = () => setIsOpen(!isOpen)

  return (
    <Dialog label={label} handleIsOpen={toggleDialog} isOpen={isOpen}>
      <div style={{ padding: "20px" }}>
        <h2>Dialog Content</h2>
        <p>
          This is some content inside the Dialog. You can place any ReactNode
          here.
        </p>
      </div>
    </Dialog>
  )
}

export const BasicUsage: Story = {
  args: {
    label: "Open Dialog",
  },
  render: (args) => {
    return (
      <>
        <div id="modal-root"></div>
        <DialogStatefull {...args} />
      </>
    )
  },
}
