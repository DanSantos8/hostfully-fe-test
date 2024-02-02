import StateHandler from "@/components/Handlers/StateHandler/StateHandler"
import { withThemeProvider } from "@/utils/test.helpers"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("StateHandler Component", () => {
  it("renders Loading component when loading is true", () => {
    const loading = true

    cy.mount(
      withThemeProvider(<StateHandler loading={loading}>Content</StateHandler>)
    )

    cy.get('[data-testid="loading"]').should("exist")
  })

  it("renders ErrorHandler component when error is present", () => {
    const error = "An error occurred"

    cy.mount(
      withThemeProvider(
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route
              path="*"
              element={<StateHandler error={error}>Content</StateHandler>}
            ></Route>
          </Routes>
        </MemoryRouter>
      )
    )

    cy.get('[data-testid="error-handler"]').should("exist")

    cy.contains(error).should("exist")
  })

  it("renders EmptyListHandler component when isEmpty is true", () => {
    const isEmpty = true
    const emptyMessage = "It seems like your list is empty"

    cy.mount(
      withThemeProvider(
        <StateHandler isEmpty={isEmpty} emptyMessage={emptyMessage}>
          Content
        </StateHandler>
      )
    )

    cy.get('[data-testid="empty-list"]').should("exist")

    cy.contains(emptyMessage).should("exist")
  })

  it("renders children when none of the special cases apply", () => {
    const loading = false
    const error = null
    const isEmpty = false

    cy.mount(
      <StateHandler loading={loading} error={error} isEmpty={isEmpty}>
        Content
      </StateHandler>
    )

    // Check if children content is rendered
    cy.contains("Content").should("exist")

    // Check that none of the special components are rendered
    cy.get('[data-testid="loading]"').should("not.exist")
    cy.get('[data-testid="empty-list]"').should("not.exist")
    cy.get('[data-testid="error-handler]"').should("not.exist")
  })
})
