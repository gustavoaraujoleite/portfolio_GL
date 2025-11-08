import ContactContent from ".";

describe("Contact content component", () => {
  beforeEach(() => {
    cy.mount(<ContactContent />);
  });

  it("component should exist", () => {
    cy.get('[data-testid="contact-content-main-container"]').should("exist");
  });
});
