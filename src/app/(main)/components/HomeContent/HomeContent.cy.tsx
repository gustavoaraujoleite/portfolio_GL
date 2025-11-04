import Home from "../../home/page";

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

  it("homepage component should have a 64px gap from every children", () => {
    cy.get('[data-testid="home-main-container"]').should(
      "have.class",
      "gap-16"
    );
  });

  it("main component should contain text component as children", () => {
    cy.get('[data-testid="home-intro-container"]').should("exist");
  });

  it("text component should have a highlight span with custom yellow color", () => {
    cy.get('[data-testid="home-intro-highlight"]')
      .should("exist")
      .should("have.class", "text-golden-yellow");
  });

  it("redirection button should exist", () => {
    cy.get('[data-testid="home-redirection-button"]').should("exist");
  });

  it("redirection button should redirect to /about", () => {
    cy.get('[data-testid="home-redirection-button"]').click()
    cy.url().should('include', '/about');
  });
});
