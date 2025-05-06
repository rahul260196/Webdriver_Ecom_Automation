import Footer from "../data/footer.js";
import FooterPage from "../pageobjects/footer.page.js";




let Data = new Footer();
let Page = new FooterPage();
let params = Data.params;
let inputs;


//-------------------------------Group: 1---------------------------------------


params.group = Data.groups[0];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.faqLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.contactLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.paymentMethodLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[3];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[3];
       await Page.open();
       await Page.deliveryLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[4];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[4];
       await Page.open();
       await Page.clickAndCollectLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[5];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[5];
       await Page.open();
       await Page.exchangeReturnLinkFunctionality(Data, inputs.assert);
   })


   // params.test = Data.groups[0].tests[6];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[0].tests[6];
   //     await Page.open();
   //     await Page.siteMapLinkFunctionality(Data, inputs.assert);
   // })


   params.test = Data.groups[0].tests[7];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[7];
       await Page.open();
       await Page.guaranteeLinkFunctionality(Data, inputs.assert);
   })
})


//-------------------------------Group: 2---------------------------------------




params.group = Data.groups[1];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[1].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[0];
       await Page.open();
       await Page.aboutUsLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[1];
       await Page.open();
       await Page.procardLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[2];
       await Page.open();
       await Page.toolstationAppLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[3];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[3];
       await Page.open();
       await Page.branchesLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[1].tests[4];
   it(Page.testId(params), async () => {
       inputs = Data.groups[1].tests[4];
       await Page.open();
       await Page.vacanciesLinkFunctionality(Data, inputs.assert);
   })
})


//-------------------------------Group: 3---------------------------------------


params.group = Data.groups[2];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[2].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[0];
       await Page.open();
       await Page.termsAndConditionLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[2].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[1];
       await Page.open();
       await Page.privacyPolicyLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[2].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[2];
       await Page.open();
       await Page.cookiePolicyLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[2].tests[3];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[3];
       await Page.open();
       await Page.reviewsLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[2].tests[4];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[4];
       await Page.open();
       await Page.weeeLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[2].tests[5];
   it(Page.testId(params), async () => {
       inputs = Data.groups[2].tests[5];
       await Page.open();
       await Page.modernSlaveryLinkFunctionality(Data, inputs.assert);
   })


   // params.test = Data.groups[2].tests[6];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[2].tests[6];
   //     await Page.open();
   //     await Page.blogNewsLinkFunctionality(Data, inputs.assert);
   // })


   // params.test = Data.groups[2].tests[7];
   // it(Page.testId(params), async () => {
   //     inputs = Data.groups[2].tests[7];
   //     await Page.open();
   //     await Page.requestCatelogueLinkFunctionality(Data, inputs.assert);
   // })
})


//-------------------------------Group: 4---------------------------------------


// params.group = Data.groups[3];
// describe(Page.groupId(params), () => {
  
//     params.test = Data.groups[3].tests[0];
//     it(Page.testId(params), async () => {
//         inputs = Data.groups[3].tests[0];
//         await Page.open();
//         await Page.facebookLinkFunctionality(Data, inputs.assert);
//     })


//     params.test = Data.groups[3].tests[1];
//     it(Page.testId(params), async () => {
//         inputs = Data.groups[3].tests[1];
//         await Page.open();
//         await Page.instagramLinkFunctionility(Data, inputs.assert);
//     })


//     params.test = Data.groups[3].tests[2];
//     it(Page.testId(params), async () => {
//         inputs = Data.groups[3].tests[2];
//         await Page.open();
//         await Page.youtubeLinkFunctionality(Data, inputs.assert);
//     })


//     params.test = Data.groups[3].tests[3];
//     it(Page.testId(params), async () => {
//         inputs = Data.groups[3].tests[3];
//         await Page.open();
//         await Page.linkedInLinkFunctionality(Data, inputs.assert);
//     })
// })


//-------------------------------Group: 5---------------------------------------


params.group = Data.groups[4];
describe(Page.groupId(params), () => {
  
   params.test = Data.groups[4].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[4].tests[0];
       const run = await Page.runnerFlag()
       if (run) {
           return this.skip();
       }
       await Page.open();
       await Page.bottomPrivacyPolicyLinkFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[4].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[4].tests[1];
       const run = await Page.runnerFlag()
       if (run) {
           return this.skip();
       }
       await Page.open();
       await Page.bottomCookiePolicyLinkFunctionality(Data, inputs.assert);
   })
})
