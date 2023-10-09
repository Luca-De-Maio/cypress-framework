// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add('waitUntilElementVisible', (element) => {
    cy.waitUntil(() =>
        cy.isElementVisible(element) ? cy.get(element) : false, 
        {
            timeout: 30000,
            interval: 1000,
            errorMsg: `Expected element ${element} to BE visible but NOT visible.`
        }
    );
});

Cypress.Commands.add('isElementVisible', (element) => {
    return cy.isElementExist(element).then((exist) => {
        if (exist) {
            return cy.get(element).should('be.visible').then(() => true);
        } else {
            cy.log(`${element} - Element does not exist`);
            return cy.wrap(false);
        }
    });
});

Cypress.Commands.add('isElementExist', (elmt) => {
    if (!elmt || elmt === '') {
        cy.log('Element selector is empty or not provided.');
        return cy.wrap(false);
    }

    return cy.get('body').then(($el) => {
        if ($el.find(elmt).length > 0) {
            return cy.wrap(true);
        } else {
            cy.log(`Element ${elmt} does not exist`);
            return cy.wrap(false);
        }
    });
});

