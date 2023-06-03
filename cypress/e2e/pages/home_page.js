export class HomePage {

   homePage_startShopping = '.btn.btn-success.btn-large'

   visitHome() 
   {
      cy.visit('/')
   }

   clickStartShopping() 
   {
      cy.get(this.homePage_startShopping).click()
   }

}