import Page from "../webdriverio-helper/Page.js";
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';
import Account from "../data/account.js";


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper;
let header = new Header();
let data = new Account();


export default class AccountPage extends Page {
    constructor() {
        super();
        this.params.page.id = 'AC';
        this.params.page.name = 'Account';
        this.params.page.path = '/account/home';
        this.params.page.url = this.base_url + this.params.page.path;
        this.params.page.url += this.disable_protection_string
    }


    async open() {
        if (!(this.platformName == 'Android')) {
            await browser.maximizeWindow();
        }
        await super.open(this.params.page.url);
        await browser.pause(this.medium_pause * 2);
        await helper.addCookies();
        await helper.acceptConsent();
        await browser.pause(this.small_pause / 2);
        await helper.userSignin();
        await Sl.testid(header.element.header_my_account_link_testid).click();

    }

    async runnerFlag() {
        return this.platformName == 'Android';
    }


    async assertElementAndText(elements, assert) {
        const element = await elements;
        await helper.waitForDisplayed(element, this.medium_pause * 3);
        if (this.platformName == 'Android') {
            await element.scrollIntoView({ block: 'center', inline: 'center' });
            await helper.highlightElement(element, this.small_pause / 2);
        }
        await expect(element).toBeDisplayed();
        await browser.pause(this.small_pause / 4);
        await asserts.text(element, assert);
    }


    async welcomeMessageVisibility(data, assert) {
        if (this.platformName == 'Android') {
            return this.skip();
        }
        await this.assertElementAndText(Sl.testid(data.element.welcome_message_testid), assert);

    }


    async myAccountVisibility(data, assert) {
        if (this.platformName == 'Android') {
            return this.skip();
        }
        if (this.base_url.includes(data.value.develop_url) ||
            this.base_url.includes(data.value.feature_url)) {
            await this.assertElementAndText(Sl.testid(data.element.my_account_heading_testid), assert.other);
        } else {
            await this.assertElementAndText(Sl.testid(data.element.my_account_heading_testid), assert.prod);
        }
    }


    async accountUsernameVisibility(data, assert) {
        await this.assertElementAndText(Sl.testid(data.element.account_username_testid), assert);
    }


    async emailAddressVisibility(data, assert) {
        await this.assertElementAndText(Sl.testid(data.element.account_email_address_testid), assert);
    }


    async phoneNumberVisibility(data, assert) {
        await this.assertElementAndText(Sl.testid(data.element.account_phone_number_testid), assert);
    }


    async appBannerVisibility(data, assert) {
        await expect(Sl.testid(data.element.app_banner_img_testid)).toBeDisplayed();
        await expect(Sl.testid(data.element.app_banner_img_testid)).toHaveAttribute(assert.attribute, expect.stringContaining(assert.value));
    }


    //functionality removed
    async digitalToolstationCardVisibility(data, assert) {
        await this.assertElementAndText(Sl.$(data.element.digital_toolstation_card_text), assert)
    }


    async profileLinkVisibility(data, assert) {
        if (this.platformName == 'Android') {
            return this.skip();
        }
        await this.assertElementAndText(Sl.testid(data.element.profile_link_testid), assert);
    }


    async ordersLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            await this.assertElementAndText(Sl.testid(data.element.orders_link_testid), assert);
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_orders_link_xpath), assert);
        }

    }


    async orderAgainLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            await this.assertElementAndText(Sl.testid(data.element.order_again_link_testid), assert);
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_ordersagain_link_xpath), assert)
        }


    }


    async savelistLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            await this.assertElementAndText(Sl.testid(data.element.save_list_link_testid), assert.prod)
        } else {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.$(data.element.mobile_dev_savelist_link_xpath), assert.mobile_dev);
            } else {
                await this.assertElementAndText(Sl.$(data.element.mobile_savelist_link_xpath), assert.prod);
            }
        }
    }


    async stockAlertLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.stock_notification_link_testid), assert.other);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.stock_notification_link_testid), assert.prod);
            }
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_stocknotify_link_xpath), assert.prod);
        }
    }


    async messageCenterLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.message_center_link_testid), assert.other);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.message_center_link_testid), assert.prod);
            }

        } else {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.$(data.element.mobile_dev_msgcenter_link_xpath), assert.mobile_dev);
            } else {
                await this.assertElementAndText(Sl.$(data.element.mobile_msgcenter_link_xpath), assert.prod);
            }
        }
    }


    async procardLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.procard_link_testid), assert.other);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.procard_link_testid), assert.prod);
            }
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_procard_link_xpath), assert.prod);
        }
    }


    async addressesLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.addresses_link_testid), assert);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.addresses_link_testid), assert);
            }
        } else {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.$(data.element.mobile_addresses_link_xpath), assert);
            } else {
                await this.assertElementAndText(Sl.$(data.element.mobile_addresses_link_xpath), assert);
            }
        }
    }


    async defaultBranchLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.default_branch_link_testid), assert.other);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.default_branch_link_testid), assert.prod);
            }
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_defaultbranch_link_xpath), assert.prod);
        }
    }


    async accountPreferencesLinkVisibility(data, assert) {
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) ||
                this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.account_preferences_link_testid), assert.other);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.account_preferences_link_testid), assert.prod);
            }
        } else {
            await this.assertElementAndText(Sl.$(data.element.mobile_accntpref_link_xpath), assert.prod);
        }
    }


    async faqLinkVisibility(data, assert) {
        await this.assertElementAndText(Sl.testid(data.element.faq_link_testid), assert)
    }


    async aboutUsLinkVisibility(data, assert) {
        if (this.base_url.includes(data.value.develop_url) ||
            this.base_url.includes(data.value.feature_url)) {
            await this.assertElementAndText(Sl.testid(data.element.about_us_link_testid), assert.other);
        } else {
            await this.assertElementAndText(Sl.testid(data.element.about_us_link_testid), assert.prod);
        }


    }


    async signOutButtonVisibility(data, assert) {

        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.testid(data.element.sign_out_btn_testid), assert.mobile_dev);
            } else {
                await this.assertElementAndText(Sl.testid(data.element.sign_out_btn_testid), assert.prod);
            }
        } else {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.assertElementAndText(Sl.$(data.element.mobile_dev_signout_btn_xpath), assert.mobile_dev);
            } else {
                await this.assertElementAndText(Sl.$(data.element.mobile_signout_btn_text), assert.prod);
            }
        }
    }

    async clickAndCheckUrlAndPageHeading(eles, url, checkeles, checktext) {
        const ele = await eles;
        await helper.waitForDisplayed(ele, this.long_pause);
        await ele.scrollIntoView({ block: 'center', inline: 'center' })
        await helper.highlightElement(ele);
        await ele.click();
        await browser.pause(this.small_pause);
        await asserts.pageUrl(url);
        const checkele = await checkeles;
        await helper.waitForDisplayed(checkele, this.long_pause);
        await helper.highlightElement(checkele);
        await asserts.text(checkele, checktext);

    }


    async profileLinkFunctionality(data, assert) {
        const profileEle = Sl.testid(data.element.profile_link_testid);
        const headingEle = Sl.testid(data.element.profile_heading_testid);
        await this.clickAndCheckUrlAndPageHeading(profileEle, assert.url, headingEle, assert.heading)
    }


    async ordersLinkFunctionality(data, assert) {
        const orderEle = Sl.testid(data.element.orders_link_testid);
        const orderMobEle = Sl.$(data.element.mobile_orders_link_xpath);
        const headingEle = Sl.testid(data.element.order_heading_testid);
        if (!(this.platformName == 'Android')) {
            await this.clickAndCheckUrlAndPageHeading(orderEle, assert.url, headingEle, assert.heading)
        } else {
            await this.clickAndCheckUrlAndPageHeading(orderMobEle, assert.url, headingEle, assert.heading)
        }
    }


    async orderAgainLinkFunctionality(data, assert) {
        const orderAgainEle = Sl.testid(data.element.order_again_link_testid);
        const orderAgainMobEle = Sl.$(data.element.mobile_ordersagain_link_xpath);
        const orderAgainHeadingEle = Sl.testid(data.element.order_again_page_heading_testid);

        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.clickAndCheckUrlAndPageHeading(orderAgainEle, assert.url, orderAgainHeadingEle, assert.heading_develop)
            } else {
                await this.clickAndCheckUrlAndPageHeading(orderAgainEle, assert.url, orderAgainHeadingEle, assert.heading)
            }
        } else {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.clickAndCheckUrlAndPageHeading(orderAgainMobEle, assert.url, orderAgainHeadingEle, assert.heading_develop)
            } else {
                await this.clickAndCheckUrlAndPageHeading(orderAgainMobEle, assert.url, orderAgainHeadingEle, assert.heading)
            }
        }

    }


    async savelistLinkFunctionality(data, assert) {
        const savlistEle = Sl.testid(data.element.save_list_link_testid);
        const savlistMobEle = Sl.$(data.element.mobile_savelist_link_xpath);
        const savListMobDevEle = Sl.$(data.element.mobile_dev_savelist_link_xpath);
        const savlistHeadingEle = Sl.testid(data.element.save_list_page_heading_text);
        const savlistHeadingMobEle = Sl.testid(data.element.mobile_savelist_heading_develop_testid);

        if (!(this.platformName == 'Android')) {
            this.clickAndCheckUrlAndPageHeading(savlistEle, assert.url, savlistHeadingEle, assert.heading);
        } else {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                this.clickAndCheckUrlAndPageHeading(savListMobDevEle, assert.url, savlistHeadingMobEle, assert.heading);
            } else {
                this.clickAndCheckUrlAndPageHeading(savlistMobEle, assert.url, savlistHeadingMobEle, assert.heading);
            }

        }

    }


    async stockNotificationLinkFunctionality(data, assert) {
        const stockLinkEle = Sl.testid(data.element.stock_notification_link_testid);
        const stockMobLinkDevEle = Sl.$(data.element.mobile_stocknotify_link_xpath);
        const stockHeadingEle = Sl.testid(data.element.stocknotify_heading_testid);
        const  stockHeadingMobEle = Sl.testid(data.element.mobile_stocknotify_heading_testid);
        if (!(this.platformName == 'Android')) {
            if(this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)){
            await this.clickAndCheckUrlAndPageHeading(stockLinkEle, assert.url, stockHeadingEle, assert.heading_develop)
            }else{
                await this.clickAndCheckUrlAndPageHeading(stockLinkEle, assert.url, stockHeadingEle, assert.heading_other)    
            }
        } else {
            await this.clickAndCheckUrlAndPageHeading(stockMobLinkDevEle, assert.url, stockHeadingMobEle, assert.heading_develop)
        }

    }


    async messageCenterLinkFunctionality(data, assert) {
        const messageCenterLinkEle = Sl.testid(data.element.message_center_link_testid);
        const messageCenterMobLinkEle = Sl.$(data.element.mobile_msgcenter_link_xpath);
        const messageCenterMobDevLinkEle = Sl.$(data.element.mobile_dev_msgcenter_link_xpath);
        const messagecenterHeadingEle = Sl.testid(data.element.msgcenter_heading_testid);
        const messageCenterMobileHeadingEle = Sl.testid(data.element.general_heading_testid);
        if (!(this.platformName == 'Android')) {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.clickAndCheckUrlAndPageHeading(messageCenterLinkEle, assert.url, messagecenterHeadingEle, assert.heading_dev);
            } else {
                await this.clickAndCheckUrlAndPageHeading(messageCenterLinkEle, assert.url, messagecenterHeadingEle, assert.heading_prod);
            }
        } else {
            if (this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)) {
                await this.clickAndCheckUrlAndPageHeading(messageCenterMobDevLinkEle, assert.url, messageCenterMobileHeadingEle, assert.heading_mobile);
            } else {
                await this.clickAndCheckUrlAndPageHeading(messageCenterMobLinkEle, assert.url, messageCenterMobileHeadingEle, assert.heading_mobile);
            }
        }
    }


    async procardLinkFunctionality(data, assert) {
        const proCardLinkEle = Sl.testid(data.element.procard_link_testid);
        const proCardMobLinkEle = Sl.$(data.element.mobile_procard_link_xpath);
        const proCardHeadingEle = Sl.testid(data.element.procard_heading_testid);
        const proCardMobHeadingEle = Sl.testid(data.element.mobile_procard_heading_testid);
        
        if (!(this.platformName == 'Android')) {
            if(this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)){
                 await this.clickAndCheckUrlAndPageHeading(proCardLinkEle, assert.url, proCardHeadingEle, assert.heading_dev);
            }else{
                await this.clickAndCheckUrlAndPageHeading(proCardLinkEle, assert.url, proCardHeadingEle, assert.heading );
            }
           
        } else {
            if(this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)){
                await this.clickAndCheckUrlAndPageHeading(proCardMobLinkEle, assert.url, proCardMobHeadingEle, assert.heading_dev );
            }else{
                await this.clickAndCheckUrlAndPageHeading(proCardMobLinkEle, assert.url, proCardMobHeadingEle, assert.heading);
            }
           
        }
        
    }


    async addressesLinkFunctionality(data, assert) {
        const addressLinkEle = Sl.testid(data.element.addresses_link_testid);
        const addressMobLinkEle = Sl.$(data.element.mobile_addresses_link_xpath);
        const addressHeadingEle = Sl.testid(data.element.address_heading_testid);
        if (!(this.platformName == 'Android')) {
           await this.clickAndCheckUrlAndPageHeading(addressLinkEle, assert.url, addressHeadingEle, assert.heading);
        } else {
            await this.clickAndCheckUrlAndPageHeading(addressMobLinkEle, assert.url, addressHeadingEle, assert.heading); 
        }
    }


    async defaultBranchLinkFunctionality(data, assert) {
        const defaultBranchLinkEle = Sl.testid(data.element.default_branch_link_testid);
        const defaultBranchMobLinkEle = Sl.$(data.element.mobile_defaultbranch_link_xpath);
        const defaultBranchHeadingEle = Sl.testid(data.element.defaultbranch_heading_testid);
        const defaultBranchMobHeadingEle = Sl.testid(data.element.mobile_dflbrnch_heading_testid);
        if (!(this.platformName == 'Android')) {
          await this.clickAndCheckUrlAndPageHeading(defaultBranchLinkEle, assert.url, defaultBranchHeadingEle, assert.heading);
        } else {
            await this.clickAndCheckUrlAndPageHeading(defaultBranchMobLinkEle, assert.url, defaultBranchMobHeadingEle, assert.heading);
        }     
        
    }


    async accountPreferencesLinkFunctionality(data, assert) {
        const accntPrefEle = Sl.testid(data.element.account_preferences_link_testid);
        const accntPrefMobEle = Sl.$(data.element.mobile_accntpref_link_xpath);
        const accntPrefTitle = Sl.testid(data.element.accountpref_heading_testid);

        if (!(this.platformName == 'Android')) {
           await this.clickAndCheckUrlAndPageHeading(accntPrefEle, assert.url, accntPrefTitle, assert.heading);
        } else {
         await this.clickAndCheckUrlAndPageHeading(accntPrefMobEle, assert.url, accntPrefTitle, assert.heading);
        }
    }


    async faqLinkFunctionality(data, assert) {
        const faqLinkEle = Sl.testid(data.element.faq_link_testid);
        const faqLinkHeadingEle = Sl.$(data.element.faq_heading_xpath);
        await this.clickAndCheckUrlAndPageHeading(faqLinkEle, assert.url, faqLinkHeadingEle, assert.title);
        // await Sl.testid(data.element.faq_link_testid).click();
        // await browser.pause(this.medium_pause);
        // await asserts.pageUrl(assert.url);
        // await asserts.pageTitle(assert.title);
    }


    async aboutUsLinkFunctionality(data, assert) {
        const aboutUsLinkEle = Sl.testid(data.element.about_us_link_testid);
        const aboutUsLinkHeadingEle = Sl.testid(data.element.general_heading_testid);
        await this.clickAndCheckUrlAndPageHeading(aboutUsLinkEle, assert.url, aboutUsLinkHeadingEle, assert.title);
        // await Sl.testid(data.element.about_us_link_testid).click();
        // await browser.pause(this.medium_pause);
        // await asserts.pageUrl(assert.url);
        // await asserts.pageTitle(assert.title)
    }


    async signoutButtonFunctionality(data, assert) {
        await browser.pause(this.medium_pause);
        if (!(this.platformName == 'Android')) {
            const signoutButton = await Sl.testid(data.element.sign_out_btn_testid);
            await browser.pause(this.medium_pause);
            await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
            await signoutButton.click();
        } else {
            if(this.base_url.includes(data.value.develop_url) || this.base_url.includes(data.value.feature_url)){
                const signoutButton = await Sl.$(data.element.mobile_dev_signout_btn_xpath);
                await browser.pause(this.medium_pause);
                await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
                await signoutButton.click();
            }else{
            const signoutButton = await Sl.$(data.element.mobile_signout_btn_text);
            await browser.pause(this.medium_pause);
            await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
            await signoutButton.click();
            }
        }
        await asserts.pageUrl(assert);
        await expect(Sl.testid(header.element.header_signin_link_testid)).toBeDisplayed();
    }
}
