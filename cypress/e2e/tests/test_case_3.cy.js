import { HomePage } from "../pages/home_page"
import { ShopPage } from "../pages/shop_page"
import { NavigationPage } from "../pages/navigation_page"
import { CartPage } from "../pages/cart_page"

const homePage = new HomePage()
const shopPage = new ShopPage()
const navigationPage = new NavigationPage()
const cartPage = new CartPage()

const stuffedFrog = "Stuffed Frog"
const fluffyBunny = "Fluffy Bunny"
const valentineBear = "Valentine Bear"

const stuffedFrogPrice = 10.99
const fluffyBunnyPrice = 9.99
const valentineBearPrice = 14.99

it('Test Case 3', function () 
{
    homePage.visitHome()
    homePage.clickStartShopping()

    shopPage.buyProduct(2, stuffedFrog)
    shopPage.buyProduct(5, fluffyBunny)
    shopPage.buyProduct(3, valentineBear)

    navigationPage.clickCartTab()

    cartPage.verifySubtotal(stuffedFrog, stuffedFrogPrice * 2)
    cartPage.verifySubtotal(fluffyBunny, fluffyBunnyPrice * 5)
    cartPage.verifySubtotal(valentineBear, valentineBearPrice * 3)

    cartPage.verifyPrice(stuffedFrog, stuffedFrogPrice)
    cartPage.verifyPrice(fluffyBunny, fluffyBunnyPrice)
    cartPage.verifyPrice(valentineBear, valentineBearPrice)

    cartPage.verifyTotal((stuffedFrogPrice * 2) + (fluffyBunnyPrice * 5) + (valentineBearPrice * 3))
})