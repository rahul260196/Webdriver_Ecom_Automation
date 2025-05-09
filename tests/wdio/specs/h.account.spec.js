import Account from "../data/account.js";
import AccountPage from "../pageobjects/account.page.js";




let Data = new Account();
let Page = new AccountPage();
let params = Data.params;
let inputs;


//------------------------------------- Group 1 ----------------------------------------


params.group = Data.groups[0];
describe(Data.groupId(params), () => {
   
    params.test = Data.groups[0].tests[0];
    it(Data.testId(params), async function () {
        inputs = Data.groups[0].tests[0];
        const run = await Page.runnerFlag()
        if (run) {
            return this.skip();
        }
        await Page.open();
        await Page.welcomeMessageVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[1];
    it(Data.testId(params), async function () {
        inputs = Data.groups[0].tests[1];
        const run = await Page.runnerFlag()
        if (run) {
            return this.skip();
        }
        await Page.open();
        await Page.myAccountVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[2];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open();
        await Page.accountUsernameVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[3];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open();
        await Page.emailAddressVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[4];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open();
        await Page.phoneNumberVisibility(Data, inputs.assert);
    })


    // params.test = Data.groups[0].tests[5];
    // it(Data.testId(params), async () => {
    //     inputs = Data.groups[0].tests[5];
    //     await Page.open();
    //     await Page.appBannerVisibility(Data, inputs.assert);
    // })


    // params.test = Data.groups[0].tests[6];
    // it(Data.testId(params), async () => {
    //     inputs = Data.groups[0].tests[6];
    //     await Page.open();
    //     await Page.digitalToolstationCardVisibility(Data, inputs.assert);
    // })


    params.test = Data.groups[0].tests[7];
    it(Data.testId(params), async function () {
        inputs = Data.groups[0].tests[7];
        const run = await Page.runnerFlag();
        if (run) {
            return this.skip();
        }
        await Page.open();
        await Page.profileLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[8];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[8];
        await Page.open();
        await Page.ordersLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[9];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[9];
        await Page.open();
        await Page.orderAgainLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[10];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[10];
        await Page.open();
        await Page.savelistLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[11];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[11];
        await Page.open();
        await Page.stockAlertLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[12];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[12];
        await Page.open();
        await Page.messageCenterLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[13];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[13];
        await Page.open();
        await Page.procardLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[14];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[14];
        await Page.open();
        await Page.addressesLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[15];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[15];
        await Page.open();
        await Page.defaultBranchLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[16];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[16];
        await Page.open();
        await Page.accountPreferencesLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[17];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[17];
        await Page.open();
        await Page.faqLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[18];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[18];
        await Page.open();
        await Page.aboutUsLinkVisibility(Data, inputs.assert);
    })


    params.test = Data.groups[0].tests[19];
    it(Data.testId(params), async () => {
        inputs = Data.groups[0].tests[19];
        await Page.open();
        await Page.signOutButtonVisibility(Data, inputs.assert);
    })
})


//------------------------------------- Group 2 ----------------------------------------


params.group = Data.groups[1];
describe(Data.groupId(params), () => {

    params.test = Data.groups[1].tests[0];
    it(Data.testId(params), async function () {
        inputs = Data.groups[1].tests[0];
        const run = await Page.runnerFlag()
        if (run) {
            return this.skip();
        }
        await Page.open();
        await Page.profileLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[1];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[1];
        await Page.open();
        await Page.ordersLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[2];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[2];
        await Page.open();
        await Page.orderAgainLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[3];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[3];
        await Page.open();
        await Page.savelistLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[4];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[4];
        await Page.open();
        await Page.stockNotificationLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[5];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[5];
        await Page.open();
        await Page.messageCenterLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[6];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[6];
        await Page.open();
        await Page.procardLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[7];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[7];
        await Page.open();
        await Page.addressesLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[8];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[8];
        await Page.open();
        await Page.defaultBranchLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[9];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[9];
        await Page.open();
        await Page.accountPreferencesLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[10];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[10];
        await Page.open();
        await Page.faqLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[11];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[11];
        await Page.open();
        await Page.aboutUsLinkFunctionality(Data, inputs.assert);
    })


    params.test = Data.groups[1].tests[12];
    it(Data.testId(params), async () => {
        inputs = Data.groups[1].tests[12];
        await Page.open();
        await Page.signoutButtonFunctionality(Data, inputs.assert);
    })
})
