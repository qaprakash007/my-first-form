/// <reference types="Cypress" />

describe('form', function(){
    it('This all are my practice cases', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //switch to different window/page(Child Tab) target=_blank (Open in new tab)
    cy.get('#opentab').invoke('removeAttr','target')// .removeattir attribute using Jquery 
        //Navigating browser  controls(Forword / backword)
    cy.url().should('include','/AutomationPractice')
    //will go to previous page
    cy.go('back')
    cy.go('forward')
    
    })
})