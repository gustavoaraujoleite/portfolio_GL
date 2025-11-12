import LevelBar from ".";

describe("Level bar component", () => {
  beforeEach(() => {
    cy.mount(<LevelBar level={90} />);
  });
  it("should render component correctly", () => {
    cy.mount(<LevelBar level={50} />);
    cy.get('[data-testid="level-bar-container"]').should("exist");
    cy.get('[data-testid="level-bar"]').should("exist");
  });

  it("should apply correct level of width", () => {
    const level = 72;
    cy.mount(<LevelBar level={level} />);
    cy.get('[data-testid="level-bar"]')
      .should("have.attr", "style")
      .and("include", `width: ${level}%`);
  });

  it("should apply spring-green color when level < 34", () => {
    cy.mount(<LevelBar level={20} />);
    cy.get('[data-testid="level-bar"]')
      .should("have.class", "bg-spring-green")
      .and("not.have.class", "bg-dark-orange")
      .and("not.have.class", "bg-coral-red");
  });

  it("should apply dark-orange color when level is between 35 and 67", () => {
    cy.mount(<LevelBar level={50} />);
    cy.get('[data-testid="level-bar"]')
      .should("have.class", "bg-dark-orange")
      .and("not.have.class", "bg-spring-green")
      .and("not.have.class", "bg-coral-red");
  });

  it("should apply coral-red color when level >= 68", () => {
    cy.mount(<LevelBar level={90} />);
    cy.get('[data-testid="level-bar"]')
      .should("have.class", "bg-coral-red")
      .and("not.have.class", "bg-dark-orange")
      .and("not.have.class", "bg-spring-green");
  });
});
