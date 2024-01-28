import Property from "@/components/Property"
import { withThemeProvider } from "@/utils/test.helpers"
import { MemoryRouter } from "react-router-dom"

describe("PropertyCard Component Tests", () => {
  const defaultProps = {
    id: 1,
    title: "São Vicente, Brasil",
    image:
      "https://chnapartments.com/assets/images/cache/kitchen-and-living-room-a4be940df9ffd81de9014c7fc0f53336.jpg",
    price: 345,
    priceType: "noite",
    rate: 4.97,
    reference: "8 minuto(s) a pé até Itararé Beach",
  }

  beforeEach(() => {
    cy.mount(
      withThemeProvider(
        <MemoryRouter>
          <Property.Card {...defaultProps} />
        </MemoryRouter>
      )
    )
  })

  it("should render the property card link with the correct URL", () => {
    cy.get("a").should("have.attr", "href", `/${defaultProps.id}`)
  })

  it("should display the correct image", () => {
    cy.get("img").should("have.attr", "src", defaultProps.image)
  })

  it("should display the correct title", () => {
    cy.get("span").contains(defaultProps.title)
  })

  it("should display the correct rate", () => {
    cy.get("span").contains(defaultProps.rate)
  })

  it("should display the correct reference", () => {
    cy.get("p").contains(defaultProps.reference)
  })

  it("should display the correct price", () => {
    cy.get("span").contains(`R$ ${defaultProps.price}`)
  })

  it("should display the correct price type", () => {
    cy.get("span").contains(defaultProps.priceType)
  })
})
