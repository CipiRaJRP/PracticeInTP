import { Page } from "@playwright/test";
import { paymentpagedata } from "../testData/paymentpagedata";
import { paymentpagelocators } from "../locators/paymentpagelocators";
export class paymentpage{

    constructor(private readonly page:Page){};


    private Failure = () => this.page.getByRole("radio",{name:/Failure/i});

    private  CardHolder = () => this.page.getByRole("textbox",{name:paymentpagelocators.enterAccountHolderName});

    private CardNumber = () => this.page.getByTestId(paymentpagelocators.enterCardNumber);

    private Expiry = () => this.page.getByRole("textbox",{name:paymentpagelocators.enterExpiry});

    private CVV = () => this.page.getByTestId(paymentpagelocators.enterCvv);

    private PlaceOrder = () => this.page.getByRole("button",{name:/Place Order/i});

    private PaymentError = () => this.page.getByTestId(paymentpagelocators.paymentError);

    private Count = () => this.page.getByTestId(paymentpagelocators.count);

    async selectTheFailure(){
         await this.Failure().click();
    }

    async enterTheCardNumberwithHolder(){
        await this.CardHolder().fill(paymentpagedata.accountHolder.name);
        
        await this.CardNumber().fill(paymentpagedata.paymentDetails.cardNumber!);
    }

    async enterTheExpiryAndCvv(){
        await this.Expiry().fill(paymentpagedata.paymentDetails.expiry!);

        await this.CVV().fill(paymentpagedata.paymentDetails.cvv!);
    }

    async placeTheOrder(){
        await this.PlaceOrder().click();
    }

    async paymentErrorMessage(){
        return await this.PaymentError().textContent();
    }

    async returnAccountHolderName(){
        return await this.CardHolder().inputValue();
    }

    async returnCardNumber(){
        return await this.CardNumber().inputValue();
    }

    async returnExpiry(){   
        return await this.Expiry().inputValue();    
    }

    async returnCvv(){
        return await this.CVV().inputValue();
    }

    async cartcount(){
        return await this.Count().textContent();
    }
}