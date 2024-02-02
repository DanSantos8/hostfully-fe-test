import CarouselControls from "@/components/Carousel/Controls/CarouselControls"
import { withThemeProvider } from "@/utils/test.helpers"

describe("CarouselControls Component", () => {
  let onNextStub
  let onPrevStub

  beforeEach(() => {
    // Initialize the stubs inside beforeEach hook
    onNextStub = cy.stub().as("onNextStub")
    onPrevStub = cy.stub().as("onPrevStub")

    cy.mount(
      withThemeProvider(
        <CarouselControls onNext={onNextStub} onPrev={onPrevStub} />
      )
    )
  })

  it("calls onNext prop when next button is clicked", () => {
    cy.get('[data-testid="next-button"]').click()
    cy.get("@onNextStub").should("have.been.calledOnce")
  })

  it("calls onPrev prop when prev button is clicked", () => {
    cy.get('[data-testid="prev-button"]').click()
    cy.get("@onPrevStub").should("have.been.calledOnce")
  })
})
