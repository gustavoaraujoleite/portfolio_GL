import BurgerMenu from ".";

describe("BurgerMenu component", () => {
  beforeEach(() => {
    cy.mount(<BurgerMenu />);
  });

  it("BurgerMenu should be visible", () => {
    cy.get("[data-testid='burger-menu-container']").should("exist");
  });

  it("should render 3 lines for burger menu", () => {
    cy.get("[data-testid='burger-span']").should("have.length", 3);
  });

  it("onClick, should animate to X and middle line disappears", () => {
    cy.get("[data-testid='burger-menu-container']").click();

    cy.wait(400);

    cy.get("[data-testid='burger-span']")
      .eq(1)
      .should("have.css", "opacity", "0");

    cy.get("[data-testid='burger-span']")
      .eq(0)
      .should("have.css", "transform")
      .and("include", "matrix");

    cy.get("[data-testid='burger-span']")
      .eq(0)
      .invoke("css", "transform")
      .should("match", /matrix/);

    cy.get("[data-testid='burger-span']")
      .eq(2)
      .invoke("css", "transform")
      .should("match", /matrix/);
  });

  it("should show menu when open state is true", () => {
    cy.get('[data-testid="burger-menu-container"]').click();
    cy.get('[data-testid="burger-menu-content"]').should("be.visible");
  });
});
