import AboutImage from ".";

describe("About Page Image component", () => {
  beforeEach(() => {
    cy.mount(<AboutImage />);
  });
  it("component should exist", () => {
    cy.get('[data-testid="about-image-container"]').should("exist");
  });

  it("image should have an aspect square class", () => {
    cy.get('[data-testid="about-image-container"]').should(
      "have.class",
      "aspect-square"
    );
  });

  it("image should have 80% width for mobile, 70% width for tablets and smaller laptops and a 56% width for larger devices", () => {
    cy.get('[data-testid="about-image-container"]')
      .should("have.class", "w-[80%]")
      .should("have.class", "md:w-[70%]")
      .should("have.class", "lg:w-[56%]");
  });

  it("children component holding Image should exist", () => {
    cy.get('[data-testid="about-image-children"]').should("exist");
  });

  it("image should be full rounded", () => {
    cy.get('[data-testid="about-image-children"]').should(
      "have.class",
      "rounded-full"
    );
  });
  
  it("image should have a half moon radial gradient from bottom to top", () => {
    cy.get('[data-testid="about-image-children"]').should(
      "have.class",
      "[mask-image:radial-gradient(circle_at_53%_34%,black_34%,transparent_72.5%)]"
    );
  });
});
