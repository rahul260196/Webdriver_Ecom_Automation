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
       await browser.pause(this.small_pause);
       await helper.waitForAbsent(Sl.testid(data.element.signin_btn_testid), this.long_pause);
       await asserts.pageUrl(this.base_url + '/');
       const myAccountButton = await Sl.testid(header.element.header_my_account_link_testid);
       await expect(myAccountButton).toHaveAttribute(assert.attribute, assert.value);
       await browser.pause(this.small_pause);
       await helper.highlightElementBeforeClick(myAccountButton);
       await myAccountButton.click();
       if (!(this.platformName == 'Android')) {
           const accountHeaderElement = await Sl.testid(data.element.myaccount_heading_testid);
           await helper.waitForDisplayed(accountHeaderElement, this.medium_pause*2);
           await helper.highlightElement(accountHeaderElement);
           await expect(accountHeaderElement).toBeDisplayed();
       } else {
           const usernameText = await Sl.testid(account.element.account_username_testid);
           await helper.highlightElement(usernameText);
           await asserts.text(usernameText, assert.usernametext);
       }
   }


   async signoutFunctionality(data) {
       const accountButtonElement = await Sl.testid(header.element.my_account_header_link_testid);
       await helper.waitForDisplayed(accountButtonElement, this.long_pause);
       if (!(await Sl.testid(header.element.header_my_account_link_testid).isDisplayed())){
        await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await helper.highlightElementBeforeClick(accountButtonElement);
       await accountButtonElement.click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(this.base_url + data.value.account_url, this.long_pause);
       if (!(this.platformName == 'Android')) {
           const accountHeaderElement = await Sl.testid(data.element.myaccount_heading_testid);
           await helper.waitForDisplayed(accountHeaderElement, this.long_pause);
           await helper.highlightElement(accountHeaderElement);
           await expect(Sl.testid(data.element.myaccount_heading_testid)).toBeDisplayed();
           const signoutButton = await Sl.testid(data.element.signout_btn_testid);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await browser.pause(this.small_pause);
           await helper.highlightElementBeforeClick(signoutButton);
           await signoutButton.click();
       } else {
           const usernameText = await Sl.testid(account.element.account_username_testid);
           await helper.highlightElement(usernameText);
           await asserts.text(usernameText, data.value.usernametext);
           const signoutButton = await Sl.$(data.element.mobile_signout_btn_text);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await browser.pause(this.small_pause);
           await helper.highlightElement(signoutButton);
           await signoutButton.click();
       }
       await asserts.pageUrl(this.base_url + '/');
       await browser.pause(this.medium_pause);
       console.log("s20");
       const signinButtonElement = await Sl.testid(header.element.header_signin_link_testid);
       console.log("s21");
       await helper.waitForDisplayed(signinButtonElement, this.long_pause);
       console.log("s22");
       await helper.highlightElement(signinButtonElement);
       console.log("s23");
       await expect(signinButtonElement).toBeDisplayed();
       console.log("s24");
       await browser.pause(this.small_pause);
   }


   async signinInvalidEmailAddress(data, assert) {
       if (!(this.platformName == 'Android')) {
       await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
       }
       await helper.userSignin(data.value.invalid_email, data.value.cred_secure);
       const validationMessage = await Sl.testid(data.element.email_validation_message_testid);
       await helper.highlightElement(validationMessage);
       if (this.base_url.includes(data.value.prod_url) || this.base_url.includes(data.value.gke_staging_url)
           || this.base_url.includes(data.value.staging_url) || this.base_url.includes(data.value.preprod_url)
        || this.base_url.includes(data.value.develop_url)) {
           await asserts.text(validationMessage, assert.prod);
       } else {
           await asserts.text(validationMessage, assert.other);
       }
   }


   async signinUnregisteredEmail(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await helper.userSignin(data.value.unregistered_email, data.value.cred_secure);
       const validationMessage =await Sl.testid(data.element.invalid_credential_testid);
       await helper.waitForDisplayed(validationMessage, this.long_pause);
       await helper.highlightElement(validationMessage);
       await asserts.text(validationMessage, assert);
   }

   //Ongeldige inloggegevens
   async signinIncorrectPassword(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await helper.userSignin(data.value.email, data.value.incorrect_cred_secure);
       const validationMessage = await Sl.testid(data.element.invalid_credential_testid);
       await helper.waitForDisplayed(validationMessage, this.long_pause);
       await helper.highlightElement(validationMessage);
       await expect(validationMessage).toBeDisplayed();
   }


   async createAccountLink(data, assert) {
       if (!(this.platformName == 'Android')) {
           await helper.waitForDisplayed(Sl.testid(header.element.header_deals_link_testid), this.long_pause);
           }
       await browser.pause(this.medium_pause);
       const signupLinkElement = await Sl.testid(data.element.create_account_link_testid);
       await helper.waitForDisplayed(signupLinkElement, this.long_pause);
       await Sl.testid(data.element.signin_btn_testid).moveTo();
       await Sl.testid(data.element.create_account_link_testid).click();
       await browser.pause(this.medium_pause);
       await asserts.pageUrl(assert, this.long_pause);
       const signupPageHeaderElement = await Sl.testid(signup.element.signup_heading_testid);
       await helper.highlightElement(signupPageHeaderElement);
       await expect(signupPageHeaderElement).toBeDisplayed();
   }
}
