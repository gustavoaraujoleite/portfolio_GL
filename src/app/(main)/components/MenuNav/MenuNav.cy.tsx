import MenuNav from ".";

describe("Menu component", () => {
  beforeEach(() => {
    cy.mount(<MenuNav isHorizontal />);
  });

  it("menu nav component should exist", () => {
    cy.get('[data-testid="menu-nav-container"]').should("exist");
  });
  it("should display nav buttons as columns in mobile setting", () => {
    cy.mount(<MenuNav isHorizontal={false} />);
    cy.get('[data-testid="menu-nav-container"]')
      .should("have.class", "flex")
      .should("have.class", "flex-col");
  });

  it("should display nav buttons as row in non mobile setting", () => {
    cy.get('[data-testid="menu-nav-container"]').should(
      "have.class",
      "flex-row"
    );
  });
});
