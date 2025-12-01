import { mountWithIntl } from "../../../../../../../cypress/support/nextIntl";
import {
  computeBallPosition,
  getNextLocale,
  getPathWithoutLocale,
} from "./switcherLogic";
import Switcher from ".";

describe("Switcher component", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      cy.stub(win.console, "log").as("consoleLog");
    });
    cy.mount(mountWithIntl(<Switcher />));
  });

  it("switcher component should exist", () => {
    cy.get('[data-testid="switcher-container"]').should("exist");
  });

  it("should change locale", () => {
    expect(getNextLocale("pt")).to.equal("en");
    expect(getNextLocale("en")).to.equal("pt");
  });

  it("should remove locale from pathname", () => {
    expect(getPathWithoutLocale("/pt/home")).to.equal("home");
    expect(getPathWithoutLocale("/en/about/me")).to.equal("about/me");
  });

  it("should compute ball position", () => {
    expect(computeBallPosition("pt")).to.equal("translate-x-5");
    expect(computeBallPosition("en")).to.equal("translate-x-0");
  });
});
