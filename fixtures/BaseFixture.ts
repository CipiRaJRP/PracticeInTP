import {test as baseTest,expect} from './ScreenshotFixture';
import { duplicateproductvalidationflow } from '../flows/duplicateproductvalidationflow';
import {paymentfailurevalidationflow} from '../flows/paymentfailurevalidationflow';
type PageFixtures ={
  flow1:duplicateproductvalidationflow;
  flow2:paymentfailurevalidationflow;
}

export const test = baseTest.extend<PageFixtures>({
    flow1: async({page},use)=>{
        await use(new duplicateproductvalidationflow(page));
    },

    flow2: async({page},use)=>{
        await use(new paymentfailurevalidationflow(page));
    }
});

export {expect};