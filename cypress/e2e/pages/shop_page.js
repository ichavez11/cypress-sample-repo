export class ShopPage {

    shopPage_product2 = '#product-2'
    shopPage_product4 = '#product-4'
    shopPage_product7 = '#product-7'

    buyProduct(number, product) 
    {

        if(product == "Stuffed Frog")
        {
            product = this.shopPage_product2
        }
        else if(product == "Fluffy Bunny")
        {
            product = this.shopPage_product4
        }
        else if(product == "Valentine Bear")
        {
            product = this.shopPage_product7
        }
        else
        {
            cy.log("Invalid product")
        }

        for (var c = 1; c <= number; c++) {
            cy.get(product + '> div > p > .btn').click()
        }
    }



}