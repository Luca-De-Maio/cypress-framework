class ProductPage {
    addToCart(quantity) {
        cy.get('input#quantity').type(quantity);
        cy.contains('button', 'Add to cart').click();
        cy.get('.modal-content').find('.modal-title').should('contain.text', 'Added!');
    }

    proceedToCheckout() {
        cy.contains('View Cart').click();
    }

}

export const onProductPage = new ProductPage();
