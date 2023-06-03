export class ContactPage
{
    contactPage_foreName = '#forename'
    contactPage_email = '#email'
    contactPage_message = '#message'
    contactPage_headerMessage = '.alert'
    contactPage_submit = '.btn-contact'
    contactPage_foreName_errorMessage = '#forename-err'
    contactPage_email_errorMessage = '#email-err'
    contactPage_message_errorMessage = '#message-err'
    
     setForename(forename)
     {
        cy.get(this.contactPage_foreName).type(forename)
     }

     setEmail(email)
     {
        cy.get(this.contactPage_email).type(email)
     }

     setMessage(message)
     {
        cy.get(this.contactPage_message).type(message)
     }

     clickSubmit()
     {
        cy.get(this.contactPage_submit).click()
     }   

     populateMandatoryFields(forename, email, message)
     {
         this.setForename(forename)
         this.setEmail(email)
         this.setMessage(message)
     }

}