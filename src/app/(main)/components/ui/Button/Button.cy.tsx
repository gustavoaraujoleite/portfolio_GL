import Button from ".";

describe("Button component", () => {
  const title = "testing";
  beforeEach(() => {
    cy.mount(<Button title={title} />);
  });

  it("button component should exist", () => {
    cy.get('[data-testid="button-main-container"]').should("exist");
  });

  it("button component should have custom golden yellow as background color", () => {
    cy.get('[data-testid="button-main-container"]').should(
      "have.class",
      "bg-golden-yellow"
    );
  });

  it("button component should display a black color when mouse hover", () => {
    cy.get('[data-testid="button-main-container"]').should(
      "have.class",
      "hover:bg-black"
    );
  });
  it("button component should display a golden yellow for text color when mouse hover", () => {
    cy.get('[data-testid="button-main-container"]').should(
      "have.class",
      "hover:text-golden-yellow"
    );
  });

  it("title inside button component should exist", () => {
    cy.get('[data-testid="button-title"]').should("be.visible");
  });

  it(`title inside button component should have '${title}' value`, () => {
    cy.get('[data-testid="button-title"]')
      .should("be.visible")
      .should("have.text", `${title}`);
  });
});
