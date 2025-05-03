import ProductListing from "../data/productlisting.js";
import ProductListingPage from "../pageobjects/productlisting.page.js";


let Data = new ProductListing();
let Page = new ProductListingPage();
let params = Data.params;
let inputs;


params.group = Data.groups[0];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.verifyFiltersFunctionality(Data);
   })
  
   // params.test = Data.groups[0].tests[1];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[1];
   //     await Page.open();
   //     await Page.verifySortingFunctionality(Data);
   // })


   // params.test = Data.groups[0].tests[2];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[2];
   //     await Page.open();
   //     await Page.verifyRowsPerPageFunctionality(Data);
   // })


   // params.test = Data.groups[0].tests[3];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[3];
   //     await Page.open();
   //     await Page.navigateToPLP(header);
   //     await Page.verifyPaginationFunctionality(Data);
   // })


   params.test = Data.groups[0].tests[4];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[4];
       await Page.open();
       await Page.addToTrolleyButtonFunctionality(Data);
   })


   // params.test = Data.groups[0].tests[5]
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[5]
   //     await Page.open();
   //     await Page.navigateToPLP(header);
   //     await Page.addToTrolleyButtonFunctionality(Data)
   //     await Page.verifyQuantityAdjustment(Data);
   // })


   // params.test = Data.groups[0].tests[6]
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[6]
   //     await Page.open();
   //     await Page.navigateToPLP(header);
   //     await Page.addToTrolleyButtonFunctionality(Data)
   //     await Page.selectVariantFunctionality(Data)
   // })


   params.test = Data.groups[0].tests[7]
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[7]
       await Page.open();
       await Page.addToTrolleyInDeliveryAndVerify(Data,inputs.assert);
   })


   // params.test = Data.groups[0].tests[8]
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[8]
   //     await Page.open();
   //     await Page.addToTrolleyForCollectionAndVerify(Data);
   // })
})
