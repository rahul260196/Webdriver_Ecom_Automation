import Page from '../webdriverio-helper/Page.js'


export default class ProductListing extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            sorting_dropmenu_testid: 'root-sorting-dropdown-menu',
            sorting_asc_option_testid: 'option-1-sorting-dropdown-menu',
            addtotrolley_modal_delivery_section_testid: 'add-to-trolley-modal-for-product-51242-delivery-option-radio-label',
            filter_category_brand_testid: 'search-filters-for-product-filter-accordion-tab-brand',
            fitler_article_testid: 'search-filters-for-product-filter-accordion-tab-itemtype',
            filter_Option_Waskonig_testid: 'checkbox-Waskonig-label',
            filter_chip_testid: 'remove-chip-filter-chip-selected-icon',
            filter_result_Count_testid: 'filter-results-count',
            filter_clearAll_button_testid: 'filter-clear-all-button',
            filter_heading_testid: 'filters-text',
            sorting_dropdown_testid: 'sorting-dropdown-menu-input',
            low_to_high_sorting_option_testid: 'option-1-sorting-dropdown-menu',
            high_to_low_sorting_option_testid: 'option-2-sorting-dropdown-menu',
            rows_per_page_dropdown_testid: 'atom-select-box-input',
            rows_per_page_30_testid: 'option-1-atom-select-box',
            rows_per_page_48_testid: 'option-2-atom-select-box',
            product_price_testid: 'product-price-currency',
            product_id_testid: 'plp-product-id-label',
            variant_card_testid: '-product-similar-variants',     
            add_to_trolley_cta_endtestid: '-add-to-trolley-button',
            trolley_modal_addtotrolley_cta_endtestid: '-add-to-trolley-cta',
            trolley_modal_price_endtestid: '-formatted-gross-price',
            delivery_confirm_tag_testid: 'trolley-multiple-items-confirmation-modal-heading-channel-tag',
            confirm_modal_product_testid:'trolley-multiple-items-confirmation-modal-recommendation-0-full-name',
            delivery_msg_xpath: '(//h4[contains(.,"Producten")])[2]',
            trolley_modal_close_button_testid: '-close-button',    
            quantity_input_testid: 'quantity-control-input',
            quantity_increase_testid: 'quantity-control-increment',
            quantity_decrease_testid: 'quantity-control-decrement',
            modal_product_price_testid: '-formatted-gross-price',
            accept_cookie_button_xpath: '//button[@id="onetrust-accept-btn-handler"]',
            next_page_button_xpath: '//*[@data-testid="pagination-next"]',
            prev_page_button_testid: 'pagination-previous',
            first_page_button_testid: 'pagination-page-1',
            last_page_button_testid: 'pagination-last',
            numbered_page_button_testid: `pagination-page-`,
            modal_variant_dropdown_testid: '-choose-variant-button',
            modal_variant_options_testid: '-select-variant-cta',
            trolley_item_count_xpath: '//a[@data-testid="_header-link-cart"]//span[1]/span',
            delivery_option_testid: '-delivery-option-radio-input',
            collection_option_testid: '-collection-option-radio-input',
            next_day_collection_option_testid: '-collection-option-radio-input',
            set_favorite_location_link_xpath: '(//*[text()="Stel jouw favoriete vestiging in"])[1]',
            branch_search_input_xpath: '(//*[@placeholder="Voer postcode of plaatsnaam in"])[3]',
            branch_option_xpath: '(//*[@data-testid="locality-autocomplete-li"])[1]',
            branch_selection_testid: 'nearest-branch',
            save_branch_cta_testid: 'branch-save',
            product_link_endswithtestid: '-details-page-link-name',
            product_image_endswithtestid: '-details-page-link-image',
            productlisting_page_heading_testid: 'heading-primary',
            delivery_button_findElementsByTestIdEndingWith: '-delivery-btn',
            added_to_trolley_success_msg_testid: 'trolley-add-ons-recommendations-item-added-to-trolley-text',
            goto_trolley_button_testid: 'trolley-add-ons-recommendations-go-to-trolley-btn',
            product_price_testid: 'product-price-currency',
            product_count_testid: 'filter-results-count',
            filter_text_testid: 'search-filters-for-product-filter-accordion-tab-brand',
            filter_chip_testid: 'filter-chip-selected',
            trolley_modal_branchselector_xpath: '(//span[contains(.,"Stel jouw favoriete vestiging in")])[4]',
            filter_checkbox:{
                starttestid: 'checkbox-',
                endtestid:'-input',
            },
            filter_label:{
                starttestid: 'checkbox-',
                endtestid:'-label',
 
 
            }
 
 
        }
        this.value = {
            branch_name: '1011 AB'
        }
        this.params.page = {
            id: 'PLP',
            name: 'PLP',
            url : this.base_url
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the filters functionality in the product listing page',
                        expect: 'The filters should be functional in the product listing page. The result should be displayed as per the applied filters',
                    },
                    {
                        count: 1.2,
                        name: 'Verify the sorting functionality in the product listing page',
                        expect: 'The sorting should be functional in the product listing page. The result should be displayed as per the applied sorting',
                    },
                    {
                        count: 1.3,
                        name: 'Verify the rows per page functionality in the product listing page',
                        expect: 'The rows per page should be functional in the product listing page. The user should be able to change the product rows per page in the table',
                    },
                    {
                        count: 1.4,
                        name: 'Verify the pagination functionality in the product listing page',
                        expect: 'The pagination should be functional in the product listing page. The user should be able to move back and forth',
                    },
                    {
                        count: 1.5,
                        name: 'Verify the Add to Trolley Button Functionality',
                        expect: 'Clicking Add to Trolley should open the trolley modal for the corresponding product, allowing the user to proceed with adding the item.',
               
                    },
                    {
                        count: 1.6,
                        name: 'Verify Quantity Adjustment functionality in the modal',
                        expect: 'The quantity input in the trolley modal should allow the user to increase or decrease the product quantity and reflect the correct value.',
                    },
                    {
                        count: 1.7,
                        name: "Verify Variant Selection in the modal",
                        expect: "If a variant dropdown is present, it should allow selection and update accordingly before adding to the trolley.",
                       
                    },
                    {
                        count: 1.8,
                        name: "Verify Add to Trolley functionality in the modal",
                        expect: "The Add to Trolley button in the modal should add the selected product to the trolley and update the trolley count accordingly.",
                        assert: 'Producten toegevoegd aan winkelwagen'
                    },
                    {
                        count: 1.9,
                        name: "Verify selecting a branch and adding a product for collection",
                        expect: "The user should be able to select a branch, save it, and add a product for collection. The trolley count should update accordingly, and the product should appear under the selected collection method."
                    },                   
                ]
            }
        ]
    }
 }
 