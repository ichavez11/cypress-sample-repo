export class CartPage {
    
    cartPage_total = '.total'

    verifySubtotal(product, subTotal)
    {
        cy.get('tr').contains('td', product).siblings('td').eq(2).invoke('text').then((text) => {
            cy.log("The subtotal for " + `${product}` + " is " + `$${subTotal}`)
            expect(text).to.equal(`$${subTotal}`)
    })
    }

    verifyTotal(total)
    {
        cy.get(this.cartPage_total).invoke('text').then((text) => {
            const value = text.match(/\d+\.\d+/)[0];
            cy.log("The total is " + `$${total}`)
            expect(value).to.equal(`${total}`)
    })
    }

    verifyPrice(product, price)
    {
        cy.get('tr').contains('td', product).siblings('td').eq(0).invoke('text').then((text) => {
            cy.log("The price of " + `${product}` + " is " + `$${price}`)
            expect(text).to.equal(`$${price}`)
    })
    }
}