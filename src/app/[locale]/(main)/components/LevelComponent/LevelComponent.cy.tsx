import LevelComponent from ".";

describe("Level component", () => {
  const label = "Testing";
  const level = 90;
  beforeEach(() => {
    cy.mount(<LevelComponent label={label} level={level} />);
  });

  it("level component should exist", () => {
    cy.get('[data-testid="level-component-container"]').should("exist");
  });

  it("component should place items next to each other", () => {
    cy.get('[data-testid="level-component-container"]').should(
      "have.class",
      "flex"
    );
  });

  it("component should have correct label as props", () => {
    cy.get('[data-testid="level-component-label"]').should(
      "have.text",
      label
    );
  });

 it("should render the correct width based on the level prop", () => {
   cy.get('[data-testid="level-bar"]').should(
     "have.attr",
     "style",
     `width: ${level}%;`
   );
 });
});
