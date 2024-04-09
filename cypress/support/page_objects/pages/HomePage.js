class HomePage {
    visit() {
        cy.visit('/');
    }

    selectViewProduct(productName) {
        cy.contains('div', productName).parent().siblings('div').click();
    }

}

export const onHomePage = new HomePage();
