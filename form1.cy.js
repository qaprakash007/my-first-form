/// <reference types="Cypress" />

describe('form',function(){
    it('this is my tests cases',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //selecting single checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //uncheck single checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //selecting multiple checkbox
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //Static Dropdown
       // cy.get('select').select('option2').should('have.value','option2')

        //dynamic Dropdowm
        // cy.get('#autocomplete').type('ind')

        // cy.get('.ui-menu-item div').each(($el, index, $list) => {

      
        //     if($e1.text()==="India")
        //     {
        //         $e1.click()
        //     }

        // })

        //autocomplete
        // cy.get('#autocomplete').should('have.value','India')
        

        //Handling visible and invisible elements using assertions
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //RadioButtons
        cy.get('[value="radio2"]').check().should('be.checked')
        
        
        
        //Windows alert- Manually trigger alert(32 not working)
        cy.on('windows.alert',(str)=>
        {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //alert button
        cy.get('[value="Confirm"]').click()
        
    })
})