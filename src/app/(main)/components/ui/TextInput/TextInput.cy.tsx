import TextInput from ".";

describe("Text Input component", () => {
  beforeEach(() => {
    cy.mount(<TextInput onChange={() => {}} value="" type="text" name="testing"/>);
  });

  it("Text input component should exist", () => {
    cy.get('[data-testid="text-input-main-container"]').should("exist");
  });

  it("input component should exist inside main component", () => {
    cy.get('[data-testid="text-input-component"]').should("exist");
  });

  it("input component should not have any outline when focus and transparent background", () => {
    cy.get('[data-testid="text-input-component"]')
      .should("have.class", "outline-none")
      .should("have.class", "bg-transparent");
  });

  it("input component should not have any outline when focus and transparent background", () => {
    const inputVal = "Initial text";
    const placeholder = "Type something for initial value";
    cy.mount(
      <TextInput
        onChange={() => {}}
        value={inputVal}
        type="text"
        placeholder={placeholder}
        name="testing input outline"
      />
    );
    cy.get('[data-testid="text-input-component"]')
      .should("have.value", inputVal)
      .and("have.attr", "placeholder", placeholder);
  });

  it("should call onchange when type in input element ", () => {
     const onChangeSpy = cy.spy().as("onChangeSpy");

     cy.mount(
       <TextInput
         value=""
         onChange={onChangeSpy}
         placeholder="Change spy testing"
         type="text"
         name="testing input's onChange param"
       />
     );

     cy.get('[data-testid="text-input-component"]').type("Testing onChange");

     cy.get("@onChangeSpy").should("have.been.called");
  });
});
