import {HomePage} from "../pages/home_page"
import {ContactPage} from "../pages/contact_page"
import {NavigationPage} from "../pages/navigation_page"
import {ThanksTestPage} from "../pages/thanks_test_page"

const homePage = new HomePage()
const contactPage = new ContactPage()
const navigationPage = new NavigationPage()
const thanksTestPage = new ThanksTestPage()

const forename = "Test Name"
const email = "test@email.com"
const message = "This is a sample message"

Cypress._.times(5, () => 
{
    it('Test Case 2', function()
    {
        homePage.visitHome()
        navigationPage.clickContactTab()

        contactPage.populateMandatoryFields(forename, email, message)
        contactPage.clickSubmit()

        cy.get(thanksTestPage.thanksTestPage_message).should('be.visible')
        cy.get(thanksTestPage.thanksTestPage_message).should('contain.text', "we appreciate your feedback.")
    })
})