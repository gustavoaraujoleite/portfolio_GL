import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Footer from ".";

describe("Footer component", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });
  it("footer component should exist", () => {
    cy.get('[data-testid="footer-container"]').should("exist");
  });

  it("footer component should have full width", () => {
    cy.get('[data-testid="footer-container"]').should("have.class", "w-full");
  });

  it("footer component should have place children component to center", () => {
    cy.get('[data-testid="footer-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.justifyContent).to.equal("center");
      });
  });

  it("footer inner container should exist", () => {
    cy.get('[data-testid="footer-inner-container"]').should("exist");
  });

  it(`footer inner container should a 100% width along with a ${MAX_CONTENT_WIDTH}`, () => {
    cy.get('[data-testid="footer-inner-container"]')
      .should("have.class", "w-full")
      .should("have.class", `${MAX_CONTENT_WIDTH}`);
  });
});
