import Badge from ".";

describe("Badge component", () => {
  const title = "testing";
  beforeEach(() => {
    cy.mount(<Badge title={title} />);
  });

  it("badge component should exist", () => {
    cy.get('[data-testid="badge-main-container"]').should("exist");
  });

  it("title inside button component should exist", () => {
    cy.get('[data-testid="badge-title"]').should("be.visible");
  });

  it(`title inside button component should have '${title}' value`, () => {
    cy.get('[data-testid="badge-title"]')
      .should("be.visible")
      .should("have.text", `${title}`);
  });
});
