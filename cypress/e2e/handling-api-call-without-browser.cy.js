/// <reference types="cypress" />
describe('handling api call without depending apon browser',function()
{
it('API call without depends on broswer', function(){
    //video 83
    //https://docs.cypress.io/api/commands/request.html#Syntax
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',
    {
        "name":"Learn Appium Automation with Java",
        "isbn":"bcdsss",
        "author":"John foe"
    })
.then(function(response)
{
    //expect(response.body).to.have.property("Msg","successfully added")
    cy.log(response.body, args...)
    expect(response.status).to.eq(200)
})

})
})