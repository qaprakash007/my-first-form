/// <reference types="Cypress" />
//48 videos
describe('form', function(){
    it('This all are my practice cases', function()
    {
cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
//Custome Commands --> we should create our custom commands in Support folder commands.js file
//Cypress.Commands.add('selectProduct')

this.data.productName.forEach(function(element) {
    cy.selectProduct(element)

});

//cy.selectProduct('Blackberry')
//cy.selectProduct('Nokia Edge')

//cy.pauese()  --> pause the code where we posted
// or .debug() 
})
})
