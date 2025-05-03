import Helper from "../webdriverio-helper/Page.js";
import Response from "../data/response.js";


let helper = new Helper();
let Data = new Response();
let params = Data.params;
let inputs;


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
  
   params.test = Data.groups[0].tests[0];
   it(Data.testId(params), async () => {
       inputs = Data.groups[0].tests[0];
       await helper.checkBaseUrlResponse(Data.value.base_url, inputs.assert);
   })
})
