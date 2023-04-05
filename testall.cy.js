/// <reference types="Cypress" />
describe('my first test',function()
{
    it('my test cases',function(){




cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product').should('have.length',5)

//parent child chaining

cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click() 
    
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

    })

})