/// <reference types="Cypress" /> 


describe('', () => {
    beforeEach("Adjust screen", () => {
        cy.viewport(1024, 768)
        cy.visit("https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html");
    })
    
    it("Links tests ", () => {
        cy.get("h1").should('contain.text', 'Links');
        cy.get('p a[href*="https://developer.mozilla.org"]').invoke('val', 'href').click().origin('https://developer.mozilla.org', () => {
            cy.url({timeout: 10000}).should('include', 'https://developer.mozilla.org/en-US/')
        });

        // cy.on('window:before:unload', (e) => {
        //     cy.get('p a[href*="https://developer.mozilla.org"]').invoke('val', 'href').click();

        //     cy.url({timeout: 10000}).should('include', 'https://developer.mozilla.org/en-US/')
        //  });
        
    })

    it("Button tests", () => {
    cy.get('p a')
      .eq(0)
      .invoke('attr', 'href')
      .should('include', '')

      cy.on('window:alert', (text) => {
        expect(text).to.contains('This is from the first button');
      })

      cy.xpath("//button[contains(text(),'Click me!')]").click();
    })

    it("Form tests  ", () => {
        cy.fixture('formData.json').then(function(people) {
            people.forEach((person) => {
                cy.get('input#name').clear().type(person.name);
                cy.get('input#age').clear().type(person.age);
                cy.get('select#mood').select(person.mood);
            });
        })
    })
})