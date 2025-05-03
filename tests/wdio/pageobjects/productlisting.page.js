
import Page from '../webdriverio-helper/Page.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from '../webdriverio-helper/Asserts.js';
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';




let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let header = new Header();


export default class productListingPage extends Page{
   constructor() {
       super();
       this.params.page.id = 'PLP';
       this.params.page.name = 'PLP';
       this.params.page.url = this.base_url;
   }


   async open() {
       await browser.maximizeWindow();
       await super.open(this.params.page.url);
       await helper.addCookies();
       await helper.acceptConsent();
     //  await helper.clickPopupIfExists(data.element.accept_cookie_button_xpath, 30000)
   }
  
   areArraysEqual(arr1, arr2) {
       if (arr1.length !== arr2.length) return false;
       for (let i = 0; i < arr1.length; i++) {
           if (arr1[i] !== arr2[i]) return false;
       }
       return true;
   }
  
   async openCategory() {
       await Sl.testid(header.element.header_categories_link_testid).moveTo();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(header.element.schroeven_bevestigingsmiddelen_link_testid), this.long_pause*2);
       await Sl.testid(header.element.schroeven_bevestigingsmiddelen_link_testid).click();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(header.element.subcategory_link_testid), this.long_pause);
       await Sl.testid(header.element.subcategory_link_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.productlisting_page_heading_testid), this.long_pause);
   }
      


   async navigateToPLP(data) {
       await Sl.testid(header.element.header_categories_link_testid).click();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(header.element.electra_category_link_testid), this.long_pause);
       await Sl.testid(header.element.electra_category_link_testid).click();
       await asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.testid(header.element.electra_subcategory_installatiekabels_link_testid), this.long_pause);
       await Sl.testid(header.element.electra_subcategory_installatiekabels_link_testid).click();
       await helper.waitForDisplayed(Sl.testid(data.element.productlisting_page_heading_testid), this.long_pause);
       await helper.waitForDisplayed(Sl.partialTestid(data.element.product_image_endswithtestid),this.long_pause);
       await asserts.pauseIfHuman(this.medium_pause)
   }           
      
   async verifyFiltersFunctionality(data) {
       await this.navigateToPLP(data);
       asserts.pauseIfHuman();
       await helper.waitForDisplayed(Sl.partialTestid(data.element.product_link_endswithtestid),this.long_pause);
       const productCountText = await Sl.testid(data.element.product_count_testid).getText();
       let result = productCountText.split(" van ")[1].split(" resultaten")[0];
       let resultNum = parseFloat(result);
       await helper.waitForDisplayed(Sl.testid(data.element.filter_text_testid));
       const filtersTypeText = await Sl.testid(data.element.filter_text_testid).getText();
       const filterTypeText = filtersTypeText.replace(/\s*\(\d+\)$/, "").trim();
       const filterTypesOptionText = await Sl.getElementByRegexTestid(data.element.filter_label.starttestid, data.element.filter_label.endtestid).getText();
       const filterTypeOptionText = filterTypesOptionText.replace(/\s*\(\d+\)$/, "").trim();
       await Sl.getElementByRegexTestid(data.element.filter_checkbox.starttestid, data.element.filter_checkbox.endtestid).click();
       await helper.waitForDisplayed(Sl.partialTestid(data.element.product_image_endswithtestid));
       asserts.pauseIfHuman();
       const filterChipText = await Sl.testid(data.element.filter_chip_testid).getText();
       let combinedText = `${filterTypeText} - ${filterTypeOptionText}`.toLowerCase();
       expect(combinedText.toLowerCase()).toBe(filterChipText.toLowerCase());
       const productCountTextAfterFilter = await Sl.testid(data.element.product_count_testid).getText();
       let resultAfterFilter = productCountTextAfterFilter.split(" van ")[1].split(" resultaten")[0];
       let resultNumAfterFilter = parseFloat(resultAfterFilter);
       expect(resultNumAfterFilter).toBeLessThan(resultNum);
   }


   async verifySortingFunctionality(data) {
       await this.navigateToPLP(data);
       const productPrices = await Sl.findElementsByTestIdEndingWith(data.element.product_price_testid);
       let prices = [];
       for(const productPrice of productPrices){
           const stringPrice =await productPrice.getText();
           let priceNumber = parseInt(stringPrice.replace(/[€,]/g, ''), 10);
            prices.push(priceNumber);
       }
       const expected = prices.sort((a, b) => a - b);
       await Sl.testid(data.element.sorting_dropmenu_testid).click();
       await Sl.testid(data.element.sorting_asc_option_testid).click();
       await helper.waitForDisplayed(Sl.partialTestid(data.element.product_image_endswithtestid),this.long_pause);
       const sortedProductPrices = await Sl.findElementsByTestIdEndingWith(data.element.product_price_testid);
       let sortedPrices = [];
       for(const price of sortedProductPrices){
           let stringPrice =await price.getText();
           let priceNumber = parseInt(stringPrice.replace(/[€,]/g, ''), 10);
            sortedPrices.push(priceNumber);
       }
       console.log("Sorted prices", sortedPrices);
       console.log("Prices", prices);
      


       expect(this.areArraysEqual(sortedPrices, expected)).toEqual(true);


   }   






  


   async addToTrolleyButtonFunctionality(data) {
       await this.navigateToPLP(data);
       const priceOfProducText = await Sl.testid(data.element.product_price_testid).getText();
       const priceOnPlp = parseInt(priceOfProducText.replace(/[\$,]/g, ''), 10);
       const addToTrolleyButtons = await Sl.findElementsByTestIdEndingWith(data.element.add_to_trolley_cta_endtestid);
       await addToTrolleyButtons[0].click();
       await helper.waitForDisplayed(Sl.partialTestid(data.element.trolley_modal_price_endtestid),this.long_pause);
       const trolleyModalPriceText = await Sl.partialTestid(data.element.trolley_modal_price_endtestid).getText();
       const trolleyModalPrice = parseInt(trolleyModalPriceText.replace(/[\$,]/g, ''), 10);
       expect(trolleyModalPrice).toBe(priceOnPlp);
       await expect(Sl.partialTestid(data.element.trolley_modal_addtotrolley_cta_endtestid)).toBeDisplayed();
   }       
  
   async verifyPaginationFunctionality(data) {
       browser.url('https://www.toolstation.nl/elektrisch-gereedschap/bosch/c484');
       await helper.waitForProductLoad()
       const totalResultsElement = await Sl.testid(data.element.filter_result_Count_testid);
       await helper.waitForDisplayed(totalResultsElement, { timeout: 5000 });
       const totalResultsText = await totalResultsElement.getText();
       const totalProducts = parseInt(totalResultsText.match(/\d+/g)[1], 10);
       console.log(`Total Products: ${totalProducts}`);
  
       const rowsPerPageDropdown = await Sl.testid(data.element.rows_per_page_dropdown_testid);
       await helper.waitForDisplayed(rowsPerPageDropdown, { timeout: 5000 });
       const rowsPerPageText = await rowsPerPageDropdown.getAttribute("placeholder");
       const selectedRowsPerPageOption = parseInt(rowsPerPageText.match(/\d+/)[0], 10);
       console.log('Selected rows per page option: ' + selectedRowsPerPageOption);
  
       const totalPages = Math.ceil(totalProducts / selectedRowsPerPageOption);
       console.log(`Total Pages: ${totalPages}`);
  
       const nextPageButton = await Sl.$(data.element.next_page_button_xpath);
       const prevPageButton = await Sl.testid(data.element.prev_page_button_testid);
       const firstPageButton = await Sl.testid(data.element.first_page_button_testid);
       const lastPageButton = await Sl.testid(data.element.last_page_button_testid);
  
       if (totalPages === 1) {
           expect(await nextPageButton.isEnabled()).toBe(false);
           expect(await prevPageButton.isEnabled()).toBe(false);
           expect(await firstPageButton.isEnabled()).toBe(false);
           expect(await lastPageButton.isEnabled()).toBe(false);
           console.log("Only one page available. All pagination buttons are disabled.");
           return;
       }
  
       if (totalPages >= 3) {
           const randomPage = Math.floor(Math.random() * (totalPages - 2)) + 2;
           const randomPageButtons = await Sl.testIdsStartsWith(data.element.numbered_page_button_testid)
           console.log(randomPageButtons.length)
  
           console.log(`Clicking Random Page: ${randomPage}`);
           const randomPageButton = await randomPageButtons[randomPage - 1];
           await randomPageButton.click();
           await asserts.pauseIfHuman(this.medium_pause);
  
           const newUrl = await browser.getUrl();
           expect(newUrl).toContain(`page=${randomPage}`);
           console.log(`Clicked on Page ${randomPage}, URL updated correctly.`);
  
           expect(await firstPageButton.isEnabled()).toBe(true);
           expect(await prevPageButton.isEnabled()).toBe(true);
           expect(await nextPageButton.isEnabled()).toBe(true);
           expect(await lastPageButton.isEnabled()).toBe(true);
           console.log("On a middle page: All pagination buttons are enabled.");
  
           await firstPageButton.click();
           await asserts.pauseIfHuman(this.medium_pause);
           const firstPageUrl = await browser.getUrl();
           expect(firstPageUrl).not.toContain("page=");
           await asserts.pauseIfHuman(this.medium_pause)
           console.log("Returned to First Page using First button, URL reset correctly.");
       }
  
       expect(await firstPageButton.isEnabled()).toBe(false);
       expect(await prevPageButton.isEnabled()).toBe(false);
       expect(await nextPageButton.isEnabled()).toBe(true);
       expect(await lastPageButton.isEnabled()).toBe(true);
       console.log("On the first page: First & Prev are disabled, Next & Last are enabled.");
      
       await nextPageButton.click();
       await asserts.pauseIfHuman(this.medium_pause);
       const secondPageUrl = await browser.getUrl();
       expect(secondPageUrl).toContain("page=2");
       console.log("Navigated to Page 2 using Next, URL updated correctly.");
  
       await prevPageButton.click();
       await asserts.pauseIfHuman(this.medium_pause);
       const firstPageUrlAgain = await browser.getUrl();
       expect(firstPageUrlAgain).not.toContain("page=");
       console.log("Returned to Page 1 using Prev, URL reset correctly.");
  
       await lastPageButton.click();
       await asserts.pauseIfHuman(this.medium_pause);
       const lastPageUrl = await browser.getUrl();
       expect(lastPageUrl).toContain(`page=${totalPages}`);
       console.log(`Navigated to Last Page (${totalPages}), URL updated correctly.`);
  
       expect(await nextPageButton.isEnabled()).toBe(false);
       expect(await lastPageButton.isEnabled()).toBe(false);
       expect(await firstPageButton.isEnabled()).toBe(true);
       expect(await prevPageButton.isEnabled()).toBe(true);
       console.log("On the last page: Next & Last are disabled, First & Prev are enabled.");
  
       await firstPageButton.click();
       await asserts.pauseIfHuman(this.medium_pause);
       const finalResetUrl = await browser.getUrl();
       expect(finalResetUrl).not.toContain("page=");
       console.log("Returned to First Page using First button again, URL reset correctly.");
   }
  
   async verifyQuantityAdjustment(data) {
       await helper.waitForProductLoad()
       const quantityInput = await Sl.testIdEndsWith(data.element.quantity_input_testid);
       const increaseButton = await Sl.testIdEndsWith(data.element.quantity_increase_testid);
       const decreaseButton = await Sl.testIdEndsWith(data.element.quantity_decrease_testid,);
       const modalAddToTrolleyButton = await Sl.testIdEndsWith(data.element.trolley_modal_addtotrolley_cta_testid);
      
  
       const debounceWait = 500;
       const rapidClicks = Math.floor(Math.random() * 3) + 1;
  
       let currentQuantity = await quantityInput.getValue();
       expect(currentQuantity).toBe('1');
       console.log(currentQuantity)
  
       await increaseButton.scrollIntoView();
       await helper.clickElement(increaseButton);
       await browser.pause(debounceWait);
       currentQuantity = await quantityInput.getValue();
       expect(currentQuantity).toBe('2');


       await decreaseButton.scrollIntoView();
       await helper.clickElement(decreaseButton)
       await browser.pause(debounceWait);
       currentQuantity = await quantityInput.getValue();
       expect(currentQuantity).toBe('1');
  
       for (let i = 0; i < rapidClicks; i++) {
           await helper.clickElement(increaseButton)
       }
       await browser.pause(debounceWait);
  
       const expectedQuantity = (1 + rapidClicks).toString();
       currentQuantity = await quantityInput.getValue();
       expect(currentQuantity).toBe(expectedQuantity);
  
       await quantityInput.setValue('1000');
       await browser.pause(debounceWait);
  
       currentQuantity = await quantityInput.getValue();
      
       const isButtonDisabled = await modalAddToTrolleyButton.getAttribute('disabled');
       expect(isButtonDisabled).toBeTruthy();
   }


   async selectVariantFunctionality(data) {
       await helper.waitForProductLoad()
       const variantDropdown = await Sl.testIdEndsWith(data.element.modal_variant_dropdown_testid);
  
       if (!variantDropdown || !(await variantDropdown.isDisplayed())) {
           console.log("Variant dropdown not found or not visible.");
           return;
       }
  
       console.log("Variant dropdown is present. Selecting a variant...");
      
       await variantDropdown.scrollIntoView({ block: "center", inline: "nearest" });
       await browser.pause(500);
  
       try {
           await variantDropdown.waitForClickable(this.medium_pause);
           await variantDropdown.click();
       } catch (error) {
           await helper.clickElement(variantDropdown);
       }
  
       await asserts.pauseIfHuman(2000);
  
       let variantOptions = await Sl.testIdsEndsWith(data.element.modal_variant_options_testid);
  
       if (!variantOptions || variantOptions.length === 0) {
           console.log("No variant options found after clicking. Retrying...");
           await browser.pause(2000);
           variantOptions = await Sl.testIdsEndsWith(data.element.modal_variant_options_testid);
          
           if (!variantOptions || variantOptions.length === 0) {
               console.error("No variant options available even after retry.");
               return;
           }
       }
  
       console.log(`Found ${variantOptions.length} variant(s). Selecting the first one...`);
       const selectedVariant = variantOptions[0];
  
       await selectedVariant.scrollIntoView({ block: "center", inline: "nearest" });
  
       try {
           await selectedVariant.waitForClickable(this.small_pause);
           await selectedVariant.click();
       } catch (error) {
           await helper.clickElement(selectedVariant);
       }


       await asserts.pauseIfHuman(this.medium_pause)
   }          
  
   async addToTrolleyInDeliveryAndVerify(data,assert) {
       await this.addToTrolleyButtonFunctionality(data);
       await browser.pause(5000);
       const modalAddToTrolleybutton = await Sl.partialTestid(data.element.trolley_modal_addtotrolley_cta_endtestid);
       await browser.execute("arguments[0].click();", modalAddToTrolleybutton);
       try{
           await helper.waitForDisplayed(Sl.testid(data.element.confirm_modal_product_testid),this.medium_pause);
       }catch(error){
           console.log("Recommendation products not available", error);
       }
       await expect(Sl.testid(data.element.delivery_confirm_tag_testid)).toBeDisplayed();
       const confirmFullTextEle = await Sl.$(data.element.delivery_msg_xpath);
       const confirmFullText = await confirmFullTextEle.getText();
       const confirmText = confirmFullText.split('Bezorgen')[0].trim();
       console.log(" i am here");
       expect(confirmText).toBe(assert);
   }
  
   async selectBranchAndSetAsFavorite(data) {
       await helper.waitForProductLoad()
       const setLocationButton = await Sl.$(data.element.set_favorite_location_link_xpath);
       const searchBranchInput = await Sl.$(data.element.branch_search_input_xpath);
       const branchSelection = await Sl.testIdStartsWith(data.element.branch_selection_testid)
       const saveBranchButton = await Sl.testid(data.element.save_branch_cta_testid);
  
       await setLocationButton.scrollIntoView();
       await helper.clickElement(setLocationButton)
  
       await searchBranchInput.setValue(data.value.branch_name);
       await browser.keys('Enter')
          
       await asserts.pauseIfHuman(this.medium_pause);
       await helper.waitForDisplayed(branchSelection, {timeout:10000})
       try {
           await branchSelection.click();
       } catch (error) {
           console.warn("Direct click failed, trying helper method:", error);
           await helper.clickElement(branchSelection);
       }
      
       await saveBranchButton.scrollIntoView();
       await helper.clickElement(saveBranchButton)
       await asserts.pauseIfHuman(this.medium_pause);
  
       console.log(`Branch "${data.value.branch_name}" selected and saved.`);
   }


   async addToTrolleyForCollectionAndVerify(data) {
     await this.addToTrolleyButtonFunctionality(data);
     await Sl.$(data.element.trolley_modal_branchselector_xpath).click();
     const branchSearchBar = await Sl.$(header.element.branch_search_xpath);
     await branchSearchBar.setValue("1011 AB");
     await browser.pause(this.small_pause);
     const searchSuggestion = await Sl.$$(header.element.branch_searchsuggestion_list_xpath);
  
   }
}
