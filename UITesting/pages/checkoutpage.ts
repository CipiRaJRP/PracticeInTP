import { Page } from "@playwright/test";
import { checkoutpagelocators } from "../locators/checkoutpagelocators";
import { checkoutpagedata } from "../testData/checkoutpagedata";
export class checkoutpage{

    constructor(private readonly page:Page){};
 
    private FullName = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterName});

    private Email = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterEmail});

    private Phone = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterPhone});

    private Address = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterAddress});

    private City = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterCity});

    private ZipCode = () => this.page.getByRole("textbox",{name:checkoutpagelocators.enterZipcode});

    private State = () => this.page.getByTestId(checkoutpagelocators.enterState);

    private paymentButton = () => this.page.getByRole("button",{name:"Continue to Payment →"});

    async continueToPayment(){
        await this.FullName().fill(checkoutpagedata.userDetails.name);
        await this.Email().fill(checkoutpagedata.userDetails.email);
        await this.Phone().fill(checkoutpagedata.userDetails.phone);
        await this.Address().fill(checkoutpagedata.userDetails.address);
        await this.City().fill(checkoutpagedata.userDetails.city);
        await this.ZipCode().fill(checkoutpagedata.userDetails.zipcode);

        await this.State().selectOption(checkoutpagedata.userDetails.state);

        await this.paymentButton().click();
    }
}