import ContactContent from ".";

describe("ContactContent component", () => {
  beforeEach(() => {
    cy.mount(<ContactContent />);
  });

  it("should render all fields and submit button", () => {
    cy.get('[data-testid="contact-form-main-container"]').should("be.visible");
    cy.get('[data-testid="contact-fullname-controller"]').should("be.visible");
    cy.get('[data-testid="contact-email-controller"]').should("be.visible");
    cy.get('[data-testid="contact-message-controller"]').should("be.visible");
    cy.get('[data-testid="contact-submit-button"]').should("be.visible");
  });

  it("should start with submit button disabled", () => {
    cy.get('[data-testid="contact-submit-button"]').should("be.disabled");
  });

  it("should show validation errors when submitting empty form", () => {
    cy.get('[data-testid="contact-submit-button"]').invoke(
      "prop",
      "disabled",
      false
    );

    cy.get('[data-testid="contact-submit-button"]').click();
    cy.contains("Por favor, informe o nome completo.").should("be.visible");
    cy.contains("A mensagem não pode estar vazia.").should("be.visible");
  });

  it("should show specific fullname and email validation messages", () => {
    cy.get('[data-testid="contact-fullname-controller"] input').type("Gustav");
    cy.get('[data-testid="contact-email-controller"] input').type("gustav@");
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Testing"
    );

    cy.get('[data-testid="contact-submit-button"]').invoke(
      "prop",
      "disabled",
      false
    );

    cy.get('[data-testid="contact-submit-button"]').click();

    cy.contains("Por favor, informe o nome e sobrenome.").should("be.visible");
    cy.contains("Formato de e-mail inválido.").should("be.visible");
  });

  it("should update message counter when typing", () => {
    cy.get('[data-testid="contact-message-controller"] textarea')
      .type("Testing counter")
      .then(() => {
        cy.get('[data-testid="contact-message-counter"]').should(
          "contain.text",
          "15/800"
        );
      });
  });

  it("should turn counter red when limit exceeds 800 characters", () => {
    const longMessage = "a".repeat(801);

    cy.get('[data-testid="contact-message-controller"] textarea').type(
      longMessage,
      { delay: 0 }
    );

    cy.get('[data-testid="contact-message-counter"]')
      .should("have.class", "text-red-500")
      .and("contain.text", "800/800 caracteres");
  });

  it("should enable submit button only when form is valid", () => {
    cy.get('[data-testid="contact-fullname-controller"] input').type(
      "Valid Name"
    );

    cy.get('[data-testid="contact-email-controller"] input').type(
      "valid@example.com"
    );

    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Some valid message"
    );

    cy.get('[data-testid="contact-submit-button"]').should("not.be.disabled");
  });

  it("should show spinner after submitting and then reset fields", () => {
    cy.intercept("POST", "/api", (req) => {
      req.on("response", (res) => {
        res.setDelay(5000);
      });
    }).as("postMessage");

    cy.get('[data-testid="contact-fullname-controller"] input').type(
      "Imaginary Name"
    );
    cy.get('[data-testid="contact-email-controller"] input').type(
      "imaginary@example.com"
    );
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Testing message"
    );
    cy.get('[data-testid="contact-submit-button"]').invoke(
      "prop",
      "disabled",
      false
    );
    cy.get('[data-testid="contact-submit-button"]').click();

    cy.get('[data-testid="spinner-container"]').should("be.visible");
  });

  it("should show error toast on failed submission", () => {
    cy.intercept("POST", "/api", {
      statusCode: 500,
    }).as("postError");

    cy.get('[data-testid="contact-fullname-controller"] input').type(
      "Imaginary Name"
    );
    cy.get('[data-testid="contact-email-controller"] input').type(
      "imaginary@example.com"
    );
    cy.get('[data-testid="contact-message-controller"] textarea').type(
      "Testing message"
    );

    cy.get('[data-testid="contact-submit-button"]').click();

    cy.wait("@postError");

    cy.contains(
      "Erro ao enviar a mensagem, por favor tente de novo mais tarde!"
    ).should("be.visible");
  });
});
