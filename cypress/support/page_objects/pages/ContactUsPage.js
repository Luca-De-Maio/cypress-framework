class ContactUsPage {
    fillFormAndSubmit() {
        cy.get('#contact-us-form').within(() => {
            cy.getByDataQA('email').type(Cypress.env('email'));
            cy.getByDataQA('submit-button').click();
        })
    }

    verifySubmissionSuccess() {
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Press OK to proceed!')
        })
        cy.get('.alert-success').should('contain.text', 'submitted successfully.')
    }
}

export const onContactUsPage = new ContactUsPage();
