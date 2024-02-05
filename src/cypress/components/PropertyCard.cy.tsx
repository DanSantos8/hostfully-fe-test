import { withThemeProvider } from "@/utils/test.helpers"
import PropertyCard, {
  PropertyCardProps,
} from "@/components/Property/List/Card/PropertyCard"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("PropertyCard Component", () => {
  let propertyCardProps: PropertyCardProps

  beforeEach(() => {
    propertyCardProps = {
      id: 1,
      location: "Test Location",
      images: ["image1.jpg", "image2.jpg"],
      price: 100,
      rating: 4.5,
      title: "Test Property",
    }

    cy.mount(
      withThemeProvider(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<PropertyCard {...propertyCardProps} />} />
          </Routes>
        </MemoryRouter>
      )
    )
  })

  it("renders PropertyCard with correct props", () => {
    cy.contains("Test Location").should("exist")
    cy.contains("Test Property").should("exist")
    cy.contains("US$ 100").should("exist")
  })
})
