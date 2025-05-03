import Page from '../webdriverio-helper/Page.js'


export default class Checkout extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            guest_checkout_btn_testid:'checkout-as-a-guest-button',
            paypal_img_xpath:'//div[@class="paypal-button-label-container"]/img',
            checkout_delivery_heading_testid: 'checkout-delivery-method-heading',
            payment_button_testid:'checkout-continue-to-payment-under-order-summary',
            credit_card_option_testid: 'pay-by-credit-card',
            payment_dropdown_menu_testid: 'checkout-step-3-payment-content',
            credit_card_button_xpath: '//span[contains(., "Betaal met een creditcard")]/..',
            card_holder_name_iframe_id: 'braintree-hosted-field-cardholderName',
            card_holder_name_input_field_id: 'cardholder-name',
            card_number_iframe_id: 'braintree-hosted-field-number',
            card_number_input_field_id: 'credit-card-number',
            card_expiry_date_iframe_id: 'braintree-hosted-field-expirationDate',
            card_expiry_date_input_field_id: 'expiration',
            card_cvv_iframe_id: 'braintree-hosted-field-cvv',
            card_cvv_input_field_id: 'cvv',
            postal_code_iframe_id: 'braintree-hosted-field-postalCode',
            postal_code_input_field_id: 'postal-code',
            pay_with_credit_card_button_testid: 'braintree-card-pay',
            authentication_iframe_id: 'Cardinal-CCA-IFrame',
            otp_input_field_placeholder: ' Enter Code Here',
            otp_submit_button_value: 'SUBMIT',
            order_success_msg_text: 'h1*=Je bestelling is geplaatst,',
            account_button_testid: 'my-account',
            continue_shopping_button_testid: 'continueShopping',
            gpay_btn_aria_label:'Google Pay',
            pay_fail_msg_xpath: '(//div[contains(.,"Kaart")])[22]',
            payment_section_testid: 'checkout-step-3-payment-content',
            paypal_button_arialabel: 'PayPal',
            checkout_delivery_heading_testid: 'checkout-delivery-method-heading',
            payment_options_testid: 'checkout-step-3-payment-content',
            ts_header_logo_testid: 'checkout-layout-header-toolstation-logo',
            ts_account_logo_testid: 'header-logo',
            my_account_testid: 'column-auth',
            log_out_testid: 'account-signout-button',
            add_new_address_testid: 'checkout-add-new-shipping-address-text',
            delete_address_icon_xpath: '[data-testid*="customer-address-delete-icon"]',
            delete_address_text_xpath: '//span[contains(text(), "Hedwigepolder 112")]',
            street_address_testid: 'checkout-shipping-address-form-address-form-Straat-input',
            house_number_address_testid: 'checkout-shipping-address-form-address-form-Huisnummer-input',
            postal_code_address_testid: 'checkout-shipping-address-form-address-form-Postcode-input',
            place_address_testid: 'checkout-shipping-address-form-address-form-Plaats-input',
            save_button_address_testid: 'checkout-shipping-address-form-address-form-submit-button',
            address_created_success_msg_testid: 'toast-content',
            billing_address_header_testid: 'checkout-billing-address-heading',
            billing_address_edit_icon_xpath: '(//p[@data-testid = "checkout-billing-address-heading"]/..//*[name()="svg"])[1]',
            billing_address_dropdown_testid: 'checkout-billing-address-form-address-form-autocomplete-search',
            billing_address_street_text: 'div=Kievitsweg ',
            street_billing_testid: 'checkout-billing-address-form-address-form-Straat-input',
            house_number_billing_testid: 'checkout-billing-address-form-address-form-Huisnummer-input',
            postal_code_billing_testid: 'checkout-billing-address-form-address-form-Postcode-input',
            place_billing_testid: 'checkout-billing-address-form-address-form-Plaats-input',
            save_button_billing_testid: 'checkout-billing-address-form-address-form-submit-button',
            billing_address_created_msg_testid: 'toast-content',
            payment_dropdown_menu_testid: 'checkout-step-3-payment-content',
            credit_card_button_xpath: '//span[contains(., "Betaal met een creditcard")]/..',
            procard_button_xpath: '//span[contains(., " PRO-kaart")]/..',
            procard_payment_button_xpath: '//span[text()="PRO-kaart"]/..',
            card_holder_name_iframe_id: 'braintree-hosted-field-cardholderName',
            card_holder_name_input_field_id: 'cardholder-name',
            card_number_iframe_id: 'braintree-hosted-field-number',
            card_number_input_field_id: 'credit-card-number',
            card_expiry_date_iframe_id: 'braintree-hosted-field-expirationDate',
            card_expiry_date_input_field_id: 'expiration',
            card_cvv_iframe_id: 'braintree-hosted-field-cvv',
            card_cvv_input_field_id: 'cvv',
            postal_code_iframe_id: 'braintree-hosted-field-postalCode',
            postal_code_input_field_id: 'postal-code',
            pay_with_credit_card_button_id: 'braintree-card-pay',
            authentication_iframe_id: 'Cardinal-CCA-IFrame',
            otp_input_field_placeholder: ' Enter Code Here',
            otp_submit_button_value: 'SUBMIT',
            order_success_msg_text: 'h1*=Je bestelling is geplaatst,',
            account_button_testid: 'my-account',
            continue_shopping_button_testid: 'continueShopping',
            guest_email_name: 'guest_email',
            guest_button_text: 'span=Afrekenen als gast',
            guest_first_name_contact_placeholder: 'Voornaam *',
            guest_first_name_contact_testid: 'guest-checkout-first-name-input',
            guest_last_name_contact_placeholder: 'Achternaam *',
            guest_last_name_contact_testid: 'guest-checkout-last-name-input',
            guest_phone_number_contact_placeholder: 'Telefoonnummer *',
            guest_phone_number_contact_testid: 'guest-checkout-mobile-number-input',
            guest_street_address_testid: 'checkout-guest-address-form-address-form-street-input',
            guest_house_number_address_testid: 'checkout-guest-address-form-address-form-house_number-input',
            guest_postal_address_testid: 'checkout-guest-address-form-address-form-postal_code-input',
            guest_place_address_testid: 'checkout-guest-address-form-address-form-place-input',
            address_details_continue_button_testid: 'checkout-continue-button',
            paypal_btn_xpath: '//div[@data-funding-source="paypal"]',
            paypal_btn_title: 'PayPal',
            payPal_heading_id: 'headerText',
            payPal_iframe_title: 'PayPal',
            payPal_close_arialabel: 'close',
            paypal_email_placeholder: "Email or mobile number",
            paypal_next_btn_id: "btnNext",
            payPal_mobile_testid: 'phone',
            payPal_card_name: 'cardnumber',
            payPal_expiry_name: 'exp-date',
            payPal_cvv_name: 'cvv',
            payPal_lastname_name: 'lname',
            payPal_state_name: 'billingState',
            payPal_agree_checkox: 'guestAgreeToTerms',
            paypal_password_placeholder: "Password",
            paypal_login_btn_id: "btnLogin",
            paypal_submit_btn_id: "payment-submit-btn",
            ideal_btn_testid: 'ideal-payment-btn',
            ideal_heading_logo_title: "iDEAL",
            ideal_heading_text_testid: 'payment-amount-creditor',
            ideal_success_payment_btn_id: "Successful",
            gpay_btn_id: "gpay-button-online-api-id",
            gpay_continue_btn_text: "span=Continue",
            otp_cancel_button_value: 'CANCEL',
            credit_canceled_msg_testid: 'credit_canceled_msg_text',
            ideal_canceled_payment_btn_testid: "cancel-transaction-button",
            ideal_confirm_cancel_button_testid: 'cancel-transaction-confirm-dialog-confirm',
            ideal_canceled_msg_testid: 'ideal_canceled_msg_text',
            gpay_canceled_msg_testid: 'gpay_canceled_msg_text',
            payPal_canceled_msg_testid: 'payPal_canceled_msg_text',
            standard_icon_endswithtestid: '-customer-home-address-default-tag',
            paypal_window_cancel_link_xpath: '//a[contains(text(),"Cancel and return")]',
            all_in_one_fail_msg_testid: 'molecule-alert',
            sucessful_btn_testid: 'Successful',
            gpay_header_xpath: '//span[text()="Sign in"]',
            ideal_failmsg_testid: 'ideal_canceled_msg_text-div',
            summary_header_testid: 'checkoutorder-summaryorder-summary-heading',
            guest_autocomplete_address_testid: "checkout-guest-address-form-address-form-autocomplete-search-autocomplete-input",
            guest_address_suggestion_testids: 'checkout-guest-address-form-address-form-autocomplete-search-li',
            mobile_cont_to_pay_btn_xpath: '(//button[text()="Ga verder naar betaling"])[2]',
            guest_email_input_testid: 'guess-checkout-email-input',
        }
        this.value = {
            email: 'testautomation-t001@email.com',
            cred_secure: 'Test@1234',
            card_name: 'Abhijeet Ghosh',
            card_number: 4111111111111111,
            card_expiry_date: 112028,
            card_cvv: 123,
            postcode: 111111,
            test_otp: '1234',
            address_street: 'Hedwigepolder',
            address_house_number: '112',
            address_postal_code: '2992 TS',
            address_place: 'Barendrecht',
            billing_street: 'Zilverschoonlaan',
            billing_house_number: '112',
            billing_postal_code: '1562 RJ',
            billing_place: 'Krommenie',
            guest_email: 'guesttesting@webreinvent.com',
            guest_first_name: 'firstname',
            guest_last_name: 'lastname',
            guest_phone_number: '1234567890',
            guest_street_address: 'Kievitsweg',
            guest_house_number_address: '112',
            guest_postal_address: '2983 AE',
            guest_place_address: 'Ridderkerk',
            paypal_email: 'ecom.paypal-buyer@toolstation.com' ,
            paypal_password: 'P@ssword',
            payPal_mobile: 'phone',
            payPal_card: 4111111111111111,
            payPal_expiry: 1128,
            payPal_cvv: 123,
            payPal_lastname: 'testing',
            payPal_state: 'Delhi',
            paypal_window_title: 'Log in to your PayPal account',
            gpay_window_title: 'Sign in - Google Accounts',
            gpayheader: 'Sign in',
            checkout_window_title: 'Afrekenen',
            ideal_window_title: 'iDEAL payment page',
            prod_url: 'https://www.toolstation.nl',
   
        }
        this.params.page = {
            id: 'CH',
            name: 'Checkout',
            url : this.base_url + '/checkout'
        }
        this.groups = [
            {
                count: 1,
                name: 'Payment',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the payment and checkout journey for \'delivery\' product with credit card',
                        expect: 'The user should be able to place an order for delivery channel using a credit card',
                        assert: {
                            cancelled_msg: 'Kaartbetaling mislukt. Probeer het opnieuw.',
                            order_confirm_prod: 'Je bestelling is geplaatst',
                            order_confirm_other: 'Uw bestelling is geplaatst',
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the payment and checkout journey for \'delivery\' product with Pay Pal method',
                        expect: 'The user should be able to place an order for delivery channel using a Pay Pal method',
                        assert: {
                            order_confirm_msg: 'PayPal-betaling geannuleerd'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify the payment and checkout journey for \'delivery\' product with ideal gateway',
                        expect: 'The user should be able to place an order for delivery channel using a ideal gateway',
                        assert: {
                            order_confirm_msg: 'Payment unsuccessful - please try a different payment method.',
                            order_confirm_msg_prod: 'Je bestelling is geplaatst, Bedankt Factuurnummer - OWWXXXXXXXXX',
                            order_confirm_msg_other: 'Uw bestelling is geplaatst, Bedankt Bestel-ID - OWWXXXXXXXXX'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify the payment and checkout journey for \'delivery\' product with Google Pay gateway',
                        expect: 'The user should be able to place an order for delivery channel using a Google Pay gateway',
                        assert: {
                            order_confirm_msg: 'JGoogle Pay-betaling geannuleerd'
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify the canceled payment and checkout journey for \'delivery\' product with Credit Card',
                        expect: 'The user should not be able to place an order for delivery channel after Cancel button click',
                        assert: {
                            credit_canceled_msg: 'Kaartbetaling mislukt. Probeer het opnieuw.'
                        }
                    },
                    {
                        count: 1.6,
                        name: 'Verify the canceled payment and checkout journey for \'delivery\' product with Ideal payment',
                        expect: 'The user should not be able to place an order for delivery channel after Ideal Cancel Payment click',
                        assert: {
                            ideal_canceled_msg: 'Ideal payment canceled'
                        }
                    }
                ]
            },
            {
                count: 2,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the Address Created Successfully functionality in Checkout',
                        expect: 'The user should be able to add Address Successfully in checkout',
                        assert: {
                            address_created_success_msg: 'Gebruikersadres succesvol aangemaakt',
                           
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the Billing Address functionality in Checkout',
                        expect: 'The user should be able to able to add Billing Address Successfully in checkout',
                        assert: {
                            billing_address_success_msg: 'Gebruikersadres succesvol bijgewerkt',
                           
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the Guest User can successfully login and checkout',
                        expect: 'The user should be able to login and checkout successfully',
                        assert: {
                            guest_login_page: this.base_url+'/login?type=guest',
                            guest_checkout_page: this.base_url+'/checkout'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the Guest User can checkout and successfully place order',
                        expect: 'The user should be able to checkout and successfully place order',
                        assert: {
                            guest_login_page: this.base_url+'/login?type=guest',
                            guest_checkout_page: this.base_url+'/checkout',
                            cancelled_msg: 'Kaartbetaling mislukt. Probeer het opnieuw.',
                            order_confirm_msg_prod: 'Je bestelling is geplaatst',
                            order_confirm_msg_other: 'Uw bestelling is geplaatst',
                        }
                    },
                    {
                        count: 1.5,
                        name: "Verify after re-login the 'payment' and checkout journey for \'delivery\' product.",
                        expect: "The user should be successfully placed an order after relogin",
                       
                    }
                ]
            }
        ]
    }
 }
 