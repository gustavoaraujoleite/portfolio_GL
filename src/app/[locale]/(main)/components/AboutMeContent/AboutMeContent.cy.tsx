import AboutMeContent from ".";

describe("About me content component", () => {
  beforeEach(() => {
    cy.mount(<AboutMeContent />);
  });
  it("component should exist", () => {
    cy.get('[data-testid="aboutme-main-container"]').should("exist");
  });

  it("image component should be visible on larger devices and hidden on smaller ones", () => {
    cy.get('[data-testid="aboutme-main-image"]').should("exist");
  });

  it("about me description should exist", () => {
    cy.get('[data-testid="aboutme-description"]').should("exist");
  });

  it("about me description should have max width of 50% on larger devices", () => {
    cy.get('[data-testid="aboutme-description"]').should(
      "have.class",
      "lg:max-w-[50%]"
    );
  });

  it("redirection button should exist", () => {
    cy.get('[data-testid="aboutme-redirection-button"]').should("exist");
  });

  it("redirection button should redirect to /contact when clicked", () => {
    cy.get('[data-testid="aboutme-redirection-button"]').click();
    cy.url().should("include", "/contact");
  });
});
