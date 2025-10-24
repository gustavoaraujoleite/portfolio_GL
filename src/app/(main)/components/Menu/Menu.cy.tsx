import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Header from ".";

function Menu() {
    return <div data-testid="menu-main-container"></div>;
}
describe("Menu component", () => {
  beforeEach(() => {
    cy.mount(<Menu />);
  });
  it("menu component should exist", () => {
    cy.get('[data-testid="menu-main-container"]').should("exist");
  });
});
