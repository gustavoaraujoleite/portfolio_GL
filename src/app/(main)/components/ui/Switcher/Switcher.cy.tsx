import Switcher from ".";

describe("Switcher component", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
    });
    cy.mount(<Switcher />);
  });

  it("switcher component should exist", () => {
    cy.get('[data-testid="switcher-container"]').should("exist");
  });

  it("should move the ball on click", () => {
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "translate-x-0"
    );
    cy.get('[data-testid="switcher-container"]').click();
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "translate-x-5"
    );
  });
  it("should toggle the ball position on consecutive clicks", () => {
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "translate-x-0"
    );

    cy.get('[data-testid="switcher-container"]').click();
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "translate-x-5"
    );

    cy.get('[data-testid="switcher-container"]').click();
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "translate-x-0"
    );
  });

  it("should have smooth transition classes on the ball", () => {
    cy.get('[data-testid="switcher-ball"]').should(
      "have.class",
      "transition-transform"
    );
  });

  it("should be focusable", () => {
    cy.get('[data-testid="switcher-container"]').focus().should("have.focus");
  });
});
