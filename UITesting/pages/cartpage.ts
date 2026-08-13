import {Page} from '@playwright/test';
import { cartpagelocators } from '../locators/cartpagelocators';
import { paisaconversion } from '../utils/paisaconvertion';
import { cartpagedata } from '../testData/cartpagedata';
export class cartpage{

    constructor(private readonly page:Page){};

    private cartList = () => this.page.getByTestId(cartpagelocators.cartList);

    private cartTotal =() => this.page.getByTestId(cartpagelocators.cartTotal).textContent();

    private itemPrice =() => this.page.getByTestId(cartpagelocators.itemPrice).textContent();

    private Tax = () => this.page.getByTestId(cartpagelocators.cartTax);

    private  cartCount = () => this.page.getByTestId(cartpagelocators.cartCount);

    private proceedToCheckout = () => this.page.getByRole("button",{name:"Proceed to Checkout"});
    async productEntered(){
       return await this.cartList();
    }
    
    async quantityIncremented(){
        return await this.page.getByTestId(cartpagelocators.cartQuantityOfLaptop).textContent();
    }

    async getCartTotal(){
        const total = await this.cartTotal();
        return await paisaconversion.toPaisa(total!);
    }

    async getSubTotal(){
        const price = await this.itemPrice();
        const subTotal = await paisaconversion.toPaisa(price!);
        return subTotal;
    }

    async getTax(){
        const tax = await this.Tax().textContent();
        return await paisaconversion.toPaisa(tax!);
    }

    async getCartCount(){
        const count = await this.cartCount().textContent();
        return Number(count);
    }

    async makeCheckout(){
        await this.proceedToCheckout().click();
    }
}