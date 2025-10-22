import Header from ".";


describe("Header component", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });
  it("header component should exist", () => {
    cy.get('[data-testid="header-container"]').should("exist");
  });

  it("header component should have a padding-y of 8px", () => {
    cy.get('[data-testid="header-container"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.paddingTop).to.equal("8px");
        expect(style.paddingBottom).to.equal("8px");
      });
  });

  it("header component should have 24px x-padding for smaller windows and a 0px x-padding for extra large windows", () => {
    cy.get('[data-testid="header-container"]')
      .should("be.visible")
      .should("have.class", "px-4")
      .should("have.class", "xl:px-0");
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

  it("header inner container should a 100% width along with a max-width=1078px", () => {
    cy.get('[data-testid="header-inner-container"]')
      .should("have.class", "w-full")
      .should("have.class", "max-w-[1078px]");
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
