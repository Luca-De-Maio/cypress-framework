describe('testing ', () => {

    beforeEach( () => {
        cy.visit('https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');
    })
    it('Demonstrate the use of hover or other relevant methods to simulate user interactions.', () => {
        
        cy.get('h1').should('contain.text', 'Links')
        cy.get('body p').find('a').then((element) =>{
            console.log((element).text())
        })

        cy.get('p:not(:has(button))').then( (element)=> {
            console.log((element).text())
        })
        
        cy.waitUntilElementVisible('p a').eq(0).focus().should('have.css', 'font-weight', '700');
        cy.get('p a').eq(0).focus().should('have.css', 'font-weight', '700').blur();
        
        cy.get('#mood').select('Sad');

    })
})