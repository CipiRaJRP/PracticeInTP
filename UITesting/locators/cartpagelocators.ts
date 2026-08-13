import { cartpagedata } from "../testData/cartpagedata";
export class cartpagelocators{
    static readonly cartList = `cart-item-name-prod-${cartpagedata.Electronics.products[0].id1}`;

    static readonly cartQuantityOfLaptop = `cart-qty-value-prod-${cartpagedata.Electronics.products[0].id1}`;


    static readonly cartTotal = "cart-total";

    static readonly cartTax = "cart-tax";
    
    static readonly itemPrice = `cart-item-price-prod-${cartpagedata.Electronics.products[0].id1}`;

    static readonly cartCount ="cart-count";
}