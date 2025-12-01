import TextArea from ".";

describe("Text Area component", () => {
  beforeEach(() => {
    cy.mount(<TextArea onChange={() => {}} value="" name="testing" />);
  });

  it("Text input component should exist", () => {
    cy.get('[data-testid="text-area-main-container"]').should("exist");
  });

  it("input component should exist inside main component", () => {
    cy.get('[data-testid="text-area-component"]').should("exist");
  });

  it("input component should not have any outline when focus and transparent background", () => {
    cy.get('[data-testid="text-area-component"]')
      .should("have.class", "outline-none")
      .should("have.class", "bg-transparent");
  });

  it("input component should not have any outline when focus and transparent background", () => {
    const inputVal = "Initial text";
    const placeholder = "Type something for initial value";
    cy.mount(
      <TextArea
        onChange={() => {}}
        value={inputVal}
        placeholder={placeholder}
        name="testing input outline"
      />
    );
    cy.get('[data-testid="text-area-component"]')
      .should("have.value", inputVal)
      .and("have.attr", "placeholder", placeholder);
  });

  it("should call onchange when type in input element ", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");

    cy.mount(
      <TextArea
        value=""
        onChange={onChangeSpy}
        placeholder="Change spy testing"
        name="testing input's onChange param"
      />
    );

    cy.get('[data-testid="text-area-component"]').type("Testing onChange");

    cy.get("@onChangeSpy").should("have.been.called");
  });

  it("should render correct error message if error prop exist", () => {
    const errorMessage = "This is an error message";
    cy.mount(
      <TextArea
        value=""
        onChange={() => {}}
        placeholder="error message testing"
        name="testing error message"
        errorMessage={errorMessage}
      />
    );

    cy.get('[data-testid="text-area-error-element"]')
      .should("be.visible")
      .should("have.text", errorMessage);
  });
});
