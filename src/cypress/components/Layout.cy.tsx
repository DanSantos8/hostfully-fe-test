import Layout from "@/components/Layout/Layout"
import Home from "@/pages/Home"
import { withThemeProvider } from "@/utils/test.helpers"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("Layout Component Tests", () => {
  beforeEach(() => {
    cy.mount(
      withThemeProvider(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </MemoryRouter>
      )
    )
  })

  it("should render the header component", () => {
    cy.get("Header").should("exist")
  })

  it("should render the outlet for routing", () => {
    cy.get('[data-testid="property-list"]').should("exist")
  })
})
