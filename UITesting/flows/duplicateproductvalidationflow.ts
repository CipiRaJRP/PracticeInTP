import { Page } from "@playwright/test";
import {homepage} from '../pages/homepage';
import {productpage} from '../pages/productpage';
import {cartpage} from '../pages/cartpage';
export class duplicateproductvalidationflow{

    private readonly home: homepage;
    private readonly product:productpage;
    private readonly cart:cartpage;
    constructor(private readonly page:Page){
        this.home = new homepage(this.page);
        this.product = new productpage(this.page);
        this.cart = new cartpage(this.page);

    }

    async addLaptopTwiceFromProductpage(){
       await this.home.navigateToHomePage();
       await this.home.searchForAProduct();
       await this.home.selectTheProduct();

       await this.product.incrementTheProduct();
    }

    async navigateToCart(){
        await this.product.goToCart();
    }

    async countOfProductAddedToCart(){
        return await this.cart.productEntered();
    }

    async countOfQuantityIncrement(){
       return await this.cart.quantityIncremented();
    }

    async cartTotal(){
        return await this.cart.getCartTotal();
    }

    async subTotal(){
        return await this.cart.getSubTotal();
    }

    async Tax(){
        return await this.cart.getTax();
    }

    async getTheCartCount(){
        return await this.cart.getCartCount();
    }
    async addSameProductMultipleTimes(){
      await this.addLaptopTwiceFromProductpage();
      await this.navigateToCart();
    }
}