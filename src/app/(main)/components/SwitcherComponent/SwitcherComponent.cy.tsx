import SwitcherComponent from ".";

describe("Switcher main component", () => {
  beforeEach(() => {
    cy.mount(<SwitcherComponent />);
  });

  it("switcher main component should exist", () => {
    cy.get('[data-testid="switcher-main-container"]').should("exist");
  });

  it("switcher main component should have a flex along with gap=8px class to display content correctly", () => {
    cy.get('[data-testid="switcher-main-container"]')
      .should("have.class", "flex")
      .should("have.class", "gap-2");
  });
  it("switcher flag container should have a flex along with gap=4px class to display content correctly", () => {
    cy.get('[data-testid="switcher-flag-container"]')
      .should("have.class", "flex")
      .should("have.class", "gap-1");
  });
  it("should display correct text for brazilian flag's alt", () => {
    cy.get('[data-testid="switcher-brazilian-flag"]')
      .should("be.visible")
      .and("have.attr", "alt", "Brazilian flag");
  });
  it("should display correct text for UK flag's alt", () => {
    cy.get('[data-testid="switcher-uk-flag"]')
      .should("be.visible")
      .and("have.attr", "alt", "UK flag");
  });
});
