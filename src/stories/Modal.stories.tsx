import { Meta, StoryObj } from "@storybook/react"
import Modal from "@/components/Modal/Modal"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => {
      const modalRootId = "modal-root"
      if (!document.getElementById(modalRootId)) {
        const modalRoot = document.createElement("div")
        modalRoot.id = modalRootId
        document.body.appendChild(modalRoot)
      }
      return <Story />
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const OpenModal: Story = {
  args: {
    isOpen: true,
    onClose: () => alert("Modal closed"),
    children: (
      <div style={{ color: "black", padding: "20px" }}>
        <p>This is a modal. Click outside to close.</p>
      </div>
    ),
  },
}
