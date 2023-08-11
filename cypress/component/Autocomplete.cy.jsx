import Autocomplete from "../../src/components/Autocomplete"
import countries from "../../src/data/country"
describe('autocomplete.cy.jsx', () => {
  beforeEach(()=>{
    cy.mount(<Autocomplete countries={countries} />)
  })

  it('should check, is everything ok', () => {
   
    // cy.get('[data-cy="input"]').type("US")
    cy.get(".heading").should("have.text","Search your country:")
    cy.get("[data-cy='input']").should("have.value","")
    cy.get("[data-cy='suggestion-list']").should("not.exist")

  })

  it("should check filter working",()=>{
    cy.get("[data-cy='input']").type("no")
    cy.get("[data-cy='suggestion-list']").should("be.visible").as("suggestionList")
    cy.get("@suggestionList").should("have.length", 1)
    cy.get("@suggestionList").children().should("have.not.length",0)
      cy.get("@suggestionList").children().should("have.length.greaterThan",0)

  })


  it("should check if the selection are working",()=>{
    cy.get("[data-cy='input']").as("inputText")
    cy.get("@inputText").type("no").type(Cypress._.repeat("{downArrow}{downArrow}",1))
  })
})