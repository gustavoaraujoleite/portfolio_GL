import Footer from ".";

describe("Footer component", () => {
  beforeEach(() => {
    cy.mount(<Footer backgroundColor="bg-regular-gray" />);
  });
  it("footer component should exist", () => {
    cy.get('[data-testid="footer-container"]').should("exist");
  });
  it("footer component should stick in the bottom", () => {
    cy.get('[data-testid="footer-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.position).to.equal("fixed");
        expect(style.bottom).to.equal("0px");
      });
  });

  it("footer component should have full width", () => {
    cy.get('[data-testid="footer-container"]').should("have.class", "w-full");
  });

  it("footer component should have 8px y-padding", () => {
    cy.get('[data-testid="footer-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.paddingTop).to.equal("8px");
        expect(style.paddingBottom).to.equal("8px");
      });
  });

  it("footer component should have 16px x-padding for smaller windows and a 0px x-padding for extra large windows", () => {
    cy.get('[data-testid="footer-container"]')
      .should("be.visible")
      .should("have.class", "px-4")
      .should("have.class", "xl:px-0");
  });

  it("footer component should have a background color of regular-gray inserted via props", () => {
    cy.get('[data-testid="footer-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.backgroundColor).to.equal("rgb(51, 51, 51)");
      });
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

  it("footer inner container should a 100% width along with a max-width=1078px", () => {
    cy.get('[data-testid="footer-inner-container"]')
      .should("have.class", "w-full")
      .should("have.class", "max-w-[1078px]");
  });

  it("footer inner component should have flex + justify-between class", () => {
    cy.get('[data-testid="footer-inner-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.justifyContent).to.equal("space-between");
        expect(style.alignItems).to.equal("center");
      });
  });

  it("footer icon component should have flex + gap = 32px class", () => {
    cy.get('[data-testid="footer-icon-container"]')
      .should("have.class", "gap-4")
      .should("have.class", "lg:gap-8");
  });
});
