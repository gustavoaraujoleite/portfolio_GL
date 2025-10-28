import React from "react";
import MobileMenuContent from ".";

describe("Mobile menu content component", () => {
  beforeEach(() => {
    cy.mount(<MobileMenuContent />);
  });

  it("component should exist", () => {
    cy.get("[data-testid='mobile-menu-content-container']").should("exist");
  });

  it("menu navigation should exist", () => {
    cy.get("[data-testid='mobile-menu-nav-container']").should("exist");
  });
  it("switcher component should exist", () => {
    cy.get("[data-testid='mobile-menu-switcher-container']").should("exist");
  });

  it("should render social media icons accordingly", () => {
    cy.get('[data-testid="footer-icon-container"]').within(() => {
      cy.get("a").should("have.length", 3);
    });
  });

  it("should redirect to correct URLs", () => {
    cy.get('[data-testid="footer-icon-container"] a')
      .eq(0)
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/gustavoaraujoleite/"
      );
    cy.get('[data-testid="footer-icon-container"] a')
      .eq(1)
      .should("have.attr", "href", "https://github.com/gustavoaraujoleite");
    cy.get('[data-testid="footer-icon-container"] a')
      .eq(2)
      .should(
        "have.attr",
        "href",
        "https://www.instagram.com/gustavoaraujoleite/"
      );
  });
});
