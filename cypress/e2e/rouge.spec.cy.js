/// <reference types="Cypress" /> 

describe('E-commerce Website E2E Tests', () => {
  it('should complete the entire shopping flow', () => {
    // Visit the website's homepage
    cy.visit('https://opencart.abstracta.us/'); // Replace with your website URL

    // Search for a product
    cy.get('#search').type('Iphone'); // Replace with your search input selector
    cy.get('span.input-group-btn').click(); // Replace with your search button selector

    // Select a product from search results
    cy.get('div.product-layout div.product-thumb').first().click(); // Replace with your product card selector

    // Add the product to the cart
    cy.get('button[onclick="cart.add(\'40\', \'1\');"]').click(); // Replace with your "Add to Cart" button selector
    cy.get('div.alert.alert-success.alert-dismissible').should('be.visible'); // Replace with your confirmation message selector
    cy.get('#cart-total').click(); // Replace with your cart icon selector

    // View the shopping cart
    let arr;
    //comparing the amount of products from the text in the cart with the one on the cart 
    cy.get('button span#cart-total').invoke('text').then((text) => {
      arr = text.split(' ');
      console.log(text)
      
      let amount = arr[0];
      cy.get('tr > :nth-child(3)').should('have.length', amount); // Verify that there is one product in the cart

    })
    
    // Proceed to checkout
    cy.get("strong:contains('Checkout')").click(); // Replace with your checkout button selector

    // Fill in checkout options
    cy.get('#checkout-checkout').should('be.visible')
    cy.get('input[type="radio"][name="account"][value="guest"]').check();
    cy.get('input#input-email').click().type('demaio.martin@gmail.com'); // Replace with your input selectors
    cy.get('#input-password').type('testing');
    cy.get('#button-login').click();

    // Fill Billing details
    cy.get('input[value="new"]').check();
    cy.get('#input-payment-firstname').type('Luca');  
    cy.get('#input-payment-lastname').type('De Maio');
    cy.get('#input-payment-address-1').type('Buenos Aires St');
    cy.get('#input-payment-city').type('Ciudad de Buenos Aires');
    cy.get('#input-payment-postcode').type('1426');
    cy.get('#input-payment-country').select('Argentina');
    cy.get('#input-payment-zone').select('Buenos Aires');
    cy.get('#button-payment-address').click();

    // Fill Delivery Details
    cy.get('input[value="existing"]').check();
    cy.get('#button-shipping-address').click();
    //cy.get('#standard-shipping').check(); // Replace with your shipping method selector
    //cy.get('#button-shipping-address').click(); // Replace with your "Continue" button selector

    // Fill Delivery Methods
    cy.get('#button-shipping-method').click();

    // Enter payment information without agreements 
    cy.get('#button-payment-method').click();

    // Assert 
    cy.get('.alert').should('contain.text', 'Warning: You must agree to the Terms & Conditions!');

    cy.get('#credit-card-number').type('1234567890123456'); // Replace with your payment input selectors
    cy.get('#expiration-date').type('12/24');
    cy.get('#cvv').type('123');
    cy.get('#payment-button').click(); // Replace with your "Place Order" button selector

    // Order confirmation
    cy.url().should('include', '/order-confirmation'); // Verify that you are on the confirmation page
    cy.get('.order-summary').should('contain', 'Product Name'); // Verify product details
  });
});

  