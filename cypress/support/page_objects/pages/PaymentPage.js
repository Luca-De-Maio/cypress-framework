// PaymentPage.js
class PaymentPage {
    fillCreditCardInfo(cardInfo) {
        cy.getByDataQA('name-on-card').type(cardInfo.nameOnCard)
        cy.getByDataQA('card-number').type(cardInfo.cardNumber);
        cy.getByDataQA('cvc').type(cardInfo.cvc);
        cy.getByDataQA('expiry-month').type(cardInfo.expiryMonth);
        cy.getByDataQA('expiry-year').type(cardInfo.expiryYear);
    }

    clickContinueButton() {
        cy.getByDataQA('pay-button').click();
        cy.getByDataQA('order-placed').find('b').should('have.text','Order Placed!');
    }
}

export const onPaymentPage = new PaymentPage();
