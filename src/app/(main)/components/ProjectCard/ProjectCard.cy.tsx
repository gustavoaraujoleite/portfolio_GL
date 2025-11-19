import ProjectCard from ".";

describe("Project card component", () => {
  const mockProps = {
    src: "/test-image.jpg" as any,
    title: "test project",
    description: <>"First line\nand second line"</>,
    alt: "Project's image",
    buttonHref: "https://github.com/test",
    buttonTitle: "Go to repository",
    badgesArray: ["Next.js", "Typescript", "Tailwind", "Cypress.io"],
  };

  beforeEach(() => {
    cy.mount(<ProjectCard {...mockProps} />);
  });

  it("should render main container", () => {
    cy.get('[data-testid="project-card-container"]').should("exist");
  });

  it("should render image with the correct alt prop", () => {
    cy.get('[data-testid="project-card-image"] img')
      .should("have.attr", "alt", mockProps.alt)
      .and("be.visible");
  });

  it("should render title correctly", () => {
    cy.contains(mockProps.title).should("exist");
  });

  it("should render description along with line jump", () => {
    cy.get('[data-testid="project-card-content"] p')
      .invoke("text")
      .should("contain", "First line")
      .and("contain", "and second line");
  });

  it("should have a button that redirects to correct path", () => {
    cy.get('[data-testid="project-card-redirect-button"]')
      .should("have.attr", "href", mockProps.buttonHref)
      .and("have.attr", "target", "_blank");
  });

  it("should render correct ", () => {
    cy.contains("Go to repository").should("exist");
  });

  it("should render all badges passed through badgesArray", () => {
    cy.get('[data-testid="project-card-badge"]').should(
      "have.length",
      mockProps.badgesArray.length
    );

    mockProps.badgesArray.forEach((badge) => {
      cy.contains(badge).should("exist");
    });
  });
});
