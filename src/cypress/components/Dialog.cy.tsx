import Dialog from "@/components/Dialog/Dialog"
import { withThemeProvider } from "@/utils/test.helpers"

describe("Dialog Component (Cypress-like unit test)", () => {
  let isOpen = false

  const label = "Open Dialog"
  const childrenText = "Dialog Content"
  beforeEach(() => {
    const handleIsOpen = cy.stub().as("handleIsOpen")
    cy.mount(
      withThemeProvider(
        <Dialog
          label={label}
          isOpen={isOpen}
          handleIsOpen={() => {
            isOpen = !isOpen
            handleIsOpen()
          }}
        >
          <span>{childrenText}</span>
        </Dialog>
      )
    )
  })
  it("renders label and not render children", () => {
    cy.contains(label).should("exist")
    cy.contains(childrenText).should("not.exist")
  })

  it("calls handleIsOpen when button is clicked and open the dialog", () => {
    expect(isOpen).to.be.false
    cy.contains("Open Dialog").click()
    cy.get("@handleIsOpen").should("have.been.calledOnce")
  })
})
