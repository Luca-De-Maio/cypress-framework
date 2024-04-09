class AccountCreated {
    clickOnContinueToCart() {
        cy.getByDataQA('account-created').find('b').should('contain', 'Account Created!')
        cy.getByDataQA('continue-button').click()
    }
}

export const onAccountCreated = new AccountCreated();
