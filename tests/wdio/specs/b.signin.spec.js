import Signin from "../data/signin.js";
import SigninPage from "../pageobjects/signin.page.js";


let Data = new Signin();
let Page = new SigninPage();
let params = Data.params;
let inputs;


//------------------------------------- Group 1 ----------------------------------------


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.signinValidCredential(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[1];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.signoutFunctionality(Data);
   })


   params.test = Data.groups[0].tests[2];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.signinInvalidEmailAddress(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[3];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[3];
       await Page.open();
       await Page.signinUnregisteredEmail(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[4];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[4];
       await Page.open();
       await Page.signinIncorrectPassword(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[5];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[5];
       await Page.open();
       await Page.createAccountLink(Data, inputs.assert);
   })
})
