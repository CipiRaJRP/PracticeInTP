import { Page } from "@playwright/test";
import {homepage} from '../pages/homepage';
import {productpage} from '../pages/productpage';
import {cartpage} from '../pages/cartpage';
import {checkoutpage} from '../pages/checkoutpage';
import {paymentpage} from '../pages/paymentpage';
import {confirmationpage} from '../pages/confirmationpage';
export class paymentfailurevalidationflow{

   
    private readonly home: homepage;
    private readonly product:productpage;
    private readonly cart:cartpage;
    private readonly checkout:checkoutpage;
    private readonly payment:paymentpage;
    private readonly confirmation:confirmationpage;
    constructor(private readonly page:Page){
        this.home = new homepage(this.page);
        this.product = new productpage(this.page);
        this.cart = new cartpage(this.page);
        this.checkout = new checkoutpage(this.page);
        this.payment = new paymentpage(this.page);
        this.confirmation = new confirmationpage(this.page);
    }
  
    async proceedToPaymentPage(){
        await this.home.navigateToHomePage();
        await this.home.searchForAProduct();
        await this.home.selectTheProduct();
        await this.product.makeBuy();
        await this.cart.makeCheckout();
        await this.checkout.continueToPayment();
    }

    async selectPaymentFailure(){
        await this.payment.selectTheFailure();
    }

    async enterCardNumber(){
        await this.payment.enterTheCardNumberwithHolder();
    }

    async enterValidExpiryDateAndCvv(){
       await this.payment.enterTheExpiryAndCvv();
    }

    async placeTheOrder(){
       await this.payment.placeTheOrder();
    }

    async validatePaymentDeclined(){
        return await this.payment.paymentErrorMessage();
    }

    async getAccountHolderName(){
        return await this.payment.returnAccountHolderName();
    }

    async getCardNumber(){
        return await this.payment.returnCardNumber();
    }

    async getExpiry(){  
        return await this.payment.returnExpiry();
    }

    async getCvv(){
        return await this.payment.returnCvv();
    }

    async getCartCount(){
        return await this.payment.cartcount();
    }



    async attemptPaymentUsingDeclinedcard(){
       await this.proceedToPaymentPage();
       await this.selectPaymentFailure();
       await this.enterCardNumber();
       await this.enterValidExpiryDateAndCvv();
       await this.placeTheOrder();
    }

}