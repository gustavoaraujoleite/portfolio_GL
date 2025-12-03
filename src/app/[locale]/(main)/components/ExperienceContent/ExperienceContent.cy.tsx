import ExperienceContent from ".";

describe("Experience content component", () => {
  beforeEach(() => {
    cy.mount(<ExperienceContent />);
  });

  it("skills content container should exist", () => {
    cy.get('[data-testid="experience-skills-main-container"]').should("exist");
  });

  it("skills content container should be displayed as columns in mobile devices", () => {
    cy.get('[data-testid="experience-skills-main-container"]').should(
      "have.class",
      "flex-col"
    );
  });

  it("skills content container should be displayed as grid cols 2 and centered in non mobile devices", () => {
    cy.get('[data-testid="experience-skills-main-container"]')
      .should("have.class", "md:grid-cols-2")
      .should("have.class", "md:justify-items-center");
  });

  it("each project card should display a title and image", () => {
    cy.get('[data-testid="project-card-container"]').each(($card) => {
      cy.wrap($card).find("h1").should("exist");
      cy.wrap($card).find("img").should("exist");
    });
  });

  it("should render skill section with correct headings", () => {
    cy.contains("Skills").should("exist");
  });
});
