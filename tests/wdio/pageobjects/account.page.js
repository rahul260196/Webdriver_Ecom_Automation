import Page from "../webdriverio-helper/Page.js";
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper;
let header = new Header();


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
       await browser.pause(this.small_pause);
       await helper.acceptConsent();
       await browser.pause(this.small_pause / 2);
       await helper.userSignin();
       await Sl.testid(header.element.header_my_account_link_testid).click();
   }


   async assertElementAndText(element, assert) {
       await helper.waitForDisplayed(element, this.medium_pause);
       await expect(element).toBeDisplayed();
       await asserts.text(element, assert);
   }


   async welcomeMessageVisibility(data, assert) {
       await this.assertElementAndText(Sl.testid(data.element.welcome_message_testid), assert);


   }


   async myAccountVisibility(data, assert) {
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
       await expect(Sl.$(data.element.digital_toolstation_card_text)).toBeDisplayed();
       await asserts.text(Sl.$(data.element.digital_toolstation_card_text), assert);
   }


   async profileLinkVisibility(data, assert) {
       await expect(Sl.testid(data.element.profile_link_testid)).toBeDisplayed();
       await asserts.text(Sl.$(data.element.profile_link_text_xpath), assert);
   }


   async ordersLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.orders_link_testid)).toBeDisplayed();
           await asserts.text(Sl.testid(data.element.orders_link_testid), assert);
       } else {
           await expect(Sl.$(data.element.mobile_orders_link_xpath)).toBeDisplayed();
           await asserts.text(Sl.$(data.element.mobile_orders_link_xpath), assert);
       }


   }


   async orderAgainLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.order_again_link_testid)).toBeDisplayed();
           await asserts.text(Sl.testid(data.element.order_again_link_testid), assert);
       } else {
           await expect(Sl.$(data.element.mobile_ordersagain_link_xpath)).toBeDisplayed();
           await asserts.text(Sl.$(data.element.mobile_ordersagain_link_xpath), assert);
       }


   }


   async savelistLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.save_list_link_testid)).toBeDisplayed();
           await asserts.text(Sl.testid(data.element.save_list_link_text_testid), assert);
       } else {
           await expect(Sl.$(data.element.mobile_savelist_link_xpath)).toBeDisplayed();
           await asserts.text(Sl.$(data.element.mobile_savelist_link_xpath), assert);
       }
   }


   async stockAlertLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.stock_notification_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_stocknotify_link_xpath)).toBeDisplayed();
       }
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url)) {
           await asserts.text(Sl.$(data.element.stock_notification_link_text_xpath), assert.other);
       } else {
           await asserts.text(Sl.$(data.element.stock_notification_link_text_xpath), assert.prod);
       }
   }


   async messageCenterLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.message_center_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_msgcenter_link_xpath)).toBeDisplayed();
       }


       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url)) {
           await asserts.text(Sl.$(data.element.message_center_link_xpath), assert.other);
       } else {
           await asserts.text(Sl.$(data.element.message_center_link_xpath), assert.prod);
       }


   }


   async procardLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.procard_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_procard_link_xpath)).toBeDisplayed();
       }
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url)) {
           await asserts.text(Sl.$(data.element.procard_link_text_xpath), assert.other);
       } else {
           await asserts.text(Sl.$(data.element.procard_link_text_xpath), assert.prod);
       }
   }


   async addressesLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.addresses_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_addresses_link_xpath)).toBeDisplayed();
       }
       await asserts.text(Sl.$(data.element.addresses_link_text_xpath), assert);
   }


   async defaultBranchLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.default_branch_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_defaultbranch_link_xpath)).toBeDisplayed();
       }
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url)) {
           await asserts.text(Sl.$(data.element.default_branch_link_text_xpath), assert.other);
       } else {
           await asserts.text(Sl.$(data.element.default_branch_link_text_xpath), assert.prod);
       }
   }


   async accountPreferencesLinkVisibility(data, assert) {
       if (!(this.platformName == 'Android')) {
           //await Sl.testid(data.element.account_preferences_link_testid).scrollIntoView({ block: 'center', inline: 'center' });
           await expect(Sl.testid(data.element.account_preferences_link_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_accntpref_link_xpath)).toBeDisplayed();
       }
       await browser.pause(this.medium_pause);
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url)) {
           await asserts.text(Sl.$(data.element.account_preferences_link_text_xpath), assert.other);
       } else {
           await asserts.text(Sl.$(data.element.account_preferences_link_text_xpath), assert.prod);
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


   async signOutButtonVisibility(data) {
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.sign_out_btn_testid)).toBeDisplayed();
       } else {
           await expect(Sl.$(data.element.mobile_signout_btn_text)).toBeDisplayed();
       }


   }


   async profileLinkFunctionality(data, assert) {
       await Sl.testid(data.element.profile_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async ordersLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.orders_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_orders_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.testid(data.element.orders_page_heading_testid), assert.heading);




   }


   async orderAgainLinkFunctionality(data, assert) {


       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.order_again_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_ordersagain_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.testid(data.element.order_again_page_heading_testid), assert.heading);


   }


   async savelistLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.save_list_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_savelist_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.testid(data.element.savelist_title_testid), assert.heading);
   }


   async stockNotificationLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.stock_notification_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_stocknotify_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       if (!(this.platformName == 'Android')) {


       } else {
           await asserts.text(Sl.testid(data.element.outofstock_title_testid), assert.heading);
       }


   }


   async messageCenterLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.message_center_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_msgcenter_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async procardLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.procard_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_procard_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async addressesLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.addresses_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_addresses_link_xpath).click();
       }


       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async defaultBranchLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.default_branch_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_defaultbranch_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async accountPreferencesLinkFunctionality(data, assert) {
       if (!(this.platformName == 'Android')) {
           await Sl.testid(data.element.account_preferences_link_testid).click();
       } else {
           await Sl.$(data.element.mobile_accntpref_link_xpath).click();
       }
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert);
   }


   async faqLinkFunctionality(data, assert) {
       await Sl.testid(data.element.faq_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       await asserts.pageTitle(assert.title);
   }


   async aboutUsLinkFunctionality(data, assert) {
       await Sl.testid(data.element.about_us_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert.url);
       await asserts.pageTitle(assert.title)
   }


   async signoutButtonFunctionality(data, assert) {
       await browser.pause(this.medium_pause);
       if (!(this.platformName == 'Android')) {
           const signoutButton = await Sl.testid(data.element.sign_out_btn_testid);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await signoutButton.click();
       } else {
           const signoutButton = await Sl.$(data.element.mobile_signout_btn_text);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await signoutButton.click();
       }
       await asserts.pageUrl(assert);
       await expect(Sl.testid(header.element.header_signin_link_testid)).toBeDisplayed();
   }
}
