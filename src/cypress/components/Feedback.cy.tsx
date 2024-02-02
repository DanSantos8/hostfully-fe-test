import Feedback from "@/components/Feedback/Feedback"
import { withThemeProvider } from "@/utils/test.helpers"

describe("Feedback Component", () => {
  let feedbackComponent: (
    message: string,
    variant: "SUCCESS" | "WARNING"
  ) => void

  beforeEach(() => {
    feedbackComponent = (message: string, variant: "SUCCESS" | "WARNING") => {
      cy.mount(
        withThemeProvider(
          <Feedback message={message} variant={variant}>
            Content
          </Feedback>
        )
      )
    }
  })

  it("renders a success message correctly", () => {
    const message = "Success Message"
    const variant = "SUCCESS"

    feedbackComponent(message, variant)
    cy.contains(message).should("exist")
  })

  it("renders a warning message correctly", () => {
    const message = "Warning Message"
    const variant = "WARNING"

    feedbackComponent(message, variant)

    cy.contains(message).should("exist")
  })

  it("renders children content", () => {
    const message = "Success Message"
    const variant = "SUCCESS"

    feedbackComponent(message, variant)

    cy.contains("Content").should("exist")
  })
})
