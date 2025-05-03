import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';
import Signup from '../data/signup.js';

let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let header = new Header();
let data = new Signup()


export default class SignupPage extends Page {
   constructor() {
       super();
       this.params.page.id = 'SU';
       this.params.page.name = 'Signup';
       this.params.page.path = '/register';
       this.params.page.url = this.base_url + this.params.page.path;
   }


   async open() {
       if (!(this.platformName == 'Android')) {
           await browser.maximizeWindow();
       }
       await super.open(this.params.page.url);
       await helper.addCookies();
       await asserts.pauseIfHuman(this.small_pause);
       await helper.acceptConsent();
   }


   async fillSignupForm(data){
       await helper.waitForDisplayed(Sl.testid(data.element.title_testid),this.long_pause);
       const title = await Sl.testid(data.element.title_testid)
       await helper.waitForDisplayed(title, this.long_pause)
       await title.scrollIntoView({ block: 'center', inline: 'center' });
       await title.click();
       const mrOption = Sl.testid(data.element.mr_option_testid)
       await helper.waitForDisplayed(mrOption, this.long_pause)
       await mrOption.click();
       await asserts.pauseIfHuman();
       await Sl.testid(data.element.first_name_testid).setValue(data.value.first_name);
       await Sl.testid(data.element.last_name_testid).setValue(data.value.last_name);
       await asserts.pauseIfHuman();
       await Sl.testid(data.element.phone_number_testid).setValue(data.value.phone_number);
       await asserts.pauseIfHuman();
       await Sl.testid(data.element.password_testid).setValue(data.value.cred_secure);
       await asserts.pauseIfHuman();
       await Sl.testid(data.element.street_testid).setValue(data.value.street);
       await Sl.testid(data.element.house_number_testid).setValue(data.value.house_number);
       await Sl.testid(data.element.place_testid).setValue(data.value.place);
       await Sl.testid(data.element.postcode_testid).setValue(data.value.postcode);
   }


   async signinButtonFunctionality(data, assert) {
       await Sl.testid(data.element.signin_link_testid).click();
       await asserts.pauseIfHuman(this.small_pause);
       await asserts.pageUrl(assert);
       await expect(Sl.testid(data.element.signin_heading_text_testid)).toBeDisplayed();
   }


   async signupUsingRegisteredEmail(data, assert) {
       await browser.pause(this.medium_pause);
       await this.fillSignupForm(data);
       await Sl.testid(data.element.email_address_testid).setValue(data.value.registered_email);
       await asserts.pauseIfHuman(this.small_pause);
       await Sl.testid(data.element.signup_btn_testid).click();
       await asserts.pauseIfHuman(this.small_pause);
       await expect(Sl.testid(data.element.email_validation_msg_testid)).toBeDisplayed();
       if(this.base_url.includes(data.value.prod_url)){
           await asserts.text(Sl.testid(data.element.email_validation_msg_testid), assert.prod)
       }else{
           await asserts.text(Sl.testid(data.element.email_validation_msg_testid), assert.others)
       }
      
   }


   async signupUsingValidDetails(data) {
       await browser.pause(this.medium_pause);
       await this.fillSignupForm(data);
       await Sl.testid(data.element.email_address_testid).setValue(data.value.email);
       await asserts.pauseIfHuman(this.small_pause);
       await Sl.testid(data.element.signup_btn_testid).click();
       await asserts.pauseIfHuman(this.small_pause);
       await asserts.pageUrl(this.base_url + "/", this.long_pause);
       await expect(Sl.testid(header.element.header_my_account_link_testid)).toBeDisplayed();
   }




   /**********************************************REGRESSION******************************************/


   async signupTitleVisibility(data, assert) {
       await asserts.pageUrl(assert.url);
       await asserts.pageTitle(assert.title);
   }


   async signupSectionHeadingsVisibility(data, assert) {
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.testid(data.element.signup_heading_testid), assert.create_new_account)
       await asserts.text(Sl.$(data.element.fill_contact_details_text), assert.fill_contact_details)
       await asserts.text(Sl.$(data.element.fill_address_details_text), assert.fill_address_details)
       await asserts.text(Sl.$(data.element.communication_preferences_text), assert.communication_preferences)
   }  


   async inputFieldsVisibility(data, assert) {
       await asserts.pageUrl(assert.url);
       await asserts.isElementVisible(Sl.testid(data.element.title_testid))
       await asserts.isElementVisible(Sl.testid(data.element.first_name_testid))
       await asserts.isElementVisible(Sl.testid(data.element.last_name_testid))
       await asserts.isElementVisible(Sl.testid(data.element.email_address_testid))
       await asserts.isElementVisible(Sl.testid(data.element.phone_number_testid))
       await asserts.isElementVisible(Sl.testid(data.element.company_name_testid))
       await asserts.isElementVisible(Sl.testid(data.element.password_testid))
       await asserts.isElementVisible(Sl.testid(data.element.autocomplete_search_testid))
       await asserts.isElementVisible(Sl.testid(data.element.street_testid))
       await asserts.isElementVisible(Sl.testid(data.element.house_number_testid))
       await asserts.isElementVisible(Sl.testid(data.element.add_house_number_testid))
       await asserts.isElementVisible(Sl.testid(data.element.postcode_testid))
       await asserts.isElementVisible(Sl.testid(data.element.place_testid))
       await asserts.isElementVisible(Sl.testid(data.element.country_testid))
   }


   async inputFieldsPlaceholderVisibility(data, assert) {
       await asserts.pageUrl(assert.url);
       await asserts.placeholder(Sl.testid(data.element.title_testid), assert.title)
       await asserts.placeholder(Sl.testid(data.element.first_name_testid), assert.first_name)
       await asserts.placeholder(Sl.testid(data.element.last_name_testid), assert.last_name)
       await asserts.placeholder(Sl.testid(data.element.email_address_testid), assert.email_address)
       await asserts.placeholder(Sl.testid(data.element.phone_number_testid), assert.phone_number)
       await asserts.placeholder(Sl.testid(data.element.company_name_testid), assert.company_name)
       await asserts.placeholder(Sl.testid(data.element.password_testid), assert.password)
       await asserts.placeholder(Sl.testid(data.element.autocomplete_search_testid), assert.autocomplete_search)
       await asserts.placeholder(Sl.testid(data.element.street_testid), assert.street)
       await asserts.placeholder(Sl.testid(data.element.house_number_testid), assert.house_number)
       await asserts.placeholder(Sl.testid(data.element.add_house_number_testid), assert.add_house_number)
       await asserts.placeholder(Sl.testid(data.element.postcode_testid), assert.postcode)
       await asserts.placeholder(Sl.testid(data.element.place_testid), assert.places)
       // await asserts.text(Sl.testid(data.element.country_testid), assert.country)
   }


   async appStoreGooglePlayVisibility(data, assert) {
       await asserts.pageUrl(assert.url);
       await asserts.isElementVisible(Sl.$(data.element.discover_app_text));
       await asserts.isElementVisible(Sl.$(data.element.app_store_text));
       await asserts.isElementVisible(Sl.$(data.element.google_play_text));
   }
  
   async passwordRequirementsVisibility(data, assert){
       await asserts.pageUrl(assert.url);
       await asserts.isElementVisible(Sl.$(data.element.password_characters_text));
       await asserts.isElementVisible(Sl.$(data.element.numbers_required_text));
       await asserts.isElementVisible(Sl.$(data.element.uppercase_required_text));
       await asserts.isElementVisible(Sl.$(data.element.lowercase_required_text));
       await asserts.isElementVisible(Sl.$(data.element.special_character_required_text));
   }


   async securePaymentsIconVisibility(data, assert){
       await asserts.pageUrl(assert.url);
       await asserts.isElementVisible(Sl.alt(data.element.apple_pay_alt));
       await asserts.isElementVisible(Sl.alt(data.element.payPal_alt));
       await asserts.isElementVisible(Sl.alt(data.element.american_express_alt));
       await asserts.isElementVisible(Sl.alt(data.element.ideal_alt));
       await asserts.isElementVisible(Sl.alt(data.element.mastercard_alt));
       await asserts.isElementVisible(Sl.alt(data.element.google_pay_alt));
       await asserts.isElementVisible(Sl.alt(data.element.procard_alt));
       await asserts.isElementVisible(Sl.alt(data.element.visa_alt));
   }


   async mandatoryFieldsRequiredTextsVisibility(data, assert){
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       await helper.scrollToElement(Sl.testid(data.element.signup_btn_testid));
       await Sl.testid(data.element.signup_btn_testid).click();
       await asserts.isElementVisible(Sl.$(data.element.salutation_required_text));
       await asserts.isElementVisible(Sl.$(data.element.first_name_required_text));
       await asserts.isElementVisible(Sl.$(data.element.last_name_required_text));
       await asserts.isElementVisible(Sl.$(data.element.email_required_text));
       await asserts.isElementVisible(Sl.$(data.element.phone_number_required_text));
       await asserts.isElementVisible(Sl.$(data.element.password_required_text));
       await asserts.isElementVisible(Sl.$(data.element.full_address_required_text));
       await asserts.isElementVisible(Sl.$(data.element.fields_marked_required_text));
   }


   async termsPolicylinkVisibility(data, assert){
       await asserts.pageUrl(assert.url);
       await helper.scrollToElement(Sl.title(data.element.terms_conditions_title));
       await asserts.isElementVisible(Sl.title(data.element.terms_conditions_title));
       await asserts.isElementVisible(Sl.title(data.element.privacy_policy_title));
   }


   async inclusiveExclusiveToggleFunctionality(data, assert){
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       await helper.waitForAbsent(Sl.testid(data.element.exclusive_toggle_testid));
       await helper.waitForDisplayed(Sl.testid(data.element.inclusive_toggle_testid));
       await Sl.testid(data.element.inclusive_toggle_testid).click();
       await browser.pause(this.small_pause);
       await helper.waitForAbsent(Sl.testid(data.element.inclusive_toggle_testid));
       await helper.waitForDisplayed(Sl.testid(data.element.exclusive_toggle_testid));
   }


   async incorrectEmailValidation(data, assert){
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.email_address_testid).setValue(data.value.incorrect_email);
       await asserts.text(Sl.testid(data.element.email_validation_msg_testid), assert.invalid_email_msg)
   }


   async incorrectMobileValidation(data, assert){
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.phone_number_testid).setValue(data.value.incorrect_number);
       await asserts.text(Sl.$(data.element.invalid_phone_number_text), assert.invalid_number_msg)
   }


   async incorrectPasswordValidation(data, assert){
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       await Sl.testid(data.element.password_testid).setValue(data.value.incorrect_cred_secure);
       await asserts.text(Sl.$(data.element.invalid_password_text), assert.invalid_password_msg)
   }


   async collectDiscountMessage(data, assert){
       await asserts.pageUrl(assert.url);
       await asserts.text(Sl.$(data.element.click_collect_promo_xpath), assert.clickCollectPromo);
   }


   async verifyToggleFunctionality(data, assert) {
       await asserts.pageUrl(assert.url);
       await browser.pause(this.medium_pause);
       const toggleKeys = await Sl.findElementsByTestIdEndingWith(data.element.toggle_button_findElementsByTestIdEndingWith);
       for (const toggleKey of toggleKeys) {
           const isEnabledBefore = await helper.getToggleState(toggleKey);
           await toggleKey.click();
           const isEnabledAfter = await helper.getToggleState(toggleKey);
           expect(isEnabledBefore).not.toEqual(isEnabledAfter);
       }
   }
  
}
