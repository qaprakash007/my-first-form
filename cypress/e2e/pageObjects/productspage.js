export class ProductsPage
{

    checkoutButton()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .new-link').click()
    }

}
//export default ProductsPage;