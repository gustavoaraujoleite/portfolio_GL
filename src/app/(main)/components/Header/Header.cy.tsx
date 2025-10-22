import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Header from ".";

describe("Header component", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });
  it("header component should exist", () => {
    cy.get('[data-testid="header-container"]').should("exist");
  });

  it("header component should have place children component to center", () => {
    cy.get('[data-testid="header-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.justifyContent).to.equal("center");
      });
  });

  it("header inner container should exist", () => {
    cy.get('[data-testid="header-inner-container"]').should("exist");
  });

  it(`header inner container should a 100% width along with a ${MAX_CONTENT_WIDTH}`, () => {
    cy.get('[data-testid="header-inner-container"]')
      .should("have.class", "w-full")
      .should("have.class", `${MAX_CONTENT_WIDTH}`);
  });

  it("header inner component should have flex + justify-between class", () => {
    cy.get('[data-testid="header-inner-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.justifyContent).to.equal("space-between");
        expect(style.alignItems).to.equal("center");
      });
  });
});
