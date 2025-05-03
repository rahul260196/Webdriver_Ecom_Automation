import Signup from "../data/signup.js";
import SignupPage from '../pageobjects/signup.page.js';


let Data = new Signup();
let Page = new SignupPage();
let params = Data.params;
let inputs;


//------------------------------------- Group 1 ----------------------------------------


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await Page.open();
       await Page.signinButtonFunctionality(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[1];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[1];
       await Page.open();
       await Page.signupUsingRegisteredEmail(Data, inputs.assert);
   })


   params.test = Data.groups[0].tests[2];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[2];
       await Page.open();
       await Page.signupUsingValidDetails(Data);
   })
})
