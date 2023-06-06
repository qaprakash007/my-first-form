
import {HomePage} from "../e2e/pageObjects/HomePage"
import {ProductsPage} from "../e2e/pageObjects/ProductsPage"

describe('form',function(){
    
before (function(){
    //Runs once before all tests in the block
    
    //cy will go to fixture folder then call the example file
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})
    it('drive it from external files',function(){
        const homepage = new HomePage();

        //one task validating attribute properties & thier behaviour video 47
        //one task and thier code of fixture 
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //cy.get(':nth-child(1) > .form-control').type(this.data.name)
        homepage.getEditbox().type(this.data.name)
        //cy.get('select').select(this.data.gender)
        homepage.getGender().select(this.data.gender)
        
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        homepage.getEditbox().should('have.attr','minlength','2')
        //cy.get('#inlineRadio3').should('be.disabled')
        homepage.getEnterpreneaur().should('be.disabled')
        //still here

        //cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        homepage.getTwoWayDataBinding().type(this.data.name)

        homepage.getShopTab().click()


        //this.data.productName.forEach(function(element)) {
        //cy.selectProduct(element)
        //}
    });
  //  productspage.checkoutButton().click()



    })











