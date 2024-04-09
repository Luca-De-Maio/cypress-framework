class CheckoutPage {
    validateTotalValue() {
        //extra validation final value for total value
        cy.get('#product-30').as('product');

        cy.get('@product').within(($product) => {
            const price = parseFloat($product.find('.cart_price p').text().replace('Rs. ', ''));
            const quantity = parseInt($product.find('.cart_quantity button').text());
            const totalValue = price * quantity;

            cy.get('@product').find('.cart_total_price').should('have.text', 'Rs. ' + totalValue);
        });
    }

    continueToRegisterOrLogin() {
        cy.contains('a', 'Proceed To Checkout').click();
        cy.contains('u', 'Register / Login').click();
    }

    fillUserInfo() {
        // Add logic to fill user information
    }

    continueAfterAccountCreation() {
        // Add logic to continue after account creation
    }

    proceedToCheckout() {
        cy.contains('a', 'Proceed To Checkout').click();
    }

    addCommentAndPlaceOrder() {
        cy.get('textarea.form-control').type('comment')
        cy.contains('a','Place Order').click()
    }

    fillPaymentDetails() {
        // Add logic to fill payment details
    }

    confirmOrder() {
        // Add logic to confirm order
    }
}

export const onCheckoutPage = new CheckoutPage();
