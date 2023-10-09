
describe("Welcome to my cypress exercise : Section 1 ", () => {
    
    it("First test on Cypress", () => {
        cy.log("hello world")
        cy.wait(1500)
    })

    it("Second test -> field name", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Luca")
    })
})