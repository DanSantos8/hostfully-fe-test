import Example from "@components/Example"

describe("Should render example", () => {
  it("Mount the component", () => {
    cy.mount(<Example />)
  })
})
