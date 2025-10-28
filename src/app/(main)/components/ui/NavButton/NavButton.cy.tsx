import NavButton from ".";

describe("NavButton component", () => {
  const hrefRedirect = "/test/navButton";
  const title = "text test";

  beforeEach(() => {
    cy.mount(<NavButton href={hrefRedirect} title={title} />);
  });
  it("should go to next page", () => {
    cy.get('[data-testid="nav-button-container"]').should("exist");
  });

  it("component should have the correct href", () => {
    cy.get('[data-testid="nav-button-anchor"]').should(
      "have.attr",
      "href",
      hrefRedirect
    );
  });

  it("component should have the correct title", () => {
    cy.get('[data-testid="nav-button-anchor"]').should("contain.text", title);
  });

  it("should show non active state when path !== href", () => {
    const randomPathProp = "/prop/test";
    cy.mount(
      <NavButton href={hrefRedirect} title={title} pathProp={randomPathProp} />
    );

    cy.get('[data-testid="nav-button-anchor"]')
      .should("have.class", "text-gray-50")
      .and("have.class", "after:w-0");
  });

  it("should show active state when path === href", () => {
    cy.mount(
      <NavButton href={hrefRedirect} title={title} pathProp={hrefRedirect} />
    );

    cy.get('[data-testid="nav-button-anchor"]')
      .should("have.class", "text-golden-yellow")
      .and("have.class", "after:w-full");
  });
});
