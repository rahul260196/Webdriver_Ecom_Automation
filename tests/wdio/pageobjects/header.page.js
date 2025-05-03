import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import SignupPage from '../pageobjects/signup.page.js';
import Signin from '../data/signin.js';
import Account from '../data/account.js';
import ProductListing from '../data/productlisting.js';
import ProductDetails from '../data/productdetails.js';
import SaveList from '../data/savelist.js';
import Trolley from '../data/trolley.js';

let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let signupPage = new SignupPage();
let signin = new Signin();
let account = new Account();
let productlisting = new ProductListing();
let productdetail = new ProductDetails();
let savelist = new SaveList();
let trolley = new Trolley();


export default class HeaderPage extends Page {
   constructor() {
       super();
       this.params.page.id = 'HD';
       this.params.page.name = 'Header';
       this.params.page.url = this.base_url
   }


   async open() {
       if (!(this.platformName == 'Android')) {
           await browser.maximizeWindow();
       }
       await super.open(this.params.page.url);
       await helper.addCookies();
       await asserts.pauseIfHuman();
       await helper.acceptConsent();
   }


   async toolstationLogoFucntionality(data) {
       await signupPage.open();
       await Sl.testid(data.element.toolstation_logo_testid).click();
       await asserts.pauseIfHuman();
       await asserts.pageUrl(this.base_url + '/');
   }


   // async languageToggle(data, assert){
   //     await browser.pause(this.small_pause);
   //     await Sl.role(data.element.language_toggle_btn_role).click();
   //     await browser.pause(this.small_pause);
   //     await Sl.arialabel(data.element.french_language_option_arealabel).click();
   //     await asserts.pauseIfHuman(this.small_pause);
   //     await asserts.pageUrl(assert.url);
   // }


   async saveListButton(data, assert) {
            if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
           await browser.pause(this.medium_pause);
       }
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.save_list_btn_testid).click();
       await helper.userSignin(data.value.email, data.value.cred_secure);
       await browser.pause(this.small_pause);
       await Sl.testid(data.element.save_list_btn_testid).click();
       await asserts.pageUrl(assert.url);
       await expect(Sl.testid(savelist.element.savelist_title_testid)).toBeDisplayed();
       await asserts.text(Sl.testid(savelist.element.savelist_title_testid), assert.heading);
       await browser.pause(this.small_pause);
       if(this.platformName == 'Android'){
           await Sl.testid(data.element.header_my_account_link_testid).click();
           const usernameText = await Sl.testid(account.element.account_username_testid);
           await asserts.text(usernameText, data.value.usernametext);
           const signoutButton = await Sl.$(signin.element.mobile_signout_btn_text);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await signoutButton.click();
           await browser.pause(this.medium_pause);
       }else{
       await Sl.testid(signin.element.signout_btn_testid).click();
       await browser.pause(this.medium_pause);
       }
   }


   async signinButtonFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await browser.pause(this.medium_pause);
       if (await Sl.testid(data.element.header_my_account_link_testid).isDisplayed()) {
           await Sl.testid(data.element.header_my_account_link_testid).click();
           if(this.platformName == 'Android'){
               const usernameText = await Sl.testid(account.element.account_username_testid);
           await asserts.text(usernameText, data.value.usernametext);
           const signoutButton = await Sl.$(data.element.mobile_signout_btn_text);
           await browser.pause(this.medium_pause);
           await signoutButton.scrollIntoView({ block: 'center', inline: 'center' });
           await signoutButton.click();
           await browser.pause(this.medium_pause);


           }else{
               await helper.waitForDisplayed(Sl.testid(account.element.my_account_heading_testid), this.long_pause);
           await expect(Sl.testid(account.element.my_account_heading_testid)).toBeDisplayed();
           await browser.pause(this.medium_pause);
           await Sl.testid(signin.element.signout_btn_testid).scrollIntoView({ block: 'center', inline: 'center' });
           await Sl.testid(signin.element.signout_btn_testid).click();


           }
       }
       await Sl.testid(data.element.signin_btn_testid).click();
       await asserts.pauseIfHuman();
       await asserts.pageUrl(assert);
       await helper.waitForDisplayed(Sl.testid(signin.element.signin_btn_testid), this.medium_pause);
   }


   async trolleyButtonFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await Sl.testid(data.element.trolley_btn_testid).click();
       await asserts.pauseIfHuman();
       await asserts.pageUrl(assert.url);
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(trolley.element.guest_trolley_signin_btn_testid), this.medium_pause * 2);
       await asserts.text(Sl.testid(trolley.element.guest_trolley_heading_testid), assert.heading)
   }


   async categoriesLinkFunctionality(data) {
       if(!(this.platformName == 'Android')){
           const dealsLink = await Sl.testid(data.element.header_deals_link_testid)
           await dealsLink.waitForDisplayed({ timeout: 15000 });
           await browser.pause(this.small_pause * 4);
       const isUserSignedIn = await Sl.testid(data.element.header_signin_link_testid).isDisplayed();
       if (isUserSignedIn) {
           await Sl.testid(data.element.header_signin_link_testid).click();
           await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.header_categories_link_testid).moveTo();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(data.element.schroeven_bevestigingsmiddelen_link_testid), this.long_pause);
       await Sl.testid(data.element.schroeven_bevestigingsmiddelen_link_testid).click();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(data.element.subcategory_link_testid), this.long_pause);
       await Sl.testid(data.element.subcategory_link_testid).click();
       await Sl.partialTestid(productlisting.element.product_image_endswithtestid, this.long_pause);
       await helper.waitForDisplayed(Sl.testid(productlisting.element.productlisting_page_heading_testid), this.long_pause);
       await expect(Sl.testid(productlisting.element.productlisting_page_heading_testid)).toBeDisplayed();
       await asserts.pauseIfHuman();
       }else{
           await browser.pause(this.small_pause * 4);
           await Sl.testid(data.element.mobile_hamburger_menu_testid).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.testid(data.element.mobile_category_testid), this.medium_pause);
           await Sl.testid(data.element.mobile_category_testid).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.$(data.element.explore_categories_link_text),this.medium_pause*2);
           await Sl.$(data.element.schroeven_category_link_text).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.$(data.element.mobile_schroeven_subcat_link_text), this.medium_pause);
           await Sl.$(data.element.mobile_schroeven_subcat_link_text).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.$(data.element.mobile_universeschroven_level_subcat_link_text), this.medium_pause*2);
           await Sl.$(data.element.mobile_universeschroven_level_subcat_link_text).click();
           await browser.pause(this.small_pause);
           await Sl.partialTestid(productlisting.element.product_image_endswithtestid, this.long_pause);
           await helper.waitForDisplayed(Sl.testid(productlisting.element.productlisting_page_heading_testid), this.long_pause);
           await expect(Sl.testid(productlisting.element.productlisting_page_heading_testid)).toBeDisplayed();
           await browser.pause(this.small_pause/2);




       }
      
      
   }


   async brandsLinkFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
           await browser.pause(this.small_pause * 4);
       const isUserSignedIn = await Sl.testid(data.element.header_signin_link_testid).isDisplayed();
       if (isUserSignedIn) {
           await Sl.testid(data.element.header_signin_link_testid).click();
           await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.header_brands_link_testid).moveTo();
       await asserts.pauseIfHuman();
       const brandIcons = await Sl.findElementsByTestIdStartingWith(data.element.brands_image_starttestid);
       const brandNameText = await brandIcons[0].getAttribute("data-testid");
       const brandName = brandNameText.split('-').pop();
       await helper.waitForDisplayed(brandIcons[0], this.medium_pause);
       await brandIcons[0].click();
       await browser.pause(this.medium_pause * 2);
       const naviEle = await Sl.$(data.element.brands_navigation_text_xpath);
       await helper.waitForDisplayed(naviEle, this.long_pause);
       const naviText = await naviEle.getText();
       expect(naviText.toLowerCase()).toEqual(brandName);
       await browser.pause(this.small_pause/2);
       }else{
           await browser.pause(this.small_pause * 4);
           await Sl.testid(data.element.mobile_hamburger_menu_testid).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.testid(data.element.mobile_brand_testid), this.long_pause);
           await Sl.testid(data.element.mobile_brand_testid).click();
           await browser.pause(this.small_pause);
           await Sl.testid(data.element.bosch_brand_link_testid).click();
           await helper.waitForDisplayed(Sl.testid(data.element.brand_page_heading_testid),this.medium_pause*2);
           await asserts.text(Sl.testid(data.element.brand_page_heading_testid), assert.heading_mobile);


       }
      
   }


   async dealsLinkFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
           await browser.pause(this.long_pause);
       await Sl.testid(data.element.header_deals_link_testid).click();
       await asserts.pauseIfHuman();
       await asserts.pageUrl(assert);
       }else{
           await browser.pause(this.small_pause * 4);
           await Sl.testid(data.element.mobile_hamburger_menu_testid).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.testid(data.element.mobile_deals_testid), this.long_pause);
           await Sl.testid(data.element.mobile_deals_testid).click();
           await browser.pause(this.small_pause);
           await asserts.pageUrl(assert);


       }
      
   }


   //removed
   async newLaunchLinkFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await Sl.$(data.element.header_new_launch_link_xpath).click();
       await asserts.pauseIfHuman();
       await asserts.pageUrl(assert);
   }


   async proCardLinkFunctionality(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
           await Sl.testid(data.element.header_procard_link_testid).click();
           await asserts.pauseIfHuman();
           await asserts.pageUrl(assert);
       }else{
           await browser.pause(this.small_pause * 4);
           await Sl.testid(data.element.mobile_hamburger_menu_testid).click();
           await browser.pause(this.small_pause);
           await helper.waitForDisplayed(Sl.testid(data.element.mobile_prokart_testid), this.long_pause);
           await Sl.testid(data.element.mobile_prokart_testid).click();
           await asserts.pauseIfHuman();
           await asserts.pageUrl(assert);


       }
     
   }


   async search(searchField, searchTerm, searchSuggestion) {
       await searchField.setValue(searchTerm);
       await browser.pause(this.medium_pause);
       // await helper.waitForDisplayed(searchSuggestion, this.long_pause);
       //await expect(searchSuggestion).toBeDisplayed();
       await searchSuggestion.moveTo();
       await searchSuggestion.click();
   }


   async searchProductUsingCode(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await browser.pause(this.small_pause * 4);
       const isUserSignedIn = await Sl.testid(data.element.header_signin_link_testid).isDisplayed();
       if (isUserSignedIn) {
           await Sl.testid(data.element.header_signin_link_testid).click();
           await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await this.search(Sl.testid(data.element.search_bar_testid), data.value.product_code, Sl.testid(data.element.search_productcode_testid));
       await browser.pause(this.small_pause);
       await asserts.pageUrl(assert.url);
       const productCodeEle = await Sl.starttestid(productdetail.element.product_code_starttestid);
       const productCodeText = await productCodeEle.getText();
       const productCode = productCodeText.split(":")[1].trim();
       expect(productCode).toBe(data.value.product_code);
   }


   async searchProductUsingName(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await browser.pause(this.small_pause * 4);
       const isUserSignedIn = await Sl.testid(data.element.header_signin_link_testid).isDisplayed();
       if (isUserSignedIn) {
           await Sl.testid(data.element.header_signin_link_testid).click();
           await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await this.search(Sl.testid(data.element.search_bar_testid), data.value.product_name, Sl.$(data.element.search_productname_xpath));
       await browser.pause(this.small_pause);
       await asserts.pageUrl(assert.url);
       const productCodeEle = await Sl.starttestid(productdetail.element.product_code_starttestid);
       const productCodeText = await productCodeEle.getText();
       const productCode = productCodeText.split(":")[1].trim();
       expect(productCode).toBe(data.value.product_code);
   }


   async searchForCategory(data, assert) {
        if(!(this.platformName == 'Android')){
           await helper.waitForDisplayed(Sl.testid(data.element.header_deals_link_testid), this.long_pause);
       }
       await browser.pause(this.medium_pause * 1.6);
       const isUserSignedIn = await Sl.testid(data.element.header_signin_link_testid).isDisplayed();
       if (isUserSignedIn) {
           await Sl.testid(data.element.header_signin_link_testid).click();
           await helper.userSignin();
       }
       await browser.pause(this.medium_pause);
       await this.search(Sl.testid(data.element.search_bar_testid), data.value.category_name, Sl.testid(data.element.search_category_testid));
       await asserts.pauseIfHuman(this.small_pause);
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.testid(data.element.category_page_heading_testid), assert.heading);
   }
}
