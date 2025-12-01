import Loading from ".";

describe("Switcher component", () => {
  beforeEach(() => {
    cy.mount(<Loading />);
  });

  it("loading component should exist", () => {
    cy.get('[data-testid="loading-container"]').should("exist");
  });

  it("loading should be absolute and wrap the whole window", () => {
    cy.get('[data-testid="loading-container"]')
      .should("have.class", "absolute")
      .should("have.class", "w-screen")
      .should("have.class", "h-screen");
  });

  it("loading should center icon", () => {
    cy.get('[data-testid="loading-container"]')
      .should("have.class", "flex")
      .should("have.class", "justify-center")
      .should("have.class", "items-center");
  });

  it("loading icon should exist", () => {
    cy.get('[data-testid="loading-icon"]').should("exist");
  });
  it("loading icon should be visible and has bounce animation", () => {
    cy.get('[data-testid="loading-icon"]')
      .should("be.visible")
      .should("have.class", "animate-bounce");
  });
});
