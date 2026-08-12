import {test,expect} from '../fixtures/BaseFixture';
import { productquantitydata } from '../expectedData/productquantitydata';
import { paymentexpectdata } from '../expectedData/paymentexpectdata';
test.describe("RetailMart Test Suite",()=>{

  test("Duplicate Product Validation",async({flow1, log, captureScreenshot})=>{
    await flow1.addSameProductMultipleTimes();

    const productcount = await flow1.countOfProductAddedToCart();
    const productQuantity = await flow1.countOfQuantityIncrement();
    expect(productcount).toHaveCount(productquantitydata.expectedProductEntry.count);
    expect(Number(productQuantity)).toBe(productquantitydata.expectedProductQuantity.count);

    const ProductTotal = await flow1.cartTotal();
    const subTotal = await flow1.subTotal();
    const Tax = await flow1.Tax();
    const TotalGotFromUpdatedQuantitywithTax = subTotal +Tax;

    expect(ProductTotal).toBe(TotalGotFromUpdatedQuantitywithTax);

    const CartCount = await flow1.getTheCartCount();

    expect(CartCount).toBe(productquantitydata.expectedProductQuantity.count);
  });

  test("Payment Failure Validation",async({flow2,log,page,captureScreenshot})=>{

     await flow2.attemptPaymentUsingDeclinedcard();

     const paymentFailureStatus = await flow2.validatePaymentDeclined();
     
     expect(paymentFailureStatus).toBe(paymentexpectdata.expectedPaymentErrorMessage.message);

     captureScreenshot("Payment Error");

     expect(page).toHaveURL(/\/payment/);

     const accountHolderName = await flow2.getAccountHolderName();

     expect(accountHolderName).toBeTruthy();

     log.info(`Account Holder Name is : ${accountHolderName}`);

     const cardNumber = await flow2.getCardNumber();  
    
     expect(cardNumber).toBeTruthy();
      log.info("Account Holder cardNumber is ",{cardnumber: cardNumber});

      
      const Expiry = await flow2.getExpiry();

      expect(Expiry).toBeTruthy();
      log.info("Account Holder card expiry is ",{expiry: Expiry});

      const Cvv = await flow2.getCvv();

      expect(Cvv).toBeTruthy();
      log.info("Account Holder cvv is ",{cvv: Cvv});
     
      const CartToCount = Number(await flow2.getCartCount());

      expect(CartToCount).toBeGreaterThan(0);
  })

});