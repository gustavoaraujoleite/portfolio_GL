describe("Pagination component", () => {
  function Badge() {
    return <div data-testid="badge">teste</div>;
  }

  it("should go to next page", () => {
    cy.mount(<Badge />);
    cy.get('[data-testid="badge"]').should("exist");
  });
});
