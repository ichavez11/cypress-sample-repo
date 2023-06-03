import {HomePage} from "../pages/home_page"
import {ContactPage} from "../pages/contact_page"
import {NavigationPage} from "../pages/navigation_page"

const homePage = new HomePage()
const contactPage = new ContactPage()
const navigationPage = new NavigationPage()

const forename = "Test Name"
const email = "test@email.com"
const message = "This is a sample message"

it('Test Case 1', function()
{
    homePage.visitHome()
    navigationPage.clickContactTab()
    contactPage.clickSubmit()

    cy.get(contactPage.contactPage_foreName_errorMessage).should('be.visible')
    cy.get(contactPage.contactPage_email_errorMessage).should('be.visible')
    cy.get(contactPage.contactPage_message_errorMessage).should('be.visible')
    cy.get(contactPage.contactPage_headerMessage).should('contain.text', "but we won't get it unless you complete the form correctly")

    contactPage.populateMandatoryFields(forename, email, message)

    cy.get(contactPage.contactPage_foreName_errorMessage).should('not.exist')
    cy.get(contactPage.contactPage_email_errorMessage).should('not.exist')
    cy.get(contactPage.contactPage_message_errorMessage).should('not.exist')
    cy.get(contactPage.contactPage_headerMessage).should('not.contain.text', "but we won't get it unless you complete the form correctly")
    cy.get(contactPage.contactPage_headerMessage).should('contain.text', "tell it how it is.")
})