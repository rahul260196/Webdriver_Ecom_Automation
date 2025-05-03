import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Signup from '../data/signup.js';
import SignupPage from '../pageobjects/signup.page.js';
import Trolley from '../data/trolley.js'



let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let signup = new Signup();
let signupPage = new SignupPage();
let trolley = new Trolley();


export default class ProcardPage extends Page{
   constructor() {
       super();
       this.params.page.id = 'PC';
       this.params.page.name = 'Procard';
       this.params.page.path = '/content/pro-kaart-keuze';
       this.params.page.url = this.base_url + this.params.page.path;
   }


   async open() {
       await browser.maximizeWindow();
       await super.open(this.base_url);
       await helper.addCookies();
       await helper.acceptConsent();
       await browser.pause(this.medium_pause*2);
   }


   async navigateToProCard(data){
       const procardHeader = await Sl.testid(data.element.header_procard_link_testid);
       await helper.waitForDisplayed(procardHeader, this.long_pause)
       await procardHeader.click()
       const requestProcard = await Sl.$(data.element.request_procard_cta_xpath)
       await helper.waitForDisplayed(requestProcard, this.medium_pause)
       await helper.waitForClickable(requestProcard, this.medium_pause)
       await requestProcard.click();
   }   


   async clickProcardWithCreditButton(data) {
       const procardWithCreditButton = await Sl.$(data.element.procard_withcredit_btn_xpath);
       await helper.waitForDisplayed(procardWithCreditButton, this.long_pause);
       await procardWithCreditButton.click();
   }


   async clickProcardWithoutCreditButton(data) {
       const procardWithoutCreditButton = await Sl.$(data.element.procard_withoutcredit_btn_xpath);
       await helper.waitForDisplayed(procardWithoutCreditButton, this.long_pause);
       await procardWithoutCreditButton.click();
   }


   async signUpNewUser(data){
       const signupLink = await Sl.testid(data.element.signup_link_testid)
       await helper.waitForDisplayed(signupLink, this.long_pause)
       await signupLink.click()
       await signupPage.fillSignupForm(signup);
       await Sl.testid(signup.element.email_address_testid).setValue('demotest'+Date.now()+'@gmail.com');
       await asserts.pauseIfHuman();
       await Sl.testid(signup.element.signup_btn_testid).click();
   }


   async acceptProcardTerms(data) {
       await browser.pause(this.small_pause);
       const ageVerificationCheckbox = await Sl.testid(data.element.age_verification_checkbox_testid);
       await helper.waitForDisplayed(ageVerificationCheckbox, this.long_pause);
       await ageVerificationCheckbox.click();
       const termsVerificationCheckbox = await Sl.testid(data.element.terms_and_condition_checkbox_testid);
       await termsVerificationCheckbox.scrollIntoView();
       await helper.clickElement(termsVerificationCheckbox);
       const acceptTermsButton = await Sl.testid(data.element.modal_accept_terms_button_testid);
       await helper.waitForDisplayed(acceptTermsButton, this.long_pause);
       await acceptTermsButton.scrollIntoView();
       await acceptTermsButton.click();
       await asserts.pauseIfHuman();
       const startApplicationButton = await Sl.testid(data.element.start_application_btn_testid);
       await helper.waitForDisplayed(startApplicationButton, this.long_pause);
       await startApplicationButton.click();
   }
  
   async fillProcardApplication(data){
       const companyFieldInput = Sl.testid(data.element.company_kvk_field_testid)
       await helper.waitForDisplayed(companyFieldInput, this.long_pause)
       await companyFieldInput.setValue(data.value.kvk_number);
       await Sl.testid(data.element.next_btn_testid).click();
       await asserts.pauseIfHuman();
       const selectCompanyRadio = await Sl.getElementByRegexTestid(data.element.select_company_radio_testid.startswith, data.element.select_company_radio_testid.endswith);
       await helper.waitForDisplayed(selectCompanyRadio, this.long_pause)
       await selectCompanyRadio.click();
       await Sl.testid(data.element.next_btn_testid).click();
       await asserts.pauseIfHuman();
       const mainaccountHolderInput = await Sl.testid(data.element.main_account_holder_field_testid)
       await helper.waitForDisplayed(mainaccountHolderInput, this.long_pause)
       await mainaccountHolderInput.setValue(data.value.account_holder_name);
       await Sl.testid(data.element.next_btn_testid).click();
       await asserts.pauseIfHuman();
   }


   async fillCompanyDetails(data){
       const companyInformationPersonalRadio = await Sl.testid(data.element.company_information_personal_radio_testid)
       await helper.waitForDisplayed(companyInformationPersonalRadio, this.long_pause)
       await companyInformationPersonalRadio.click()
       const ibanField = await Sl.testid(data.element.iban_field_testid)
       await ibanField.setValue(data.value.iban_number);
       await Sl.testid(data.element.campany_account_holder_field_testid).setValue(data.value.account_holder_name);
       await asserts.pauseIfHuman();
       await Sl.testid(data.element.next_btn_testid).click();
       await asserts.pauseIfHuman();
   }


   async fillAgreementForm(data) {
       await browser.pause(this.medium_pause);
       const summaryTitle = await Sl.$(data.element.summary_title_xpath);
       await helper.waitForDisplayed(summaryTitle, this.long_pause);
       const nxt_button = await Sl.testid(data.element.next_btn_testid)
       await helper.waitForClickable(nxt_button, this.long_pause)
       await nxt_button.scrollIntoView()
       await browser.pause(this.medium_pause);
       await nxt_button.click();
  
   }           
  
   async navigateToMyAccountProCard(data){


       const myAccountHeader = await Sl.testid(trolley.element.my_account_testid)
       await helper.waitForDisplayed(myAccountHeader, this.long_pause)
       await myAccountHeader.click()
       const accountProcardNav = Sl.testid(data.element.my_account_procard_nav_testid)
       await helper.waitForDisplayed(accountProcardNav, this.long_pause)
       await accountProcardNav.click()
       const withCreditCardImage = await Sl.testid(data.element.withoutcredit_card_image_testid)
       await helper.waitForDisplayed(withCreditCardImage, this.long_pause)
       const nameOnCard = await Sl.$(data.element.withoutcredit_user_name_on_card_xpath)
       await helper.waitForDisplayed(nameOnCard, this.long_pause)
       await asserts.text(nameOnCard, signup.value.first_name + " "+ signup.value.last_name)
    
   }
  
   async procardWithCreditApplication(data){
       const fullUrl = await browser.getUrl();
       const domain = new URL(fullUrl).origin;
       await helper.waitForUrl(this.base_url + data.value.with_credit_application_start_end_url, this.long_pause);
       await this.acceptProcardTerms(data);
       await this.fillProcardApplication(data);
       await this.fillCompanyDetails(data);
       await this.fillAgreementForm(data);
       await browser.pause(this.medium_pause);
       if(domain.includes(data.value.prod_url)){
           await helper.waitForUrl(data.value.with_credit_application_complete_end_url, this.long_pause);
       }else{
           await helper.waitForUrl(data.value.with_credit_application_complete_other_end_url, this.long_pause);
          
       }
       await browser.url(this.base_url)
   }


   async procardWithoutCreditApplication(data){
       await helper.waitForUrl(this.base_url + data.value.without_credit_application_start_end_url, this.long_pause);
       await this.acceptProcardTerms(data);
       await this.fillProcardApplication(data);
       await this.fillAgreementForm(data);
       await browser.pause(this.medium_pause);
       await helper.waitForUrl(this.base_url + data.value.without_credit_application_complete_end_url, this.long_pause);
       await this.navigateToMyAccountProCard(data)
   }
  
  


   async ApplyForProcardWithCredit(data) {
       await this.navigateToProCard(data)
       await this.clickProcardWithCreditButton(data);
       if (!(await helper.isSignedIn())) {
           await this.signUpNewUser(data);
       }
       await this.procardWithCreditApplication(data)
       await browser.pause(this.medium_pause*2);
       await helper.userLogout()
      
   }


   async ApplyForProcardWithoutCredit(data) {
       await this.navigateToProCard(data)
       await this.clickProcardWithoutCreditButton(data);
       if (!(await helper.isSignedIn())) {
           await this.signUpNewUser(data);
       }
       await this.procardWithoutCreditApplication(data)
   }         
  
   async registerProcardWithAndWithoutCredit(data){
       if (await helper.isSignedIn()) {
           await helper.userLogout();
       }
       await this.ApplyForProcardWithoutCredit(data)
       const myAccountWithCreditApplyButton =  await Sl.$(data.element.procard_withcredit_btn_xpath)
       await myAccountWithCreditApplyButton.click()
       await this.procardWithCreditApplication(data)
   }
}
