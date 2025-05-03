import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from '../webdriverio-helper/Asserts.js';
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';
import ProductListing from '../data/productlisting.js';
//import clipboardy from 'clipboardy';
import ProductDetails from '../data/productdetails.js';
import Signin from '../data/signin.js';
import Checkout from '../data/checkout.js';
import SaveList from '../data/savelist.js';




let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper;
let header = new Header();
let productlisting = new ProductListing();
let productdetails = new ProductDetails();
let signin = new Signin();
let checkout = new Checkout();
let savelist = new SaveList();


export default class TrolleyPage extends Page {
   constructor() {
       super();
       this.params.page.id = 'TR';
       this.params.page.name = 'Trolley';
       this.params.page.url = this.base_url;
   }


   async open() {
       await browser.maximizeWindow();
       await super.open(this.params.page.url);
       await helper.addCookies();
       await asserts.pauseIfHuman();
       await helper.acceptConsent();
       await asserts.pauseIfHuman();
   }


   async userSignin(data) {
       const signinFlag = await this.isElementDisplayed(Sl.testid(header.element.my_account_header_link_testid), this.medium_pause * 3);
       if (!signinFlag) {
           await Sl.testid(header.element.signin_btn_testid).click();
           await helper.waitForDisplayed(Sl.testid(signin.element.signin_header_testid), this.long_pause);
           await Sl.testid(signin.element.email_address_field_testid).setValue(data.value.email);
           await Sl.testid(signin.element.password_field_testid).setValue(data.value.cred_secure);
           await helper.waitForClickable(Sl.testid(signin.element.signin_btn_testid), this.long_pause);
           await Sl.testid(signin.element.signin_btn_testid).click();
       }
   }


   async emptyTrolley(data) {
       let itemValueFlag;
       try {
           itemValueFlag = await helper.waitForDisplayed(Sl.testid(header.element.item_count_testid), this.medium_pause * 2);
       } catch (error) {


       }
       if (itemValueFlag) {
           await Sl.testid(header.element.trolley_btn_testid).click();
           try {
               const popupFlag = await helper.waitForDisplayed(Sl.testid(data.element.trolley_promo_close_testid), this.small_pause * 2);
               if (popupFlag) {
                   await Sl.testid(data.element.trolley_promo_close_testid).click();
               }
           } catch (error) {


           }
           await helper.waitForDisplayed(Sl.partialTestid(data.element.trolley_product_link_partialtestid), this.long_pause);
           await Sl.partialTestid(data.element.remove_btn_endtestid).click();
           await Sl.testid(data.element.confirm_delete_cta_testid).click();
           await browser.pause(this.medium_pause);
       }
   }


   async iftrolleyEmptyAddProduct() {
       await browser.pause(this.small_pause);
       let itemValueFlag;
       try {
           itemValueFlag = await helper.waitForDisplayed(Sl.testid(header.element.item_count_testid), this.medium_pause * 2);
       } catch (error) {


       }
       if (!itemValueFlag) {
           await this.openCategory();
           await this.navigateToPdpFromPlp();
           await this.addProductToTrolleyFromPdp();
       }


   }


   async openCategory() {
       await helper.waitForDisplayed(Sl.testid(header.element.header_categories_link_testid), this.medium_pause);
       await Sl.testid(header.element.header_categories_link_testid).moveTo();
       await helper.waitForDisplayed(Sl.testid(header.element.deals_link_testid), this.long_pause);
       await Sl.testid(header.element.deals_link_testid).click();
       const subcategory = await Sl.testid(header.element.deals_subcat_testid);
       await helper.waitForDisplayed(subcategory, this.long_pause);
       await subcategory.click();


   }


   async navigateToPdpFromPlp() {
       await browser.pause(this.medium_pause);
       await helper.waitForDisplayed(Sl.testid(productlisting.element.filter_category_brand_testid), this.long_pause);
       await helper.waitForDisplayed(Sl.partialTestid(productlisting.element.product_image_endswithtestid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(productlisting.element.productlisting_page_heading_testid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(productlisting.element.product_count_testid), this.long_pause);
       const productsLinksElements = await Sl.findElementsByTestIdEndingWith(productlisting.element.product_link_endswithtestid);
       await productsLinksElements[0].click();
       await asserts.pauseIfHuman();


   }




   async addProductToTrolleyFromPdp(type = 'delivery') {
       await helper.waitForDisplayed(Sl.testid(productdetails.element.price_testid), this.long_pause);
       if (type === 'collection') {
           const branchFlag = await this.isElementDisplayed(Sl.partialTestid(productdetails.element.select_branch_text_endtestid), this.medium_pause);
           if (branchFlag) {
               await this.selectABranch();
           }
           const collectionButton = await Sl.partialTestid(productdetails.element.collection_btn_partialtestid);
           await helper.waitForEnabled(Sl.partialTestid(productdetails.element.collection_btn_partialtestid), this.long_pause);
           collectionButton.click();
           await browser.pause(this.small_pause);
       } else {
           await helper.waitForDisplayed(Sl.partialTestid(productdetails.element.select_branch_text_endtestid), this.long_pause);
           await Sl.testid(productdetails.element.price_testid).scrollIntoView();
           const pdpDeliveryButton = await Sl.partialTestid(productdetails.element.delivery_btn_partialtestid);
           await helper.waitForEnabled(pdpDeliveryButton, this.long_pause);
           await pdpDeliveryButton.click();
           await browser.pause(this.small_pause);
       }


       try {
           await helper.waitForDisplayed(Sl.testid(productdetails.element.recommended_product_link_testid), this.medium_pause * 3);
       } catch (error) {
           console.log("Recommended product is not visible");
       }
       try {
           await helper.waitForDisplayed(Sl.testid(productdetails.element.success_modal_close_btn_testid), this.long_pause);
           await Sl.testid(productdetails.element.success_modal_close_btn_testid).click();
       } catch (error) {
           console.log(error);
       }


   }


   async pdpToTrolley(data, assert) {
       await browser.pause(this.small_pause);
       await helper.waitForDisplayed(Sl.testid(header.element.trolley_btn_testid), this.long_pause);
       await Sl.testid(header.element.trolley_btn_testid).click();
       await asserts.pageUrl(assert.trolley_page);
       try {
           const popFlag = await helper.waitForDisplayed(Sl.testid(data.element.trolley_promo_close_testid), this.small_pause * 3);
           if (popFlag) {
               await Sl.testid(data.element.trolley_promo_close_testid).click();
           }
       } catch (error) {


       }
       await helper.waitForDisplayed(Sl.partialTestid(data.element.trolley_product_link_partialtestid), this.long_pause);


   }


   async navigateToTrolley(data, assert, firstUseCase = 'false') {
       await this.userSignin(data);
       if (firstUseCase == 'true') {
           await this.emptyTrolley(data);
       }
       await this.iftrolleyEmptyAddProduct();
       await this.pdpToTrolley(data, assert);
       await helper.waitForEnabled(Sl.testid(data.element.checkout_button_testid), this.long_pause);


   }




   async trolleyToCheckoutPageNav(data, assert) {
       await this.navigateToTrolley(data, assert, 'true');
       await Sl.testid(data.element.checkout_button_testid).click();
       await asserts.pageUrl(assert.checkout_page);
       await helper.waitForDisplayed(Sl.testid(checkout.element.summary_header_testid), this.long_pause);
       await asserts.text(Sl.testid(checkout.element.summary_header_testid), assert.summary);


   }


   async trolleyQuantitySelector(data, assert) {
       await this.navigateToTrolley(data, assert);
       const presentQuantityString = await Sl.partialTestid(data.element.qunatity_input_enddtestid).getAttribute("aria-valuenow");
       const presentQuantity = BigInt(presentQuantityString);
       await helper.waitForDisplayed(await Sl.getElementByTestIdEndingWith(data.element.quantity_selector_button_endtestid), this.long_pause);
       const quantity = await Sl.getElementByTestIdEndingWith(data.element.quantity_selector_button_endtestid);
       await quantity.click();
       await helper.waitForEnabled(Sl.testid(data.element.checkout_button_testid), this.long_pause);
       await browser.pause(this.small_pause);
       await helper.waitForDisplayed(Sl.partialTestid(data.element.qunatity_input_enddtestid), this.long_pause);
       const newQuantityString = await Sl.partialTestid(data.element.qunatity_input_enddtestid).getAttribute("aria-valuenow");
       const newQuantity = BigInt(newQuantityString);
       expect(newQuantity).toBeGreaterThan(presentQuantity);


   }


   async trolleyCodeButton(data, assert) {
       await this.navigateToTrolley(data, assert);
       await Sl.testid(data.element.trolley_code_button_testid).click();
       await browser.pause(this.small_pause);
       await helper.waitForDisplayed(Sl.$((data.element.code_header_xpath)),this.long_pause);
       await asserts.text(Sl.$(data.element.code_header_xpath), assert.header);
       await helper.waitForDisplayed(Sl.$(data.element.trolley_qr_text), this.long_pause);
       expect(Sl.$(data.element.trolley_qr_text)).toBeDisplayed();


   }


   async extractProductDetails(text) {
       const match = text.match(/^(.+)\s\((\d+)\)$/);


       if (match) {
           return {
               productName: match[1],
               productCode: match[2],
           };
       } else {
           return {
               productName: null,
               productCode: null
           };
       }


   }


   async saveForLaterButton(data, assert) {
       await this.navigateToTrolley(data, assert);
       await helper.waitForDisplayed(Sl.partialTestid(data.element.trolley_product_link_partialtestid), this.long_pause);
       await browser.pause(this.small_pause);
       const productDetails = await Sl.partialTestid(data.element.trolley_product_link_partialtestid).getText();
       const { productName, productCode } = await this.extractProductDetails(productDetails);
       const saveforlater = await Sl.getElementByRegexTestid(data.element.save_later_regex.start_testid, data.element.save_later_regex.end_testid);
       await helper.waitForDisplayed(saveforlater, this.long_pause);
       await saveforlater.click();
       await browser.pause(this.small_pause);
       const toastCloseButton = await Sl.arialabel(data.element.success_close_arialabel);
       await browser.execute((el) => el.click(), toastCloseButton);
       await helper.waitForDisplayed(Sl.testid(header.element.save_list_btn_testid), this.long_pause);
       await Sl.testid(header.element.save_list_btn_testid).click();
       await browser.pause(this.small_pause);
       await asserts.pageUrl(assert.save_list_page);
       await helper.waitForDisplayed(Sl.$(data.element.save_for_later_list_tab_xpath), this.long_pause);
       await Sl.$(data.element.save_for_later_list_tab_xpath).click();
       await helper.waitForDisplayed(Sl.partialTestid(savelist.element.product_link_endtestid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(savelist.element.savelist_header_testid), this.medium_pause);
       await expect(Sl.testid(savelist.element.savelist_header_testid)).toBeDisplayed();
       const saveListProducts = await Sl.partialTestids(savelist.element.product_link_endtestid);
       const saveListProductTexts = [];
       for (const product of saveListProducts) {
           const text = await product.getText();
           saveListProductTexts.push(text);
       }
       const productFound = saveListProductTexts.includes(productName);
       expect(productFound).toBe(true);
       const savedProductCodeEles = await Sl.testids(savelist.element.product_code_testid);
       const savedProductCodes =[];
       for (const savedProductCodeEle of savedProductCodeEles) {
           const savedProductCode = await savedProductCodeEle.getText();


           savedProductCodes.push(savedProductCode.split(":")[1].trim());


       }
       const codeFound = savedProductCodes.includes(productCode);
       expect(codeFound).toBe(true);


   }


   async selectABranch() {
       await Sl.testid(header.element.branch_locator_testid).click();
       await browser.pause(this.small_pause);
       await this.isElementDisplayed(Sl.$(header.element.branchpopup_header_xpath), this.long_pause);
       await helper.waitForExistance(Sl.testid(header.element.branch_modelview_btn_testid), this.long_pause);
       await Sl.testid(header.element.branch_searchbar_testid).setValue(header.value.searchbox);
       await browser.pause(this.medium_pause);
       const searchSuggestionResults = await Sl.testids(header.element.branch_searchsuggestion_list_testids);
       await helper.waitForExistance(searchSuggestionResults[0], this.long_pause);
       await searchSuggestionResults[0].click();
       await helper.waitForDisplayed(Sl.$(header.element.resultfound_para_xpath), this.long_pause);
       const searchResults = await Sl.testids(header.element.branch_searchresults_testids);
       searchResults[0].click();
       await Sl.testid(header.element.savebranch_btn_testid).click();
       await helper.waitForDisplayed(Sl.class(header.element.success_msg_class), this.medium_pause);
       const message = await Sl.testid(header.element.branch_succes_message_testid).getHTML(false);
       expect(message).toHaveTextContaining(header.value.branch_success_msg);
       const toastCloseButton = await Sl.arialabel(header.element.success_close_arialabel);
       await browser.execute((el) => el.click(), toastCloseButton);


   }


   async changeToPickUpAtTheBranch(data, assert) {
       await this.navigateToTrolley(data, assert, 'true');
       await this.selectABranch();
       await Sl.partialTestid(data.element.change_pick_up_endtestid).click();
       const message = await Sl.$(data.element.collect_success_msg_xpath).getHTML(false);
       const toastCloseButton = await Sl.arialabel(data.element.success_close_arialabel);
       await browser.execute((el) => el.click(), toastCloseButton);
       expect(message).toMatch(assert.collection_switch_message);
       await browser.execute((el) => el.click(), toastCloseButton);
       await helper.waitForDisplayed(Sl.partialTestid(data.element.trolley_product_link_partialtestid), this.long_pause);
       await helper.waitForEnabled(Sl.testid(data.element.checkout_button_testid), this.long_pause);
       const collectionChannelHeader = await Sl.testid(data.element.collection_section_heading_testid);
       expect(collectionChannelHeader).toBeDisplayed();
       await asserts.text(collectionChannelHeader, assert.collection_text);


   }


   async changeToDelivery(data, assert) {
       await this.userSignin(data);
       await browser.pause(this.small_pause);
       let itemValueFlag;
       try {
           itemValueFlag = await helper.waitForDisplayed(Sl.testid(header.element.item_count_testid), this.medium_pause * 2);
       } catch (error) {


       }
       if (itemValueFlag) {
           await this.pdpToTrolley(data, assert);
           await Sl.partialTestid(data.element.remove_btn_endtestid).click();
           await Sl.testid(data.element.confirm_delete_cta_testid).click();
           await browser.pause(this.small_pause);
       }
       await this.openCategory();
       await this.navigateToPdpFromPlp();
       await this.addProductToTrolleyFromPdp("collection");
       await this.pdpToTrolley(data, assert);
       await Sl.partialTestid(data.element.change_pick_up_endtestid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.delivery_text_testid), this.long_pause);
       await asserts.text(Sl.testid(data.element.delivery_text_testid), assert.delivery_text);


   }
   async compareProductEmptyTrolley(data, assert) {
       await this.verifySigninTrolleyCount(data, assert);
       await Sl.testid(data.element.trolley_button_testid).click();
       await asserts.pageUrl(assert.trolley_page);
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       const deletes = await Sl.findElementsByTestIdEndingWith(data.element.delete_product_from_trolley_findElementsByTestIdEndingWith);
       await deletes[0].click();
       await Sl.testid(data.element.confirm_delete_cta_testid).click();
       await browser.scroll(0, 800);
       const cardContainer = Sl.findElementsByTestIdEndingWith(data.element.card_cantainer_findElementsByTestIdEndingWith);
       await helper.waitForDisplayed(cardContainer[0], this.medium_pause);
       const element = Sl.findElementsByTestIdEndingWith(data.element.compare_product_findElementsByTestIdEndingWith);
       await element[1].click();
       await element[2].click();
       await element[3].click();
       const compareButton = await Sl.findElementsByTestIdEndingWith(data.element.compare_all_product_findElementsByTestIdEndingWith);
       await browser.execute("arguments[0].click();", compareButton[0]);


   }
   async validPromoCodeTrolley(data, assert) {
       // await this.verifySigninTrolleyCount(data, assert);
       // await Sl.testid(data.element.trolley_button_testid).click();
       await this.navigateToTrolley(data);
       await asserts.pageUrl(assert.trolley_page);
       // await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.promocode_empty_text_box_testid), this.long_pause);
       await Sl.testid(data.element.promocode_empty_text_box_testid, data.value.promocode);
       await browser.pause(this.small_pause / 2);
       await helper.waitForEnabled(Sl.$(data.element.promocode_submit_button_xpath), this.long_pause);
       await Sl.$(data.element.promocode_submit_button_xpath).click();
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       await browser.scroll(0, 400);
       await Sl.testid(data.element.checkout_button_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.checkout_delivery_subheading_testid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.checkout_delivery_heading_testid), this.long_pause);
       await asserts.pageUrl(assert.checkout_page);


   }
   async invalidPromocodeTrolley(data, assert) {
       await this.navigateToTrolley(data, assert);
       await helper.waitForDisplayed(Sl.testid(data.element.promocode_empty_text_box_testid), this.long_pause);
       await Sl.testid(data.element.promocode_empty_text_box_testid, data.value.invalid_promocode);
       await browser.pause(this.small_pause / 2);
       await helper.waitForEnabled(Sl.$(data.element.promocode_submit_button_xpath), this.long_pause);
       await Sl.$(data.element.promocode_submit_button_xpath).click();
       await browser.pause(this.medium_pause * 1.6);
       await helper.waitForDisplayed(Sl.testid(data.element.success_message_body_testid), this.long_pause);
       expect(Sl.testid(data.element.invalid_promocode_toast_message_testid)).toBeDisplayed();
       const message = await Sl.$(data.element.promo_error_msg_xpath).getHTML(false);
       expect(message).toBe(assert.error_msg);


   }
   async validateProductInTrolleyAfterLogoutAndLoginThenCheckout(data, assert) {
       await this.verifySigninTrolleyCount(data, assert);
       await Sl.testid(data.element.trolley_button_testid).click();
       await asserts.pageUrl(assert.trolley_page);
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       await this.logout(data);
       await Sl.testid(header.element.header_signin_link_testid).click();
       await helper.userSignin();
       await helper.waitForDisplayed(Sl.testid(data.element.card_item_count_testid), this.medium_pause);
       await Sl.testid(data.element.trolley_button_testid).click();
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.medium_pause);
       await browser.scroll(0, 400);
       await helper.waitForDisplayed(Sl.testid(data.element.checkout_button_testid));
       await Sl.testid(data.element.checkout_button_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.checkout_delivery_subheading_testid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.checkout_delivery_heading_testid), this.long_pause);
       await asserts.pageUrl(assert.checkout_page);


   }
   async validateTrolleyFullJourneyInNewBrowserSession(data, assert) {
       await this.verifySigninTrolleyCount(data, assert);
       await Sl.testid(data.element.trolley_button_testid).click();
       await asserts.pageUrl(assert.trolley_page);
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       await helper.waitForDisplayed(Sl.testid(data.element.trolley_code_button_testid), this.long_pause);
       await Sl.testid(data.element.trolley_code_button_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.trolley_code_copy_button_testid), this.long_pause);
       await Sl.testid(data.element.trolley_code_copy_button_testid).click();
       await helper.waitForDisplayed(Sl.$(data.element.cancel_trolley_code_popup_xpath), this.long_pause)
       await Sl.$(data.element.cancel_trolley_code_popup_xpath).click();
       const copiedURL = await clipboardy.read();
       await browser.navigateTo(copiedURL);
       await helper.waitForDisplayed(Sl.testid(data.element.trolley_code_text_testid), this.long_pause);


   }


   async navigateToClickCollectAndFreeDelivery(data, assert) {
       await this.verifySigninTrolleyCount(data, assert);
       await Sl.testid(data.element.trolley_button_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.trolley_heading_testid), this.long_pause);
       await asserts.pageUrl(assert.trolley_page);
       await helper.waitForDisplayed(Sl.getElementByTestIdEndingWith(data.element.product_link_endtestid), this.long_pause);
       await helper.waitForDisplayed(Sl.$(data.element.click_collect_card_text), this.long_pause);
       await Sl.$(data.element.click_collect_card_text).click();
       await helper.waitForDisplayed(Sl.testid(data.element.click_collect_testid), this.long_pause);
       await asserts.pageUrl(assert.click_collect_page);
       await browser.back();
       await helper.waitForDisplayed(Sl.$(data.element.free_delivery_card_text), this.long_pause);
       await Sl.$(data.element.free_delivery_card_text).click();
       await helper.waitForDisplayed(Sl.$(data.element.free_delivery_title_text), this.long_pause);
       await asserts.pageUrl(assert.delivery_page);


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
