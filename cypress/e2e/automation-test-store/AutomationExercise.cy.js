/// <reference types="cypress" />

import {faker} from '@faker-js/faker'
import { onNavigationPage } from '../../support/page_objects/navigation/Navigation';
import { onHomePage } from '../../support/page_objects/pages/HomePage';
import { onProductPage } from '../../support/page_objects/pages/ProductPage';
import { onCheckoutPage } from '../../support/page_objects/pages/CheckoutPage';
import { onLoginPage } from '../../support/page_objects/pages/LoginPage';
import { onSignUpPage } from '../../support/page_objects/pages/SignupPage';
import { onAccountCreated } from '../../support/page_objects/pages/AccountCreatedPage';
import { onPaymentPage } from '../../support/page_objects/pages/PaymentPage';
import { onContactUsPage } from '../../support/page_objects/pages/ContactUsPage';

describe('Automation Store', () => {
    let addressData;

    before(() => {
        cy.fixture('address').then((data) => {
            addressData = data;
        });
    });

    beforeEach( () => {
        onHomePage.visit();
    })

    it('should allow a user to complete the checkout process', () => {
        // 1. Enter the website and scroll down about halfway down the page.
        onNavigationPage.scrollToCenter();        

        // 2. Chose a product and click on “View product” under the picture of the product.
        cy.log('Selecting view product');
        onHomePage.selectViewProduct('Premium Polo T-Shirts');

        // 3. In the Quantity box enter 30
        // 4. Click “Add to cart”
        cy.log('Adding items to the cart');
        onProductPage.addToCart(30);
        
        // 5. Click on “Proceed to Checkout”
        cy.log('Proceeding to checkout');
        onProductPage.proceedToCheckout();
    
        //validation for total value 
        onCheckoutPage.validateTotalValue();
    
        // 6. Fill in an email address and click on “Register / Login”
        onCheckoutPage.continueToRegisterOrLogin();
    
        // 7. Enter name and email under “New User Signup”
        cy.log('Registering a new user');
        onLoginPage.registerUser(faker.person.fullName(), faker.internet.email())
    
        // 8. Fill in all information and click on “Create Account”
        onSignUpPage.registerUser(addressData, faker.internet.password());
    
        // 9. Click on “Continue” under “ACCOUNT CREATED!” title
        onAccountCreated.clickOnContinueToCart();

        // 10. Click on the Cart in the header
        cy.log('Navigating to the cart page');
        onNavigationPage.goToCartPage();

        // 11. Click on “Proceed to checkout”
        onCheckoutPage.proceedToCheckout();

        // 12. Add a comment and click on “Place Order”
        cy.log('Adding a comment and placing the order');
        onCheckoutPage.addCommentAndPlaceOrder();

        // 13. Fill in fake Credit Card information and click on “Pay and Confirm Order”
        cy.log('Filling in credit card information');
        const currentYear = new Date().getFullYear();
        const year = Math.floor(Math.random() * 10) + currentYear + 1;

        const cardInfo = {
            nameOnCard: faker.person.fullName(),
            cardNumber: faker.finance.creditCardNumber(),
            cvc: faker.finance.creditCardCVV(),
            expiryMonth: Math.floor(Math.random() * 12) + 1,
            expiryYear: year
        };

        onPaymentPage.fillCreditCardInfo(cardInfo);
        
        // 14. Click on “Continue” button
        onPaymentPage.clickContinueButton();

        // 15. Click on “Logout” on top header
        cy.log('Logging out');
        onNavigationPage.goToLogout();
    })
    
    it('should allow a user to contact customer support', () => {
        onNavigationPage.goToLogin();

        // 16. On the “Login to your account” box and enter with previously created user
        onLoginPage.login(Cypress.env('email'), Cypress.env('password'));

        // 17. Click on “Contact us” on the header
        cy.log('Navigating to Contact Us');
        onNavigationPage.goToContactUs();

        // 18. Fill required data and Click on “Submit”
        cy.log('Fill and submit required data');
        onContactUsPage.fillFormAndSubmit();

        // 19. Press “OK” in the pop up
        onContactUsPage.verifySubmissionSuccess();

        // 20. Finally, click on the “Logout” button on the header.
        onNavigationPage.goToLogout();
    })
})