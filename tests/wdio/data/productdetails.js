
import { subscribe } from 'diagnostics_channel';
import Page from '../webdriverio-helper/Page.js'


export default class ProductDetails extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            product_search_suggestion: 'span=Einhell TC-VC 1820 S NAT/DRONGEUTER',
            next_day_collection_btn_xpath: '//span[contains(text(),"Next day collection")]/../..//button',
            postcode_input_field_placeholder: 'Enter postal code or city',
            branch_option_text: 'span=Hoofddorp',
            added_trolley_msg_text: 'span= Item added to trolley ',
            brand_para_text: 'p*=Merk:',
            select_branch_text: 'span*=Select branch',
            delivery_btn_partialtestid: '-delivery-btn',
            delivery_popup_header_text: 'span*= Artikel toegevoegd aan winkelwagen',
            go_to_trolly_btn_testid: 'trolley-add-ons-recommendations-go-to-trolley-btn',
            collection_btn_partialtestid: '-collection-btn',
            use_my_current_location_testid: 'branch-selector-modal-current',
            set_my_fav_branch_para_text: 'p*=Set your favorite branch',
            veendam_branch_header_text:'h4*=Veendam',
            save_branch_button_testid:'branch-save',
            delivery_header_text:'div*=Bezorging',
            next_day_collection_btn_text:'span*=Volgende dag ophalen',
            collection_btn_text:'span*=Ophalen',
            click_and_collect_trolley_header_testid:'trolley-channel-collection',
            next_day_collection_trolley_header_testid:'trolley-channel-nextdaycollection',
            input_field_xpath: '//input[contains(@data-testid, "pdp")]',
            increment_button_partialtestid:'increment',
            notify_me_btn_partialtestid:'notify',
            subscribe_product_text:'span*=Abonneren',
            stock_notify_subscribe_btn_xpath:'(//button[contains(@data-testid, "stock-notify-subscribe-btn")])[1]',
            cross_icon_xpath:'(//p[text()="Wij houden u op de hoogte"]/../../../..//*[name()="svg"])[2]',
            price_testid:'true-price',
            collection_btn_xpath: '(//button[contains(@data-testid,"-sticky")])[1]',
            delivery_btn_xpath: '(//button[contains(@data-testid,"-sticky")])[2]',
            recommended_product_link_testid: 'trolley-add-ons-recommendations-pdp-recommendation-0-details-page-link-on-name',
            success_modal_trolley_btn_xpath: '(//button[contains(.,"Ga naar winkelwagen")])[2]',
            success_modal_close_btn_testid:'trolley-add-ons-recommendations-close-button',
            select_branch_text_endtestid: '-branch-stock',
            product_code_starttestid: 'product-code',
            product_code_xpath: '//span[@data-testid="true-price"]/../.././../../../../../../../div/div/p/span'
        }
        this.value = {
            product_collection_hoofddorp: '11794',
            product_next_day_collection_hoofddorp: '99829',
            product_delivery: '99417',
            postcode: '2131DH'
        }
        this.params.page = {
            id: 'PDP',
            name: 'PDP',
            url : this.base_url
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of "Delivery" button.',
                        expect: 'The "Delivery" button should be functional. It should add the specific product in the trolley for delivery',
                        assert: ''
                    },
                    {
                       
                        count: 1.2,
                        name: 'Verify the functionality of "Click & Collect" button.',
                        expect: 'The "Click & Collect" button should be functional. It should add the specific product in the trolley for collection',
                        assert: 'collection'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of "Next day collection" button.',
                        expect: 'The "Next day collection" button should be functional. It should add the specific product in the trolley for collection',
                        assert: ''
                    },
                    {
                        count:1.4,
                        name: 'Verify the functionality of "Notify me" button.',
                        expect: 'The "Notify me" button should be functional. It should add the specific product in my account Stock Notifications option',
                        assert: 'Abonneren'
                    }
                ]
            }
        ]
    }
 }
 