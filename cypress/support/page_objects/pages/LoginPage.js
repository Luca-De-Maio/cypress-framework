// LoginPage.js
class LoginPage {
    login(email, password) {
        cy.getByDataQA('login-email').type(email);
        cy.getByDataQA('login-password').type(password);
        cy.getByDataQA('login-button').click();
    }

    registerUser(fullname, email) {
        // Fill in registration form fields
        cy.getByDataQA('signup-name').type(fullname);

        Cypress.env('email', email);
        cy.getByDataQA('signup-email').type(Cypress.env('email'));

        cy.getByDataQA('signup-button').click();
    }
}

export const onLoginPage = new LoginPage();
