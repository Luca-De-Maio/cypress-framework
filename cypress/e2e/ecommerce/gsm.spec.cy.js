/// <reference types="Cypress" /> 

describe('E-commerce Website E2E Tests', () => {
    it('should complete the entire shopping flow', () => {
      // Visit the website's homepage
      cy.visit('https://www.gsmarena.com/'); 
  
      // Search for a product
      cy.get('#topsearch-text').type('iphone 15');
 
      cy.get('.phone-results ul li')
      .filter((index, element) => {
        return Cypress.$(element).find('span').text().includes('Apple iPhone 15 Pro Max')
      }).click(); 
  
      // Select a product from search results
      //cy.get('.product-card').first().click(); // Replace with your product card selector
  
      // Add the product to the cart
      //cy.get('#add-to-cart-button').click(); // Replace with your "Add to Cart" button selector
      //cy.get('.notification').should('contain', 'Product added to cart'); // Replace with your confirmation message selector
  
      // View the shopping cart
      //cy.get('#cart-icon').click(); // Replace with your cart icon selector
      //cy.get('.cart-product').should('have.length', 1); // Verify that there is one product in the cart
  
      // Proceed to checkout
      //cy.get('#checkout-button').click(); // Replace with your checkout button selector
  
      // Fill in shipping information
      //cy.get('#name-input').type('John Doe'); // Replace with your input selectors
      //cy.get('#address-input').type('123 Main St');
      //cy.get('#contact-input').type('john.doe@example.com');
      //cy.get('#shipping-continue-button').click(); // Replace with your "Continue" button selector
  
      // Select shipping method
      //cy.get('#standard-shipping').check(); // Replace with your shipping method selector
      //cy.get('#shipping-method-continue-button').click(); // Replace with your "Continue" button selector
  
      // Enter payment information
      //cy.get('#credit-card-number').type('1234567890123456'); // Replace with your payment input selectors
      //cy.get('#expiration-date').type('12/24');
      //cy.get('#cvv').type('123');
      //cy.get('#payment-button').click(); // Replace with your "Place Order" button selector
  
      // Order confirmation
      //cy.url().should('include', '/order-confirmation'); // Verify that you are on the confirmation page
      //cy.get('.order-summary').should('contain', 'Product Name'); // Verify product details
    });
  });
  