import Image from "@/components/Image/Image"
import { withThemeProvider } from "@/utils/test.helpers"

describe("Image Component Tests", () => {
  const testSrc =
    "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
  const testAlt = "i dont have this color yet - YET!"

  beforeEach(() => {
    cy.mount(withThemeProvider(<Image src={testSrc} alt={testAlt} />))
  })

  it("should render the image with the correct src", () => {
    cy.get("img").should("have.attr", "src", testSrc)
  })

  it("should render the image with the correct alt text", () => {
    cy.get("img").should("have.attr", "alt", testAlt)
  })

  it("should have lazy loading attribute", () => {
    cy.get("img").should("have.attr", "loading", "lazy")
  })
})
