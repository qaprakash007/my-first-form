//this pageObject folder created by me only
//declaring class in js
export class HomePage
{
getEditbox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}
getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender()
{
    return cy.get('select')
}
getEnterpreneaur()
{
    return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get(':nth-child(2) > .navlink')
}
}
//export default HomePage;



