import { MemoryRouter, Route, Routes } from "react-router-dom"
import { withThemeProvider } from "@/utils/test.helpers"
import Header from "@/components/Header/Header"

describe("Header Component", () => {
  beforeEach(() => {
    cy.mount(
      withThemeProvider(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="*" element={<Header />}></Route>
          </Routes>
        </MemoryRouter>
      )
    )
  })

  it("successfully renders", () => {
    cy.get("header").should("exist")
  })

  it("renders the logo image correctly", () => {
    cy.get("header")
      .find("img")
      .should(
        "have.attr",
        "src",
        "https://www.hostfully.com/wp-content/uploads/2022/08/logo-1.svg"
      )
    cy.get("header").find("img").should("have.attr", "alt", "Hostfully")
  })

  it("navigates to home on logo click", () => {
    cy.get("a").find('img[alt="Hostfully"]').should("be.visible").click()
    cy.url().should("include", "/")
  })

  it("My bookings navigation exists", () => {
    cy.get("header").find("a").contains("My Bookings").should("exist")
  })
  it("navigates to home on logo click", () => {
    cy.get("a").find('img[alt="Hostfully"]').should("be.visible").click()
    cy.url().should("include", "/")
  })
})
