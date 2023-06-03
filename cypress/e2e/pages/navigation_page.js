export class NavigationPage {

   navigationPage_homeTab = '##nav-home'
   navigationPage_shopTab = '##nav-shop'
   navigationPage_contactTab = '#nav-contact'
   navigationPage_cartTab = '#nav-cart'

   clickHomeTab() 
   {
      cy.get(this.navigationPage_homeTab).click()
   }

   clickShopTab() 
   {
      cy.get(this.navigationPage_shopTab).click()
   }

   clickContactTab() 
   {
      cy.get(this.navigationPage_contactTab).click()
   }

   clickCartTab() 
   {
      cy.get(this.navigationPage_cartTab).click()
   }

}