import ContactContent from ".";

describe("Contact content component", () => {
  beforeEach(() => {
    cy.mount(<ContactContent />);
  });

  it("should render all fields and submit button", () => {
    cy.get('[data-testid="contact-content-main-container"]').should(
      "be.visible"
    );
    cy.get('[data-testid="contact-form-main-container"]').should("be.visible");
    cy.get('[data-testid="contact-fullname-controller"]').should("be.visible");
    cy.get('[data-testid="contact-email-controller"]').should("be.visible");
    cy.get('[data-testid="contact-message-controller"]').should("be.visible");
    cy.get('[data-testid="contact-submit-button"]').should("be.visible");
  });

  it("should submit error messages when sending empty form", () => {
    cy.get('[data-testid="contact-submit-button"]').click();

    cy.contains("Por favor, informe o nome completo.").should("be.visible");
    cy.contains("Formato de e-mail inválido.").should("be.visible");
    cy.contains("A mensagem não pode estar vazia.").should("be.visible");
  });

  it("should update counter when typing a message", () => {
    cy.get('[data-testid="contact-message-controller"] textarea')
      .type("Testando contador")
      .then(() => {
        cy.get('[data-testid="contact-message-counter"]').should(
          "contain.text",
          "17/800"
        );
      });
  });

  it("should change color to red when reach 800 characters limit", () => {
    const longMessage = "a".repeat(801);
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      longMessage,
      { delay: 0 }
    );

    cy.get('[data-testid="contact-message-counter"]')
      .should("have.class", "text-red-500")
      .and("contain.text", "800/800 caracteres");
  });

  it("should render especific error messages for name and email fields", () => {
    cy.get('[data-testid="contact-fullname-controller"] input').type("Gustav");
    cy.get('[data-testid="contact-email-controller"] input').type("gustav@");
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Testing"
    );

    cy.get('[data-testid="contact-submit-button"]').click();

    cy.contains("Por favor, informe o nome e sobrenome.").should("be.visible");
    cy.contains("Formato de e-mail inválido.").should("be.visible");
  });

  it("should send valid data and clear fields (reset)", () => {
    cy.get('[data-testid="contact-fullname-controller"] input').type(
      "Imaginary name"
    );
    cy.get('[data-testid="contact-email-controller"] input').type(
      "imaginary@example.com"
    );
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Testing message"
    );

    cy.get('[data-testid="contact-submit-button"]').click();

    cy.get('[data-testid="contact-fullname-controller"] input').should(
      "have.value",
      ""
    );
    cy.get('[data-testid="contact-email-controller"] input').should(
      "have.value",
      ""
    );
    cy.get('[data-testid="contact-message-controller"] textarea').should(
      "have.value",
      ""
    );
  });
});
