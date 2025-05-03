import Selector from "./Selector.js";
import Signin from "../data/signin.js";
import Header from "../data/header.js";
import Home from "../data/home.js";
import Assert from './Asserts.js'
import Procard from '../data/procard.js'
import Trolley from '../data/trolley.js'
import Account from "../data/account.js";


let Sl = new Selector();
let signin = new Signin();
let header = new Header();
let releaseFlag = true;
let cookieFlag = true;
let home = new Home();
let consentflag = true;
let assert = new Assert()
let procard = new Procard()
let trolley = new Trolley()
let account = new Account()


export default class Helper {


   async waitForDisplayed(element, millisecond = 3000) {
       try {
           await element.waitForDisplayed({ timeout: millisecond });
           return true;
       } catch (error) {
           if (await element.isExisting()) {
               return false;
           }
           throw error;
       }
   }


   async checkBaseUrlResponse(base_url) {
       console.log(base_url)
       const response = await fetch(base_url);
       expect(response.status).toBe(200);
   }


  


   async userSignin(email = signin.value.email, password = signin.value.cred_secure) {
       const isSignedIn = await this.isSignedIn();
       if (!isSignedIn) {
           await this.waitForDisplayed(Sl.testid(signin.element.signin_header_testid),signin.long_pause);
           await Sl.testid(signin.element.email_address_field_testid).setValue(email);
           await Sl.testid(signin.element.password_field_testid).setValue(password);
           if(signin.platformName == 'Android'){
               await driver.hideKeyboard();
               await browser.pause(this.small_pause);
           }
           await this.waitForClickable(Sl.testid(signin.element.signin_btn_testid), signin.medium_pause);
           await Sl.testid(signin.element.signin_btn_testid).click();
       }
   }
   async Signin(){


       const isSigninLinkVisible = await Sl.testid(header.element.header_signin_link_testid).isDisplayed();


       if (isSigninLinkVisible) {
           await Sl.testid(header.element.header_signin_link_testid).click();
       }
   }   
  


   async waitForPageLoad() {
       try {
           if (releaseFlag) {
               await this.waitForDisplayed(Sl.$(signin.element.release_notes_skip_button_text), signin.medium_pause);
               await Sl.$(signin.element.release_notes_skip_button_text).click();
               releaseFlag = false;
           }
       } catch (error) {
       }
   }


   async isSignedIn() {
       try {
           await Sl.testid(header.element.header_my_account_link_testid).waitForDisplayed({ timeout: 5000 })
           return true;
       } catch (error) {
           return false;
       }
   }
  


   async waitForAbsent(element, millisecond = 2000) {
       await element.waitForDisplayed({ reverse: true, timeout: millisecond });
   }


   async waitForEnabled(element, millisecond = 2000) {
       await element.waitForEnabled({ timeout: millisecond });
   }


   async assertValidationMessage(field_element, assert) {
       const validationMessage = await browser.execute((element) => {
           return element.validationMessage;
       }, field_element);
       assert(validationMessage).to.include(assert);
   }


   async switchWindow(url) {
       try {
           await browser.switchWindow(url);
       } catch (error) {
           throw 'window with given URL not found'
       }
   }


   async addCookies() {
       try {
           if (cookieFlag && (signin.base_url.includes(signin.value.prod_url) || signin.base_url.includes(signin.value.preprod_url))) {
               const domain = signin.base_url.includes(signin.value.prod_url)
                   ? '.toolstation.nl'
                   : '.toolstation.dev';
          
               await browser.setCookies([
                   {
                       name: 'new-website',
                       value: 'true',
                       domain: domain,
                       path: '/',
                       secure: true,
                   },
               ]);
               await browser.refresh();
               cookieFlag = false;


           }
       }
       catch (error) {
           throw 'Could not add cookies'
       }
   }


   async acceptConsent() {
       if (consentflag && (/*signin.base_url.includes(signin.value.preprod_url)  || */
       signin.base_url.includes(signin.value.prod_url) ||
       signin.base_url.includes(signin.value.feature_url) ||
       signin.base_url.includes(signin.value.develop_url))) {
           const consentPopup = await Sl.$(home.element.consent_button_xpath);
           await this.waitForDisplayed(consentPopup, signin.medium_pause*2);
           if (await consentPopup.isExisting() && await consentPopup.isDisplayed()) {
               await consentPopup.click();
               consentflag = false;
           }
       }


   }


   async waitForClickable(element, millisecond = 1000) {
       try {
           await element.waitForClickable({ timeout: millisecond });
           return true;
       } catch (error) {
           return false;


       }
   }


   async clickElement(element) {
       await browser.execute("arguments[0].click();", element);
   }
  
   async waitForProductLoad(customTimeout = 15000) {
       await this.waitForDisplayed(Sl.testid(data.element.product_price_testid), { timeout: customTimeout });
   }
  
   async clickPopupIfExists(selector, timeout = 10000) {
       try {   
           await browser.waitUntil(async () => await Sl.$(selector).isExisting(), {
               timeout,
               timeoutMsg: `Popup did not appear within ${timeout}ms`
           });


           const popupButton = await Sl.$(selector);
  
           if (await popupButton.isExisting()) {
  
               if (!(await popupButton.isDisplayed())) {
                   await popupButton.waitForDisplayed({ timeout });
               }
  
               console.log(`🖱️ Clicking popup: ${selector}`);
               await popupButton.click();
           } else {
           }
       } catch (error) {
       }
   }


   async scrollToElement(element) {
       try {
           await element.scrollIntoView({ block: 'center', inline: 'center' });
       } catch (error) {
           throw new Error(`Failed to scroll to element: ${error.message}`);
       }
   }


   async switchAndRevertWindowsTab() {
       const handles = await browser.getWindowHandles();
       await
           await browser.switchToWindow(newTab);
   }


   async switchToWindowByTitle(expectedTitle, timeout = 10000) {
       await browser.waitUntil(async () => {
           const handles = await browser.getWindowHandles();
           for (const handle of handles) {
               await browser.switchToWindow(handle);
               const title = await browser.getTitle();
               if (title.includes(expectedTitle)) {
                   // console.log(`Switched to window with title: ${title}`);
                   return true;
               }
           }
           return false;
       }, { timeout, timeoutMsg: `No window found with title containing: ${expectedTitle}` });
   }




   async waitForExistance(element, millisecond = 1000) {
       try {
           await element.waitForExist({ timeout: millisecond });
           return true;
       } catch (error) {
           if (await element.isExisting()) {
               return false;
           }
           throw error;
       }
   }


   async waitClickable(element) {
       try {
           await element.waitForClickable({ timeout: 5000 });
           await element.click();
       } catch (error) {
           throw new Error(`Element ${await element.selector} is not clickable after waiting.`);
       }
   }
  
   async userLogout(){
       const headerMyAccount = await Sl.testid(header.element.my_account_header_link_testid)
       await this.waitForDisplayed(headerMyAccount, signin.long_pause);
       await headerMyAccount.click();
       await this.waitForDisplayed(Sl.testid(account.element.my_account_heading_testid),signin.long_pause);
       await expect(Sl.testid(account.element.my_account_heading_testid)).toBeDisplayed();
       await assert.pauseIfHuman();
       await browser.pause(signin.medium_pause);
       const logoutButton = await Sl.testid(account.element.sign_out_btn_testid);
       await this.waitForDisplayed(logoutButton, signin.long_pause);
       await logoutButton.click();
       await assert.pauseIfHuman(this.medium_pause);
       const signinButton = await Sl.testid(header.element.header_signin_link_testid) ;
       await this.waitForDisplayed(signinButton, signin.long_pause);
   }


   async waitForUrl(expectedUrl, timeout = 10000) {
       await browser.waitUntil(
           async () => (await browser.getUrl()) === expectedUrl,
           {
               timeout,
               timeoutMsg: `Expected URL "${expectedUrl}" not found within ${timeout} ms`,
           }
       );
   }


   async getToggleState(element) {
       const classAttr = await element.getAttribute('class');
       return classAttr.includes('peer-checked:bg-success') && classAttr.includes('false');
   }
  
}
