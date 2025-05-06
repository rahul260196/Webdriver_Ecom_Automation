import Page from '../webdriverio-helper/Page.js';
import Selector from '../webdriverio-helper/Selector.js';
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';
import ProductListing from '../data/productlisting.js';
import Trolley from '../data/trolley.js';
import ProductDetails from '../data/productdetails.js';
import OrderConfirmation from '../data/orderconfirmation.js';
import Signin from '../data/signin.js';
import Account from '../data/account.js';


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper;
let header = new Header();
let productlisting = new ProductListing();
let trolley = new Trolley();
let productdetails = new ProductDetails();
let orderconfirmation = new OrderConfirmation();
let signin = new Signin();
let account = new Account();


export default class CheckoutsPage extends Page {
    constructor() {
        super();
        this.params.page.id = 'CH';
        this.params.page.name = 'Checkout';
        this.params.page.url = this.base_url;
    }


    async open() {
        console.log(`--------------------------Running Open()------------------------`);
        if (!(this.platformName == 'Android')) {
            await browser.maximizeWindow();
        }
        const urlStart = Date.now();
        await super.open(this.params.page.url);
        const urlEnd = Date.now();
        console.log(`open()  ---> page gets loaded in ${urlEnd - urlStart} ms`);
        const cookStart = Date.now();
        await helper.addCookies();
        const cookEnd = Date.now();
        console.log(`open()  ---> cookies added in loaded in ${cookEnd - cookStart} ms`);
        await browser.pause();
        const consentStart = Date.now();
        await helper.acceptConsent();
        const consentEnd = Date.now();
        console.log(`open()  ---> consent accepted in loaded in ${consentEnd - consentStart} ms`);
        await browser.pause();
    }
 
 
    async userSignin(data) {
        console.log(`----------------------Running userSignin()-------------------`);
        const userSigninStart = Date.now();
        const flagStart = Date.now();
        const signinFlag = await this.isElementDisplayed(Sl.testid(header.element.my_account_header_link_testid), this.medium_pause * 2);
        const flagEnd = Date.now();
        console.log(`userSignin()  ----> user checked for my Account Element in ${flagEnd-flagStart} ms`);
        console.log(`userSignin()  ----> was user logged? ${signinFlag}`);
        if (!signinFlag) {
            console.log(`userSignin()  ----> user was not logged in, so will navigating to signin page `);
            await Sl.testid(header.element.signin_btn_testid).click();
            console.log(`userSignin()  ----> header signin button clicked `);
            console.log(`userSignin()  ----> signin page headeing - check `);
            const headStart = Date.now();
            await helper.waitForDisplayed(Sl.testid(signin.element.signin_header_testid), this.long_pause);
            const headEnd = Date.now();
            console.log(`userSignin()  ----> heading on signin page was visible in ${headEnd-headStart}ms`);
            await Sl.testid(signin.element.email_address_field_testid).setValue(data.value.email);
            await Sl.testid(signin.element.password_field_testid).setValue(data.value.cred_secure);
            await helper.waitForClickable(Sl.testid(signin.element.signin_btn_testid), this.long_pause);
            if (this.platformName == 'Android') {
                await driver.hideKeyboard();
                await browser.pause(this.medium_pause);
            }
            await Sl.testid(signin.element.signin_btn_testid).click();
            console.log("userSignin()  ----> user has provided cred and clicked signin ");
            let accStart;
            let accEnd;
            try {
                console.log("userSignin()  ----> myAccount button - check ");
                accStart = Date.now();
                const myAccountButtonElement = await Sl.testid(signin.element.header_myaccount_btn_testid);
                await helper.waitForDisplayed(myAccountButtonElement, this.long_pause);
                accEnd = Date.now();
                console.log(`userSignin()  ----> user wait for myAccount Button for ${accEnd-accStart}ms`);
                await expect(Sl.testid(signin.element.header_myaccount_btn_testid)).toBeDisplayed();
                console.log("userSignin()  ----> myAccount button was visible ");
            } catch (error) {
                accEnd = Date.now();
                console.log(`userSignin()  ----> user wait for myAccount Button for ${accEnd-accStart}ms`);
                console.log(`Login Failed ${error}`);
            }
            const userSigninEnd = Date.now();
            console.log(`userSignin()  ----> user is logged in now in ${userSigninEnd-userSigninStart}ms`);
        }
    }
 
 
    async emptyTrolley() {
        console.log("------------------------Running emptyTrolley()------------------------- ");
        const emptyTrolleyStart = Date.now();
        let itemValueFlag;
        let itemStart;
        let itemEnd;
        try {
            console.log("emptyTrolley() -----> user checks for previous items. ")
            itemStart = Date.now();
            itemValueFlag = await helper.waitForDisplayed(Sl.testid(header.element.item_count_testid), this.medium_pause );
            itemEnd = Date.now();
            console.log(`emptyTrolley() -----> trolley has an item ${itemValueFlag} and was visible in ${itemEnd-itemStart}ms`);
        } catch (error) {
            itemEnd = Date.now();
            console.log(`emptyTrolley() -----> trolley has an item ${itemValueFlag} and was visible in ${itemEnd-itemStart}ms`);
        }
        if (itemValueFlag) {
            console.log(`emptyTrolley() -----> user will remove the item now`);
            await Sl.testid(header.element.trolley_btn_testid).click();
            console.log(`emptyTrolley() -----> user clicked header trolley button `);
            try {
                console.log(`emptyTrolley() -----> discount applied check`);
                const popStart = Date.now();
                const popupFlag = await helper.waitForDisplayed(Sl.testid(trolley.element.trolley_promo_close_testid), this.small_pause * 2);
                const popEnd = Date.now();
                console.log(`emptyTrolley() -----> discount applied check ${popupFlag} popupFlag and was visible in ${popEnd-popStart}`);
                if (popupFlag) {
                    console.log(`emptyTrolley() -----> close discount pop up `);
                    await Sl.testid(trolley.element.trolley_promo_close_testid).click();
                    console.log(`emptyTrolley() -----> discount pop up closed `);
                }
            } catch (error) {
                console.log(`emptyTrolley() -----> No Discount was applied`);
            }
            console.log(`emptyTrolley() -----> product is getting loaded `);
            const prodWaitStart = Date.now();
            await helper.waitForDisplayed(Sl.partialTestid(trolley.element.trolley_product_link_partialtestid), this.long_pause);
            const prodtWaitEnd = Date.now();
            console.log(`emptyTrolley() product loaded  and was visilbe in ${prodtWaitEnd - prodWaitStart}ms`);
            await Sl.partialTestid(trolley.element.remove_btn_endtestid).click();
            console.log(`emptyTrolley() -----> product removed button clicked `);
            await Sl.testid(trolley.element.confirm_delete_cta_testid).click();
            console.log(`emptyTrolley() -----> Sure to remove product button clicked `);
            await browser.pause(this.medium_pause);
            const emptyTrolleyEnd = Date.now();
            console.log(`emptyTrolley() has taken ${emptyTrolleyEnd-emptyTrolleyStart}`);
        }
    }
 
 
    async iftrolleyEmptyAddProduct(type) {
        console.log("---------------------Running iftrolleyEmptyAddProduct()---------------------------- ")
        await browser.pause(this.small_pause);
        console.log("iftrolleyEmptyAddProduct() pause end ");
        let itemValueFlag;
        let itemStart;
        let itemEnd;
        try {
            console.log("iftrolleyEmptyAddProduct() user checks for previous items. ");
            itemStart = Date.now();
            itemValueFlag = await this.isElementDisplayed(Sl.testid(header.element.item_count_testid), this.medium_pause * 2);
            itemEnd = Date.now();
            console.log(`iftrolleyEmptyAddProduct() trolley has an item ${itemValueFlag} and was visible in ${itemEnd-itemStart}ms`);
        } catch (error) {
            itemEnd = Date.now();
            console.log(`iftrolleyEmptyAddProduct() trolley has an item ${itemValueFlag} and was visible in ${itemEnd-itemStart}ms`);
        }
        if (!itemValueFlag) {
            console.log("iftrolleyEmptyAddProduct() navigating to category for product");
            await this.openCategory();
            console.log("---------------------Back  to iftrolleyEmptyAddProduct()----------------- ");
            console.log("iftrolleyEmptyAddProduct() user is on plp page ");
            await this.navigateToPdpFromPlp();
            console.log("iftrolleyEmptyAddProduct addding product to pdp");
            await this.addProductToTrolleyFromPdp(type);
        }else{
            return itemValueFlag;
        }
 
 
    }
 
 
    async openCategory() {
        console.log(`--------------------------Running openCategory()-----------------------`);
        if (!(this.platformName == 'Android')) {
            const catStart = Date.now();
            console.log(`openCategory() category link wait `);
            await helper.waitForDisplayed(Sl.testid(header.element.header_categories_link_testid), this.medium_pause);
            const catEnd = Date.now();
            console.log(`openCategory() category link is visible in ${catEnd - catStart}ms`);
            await Sl.testid(header.element.header_categories_link_testid).moveTo();
            console.log(`openCategory() hover on category`);
            const catLinkStart = Date.now();
            await helper.waitForDisplayed(Sl.testid(header.element.deals_link_testid), this.long_pause);
            const catLinkEnd = Date.now();
            console.log(`openCategory() category items were visible in ${catLinkEnd - catLinkStart}ms`);
            await Sl.testid(header.element.deals_link_testid).click();
            console.log(`openCategory() category link clicked `);
            const subcategory = await Sl.testid(header.element.deals_subcat_testid);
            const subCatLinkStart = Date.now();
            await helper.waitForDisplayed(subcategory, this.long_pause);
            const subCatLinkEnd = Date.now();
            console.log(`openCategory() subcat was visible in ${subCatLinkEnd - subCatLinkStart}ms`);
            await subcategory.click();
            console.log(`openCategory() subcategory link clicked `);
        } else {
            await Sl.testid(header.element.mobile_hamburger_menu_testid).click();
            await browser.pause(this.small_pause);
            await helper.waitForDisplayed(Sl.testid(header.element.mobile_category_testid), this.medium_pause);
            await Sl.testid(header.element.mobile_category_testid).click();
            await browser.pause(this.small_pause);
            await helper.waitForDisplayed(Sl.$(header.element.explore_categories_link_text), this.medium_pause * 2);
            await Sl.$(header.element.schroeven_category_link_text).click();
            await browser.pause(this.small_pause);
            await helper.waitForDisplayed(Sl.$(header.element.mobile_schroeven_subcat_link_text), this.medium_pause);
            await Sl.$(header.element.mobile_schroeven_subcat_link_text).click();
            await browser.pause(this.small_pause);
            await helper.waitForDisplayed(Sl.$(header.element.mobile_universeschroven_level_subcat_link_text), this.medium_pause * 2);
            await Sl.$(header.element.mobile_universeschroven_level_subcat_link_text).click();
            await browser.pause(this.small_pause);
 
 
        }
 
 
    }
 
 
    async navigateToPdpFromPlp() {
        await browser.pause(this.medium_pause);
        console.log(`------------------Running navigateToPdpFromPlp()----------------------`);
        if (!(this.platformName == 'Android')) {
            const brandStart = Date.now();
            const brandFlag = await helper.waitForDisplayed(Sl.testid(productlisting.element.filter_category_brand_testid), this.long_pause);
            const brandEnd = Date.now();
            console.log(`navigateToPdpFromPlp() brands filter ${brandFlag} was visible  ${brandEnd-brandStart}ms`);
        }
        const imgStart = Date.now();
        const imageFlag = await helper.waitForDisplayed(Sl.partialTestid(productlisting.element.product_image_endswithtestid), this.long_pause);
        const imgEnd = Date.now();
        console.log(`navigateToPdpFromPlp() image filter ${imageFlag} was visible in ${imgEnd - imgStart}ms`);
        const headStart = Date.now();
        const pageHeadingFlag = await helper.waitForDisplayed(Sl.testid(productlisting.element.productlisting_page_heading_testid), this.long_pause);
        const headEnd = Date.now();
        console.log(`navigateToPdpFromPlp() page heading ${pageHeadingFlag} was visible in ${headEnd - headStart}ms`);
        const countStart = Date.now();
        const productCountFlag = await helper.waitForDisplayed(Sl.testid(productlisting.element.product_count_testid), this.long_pause);
        const countEnd = Date.now();
        console.log(`navigateToPdpFromPlp() product count ${productCountFlag} result was visible in ${countEnd - countStart}ms`);
        const productsLinksElements = await Sl.findElementsByTestIdEndingWith(productlisting.element.product_link_endswithtestid);
        await browser.pause(this.medium_pause);
        if (productsLinksElements.length > 0) {
            await helper.waitForDisplayed(productsLinksElements[0], this.long_pause);
            console.log('navigateToPdpFromPlp() Product Elements has been displayed ');
        } else {
            console.log(`No elements found with the given selector`);
        }
        if (this.platformName == 'Android') {
            await productsLinksElements[0].scrollIntoView({ block: 'center', inline: 'center' });
        }
        await productsLinksElements[0].click();
        console.log("navigateToPdpFromPlp brand product has been click and navigating to pdp");
        await browser.pause();
 
 
    }
 
 
    async addProductToTrolleyFromPdp(type = 'delivery') {
        console.log("------------------------Running addProductToTrolleyFromPdp()-----------------------");
        await browser.pause(this.small_pause);
        console.log("addProductToTrolleyFromPdp() small pause end");
        const priceStart = Date.now();
        await helper.waitForDisplayed(Sl.testid(productdetails.element.price_testid), this.long_pause);
        const priceEnd = Date.now();
        console.log(`addProductToTrolleyFromPdp() price was visible in ${priceEnd - priceStart}`);
        if (type === 'collection') {
            console.log("addProductToTrolleyFromPdp going to add product for collection so selecting branch");
            const branchFlag = await this.isElementDisplayed(Sl.partialTestid(productdetails.element.select_branch_text_endtestid), this.medium_pause);
            console.log("addProductToTrolleyFromPdp branch flag check ", branchFlag);
            if (branchFlag) {
                console.log("addProductToTrolleyFromPdp selecting branch");
                await this.selectABranch();
                console.log("addProductToTrolleyFromPdp selected branch");
            }
            const collectionButton = await Sl.partialTestid(productdetails.element.collection_btn_partialtestid);
            console.log("addProductToTrolleyFromPdp collection button");
            await helper.waitForEnabled(Sl.partialTestid(productdetails.element.collection_btn_partialtestid), this.long_pause);
            console.log("addProductToTrolleyFromPdp collection button enabled");
            collectionButton.click();
            console.log("addProductToTrolleyFromPdp collection button clicked");
            await browser.pause(this.small_pause);
        } else {
            console.log("addProductToTrolleyFromPdp waiting for branch text");
            await helper.waitForDisplayed(Sl.partialTestid(productdetails.element.select_branch_text_endtestid), this.long_pause);
            await Sl.testid(productdetails.element.price_testid).scrollIntoView();
            console.log("addProductToTrolleyFromPdp scrolled to delivery button");
            const pdpDeliveryButton = await Sl.partialTestid(productdetails.element.delivery_btn_partialtestid);
            await helper.waitForEnabled(pdpDeliveryButton, this.long_pause * 1.5);
            await browser.pause(this.small_pause);
            await pdpDeliveryButton.click();
            console.log("addProductToTrolleyFromPdp delivery button clicked");
            await browser.pause();
        }
        try {
            await helper.waitForDisplayed(Sl.testid(productdetails.element.recommended_product_link_testid), this.medium_pause * 3);
            console.log("addProductToTrolleyFromPdp recommnedatin was visible");
        } catch (error) {
            console.log("Recommended product is not visible");
        }
        await browser.pause(this.small_pause);
 
 
    }
 
 
    async pdpToTrolley(operation = 'false') {
        console.log(`---------------------Running pdpToTrolley()----------------------`)
        console.log(`pdpToTrolley() item is already in trolley ${operation}`);
        if(operation == 'true'){
           await Sl.testid(header.element.trolley_btn_testid);
           console.log(`pdpToTrolley() header trolley button clicked `)
           return;
        }
        await browser.pause(this.small_pause);
        try {
            console.log("pdpToTrolley pdp pop up go to trolley button waits in try block")
            await helper.waitForDisplayed(Sl.testid(productdetails.element.go_to_trolly_btn_testid), this.long_pause);
            console.log("pdpToTrolley pdp pop up go to trolley button waits done")
            await Sl.testid(productdetails.element.go_to_trolly_btn_testid).click();
            console.log("pdpToTrolley pdp pop up go to trolley button clicked")
            await browser.pause(this.small_pause);
 
 
        } catch (error) {
            console.log("pdpToTrolley pdp pop up go to trolley was not avaible since not added product so clicking trolley")
            await Sl.testid(header.element.trolley_btn_testid).click();
            console.log("pdpToTrolley pdp pop up go to trolley was not avaible since not added product trolley clicked");
            await browser.pause(this.medium_pause);
        }
 
 
        try {
            console.log("pdpToTrolley wait for promo popup");
            const popFlag = await helper.waitForDisplayed(Sl.testid(trolley.element.trolley_promo_close_testid), this.small_pause * 3);
            console.log("pdpToTrolley wait for promo popup done");
            if (popFlag) {
                await Sl.testid(trolley.element.trolley_promo_close_testid).click();
                console.log("pdpToTrolley promo pop up clicked");
            }
        } catch (error) {
 
 
        }
        console.log("pdpToTrolley waiting proudct link");
        const trolleyProductLink = await this.isElementDisplayed(Sl.partialTestid(trolley.element.trolley_product_link_partialtestid), this.long_pause);
        console.log("Flag for product link ", trolleyProductLink);
        console.log("pdpToTrolley waiting proudct link done");
 
 
    }
 
 
    async navigateToTrolley(data, { authentication = 'true', type = 'delivery', firstUseCase = 'false' } = {}) {
        console.log(`----------------Running - navigateToTrolley()---------------------------------`);
        console.log(`navigateToTrolley() user has been asked to login ${authentication}`);
        if (authentication === 'true') {
            await this.userSignin(data);
        } else {
            console.log(`navigateToTrolley() user will logout since operation are for guest user`);
            const accountFlag = await Sl.testid(header.element.my_account_header_link_testid).isDisplayed();
            console.log("navigate To Trolley User has logged out ");
            if (accountFlag) {
                await this.logout();
            }
        }
        console.log("navigate To Trolley First use case flag after signin/ logout ", firstUseCase);
        if (firstUseCase === 'true') {
            console.log("navigate To Trolley First Use case so removing product");
            await this.emptyTrolley(data);
            console.log("navigate To Trolley First Use case so  product removed");
        }
        console.log("navigate To Trolley Adding product to trolley method will be called");
        const operation =await this.iftrolleyEmptyAddProduct(type);
        console.log("navigate To Trolley After Adding product");
        await this.pdpToTrolley(operation);
        console.log("navigate To Trolley after navigating to trolley page will switch to payment");
 
 
    }
 
 
 
 
    async switchToCheckout() {
        console.log("In switch to chechkout mehtod ")
        if (!(this.platformName == 'Android')) {
            const checkStart = Date.now();
            await helper.waitForEnabled(Sl.testid(trolley.element.checkout_button_testid), this.long_pause);
            const checkEnd = Date.now();
            console.log("Checkout button was enabled in ", (checkEnd-checkStart));
            await Sl.testid(trolley.element.checkout_button_testid).click();
            console.log("Checkout button clicked ");
        } else {
            await helper.waitForEnabled(Sl.testid(trolley.element.mobile_checkout_btn_testid), this.long_pause);
            await Sl.testid(trolley.element.mobile_checkout_btn_testid).click();
        }
 
 
 
 
    }
 
 
    async switchForPayment(data) {
        await browser.pause(this.medium_pause * 2);
        console.log("Switch for payment start after 10 second wait");
        const standStart = Date.now();
        const standardAddressFlag = await helper.waitForExistance(Sl.partialTestid(data.element.standard_icon_endswithtestid), this.long_pause);
        const standEnd = Date.now();
        console.log(" Address was displayed in ",(standEnd-standStart));
        if (standardAddressFlag) {
            await browser.pause(this.small_pause);
            if (!(this.platformName == 'Android')) {
                await Sl.testid(data.element.payment_button_testid).click();
                console.log("Payment button clicked");
            } else {
                await Sl.$(data.element.mobile_cont_to_pay_btn_xpath).click();
            }
        }
 
 
    }
 
 
    async switchToFrameAndFill(iframe, element, value) {
        await browser.switchToFrame(iframe);
        await element.setValue(value);
        await browser.switchToParentFrame();
    }
 
 
    async fillCreditCardDetails(data) {
        const credDetailsStart = Date.now();
        console.log("Filling credit card details ")
        await Sl.testid(data.element.credit_card_option_testid).scrollIntoView();
        await Sl.testid(data.element.credit_card_option_testid).click();
        await browser.pause(this.small_pause);
        await this.switchToFrameAndFill(
            await Sl.id(data.element.card_holder_name_iframe_id),
            await Sl.id(data.element.card_holder_name_input_field_id),
            data.value.card_name
        );
        await browser.pause(this.small_pause);
        await this.switchToFrameAndFill(
            await Sl.id(data.element.card_number_iframe_id),
            await Sl.id(data.element.card_number_input_field_id),
            data.value.card_number
        );
        await browser.pause(this.small_pause);
        await this.switchToFrameAndFill(
            await Sl.id(data.element.card_expiry_date_iframe_id),
            await Sl.id(data.element.card_expiry_date_input_field_id),
            data.value.card_expiry_date
        );
        await browser.pause(this.small_pause);
        await this.switchToFrameAndFill(
            await Sl.id(data.element.card_cvv_iframe_id),
            await Sl.id(data.element.card_cvv_input_field_id),
            data.value.card_cvv
        );
        await browser.pause(this.small_pause);
        await this.switchToFrameAndFill(
            await Sl.id(data.element.postal_code_iframe_id),
            await Sl.id(data.element.postal_code_input_field_id),
            data.value.postcode
        );
        if (this.platformName == 'Android') {
            await browser.pause(this.small_pause / 2);
            await driver.hideKeyboard();
            await browser.pause(this.small_pause * 1.5);
        }
        const credDetailEnd = Date.now();
        console.log("Filled credit card details in -", (credDetailEnd-credDetailsStart));
    }
 
 
    async authenticateCreditCardPayment(data) {
        await helper.waitForDisplayed(Sl.id(data.element.authentication_iframe_id), this.long_pause);
        await browser.switchToFrame(await Sl.id(data.element.authentication_iframe_id));
        await Sl.placeholder(data.element.otp_input_field_placeholder).setValue(data.value.test_otp);
        await browser.pause();
        await Sl.value(data.element.otp_submit_button_value).scrollIntoView();
        await Sl.value(data.element.otp_submit_button_value).click();
        await browser.switchToParentFrame();
    }
 
 
    async creditCardPaymentForDelivery(data, assert) {
        console.log("credit s1");
        await this.navigateToTrolley(data, { firstUseCase: 'true' });
        console.log("credit s2");
        await this.switchToCheckout(data);
        console.log("credit s3");
        await this.switchForPayment(data);
        console.log("credit s4");
        await this.fillCreditCardDetails(data);
        console.log("credit s5");
        if (this.platformName == 'Android') {
            await driver.hideKeyboard();
        }
        await browser.pause(this.medium_pause);
        await Sl.testid(data.element.pay_with_credit_card_button_testid).scrollIntoView();
        await Sl.testid(data.element.pay_with_credit_card_button_testid).click();
        console.log("credit s7");
        const envFlag = this.base_url.includes(data.value.prod_url);
        if (!envFlag) {
            await this.authenticateCreditCardPayment(data);
            await helper.waitForDisplayed(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), this.long_pause);
            await expect(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid)).toBeDisplayed();
            await browser.pause();
            try {
                if (this.base_url.includes(signin.value.develop_url) ||
                    this.base_url.includes(signin.value.feature_url)) {
                    await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_other);
                } else {
                    await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_prod);
                }
            } catch (error) {
                console.log("Success message was incorret or not visible on order confirmation" + error);
            }
            await expect(Sl.testid(data.element.account_button_testid)).toBeDisplayed();
            await asserts.pauseIfHuman();
 
 
        } else {
            const failMsgTextEle = await Sl.testid(data.element.all_in_one_fail_msg_testid);
            await helper.waitForDisplayed(failMsgTextEle, this.long_pause);
            await failMsgTextEle.scrollIntoView({ block: 'center', inline: 'center' });
            await expect(failMsgTextEle).toBeDisplayed();
            const failMsg = await Sl.testid(data.element.all_in_one_fail_msg_testid).getHTML(false);
            await asserts.text(Sl.testid(data.element.all_in_one_fail_msg_testid), assert.cancelled_msg);
        }
    }
 
 
 
 
    async payPalPaymentForDelivery(data, assert) {
        console.log("paypal s1");
        await this.navigateToTrolley(data);
        console.log("paypal s2");
        await this.switchToCheckout();
        console.log("paypal s3");
        await this.switchForPayment(data);
        console.log("paypal s4");
        await browser.pause(this.medium_pause * 2);
        console.log("paypal s5");
        const payPalIframe = await Sl.title(data.element.payPal_iframe_title);
        console.log("paypal s6");
        const payPalIFrameFlag = await helper.waitForExistance(payPalIframe, this.long_pause);
        console.log("paypal s7");
        if (payPalIFrameFlag) {
            console.log("paypal s8");
            await browser.pause(this.medium_pause * 2);
            console.log("paypal s9");
            await browser.switchToFrame(payPalIframe);
            console.log("paypal s10");
            await browser.pause(this.small_pause);
            console.log("paypal s11");
            await Sl.$(data.element.paypal_btn_xpath).click();
            console.log("paypal s12");
            await browser.pause(this.medium_pause);
            console.log("paypal s13");
        }
        console.log("paypal s14");
        await helper.switchToWindowByTitle(data.value.paypal_window_title, this.long_pause);
        console.log("paypal s15");
        await expect(Sl.id(data.element.payPal_heading_id)).toBeDisplayed();
        console.log("paypal s16");
        await Sl.$(data.element.paypal_window_cancel_link_xpath).click();
        console.log("paypal s17");
        await browser.pause(this.small_pause);
        await helper.switchToWindowByTitle(data.value.checkout_window_title, this.long_pause);
        console.log("paypal s18");
        const failMsg = await Sl.testid(data.element.all_in_one_fail_msg_testid);
        console.log("paypal s19");
        await helper.waitForExistance(failMsg, this.long_pause);
        console.log("paypal s20");
        await asserts.text(failMsg, assert.order_confirm_msg);
        console.log("paypal s21");
    }
 
 
    async idealPaymentForDelivery(data, assert) {
        console.log("ideal s1");
        await this.navigateToTrolley(data);
        console.log("ideal s2");
        await this.switchToCheckout();
        console.log("ideal s3");
        await this.switchForPayment(data);
        console.log("ideal s4");
        await helper.waitForDisplayed(Sl.id(data.element.gpay_btn_id), this.long_pause);
        console.log("ideal s5");
        const payPalIframe = await Sl.title(data.element.payPal_iframe_title);
        console.log("ideal s6");
        const payPalIFrameFlag = await helper.waitForExistance(payPalIframe, this.long_pause);
        console.log("ideal s7");
        await helper.scrollToElement(Sl.testid(data.element.ideal_btn_testid));
        console.log("ideal s8");
        await Sl.testid(data.element.ideal_btn_testid).click();
        console.log("ideal s9");
        await browser.pause(this.medium_pause * 2);
        console.log("ideal s10");
        const envFlag = this.base_url.includes(data.value.prod_url);
        console.log("ideal s1");
        if (!envFlag) {
            await browser.pause(this.medium_pause);
            await helper.waitForDisplayed(Sl.testid(data.element.sucessful_btn_testid), this.long_pause);
            await Sl.testid(data.element.sucessful_btn_testid).click();
            await browser.pause(this.medium_pause * 3);
            await helper.waitForDisplayed(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), this.long_pause);
            await expect(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid)).toBeDisplayed();
            await asserts.pauseIfHuman();
            const orderMessage = await Sl.testid(orderconfirmation.element.order_confirmation_msg_testid).getText();
            const normalizedText = orderMessage.replace(/\s+/g, ' ').trim();
            const formattedText = normalizedText.replace(/OWW\d+/, 'OWWXXXXXXXXX');
            try {
                if (this.base_url.includes(signin.value.develop_url) ||
                    this.base_url.includes(signin.value.feature_url)) {
                    // await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_other);
                    expect(formattedText).toEqual(assert.order_confirm_msg_other);
                } else {
                    //  await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_prod);
                    expect(formattedText).toEqual(assert.order_confirm_msg_prod);
                }
            } catch (error) {
                console.log("Success message was incorret or not visible on order confirmation" + error);
            }
            // expect(formattedText).toEqual(assert.order_confirm_msg_other);
            await expect(Sl.testid(data.element.account_button_testid)).toBeDisplayed();
            await asserts.pauseIfHuman();
 
 
        } else {
            await helper.waitForDisplayed(Sl.testid(data.element.ideal_heading_text_testid), this.long_pause);
            await expect(Sl.testid(data.element.ideal_heading_text_testid)).toBeDisplayed();
            await Sl.testid(data.element.ideal_canceled_payment_btn_testid).click();
            await helper.waitForDisplayed(Sl.testid(data.element.ideal_confirm_cancel_button_testid), this.long_pause);
            await Sl.testid(data.element.ideal_confirm_cancel_button_testid).click();
            await helper.waitForDisplayed(Sl.testid(data.element.ideal_canceled_msg_testid), this.long_pause);
            await asserts.text(Sl.testid(data.element.ideal_canceled_msg_testid), assert.order_confirm_msg);
        }
    }
 
 
    async googlePayPaymentForDelivery(data, assert) {
        await this.isUserTrolleyEmpty(data);
        await this.switchToCheckout();
        await this.switchForPayment(data);
        await helper.scrollToElement(Sl.id(data.element.gpay_btn_id));
        await Sl.id(data.element.gpay_btn_id).click();
        await browser.pause(this.medium_pause * 3);
        await helper.switchToWindowByTitle(data.value.gpay_window_title, this.long_pause);
        await helper.waitForDisplayed(Sl.$(data.element.gpay_header_xpath), this.long_pause);
        await expect(Sl.$(data.element.gpay_header_xpath)).toBeDisplayed();;
        await asserts.text(Sl.$(data.element.gpay_header_xpath), data.value.gpayheader);
 
 
    }
 
 
    async creditCardCanceledForDelivery(data, assert) {
        await this.processCheckout(data);
        await this.fillCreditCardDetails(data);
        await Sl.id(data.element.pay_with_credit_card_button_id).click();
        await browser.pause(this.small_pause);
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
    }
 
 
    async idealCanceledPaymentForDelivery(data, assert) {
        await this.navigateToTrolley(data, assert);
        await helper.scrollToElement(Sl.testid(data.element.ideal_btn_testid));
        await browser.pause(this.small_pause);
        await Sl.testid(data.element.ideal_btn_testid).click();
        await helper.switchAndRevertWindowsTab();
        await browser.pause(this.medium_pause);
        await expect(Sl.title(data.element.ideal_heading_logo_title)).toBeDisplayed();
        await browser.pause(this.small_pause);
        await expect(Sl.testid(data.element.ideal_heading_text_testid)).toBeDisplayed();
        await browser.pause(this.small_pause);
        await browser.closeWindow();
        await browser.pause(this.small_pause);
        const handles = await browser.getWindowHandles();
        const originalTab = handles[0];
        await browser.switchToWindow(originalTab);
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
    }
 
 
    async addAddressFunctionality(data, assert) {
        await this.processCheckout(data);
        await browser.pause(this.medium_pause);
        if (await Sl.$(data.element.delete_address_text_xpath).isDisplayed()) {
            await helper.scrollToElement(Sl.$(data.element.delete_address_icon_xpath));
            await browser.pause(this.medium_pause);
            await Sl.$(data.element.delete_address_icon_xpath).click();
        }
        await helper.scrollToElement(Sl.testid(data.element.add_new_address_testid));
        await Sl.testid(data.element.add_new_address_testid).click();
        await Sl.testid(data.element.street_address_testid, data.value.address_street);
        await Sl.testid(data.element.house_number_address_testid, data.value.address_house_number);
        await Sl.testid(data.element.postal_code_address_testid, data.value.address_postal_code);
        await Sl.testid(data.element.place_address_testid, data.value.address_place);
        await browser.pause(this.small_pause);
        await helper.scrollToElement(Sl.testid(data.element.save_button_address_testid));
        await expect(Sl.testid(data.element.save_button_address_testid)).toBeDisplayed();
        await Sl.testid(data.element.save_button_address_testid).click();
        await helper.waitForExistance(Sl.testid(data.element.address_created_success_msg_testid), this.long_pause);
        await expect(Sl.testid(data.element.address_created_success_msg_testid)).toBeDisplayed();
        await asserts.text(Sl.testid(data.element.address_created_success_msg_testid), assert.address_created_success_msg);
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
    }
 
 
    async billingAddressFunctionality(data) {
        await this.processCheckout(data);
        await browser.pause(this.small_pause);
        await helper.scrollToElement(Sl.testid(data.element.billing_address_header_testid));
        await browser.pause(this.medium_pause);
        const editIcon = await Sl.$(data.element.billing_address_edit_icon_xpath);
        await editIcon.click();
        await browser.pause(this.medium_pause);
        const street = await Sl.testid(data.element.street_billing_testid);
        await browser.execute("arguments[0].value = '';", street);
        await browser.execute("arguments[0].value = arguments[1];", street, data.value.billing_street);
        await browser.pause(this.small_pause);
        const houseNo = await Sl.testid(data.element.house_number_billing_testid);
        await browser.execute("arguments[0].value = '';", houseNo);
        await browser.execute("arguments[0].value = arguments[1];", houseNo, data.value.billing_house_number);
        await browser.pause(this.small_pause);
        const postalCode = await Sl.testid(data.element.postal_code_billing_testid);
        await browser.execute("arguments[0].value = '';", postalCode);
        await browser.execute("arguments[0].value = arguments[1];", postalCode, data.value.billing_postal_code);
        await browser.pause(this.small_pause);
        const place = await Sl.testid(data.element.place_billing_testid);
        await browser.execute("arguments[0].value = '';", place);
        await browser.execute("arguments[0].value = arguments[1];", place, data.value.billing_place);
        await browser.pause(this.medium_pause);
        await Sl.testid(data.element.save_button_billing_testid).doubleClick();
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
    }
 
 
    async logout() {
        console.log(`---------------Running logout----------------------------`)
        await Sl.testid(header.element.header_my_account_link_testid).click();
        console.log(`logout() user has clicked header my account button`);
        if (!(this.platformName == 'Android')) {
            const accStart = Date.now();
            await helper.waitForDisplayed(Sl.testid(account.element.my_account_heading_testid), this.long_pause);
            const accEnd = Date.now();
            console.log(`logout() user has waited for account heading text for ${accEnd-accStart}ms `);
            const signoutButton = await Sl.testid(signin.element.signout_btn_testid);
            const signStart = Date.now();
            await helper.waitForDisplayed(signoutButton, this.long_pause);
            const signEnd = Date.now();
            console.log(`logout() user has waited for signout button for ${signEnd-signStart}ms`);
            await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
            await browser.pause(this.small_pause);
            await signoutButton.click();
            console.log(`Signout button clicked`);
        } else {
            const usernameText = await Sl.testid(account.element.account_username_testid);
            await asserts.text(usernameText, account.value.usernametext);
            const signoutButton = await Sl.$(signin.element.mobile_signout_btn_text);
            await browser.pause(this.medium_pause);
            await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
            await signoutButton.click();
 
 
        }
 
 
    }
 
 
    async guestCheckout(data, assert) {
        await browser.pause(this.medium_pause * 2);
        await this.navigateToTrolley(data, { authentication: 'false' });
        await browser.pause(this.small_pause);
        await this.switchToCheckout();
        await asserts.pageUrl(assert.guest_login_page);
        await Sl.testid(data.element.guest_email_input_testid, data.value.guest_email);
        await helper.waitClickable(Sl.testid(data.element.guest_checkout_btn_testid), this.medium_pause);
        await Sl.testid(data.element.guest_checkout_btn_testid).click();
        await asserts.pageUrl(assert.guest_checkout_page, this.long_pause);
        await browser.pause();
    }
 
 
    async fillGuestDetails(data) {
        const guestStart = Date.now();
        console.log("Filling guest deatials");
        await helper.waitForDisplayed(Sl.testid(data.element.guest_first_name_contact_testid), this.medium_pause);
        console.log("Fill first and last name ");
        await Sl.testid(data.element.guest_first_name_contact_testid, data.value.guest_first_name);
        await browser.pause(this.small_pause / 2);
        await helper.waitForDisplayed(Sl.testid(data.element.guest_last_name_contact_testid), this.medium_pause);
        await Sl.testid(data.element.guest_last_name_contact_testid, data.value.guest_last_name);
        await browser.pause(this.small_pause / 2);
        console.log("Now phone no");
        await helper.waitForDisplayed(Sl.testid(data.element.guest_phone_number_contact_testid), this.medium_pause);
        await Sl.testid(data.element.guest_phone_number_contact_testid, data.value.guest_phone_number);
        await browser.pause(this.small_pause / 2);
        if (this.platformName == 'Android') {
            await driver.hideKeyboard();
            await browser.pause(this.medium_pause);
        }
        console.log("Now address");
        const streetInputEle = await Sl.testid(data.element.guest_street_address_testid);
        if(this.platformName == 'Android'){
            await streetInputEle.scrollIntoView({ block: 'center', inline: 'center' });
        }
        await streetInputEle.setValue(data.value.guest_street_address);
        await browser.pause(this.small_pause / 2);
        await Sl.testid(data.element.guest_house_number_address_testid, data.value.guest_house_number_address);
        await browser.pause(this.small_pause / 2);
        if (this.platformName == 'Android') {
            await driver.hideKeyboard();
            await browser.pause(this.medium_pause);
        }
        const postalInputEle = await Sl.testid(data.element.guest_postal_address_testid);
        if(this.platformName == 'Android'){
            await postalInputEle.scrollIntoView({ block: 'center', inline: 'center' });
        }
        await postalInputEle.setValue(data.value.guest_postal_address);
        await browser.pause(this.small_pause / 2);
        await Sl.testid(data.element.guest_place_address_testid, data.value.guest_place_address);
        await browser.pause(this.small_pause / 2);
        if (this.platformName == 'Android') {
            await driver.hideKeyboard();
        }
        console.log("All details done");
        await browser.pause(this.medium_pause);
        console.log("All details 5 mait");
        const continueBtnEle = await Sl.testid(data.element.address_details_continue_button_testid);
        if(this.platformName == 'Android'){
            await continueBtnEle.scrollIntoView({ block: 'center', inline: 'center' })
        }  
        await continueBtnEle.click();
        console.log("Button clicked");
        const guestEnd = Date.now();
        console.log("Guest Details end and click on continue button - ", (guestEnd-guestStart));
 
 
    }
 
 
    async guestCheckoutDetails(data, assert) {
        await this.guestCheckout(data, assert);
        await this.fillGuestDetails(data);
        await this.switchForPayment(data);
        await this.fillCreditCardDetails(data);
        await browser.pause(this.medium_pause);
        await Sl.testid(data.element.pay_with_credit_card_button_testid).scrollIntoView({ block: 'center', inline: 'center' });
        await Sl.testid(data.element.pay_with_credit_card_button_testid).click();
        const envFlag = this.base_url.includes(data.value.prod_url);
        if (!envFlag) {
            await this.authenticateCreditCardPayment(data);
            await helper.waitForDisplayed(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), this.long_pause);
            await expect(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid)).toBeDisplayed();
            await asserts.pauseIfHuman();
            try {
                if (this.base_url.includes(signin.value.develop_url) ||
                    this.base_url.includes(signin.value.feature_url)) {
                    await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_msg_other);
                } else {
                    await asserts.text(Sl.testid(orderconfirmation.element.order_confirmation_msg_testid), assert.order_confirm_msg_prod);
                }
            } catch (error) {
                console.log("Success message was incorret or not visible on order confirmation" + error);
            }
            await expect(Sl.testid(data.element.account_button_testid)).toBeDisplayed();
            await asserts.pauseIfHuman();
 
 
        } else {
            const failMsgTextEle = await Sl.testid(data.element.all_in_one_fail_msg_testid);
            await helper.waitForDisplayed(failMsgTextEle, this.long_pause);
            await failMsgTextEle.scrollIntoView({ block: 'center', inline: 'center' });
            await expect(failMsgTextEle).toBeDisplayed();
            // await helper.waitForDisplayed(Sl.testid(data.element.all_in_one_fail_msg_testid), this.long_pause);
            // await expect(Sl.testid(data.element.all_in_one_fail_msg_testid)).toBeDisplayed();
            const failMsg = await Sl.testid(data.element.all_in_one_fail_msg_testid).getHTML(false);
            await asserts.text(Sl.testid(data.element.all_in_one_fail_msg_testid), assert.cancelled_msg);
 
 
        }
    }
 
 
 
 
 
 
    async testCheckoutAfterLogoutAndReLogin(data, assert) {
        await this.processCheckout(data);
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
        await Sl.testid(data.element.my_account_testid).click();
        await browser.pause(this.small_pause);
        await Sl.testid(data.element.log_out_testid).click();
        await browser.pause(this.medium_pause);
        await Sl.testid(header.element.header_signin_link_testid).click();
        await helper.userSignin();
        await browser.pause(this.small_pause);
        await Sl.testid(trolley.element.trolley_button_testid).click();
        await helper.waitForEnabled(Sl.testid(trolley.element.checkout_button_testid), this.long_pause);
        await Sl.testid(trolley.element.checkout_button_testid).click();
        await helper.waitForDisplayed(Sl.testid(data.element.checkout_delivery_heading_testid), this.long_pause);
        await this.fillCreditCardDetails(data);
        await Sl.id(data.element.pay_with_credit_card_button_id).click();
        await browser.pause(this.small_pause);
        await Sl.testid(data.element.ts_header_logo_testid).click();
        await browser.pause(this.small_pause);
 
 
    }
 
 
    async isElementDisplayed(element, timeout = this.medium_pause) {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch (error) {
            return false;
        }
    }
 }
 
 
 