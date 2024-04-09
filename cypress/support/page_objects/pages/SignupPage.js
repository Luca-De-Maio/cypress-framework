class SignUp {
    registerUser(addressData, password) {
        cy.get('div.login-form').within(() => {
            const { firstName, lastName, addressLine1, addressLine2, city, state, postalCode, country, day, month, year, phone } = addressData;

            cy.getByDataQA('title').find('#id_gender1').check();
            Cypress.env('password', password);
            cy.getByDataQA('password').type(Cypress.env('password'));
            cy.getByDataQA('days').select(day);
            cy.getByDataQA('months').select(month);
            cy.getByDataQA('years').select(year);
            
            cy.getByDataQA('first_name').type(firstName);
            cy.getByDataQA('last_name').type(lastName);
            cy.getByDataQA('address').type(addressLine1);
            cy.getByDataQA('country').select(country);
            cy.getByDataQA('state').type(state);
            cy.getByDataQA('city').type(city);
            cy.getByDataQA('zipcode').type(postalCode);
            cy.getByDataQA('mobile_number').type(phone);
    
            cy.getByDataQA('create-account').click();
        });
    }
}

export const onSignUpPage = new SignUp();
