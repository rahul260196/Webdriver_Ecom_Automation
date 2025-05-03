import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();


export default class FooterPage extends Page {
   constructor() {
       super();
       this.params.page.id = 'FT';
       this.params.page.name = 'Footer';
       this.params.page.url = this.base_url
   }


   async open() {
       await browser.maximizeWindow();
       await super.open(this.params.page.url);
       await browser.pause()
       await helper.addCookies();
       await asserts.pauseIfHuman();
       await helper.acceptConsent();
       await browser.pause(this.medium_pause * 1.6);
   }




   async assertLink(element, assert) {
       await element.scrollIntoView();
       await asserts.pauseIfHuman();
       await element.click();
       await asserts.pauseIfHuman();
       await browser.pause(this.small_pause);
       await asserts.pageUrl(assert, this.long_pause);
   }


   async faqLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.faq_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.$(data.element.faq_page_heading_xpath), this.long_pause);
       await asserts.text(Sl.$(data.element.faq_page_heading_xpath), assert.heading);
   }


   async contactLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.contact_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async paymentMethodLinkFunctionality(data, assert) {
       await browser.pause(this.small_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.payment_method_link_testid), this.long_pause);
       await this.assertLink(Sl.testid(data.element.payment_method_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async deliveryLinkFunctionality(data, assert) {
       await helper.waitForDisplayed(Sl.testid(data.element.delivery_link_testid), this.long_pause);
       await this.assertLink(Sl.testid(data.element.delivery_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       if (this.base_url.includes(data.value.prod_url) ||
           this.base_url.includes(data.value.staging_url) || this.base_url.includes(data.value.gke_staging_url)) {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading_prod);
       } else {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
       }


   }


   async clickAndCollectLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.click_collect_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async exchangeReturnLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.exchange_return_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async siteMapLinkFunctionality(data, assert) {
       await helper.acceptConsent();
       await this.assertLink(Sl.testid(data.element.sitemap_link_testid), assert.url);
   }


   async guaranteeLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.guarantee_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async aboutUsLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.about_us_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async procardLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.procard_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async toolstationAppLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.toolstation_app_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async branchesLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.branches_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.branches_page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.branches_page_heading_text_testid), assert.heading);
   }


   async vacanciesLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.vacancies_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async termsAndConditionLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.terms_and_condition_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async privacyPolicyLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.privacy_policy_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async cookiePolicyLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.cookie_policy_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url) || this.base_url.includes(data.value.pre_prod_url)) {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading.other);
       } else {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading.prod);
       }


   }


   async reviewsLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.reviews_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async weeeLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.weee_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async modernSlaveryLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.modern_slavery_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async blogNewsLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.blogs_news_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.$(data.element.news_heading_text), this.long_pause);
       await asserts.text(Sl.$(data.element.news_heading_text), assert.heading);
   }


   async requestCatelogueLinkFunctionality(data, assert) {
       await Sl.testid(data.element.request_catalogue_link_testid).click();
       await helper.userSignin();
       await helper.waitForPageLoad();
       await this.assertLink(Sl.testid(data.element.request_catalogue_link_testid), assert);
   }


   async facebookLinkFunctionality(data, assert) {
       await Sl.testid(data.element.facebook_link_testid).click();
       await helper.switchWindow(assert);
       await asserts.pageUrl(assert);
       await browser.closeWindow();
       await helper.switchWindow(this.base_url);
   }


   async instagramLinkFunctionility(data, assert) {
       await Sl.testid(data.element.instagram_link_testid).click();
       await helper.switchWindow(assert);
       await asserts.pageUrl(assert);
       await browser.closeWindow();
       await helper.switchWindow(this.base_url);
   }


   async youtubeLinkFunctionality(data, assert) {
       await Sl.testid(data.element.youtube_link_testid).click();
       await helper.switchWindow(assert);
       await asserts.pageUrl(assert);
       await browser.closeWindow();
       await helper.switchWindow(this.base_url);
   }


   async linkedInLinkFunctionality(data, assert) {
       await Sl.testid(data.element.linkedin_link_testid).click();
       await helper.switchWindow(assert);
       await expect(browser).toHaveUrl(expect.stringContaining(assert));
       await browser.closeWindow();
       await helper.switchWindow(this.base_url);
   }


   async bottomPrivacyPolicyLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.bottom_privacy_policy_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading);
   }


   async bottomCookiePolicyLinkFunctionality(data, assert) {
       await this.assertLink(Sl.testid(data.element.bottom_cookie_policy_link_testid), assert.url);
       await helper.waitForDisplayed(Sl.testid(data.element.page_heading_text_testid), this.long_pause);
       if (this.base_url.includes(data.value.develop_url) ||
           this.base_url.includes(data.value.feature_url) || this.base_url.includes(data.value.pre_prod_url)) {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading.other);
       } else {
           await asserts.text(Sl.testid(data.element.page_heading_text_testid), assert.heading.prod);
       }


   }
}
