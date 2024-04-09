// navigation/Navigation.js
class Navigation {
    scrollToCenter() {
        cy.scrollTo('center');
    }

    goToCartPage() {
        cy.contains('Cart').click()
    }

    goToLogout() {
        cy.contains('Logout').click();
        cy.get('.login-form').find('h2').should('have.text', 'Login to your account')
    }

    goToContactUs() {
        cy.contains('Contact us').click();
    }

    goToLogin() {
        cy.contains('Signup').click();
    }
}

export const onNavigationPage = new Navigation();
