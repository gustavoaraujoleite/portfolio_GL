function Menu() {
  return (
    <section
      data-testid="menu-nav-container"
      className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-4"
    ></section>
  );
}
describe("Menu component", () => {
  beforeEach(() => {
    cy.mount(<Menu />);
  });

  it("menu nav component should exist", () => {
    cy.get('[data-testid="menu-nav-container"]').should("exist");
  });
  it("should display nav buttons as columns in mobile setting", () => {
    cy.get('[data-testid="menu-nav-container"]')
      .should("have.class", "flex")
      .should("have.class", "flex-col");
  });

  it("should display nav buttons as row in non mobile setting", () => {
    cy.get('[data-testid="menu-nav-container"]').should(
      "have.class",
      "sm:flex-row"
    );
  });
});
