import {Page} from '@playwright/test';
import { productpagedata } from '../testData/productpagedata';
import { productpagelocators } from '../locators/productpagelocators';
import { expect } from '@playwright/test';
export class productpage{

    constructor(private readonly page:Page){};

    private addToCart = () =>this.page.getByTestId(productpagelocators.cartButton);

    private Buy = () => this.page.getByRole("button",{name:"Buy Now"});

    private cartLink = () => this.page.getByTestId(productpagelocators.cartId);
    async incrementTheProduct(){
      for(let i=0 ; i < productpagedata.ActionDetails.count;i++){
           await this.addToCart().isVisible();
           await this.addToCart().click();
           if (i < productpagedata.ActionDetails.count - 1) {
            await expect(this.addToCart())
                .toHaveText("Add to Cart");
        }
      }
    }

    async goToCart(){
        await this.cartLink().click();
    }

    async makeBuy(){
        await this.Buy().click();
    }
}