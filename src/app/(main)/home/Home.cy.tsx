import Home from "./page";

describe("Homepage component", () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });
  it("homepage component should exist", () => {
    cy.get('[data-testid="home-main-container"]').should("exist");
  });

  it("homepage component should center items and place it as columns", () => {
    cy.get('[data-testid="home-main-container"]')
      .should("have.class", "flex-col")
      .should("have.class", "items-center");
  });
  it("homepage component should have a 32px gap from every children", () => {
    cy.get('[data-testid="home-main-container"]').should("have.class", "gap-8");
  });
});
