import Carousel from "@/components/Carousel"
import { withThemeProvider } from "@/utils/test.helpers"

describe("Carousel Component", () => {
  beforeEach(() => {
    // Mount the Carousel component before each test
    cy.mount(
      withThemeProvider(
        <Carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Carousel>
      )
    )
  })

  it("renders the Carousel component with controls", () => {
    cy.get('[data-testid="carousel"]').should("exist")
    cy.get('[data-testid="carousel-controls"]').should("exist")
  })

  it("goes through slides when Next and Previous buttons are clicked", () => {
    cy.get('[data-testid="carousel-content"]').should("contain", "Slide 1")

    cy.get('[data-testid="next-button"]').click()
    cy.get('[data-testid="carousel-content"]').should("contain", "Slide 2")

    cy.get('[data-testid="prev-button"]').click()
    cy.get('[data-testid="carousel-content"]').should("contain", "Slide 1")
  })

  it("loops to the beginning when reaching the end with Next button", () => {
    cy.get('[data-testid="next-button"]').click()
    cy.get('[data-testid="next-button"]').click()
    cy.get('[data-testid="next-button"]').click()

    cy.get('[data-testid="carousel-content"]').should("contain", "Slide 1")
  })

  it("loops to the end when reaching the beginning with Previous button", () => {
    cy.get('[data-testid="prev-button"]').click()

    cy.get('[data-testid="carousel-content"]').should("contain", "Slide 3")
  })
})
