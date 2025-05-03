import Trolley from "../data/trolley.js";
import TrolleyPage from "../pageobjects/trolley.page.js";


let Data = new Trolley();
let Page = new TrolleyPage();
let params = Data.params;
let inputs;


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.trolleyToCheckoutPageNav(Data, inputs.assert);
   });


   params.test = Data.groups[0].tests[1];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.trolleyQuantitySelector(Data, inputs.assert);
   });


   params.test = Data.groups[0].tests[2];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.trolleyCodeButton(Data, inputs.assert);


   });


   params.test = Data.groups[0].tests[3];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[3];
       await Page.open();
       await Page.saveForLaterButton(Data, inputs.assert);
   });


   params.test = Data.groups[0].tests[4];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[4];
       await Page.open();
       await Page.changeToPickUpAtTheBranch(Data, inputs.assert);
   });




   params.test = Data.groups[0].tests[5];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[5];
       await Page.open();
       await Page.changeToDelivery(Data, inputs.assert);
   });




   // params.test = Data.groups[0].tests[6];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[6];
   //     await Page.open();
   //     await Page.compareProductEmptyTrolley(Data, inputs.assert);
   // });




   // params.test = Data.groups[0].tests[7];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[7];
   //     await Page.open();
   //     await Page.validPromoCodeTrolley(Data, inputs.assert);
   // });




   params.test = Data.groups[0].tests[8];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[8];
       await Page.open();
       await Page.invalidPromocodeTrolley(Data, inputs.assert);
   });




   // params.test = Data.groups[0].tests[9];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[9];
   //     await Page.open();
   //     await Page.validateProductInTrolleyAfterLogoutAndLoginThenCheckout(Data, inputs.assert);
   // });




   // params.test = Data.groups[0].tests[10];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[10];
   //     await Page.open();
   //     await Page.validateTrolleyFullJourneyInNewBrowserSession(Data, inputs.assert);
   // });






   // params.test = Data.groups[0].tests[11];
   // it(Data.testId(params), async () => {
   //     inputs = Data.groups[0].tests[11];
   //     await Page.open();
   //     await Page.navigateToClickCollectAndFreeDelivery(Data, inputs.assert);
   // });


});
