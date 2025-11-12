import ExperienceContent from ".";

describe("Experience content component", () => {
  beforeEach(() => {
    cy.mount(<ExperienceContent />);
  });

  it("main content should exist", () => {
    cy.get('[data-testid="experience-content-main-container"]').should("exist");
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
});
