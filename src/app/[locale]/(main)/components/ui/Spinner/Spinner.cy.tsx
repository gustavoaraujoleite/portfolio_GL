import Spinner from ".";

describe("Spinner Component", () => {
  beforeEach(() => {
    cy.mount(<Spinner />);
  });

  it("should render the spinner container", () => {
    cy.get('[data-testid="spinner-container"]').should("exist");
  });

  it("should render the inner spinner element", () => {
    cy.get('[data-testid="spinner-inner-component"]').should("exist");
  });

  it("should have the correct classes on the container", () => {
    cy.get('[data-testid="spinner-container"]')
      .should("have.class", "flex")
      .and("have.class", "justify-center")
      .and("have.class", "items-center")
      .and("have.class", "h-fit");
  });

  it("should have the correct classes on the inner spinner", () => {
    cy.get('[data-testid="spinner-inner-component"]')
      .should("have.class", "animate-spin")
      .and("have.class", "rounded-full")
      .and("have.class", "h-[32px]")
      .and("have.class", "w-[32px]")
      .and("have.class", "border-t-2")
      .and("have.class", "border-r-2")
      .and("have.class", "border-golden-yellow");
  });

  it("should ensure the spinner is visible", () => {
    cy.get('[data-testid="spinner-inner-component"]').should("be.visible");
  });
});
