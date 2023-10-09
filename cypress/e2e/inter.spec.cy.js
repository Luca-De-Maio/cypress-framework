/// <reference types="Cypress" /> 
/// <reference types="cypress-xpath" />



describe('E-commerce Website E2E Tests', () => {
    it('should complete the entire shopping flow', () => {
      // Visit the website's homepage
      cy.visit('https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');
      
      // select the title and assert 
      cy.get('h1').should('contain.text', 'Links');
      cy.get('h1').then((element) => {
        expect(element).to.have.text("Links") 
      })

      //   cy.get('p a').contains('Mozilla').invoke('attr', 'href').then((href) => {
      //      cy.visit(href)
      //   })

      //LINKS 
      cy.get('p a')
      .filter((index, el) => {
        return Cypress.$(el).text().trim() === 'Mozilla Developer Network';  // Filtering by exact text
      })
      .invoke('attr', 'href')
      .then((href) => {
      //cy.visit(href);
      });
        
      // Links different content 
      cy.get('p a').eq(0).invoke('attr', 'href').then( (href) => {
        cy.get('p a').eq(1).invoke('attr', 'href').should('not.deep.equal', href);
      })
      
      //BUTTONS 
      cy.get('p button[data-message="This is from the first button"]').click();

      cy.on('window:alert', (text) => {
          expect(text).to.contains('This is from the first button');
      })

      //FORM 
      cy.get('#name').type('Luca');
      cy.get('#age').type('28')
      cy.get('#mood').select("Sad");

      cy.get('select#mood option') // Select all <option> elements within the specific <select> element with id "mood"
      .filter((element) => {
        return Cypress.$(element).text().trim() === "Angry";
      })
      .first() // Use .first() to get the first matching option
      .invoke('val') // Get the value attribute of the selected option
      .then((value) => {
        cy.get('select#mood').select(value); // Use .select() to select the option by its value
      });

    });
  });
  
    