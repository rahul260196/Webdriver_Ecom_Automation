import Checkout from "../data/checkout.js";
import CheckoutsPage from "../pageobjects/checkout.page.js";


let Data = new Checkout();
let Page = new CheckoutsPage();
let params = Data.params;
let inputs;


//------------------------------------- Group 1 ----------------------------------------


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.creditCardPaymentForDelivery(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[1];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.payPalPaymentForDelivery(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[2];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.idealPaymentForDelivery(Data, inputs.assert);


   })




   // params.test = Data.groups[0].tests[3];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[3];
   //     await Page.open();
   //     await Page.googlePayPaymentForDelivery(Data, inputs.assert);
     
   // })


   // params.test = Data.groups[0].tests[4];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[4];
   //     await Page.open();
   //     await Page.creditCardCanceledForDelivery(Data, inputs.assert);
     
   // })


   // params.test = Data.groups[0].tests[5];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[5];
   //     await Page.open();
   //     await Page.idealCanceledPaymentForDelivery(Data, inputs.assert);
      
   // })


})


//------------------------------------- Group 2 ----------------------------------------


params.group = Data.groups[1];
describe(Data.groupId(params), () => {




   // params.test = Data.groups[1].tests[0];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[1].tests[0];
   //     await Page.open();
   //     await Page.addAddressFunctionality(Data, inputs.assert);
      
   // })




   // params.test = Data.groups[1].tests[1];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[1].tests[1];
   //     await Page.open();
   //     await Page.billingAddressFunctionality(Data, inputs.assert);
      
   // })


   params.test = Data.groups[1].tests[2];
   it(Data.testId(params), async () => {
       inputs = Data.groups[1].tests[2];
       await Page.open();
       await Page.guestCheckout(Data, inputs.assert);
   })




   params.test = Data.groups[1].tests[3];
   it(Data.testId(params), async () => {
       inputs = Data.groups[1].tests[3];
       await Page.open();
       await Page.guestCheckoutDetails(Data, inputs.assert);
   })




   // params.test = Data.groups[1].tests[4];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[1].tests[4];
   //     await Page.open();
   //     await Page.testCheckoutAfterLogoutAndReLogin(Data, inputs.assert);
   // })


})
