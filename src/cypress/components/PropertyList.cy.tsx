import { withThemeProvider } from "@/utils/test.helpers"
import Property from "@/components/Property"

describe("PropertyList Component Tests", () => {
  beforeEach(() => {
    cy.mount(
      withThemeProvider(
        <Property.List>
          <div>Div 1</div> <div>Div 2</div>
        </Property.List>
      )
    )
  })

  it("should be mount", () => {
    cy.get('[data-testid="property-list"]').should("exist")
  })

  it("should render children correctly", () => {
    cy.get('[data-testid="property-list"]').within(() => {
      cy.get("div").should("have.length.at.least", 2)
    })
  })
})
