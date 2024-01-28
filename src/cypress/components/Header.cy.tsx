import Header from "../../components/Header/Header"
import { withThemeProvider } from "@/utils/test.helpers"

describe("Should mount Header ", () => {
  it("renders", () => {
    cy.mount(withThemeProvider(<Header />))
  })
})
