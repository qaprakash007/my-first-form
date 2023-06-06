/// <reference types="Cypress" />
//A tagname called frame/iframe is used to represent frames in the html code. we have to import i frame
import 'cypress-iframe'

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
    // iframe
    //cy.frameloaded - it will enable to load a iframe
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship]").eq(0).click()
    cy.iframe().find("h1[class*='practice-title']").should('have.length',2)
    })
})





