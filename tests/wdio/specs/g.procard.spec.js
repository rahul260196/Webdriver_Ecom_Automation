

import Procard from "../data/procard.js";
import ProcardPage from "../pageobjects/procard.page.js";




let Data = new Procard();
let Page = new ProcardPage();
let params = Data.params;
let inputs;


params.group = Data.groups[0];
describe(Page.groupId(params), () => {


   params.test = Data.groups[0].tests[0];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.ApplyForProcardWithCredit(Data);
   })


   params.test = Data.groups[0].tests[1];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.ApplyForProcardWithoutCredit(Data);
   })


   params.test = Data.groups[0].tests[2];
   it(Page.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.registerProcardWithAndWithoutCredit(Data, inputs.assert);
   })
})
