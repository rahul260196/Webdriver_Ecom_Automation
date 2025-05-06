import Page from '../webdriverio-helper/Page.js'


export default class Account extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            welcome_message_testid: 'account-welcome-message-text',
            digital_toolstation_card_text: 'span*=Laat mijn persoonlijke kaart zien',
            my_account_heading_testid: 'myaccount-heading-text',
            account_username_testid: 'myaccount-username-text',
            account_email_address_testid: 'myaccount-user-email-text',
            account_phone_number_testid: 'myaccount-mobile-text',
            app_banner_img_testid: 'myaccount-app-banner-image',
            profile_link_testid: 'account-profile-link',
            profile_link_text:'span*=Profiel',
            profile_link_text_xpath: '//a[@href="/account/profile"]',
            profile_page_heading_text:'h1*=Profiel',
            orders_link_testid: 'account-orders-link',
            orders_link_text: 'span*=Bestellingen',
            orders_link_text_xpath: '//a[@href="/account/order-history"]//span',
            orders_page_heading_testid:'my-account-orders-page-heading',
            order_again_link_testid:'account-order-again-link',
            order_again_page_heading_testid:'my-account-order-again-heading',
            save_list_link_testid: 'account-save-list-link',
            save_list_link_text_testid: 'account-save-list-link-text',
            save_list_page_heading_text:'h1*=Kluslijst',
            stock_notification_link_testid: 'account-stock-notification-link',
            stock_notification_link_text_xpath: '//a[@href="/account/stock-notification"]',
            stock_alert_page_heading_text:'p*=Voorraadmelding',
            message_center_link_testid:'account-message-center-list-link',
            message_center_link_xpath: '//a[@href="/account/message"]',
            procard_link_testid: 'account-pro-card-link',
            procard_link_text_xpath: '//a[@href="/account/pro-card"]',
            pro_card_page_header: 'my-account-pro-card-header',
            addresses_link_testid: 'account-addresses-link',
            addresses_link_text_xpath: '//a[@href="/account/addresses"]',
            default_branch_link_testid: 'account-default-branch-link',
            default_branch_link_text_xpath: '//a[@href="/account/branch"]',
            my_offers_link_testid: 'account-my-offers-link',
            my_offers_link_text_xpath: '//a[@href="/samples/offers"]//span',
            account_preferences_link_testid: 'account-preferences-link',
            account_preferences_link_text_xpath: '//a[@href="/account/preferences"]',
            need_help_link_testid: 'account-need-help-link',
            need_help_link_text_xpath: '//span[contains(text(), "Need help")]',
            faq_link_testid: 'account-faq-link',
            faq_link_text_xpath: '//a[@href="/samples/faq"]//span',
            about_us_link_testid: 'account-about-us-link',
            about_us_link_text_xpath: '//a[@href="/samples/about-us"]//span',
            sign_out_btn_testid: 'account-signout-button',
            sign_out_btn_icon_xpath: '//span[contains(text(), "Afmelden")]/../..//*[name()="svg"]',
            mobile_orders_link_xpath: '//p[contains(.,"Bestellingen")]',
            mobile_ordersagain_link_xpath: '//p[contains(.,"Opnieuw bestellen")]',
            mobile_savelist_link_xpath: '//p[contains(.,"Kluslijst")]',
            mobile_stocknotify_link_xpath: '//p[contains(.,"Voorraadmelding")]',
            mobile_msgcenter_link_xpath: '//p[contains(.,"Berichten van Toolstation")]',
            mobile_addresses_link_xpath: '//p[contains(.,"Adressen")]',
            mobile_procard_link_xpath: '//p[contains(.,"PRO-kaart")]',
            mobile_defaultbranch_link_xpath: '//p[contains(.,"Favoriete vestiging")]',
            mobile_accntpref_link_xpath: '//p[contains(.,"Accountvoorkeuren")]',
            mobile_signout_btn_text: 'span*=Uitloggen',
            savelist_title_testid: 'saved-list-title',
            outofstock_title_testid: 'out-of-stock-notification-mobile-title',
            mobile_dev_savelist_link_xpath: '//p[contains(.,"Lijst opslaan")]',
            mobile_dev_msgcenter_link_xpath: '//p[contains(.,"Berichtencentrum")]',
            mobile_dev_signout_btn_xpath: '//span[contains(.,"Afmelden")]',
            profile_heading_testid: 'account-profile-title',
            order_heading_testid: 'my-account-orders-page-heading',
            orderagain_heading_testid: 'my-account-order-again-heading',
            savelist_heading_testid: 'account-save-list-link-text',
            mobile_savelist_heading_develop_testid: 'saved-list-title', 
            stocknotify_heading_testid: 'out-of-stock-notification-title',
            mobile_stocknotify_heading_testid: 'out-of-stock-notification-mobile-title', 
            msgcenter_heading_testid: 'message-center-title',
            general_heading_testid: 'heading-primary',
            procard_heading_testid: 'my-account-pro-card-header', 
            mobile_procard_heading_testid: 'my-account-pro-card-title', 
            address_heading_testid: 'my-account-address-heading-desktop',
            defaultbranch_heading_testid: 'account-default-branch-heading-desktop',
            mobile_dflbrnch_heading_testid: 'account-default-branch-heading-mobile',
            accountpref_heading_testid: 'account-preferences-title',
            faq_heading_xpath: '//p[@datatestid="heading-primary"]',
 

 
 
              
        }
        this.value = {
            prod_url: 'https://www.toolstation.nl',
            feature_url: 'https://ts-feature-',
            develop_url: 'https://ts-eu24-develop.ventrox.com',
            usernametext: 'Test Kumar',
        }
        this.params.page = {
            id: 'AC',
            name: 'Account',
            url : this.base_url+'/account/home'
        }
        this.groups = [
            {
                count: 1,
                name: 'UI',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Welcome" message is visible in the account page',
                        expect: 'The "Welcome" message should be visible on the account page',
                        assert: 'Welkom terug! Ontdek je nieuwe accountomgeving.'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "My Account" section is visible in the account page',
                        expect: '"My Account" section should be visible on the account page',
                        assert:{
                            prod: 'Mijn account',
                            other: 'Mijn Rekening',
                        }
                       
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the Name of the signed in user is visible in the account page',
                        expect: 'The name of the user should be visible on the account page',
                        assert: 'Abhijeet Ghosh'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the email address is visible in "My Account" section',
                        expect: 'The email address should be visible in the "My Account" section',
                        assert: 'abhijeet-g001+1@webreinvent.com'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the phone number is visible in "My Account" section',
                        expect: 'The phone number should be visible in the "My Account" section',
                        assert: 'Mobiel : 999999999'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if toolstation app banner is visible on the "My Account" page',
                        expect: 'The toolstation app banner should be visible in the "My Account" section',
                        assert: {
                            attribute: 'src',
                            value: 'profile_banner_img.webp'
                        }
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the digital toolstation card button is visible in account page',
                        expect: 'The digital toolstation card button should be visible in the account page',
                        assert: 'Laat mijn persoonlijke kaart zien'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the "Profile" link is visible in account page',
                        expect: 'The "Profile" link should be visible in the account page',
                        assert: 'Profiel'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the "Orders" link is visible in account page',
                        expect: 'The "Orders" link should be visible in the account page',
                        assert: 'Bestellingen'
                    },
                    {
                        count: 2.1,
                        name: 'Verify if the "Order Again" link is visible in account page',
                        expect: 'The "Order Again" link should be visible in the account page',
                        assert: 'Opnieuw bestellen'
                    },
                    {
                        count: 2.2,
                        name: 'Verify if the "Save List" link is visible in account page',
                        expect: 'The "Save List" link should be visible in the account page',
                        assert:{
                            prod: 'Kluslijst',
                            mobile_dev: 'Lijst opslaan'
                        }
                    },
                    {
                        count: 2.3,
                        name: 'Verify if the "Out of Stock Notification" link is visible in account page',
                        expect: 'The "Out of Stock Notification" link should be visible in the account page',
                        assert: {
                            prod: 'Voorraadmelding',
                            other: 'Voorraad notificatie',
 
 
                        }
                    },
                    {
                        count: 2.4,
                        name: 'Verify if the "Message center" link is visible in account page',
                        expect: 'The "Message center" link should be visible in the account page',
                        assert:{
                            prod: 'Berichten van Toolstation',
                            other: 'Bericht Centrum',
                            mobile_dev: 'Berichtencentrum'
                        }
                    },
                    {
                        count: 2.5,
                        name: 'Verify if the "PRO Card" link is visible in account page',
                        expect: 'The "PRO Card" link should be visible in the account page',
                        assert:{
                            prod: 'PRO-kaart',
                            other: 'PRO Card'
                        }
                    },
                    {
                        count: 2.6,
                        name: 'Verify if the "Addresses" link is visible in account page',
                        expect: 'The "Addresses" link should be visible in the account page',
                        assert: 'Adressen'
                    },
                    {
                        count: 2.7,
                        name: 'Verify if the "Default Branch/Location" link is visible in account page',
                        expect: 'The "Default Branch/Location" link should be visible in the account page',
                        assert: {
                            prod: 'Favoriete vestiging',
                            other: 'Standaardfiliaal',
                        }
                    },
                    {
                        count: 2.8,
                        name: 'Verify if the "Account Preferences" link is visible in account page',
                        expect: 'The "Account Preferences" link should be visible in the account page',
                        assert: {
                           prod: 'Accountvoorkeuren',
                           other: 'AccountVoorkeuren',
                        }
                    },
                    {
                        count: 2.9,
                        name: 'Verify if the "FAQs" link is visible in account page',
                        expect: 'The "FAQs" link should be visible in the account page',
                        assert: 'Veelgestelde vragen'
                    },
                    {
                        count: 3.1,
                        name: 'Verify if the "About Us" link is visible in account page',
                        expect: 'The "About Us" link should be visible in the account page',
                        assert:{
                            prod: 'Over Toolstation',
                            other: 'Over Ons',
                        }
                    },
                    {
                        count: 3.2,
                        name: 'Verify if the "Sign out" link is visible in account page',
                        expect: 'The "Sign out" link should be visible in the account page',
                        assert:{
                            prod: 'Uitloggen',
                            mobile_dev: 'Afmelden',
                        } 
                    },
                ]
            },
            {
                count: 2,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of the "Profile" link added in account page',
                        expect: 'The "Profile" link should be functional and it should navigate to the "Profile" page',
                        assert: {
                            url: this.base_url+'/account/profile',
                            heading: 'Profiel',
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of the "Orders" link added in account page',
                        expect: 'The "Orders" link should be functional and it should navigate to the "My orders" page',
                        assert: {
                            url: this.base_url+'/account/order-history',
                            heading: 'Bestellingen',
                        }
 
 
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of the "Order Again" link added in account page',
                        expect: 'The "Order Again" link should be functional and it should navigate to the "Order Again" page',
                        assert: {
                           url: this.base_url+'/account/order-again',
                           heading: 'Opnieuw bestellen',
                           heading_develop: 'Bestel opnieuw',
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify the functionality of the "Save List" link added in account page',
                        expect: 'The "Save List" link should be functional and it should navigate to the "save-list" page',
                        assert:{
                            url:this.base_url+'/account/saved-lists',
                            heading: 'Opgeslagen lijst',
                        }
 
 
                    },
                    {
                        count: 1.5,
                        name: 'Verify the functionality of the "Stock Notification" link added in account page',
                        expect: 'The "Stock Notification" link should be functional and it should navigate to the "stock notification" page',
                        assert:{
                            url: this.base_url+'/account/stock-notification',
                            heading_develop: 'Melding niet op voorraad',
                            heading_other: 'Voorraadmelding'
                        }
                    },
                    {
                        count: 1.6,
                        name: 'Verify the functionality of the "Message center" link added in account page',
                        expect: 'The "Message center" link should be functional and it should navigate to the "Message center" page',
                        assert:{
                            url: this.base_url+'/account/message',
                            heading_dev: 'MessageCenter',
                            heading_mobile: 'Message Center',
                            heading_prod: 'Berichten van Toolstation',

                        } 
                    },
                    {
                        count: 1.7,
                        name: 'Verify the functionality of the "PRO Card" link added in account page',
                        expect: 'The "PRO Card" link should be functional and it should navigate to the "PRO Card" page',
                        assert:{
                            url: this.base_url+'/account/pro-card',
                            heading: 'PRO-kaart',
                            heading_dev: 'PRO-Kaart'
                        } 
                    },
                    {
                        count: 1.8,
                        name: 'Verify the functionality of the "Addresses" link added in account page',
                        expect: 'The "Addresses" link should be functional and it should navigate to the "addresses" page',
                        assert:{
                            url: this.base_url+'/account/addresses',
                            heading: 'Opgeslagen adressen' 
                        } 
                    },
                    {
                        count: 1.9,
                        name: 'Verify the functionality of the "Default Branch/Location" link added in account page',
                        expect: 'The "Default Branch/Location" link should be functional and it should navigate to the "branch" page',
                        assert:{
                            url: this.base_url+'/account/branch',
                            heading: 'Favoriete vestiging'
                        }
                    },
                    {
                        count: 2.1,
                        name: 'Verify the functionality of the "Account Preferences" link added in account page',
                        expect: 'The "Account Preferences" link should be functional and it should navigate to the "preferences" page',
                        assert:{ 
                            url: this.base_url+'/account/preferences', 
                            heading: 'Accountvoorkeuren' 

                        }
                    },
                    {
                        count: 2.2,
                        name: 'Verify the functionality of the "FAQ" link added in account page',
                        expect: 'The "FAQ" link should be functional and it should navigate to the "faq" page',
                        assert: {
                            url: this.base_url+'/content/faq',
                            title: 'Veelgestelde vragen'
                        }
                    },
                    {
                        count: 2.3,
                        name: 'Verify the functionality of the "About Us" link added in account page',
                        expect: 'The "About Us" link should be functional and it should navigate to the "about us" page',
                        assert: {
                            url: this.base_url+'/content/aboutus',
                            title: 'Over Toolstation'
                        }
                    },
                    {
                        count: 2.4,
                        name: 'Verify the functionality of the "Sign out" button added in account page',
                        expect: 'The "Sign out" button should be functional and it should navigate to the homepage',
                        assert: this.base_url+'/'
                    }
                ]
            }
        ]
    }
 }
 