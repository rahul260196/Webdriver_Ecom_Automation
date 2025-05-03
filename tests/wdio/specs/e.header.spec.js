import Header from "../data/header.js";
import HeaderPage from "../pageobjects/header.page.js";


let Data = new Header();
let Page = new HeaderPage();
let params = Data.params;
let inputs;


params.group = Data.groups[0];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.toolstationLogoFucntionality(Data);
   })


   // params.test = Data.groups[0].tests[1];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[1];
   //     await Page.open();
   //     await Page.languageToggle(Data, inputs.assert);
   // })


   params.test = Data.groups[0].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.saveListButton(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[3];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[3];
       await Page.open();
       await Page.signinButtonFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[4];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[4];
       await Page.open();
       await Page.trolleyButtonFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[5];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[5];
       await Page.open();
       await Page.categoriesLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[6];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[6];
       await Page.open();
       await Page.brandsLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[7];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[7];
       await Page.open();
       await Page.dealsLinkFunctionality(Data, inputs.assert);
   })


   // params.test = Data.groups[0].tests[8];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[8];
   //     await Page.open();
   //     await Page.newLaunchLinkFunctionality(Data, inputs.assert);
   // })


   params.test = Data.groups[0].tests[9];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[9];
       await Page.open();
       await Page.proCardLinkFunctionality(Data, inputs.assert);
   })
})


params.group = Data.groups[1];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[1].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[0];
       await Page.open();
       await Page.searchProductUsingCode(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[1];
       await Page.open();
       await Page.searchProductUsingName(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[2];
       await Page.open();
       await Page.searchForCategory(Data, inputs.assert);
   })
})
