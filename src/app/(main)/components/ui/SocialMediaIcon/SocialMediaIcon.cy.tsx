import InstagramIcon from "../../../../../../public/icons/Instagram.svg";
import SocialMediaIcon from ".";

describe("Social media icon component", () => {
  const hrefRedirect = "https://google.com.br";
  beforeEach(() => {
    cy.mount(<SocialMediaIcon href={hrefRedirect} imageSrc={InstagramIcon} />);
  });

  it("icon component should exist", () => {
    cy.get('[data-testid="social-media-icon-container"]').should("exist");
  });

  it("component should have the correct href", () => {
    cy.get('[data-testid="social-media-icon-container"]').should(
      "have.attr",
      "href",
      hrefRedirect
    );
  });
  it("component should have the correct target once clicked", () => {
    cy.get('[data-testid="social-media-icon-container"]').should(
      "have.attr",
      "target",
      "_blank"
    );
  });
  it("icon should have 32x32 size", () => {
    cy.get('[data-testid="social-media-icon"]')
      .should("be.visible")
      .then(($footer) => {
        const style = getComputedStyle($footer[0]);
        expect(style.width).to.equal("28px");
        expect(style.height).to.equal("28px");
      });
  });
  it("should scale up when hovered", () => {
    cy.get('[data-testid="social-media-icon-container"]')
      .should("have.class", "hover:scale-150")
      .should("have.class", "transition-transform")
      .should("have.class", "duration-300");
      
  });
});
