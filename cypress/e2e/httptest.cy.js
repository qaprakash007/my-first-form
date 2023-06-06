/// <reference types="Cypress" />

describe('my first test suit of http req', function()
{
    it ('my first case', function(){


        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        }, 
        //first para is request para

        
        {
           statusCode : 200,
           body : [
            {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }
              
            //second para is response para
           ]

        })
        .as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').should(({request,response})=>{
           cy.get('tr').should('have.length',response.body.lenght)
            

        })
        cy.get('p').should('have.text','sorry we have only one book available')
        //video 77

        //Video 78 below validation
        //length of the response array = rows of the table
            




    })
})