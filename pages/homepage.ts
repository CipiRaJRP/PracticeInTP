import { Page } from "@playwright/test";
import { homepagedata } from "../testData/homepagedata";
import { homepagelocators } from "../locators/homepagelocators";
export class homepage{

    constructor(private readonly page:Page){}
    private searchBox = () => this.page.getByRole("textbox",{name:homepagelocators.Search});
    private productName = () => homepagedata.Electronics.products[0].name;
    private searchButton = () => this.page.getByRole("button",{name:"Search"});

    private productLink = () => this.page.getByTestId(homepagelocators.ProductId);

    async navigateToHomePage(){
        await this.page.goto('/');
    }

    async searchForAProduct(){
       await this.searchBox().fill(this.productName());
       await this.searchButton().click();
    }

    async selectTheProduct(){
           await this.productLink().click();
    }
}