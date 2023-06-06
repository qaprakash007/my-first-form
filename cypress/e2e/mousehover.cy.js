/// <reference types="Cypress" />


describe('Mouse hover feature', ()=>{
    it('click on sign up test', ()=>{



        // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // cy.get('.search-keyword').type('ca')
        // cy.wait(2000)
        // cy.get('.product:visible').should('have.length',4)
        // cy.get('.products').find('.product').should('have.length',4)

        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // cy.wrap($el).find('button')
   

        //mousehover popups
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')    //show() from Jquery
        
        cy.contains('Top').click()
        cy.url().should('include','#top')   
        
        




    })
})




