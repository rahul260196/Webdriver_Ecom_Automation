import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from '../webdriverio-helper/Asserts.js';
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';
import Signup from '../data/signup.js';
import Account from '../data/account.js';


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let header = new Header();
let signup = new Signup();
let account = new Account();


export default class SigninPage extends Page {
   constructor() {
       super();
       this.params.page.id = 'SI';
       this.params.page.name = 'Signin';
       this.params.page.path = '/login';
       this.params.page.url = this.base_url + this.params.page.path;
   }


   async open() {
       if (!(this.platformName == 'Android')) {
           await browser.maximizeWindow();
       }
       await super.open(this.params.page.url);
       await helper.addCookies();
       await helper.acceptConsent();
       await asserts.pauseIfHuman(this.small_pause);
   }


   async signinValidCredential(data, assert) {
       await helper.userSignin(data.value.email, data.value.cred_secure);
       //  await browser.pause(this.small_pause);
       await helper.waitForAbsent(Sl.testid(data.element.signin_btn_testid), this.long_pause * 2);
       await asserts.pageUrl(this.base_url + '/');
       const myAccountButton = await Sl.testid(header.element.header_my_account_link_testid);
       await expect(myAccountButton).toHaveAttribute(assert.attribute, assert.value);
       await browser.pause(this.small_pause);
       await myAccountButton.click();
       await asserts.pauseIfHuman(this.small_pause);
       if (!(this.platformName == 'Android')) {
           await expect(Sl.testid(data.element.myaccount_heading_testid)).toBeDisplayed();
       } else {
           const usernameText = await Sl.testid(account.element.account_username_testid);
           await asserts.text(usernameText, assert.usernametext);
       }
   }


   async signoutFunctionality(data) {
       await helper.waitForDisplayed(Sl.testid(header.element.my_account_header_link_testid), this.long_pause);
       if (!(await Sl.testid(header.element.header_my_account_link_testid).isDisplayed()));
       await helper.userSignin();
       await Sl.testid(header.element.header_my_account_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(this.base_url + data.value.account_url, this.long_pause);
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(data.element.myaccount_heading_testid), this.long_pause);
           await expect(Sl.testid(data.element.myaccount_heading_testid)).toBeDisplayed();
           const signoutButton = await Sl.testid(data.element.signout_btn_testid);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           // await browser.pause(this.medium_pause);
           await signoutButton.click();
       } else {
           const usernameText = await Sl.testid(account.element.account_username_testid);
           await asserts.text(usernameText, data.value.usernametext);
           const signoutButton = await Sl.$(data.element.mobile_signout_btn_text);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           // await browser.pause(this.medium_pause);
           await signoutButton.click();
       }
       await asserts.pageUrl(this.base_url + '/');
       await expect(Sl.testid(header.element.header_signin_link_testid)).toBeDisplayed();
       await browser.pause(this.small_pause);


   }


   async signinInvalidEmailAddress(data, assert) {
       if (!(this.platformName == 'Android')) {
       await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
       }
       await helper.userSignin(data.value.invalid_email, data.value.cred_secure);
       if (this.base_url.includes(data.value.prod_url) || this.base_url.includes(data.value.gke_staging_url)
           || this.base_url.includes(data.value.staging_url) || this.base_url.includes(data.value.preprod_url)) {
           await asserts.text(Sl.testid(data.element.email_validation_message_testid), assert.prod);
       } else {
           await asserts.text(Sl.testid(data.element.email_validation_message_testid), assert.other);
       }


   }


   async signinUnregisteredEmail(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await helper.userSignin(data.value.unregistered_email, data.value.cred_secure);
       await helper.waitForDisplayed(Sl.testid(data.element.invalid_credential_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.invalid_credential_testid), assert);
   }


   async signinIncorrectPassword(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await helper.userSignin(data.value.email, data.value.incorrect_cred_secure);
       const validationMessage = await Sl.testid(data.element.invalid_credential_testid);
       await helper.waitForDisplayed(validationMessage, this.long_pause);
       await expect(validationMessage).toBeDisplayed();
   }


   async createAccountLink(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await browser.pause(this.medium_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.create_account_link_testid), this.long_pause);
       await Sl.testid(data.element.signin_btn_testid).moveTo();
       await Sl.testid(data.element.create_account_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert, this.long_pause);
       await expect(Sl.testid(signup.element.signup_heading_testid)).toBeDisplayed();
   }
}
