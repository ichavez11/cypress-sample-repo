export class ThanksTestPage
{
    thanksTestPage_message = '.alert'
    thanksTestPage_back = '.back'

     validateSuccessfulSubmissionMessage()
     {
        cy.get(this.thanksTestPage_message).should('')
     }

     clickBack()
     {
        cy.get(this.contactPage_email).click()
     }
}