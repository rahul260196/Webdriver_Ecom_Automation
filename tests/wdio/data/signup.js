import Page from '../webdriverio-helper/Page.js'


export default class Signup extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            title_testid: 'signup-title-selectbox-input',
            mr_option_testid: 'option-0-signup-title-selectbox',
            first_name_testid: 'signup-first-name-input-field',
            last_name_testid: 'signup-last-name-input-field',
            email_address_testid: 'signup-email-address-input-field',
            phone_number_testid: 'signup-mobile-number-input-field',
            company_name_testid: 'signup-company-name-field',
            password_testid: 'signup-password-input-field',
            autocomplete_search_testid: 'signup-address-form-autocomplete-search-autocomplete-input',
            street_testid: 'signup-address-form-street-input',
            house_number_testid: 'signup-address-form-house_number-input',
            add_house_number_testid: 'signup-address-form-house_number_addition-input',
            postcode_testid: 'signup-address-form-postal_code-input',
            place_testid: 'signup-address-form-place-input',
            country_testid: 'signup-address-form-country-Nederland',
            signup_btn_testid: 'signup-button',
            signin_link_testid: 'login-navigate-button',
            signin_heading_text_testid: 'signin-heading-text',
            email_validation_msg_testid: 'sign-up-email-validation-message',
            signup_heading_testid: 'signup-heading-text',
            fill_contact_details_text: 'p=Vul je contactgegevens in',
            fill_address_details_text: 'p=Vul je adresgegevens in',
            communication_preferences_text: 'p=Stel je communicatievoorkeuren in',
            discover_app_text: 'p=Ontdek onze app',
            app_store_text: 'p=App Store',
            google_play_text: 'p=Google Play',
            app_store_testid: 'footer-cta-download-apple-app',
            google_play_testid: 'footer-cta-download-google-play-app',
            secure_payment_text :'p=Veilige betaling',
            password_characters_text: 'span=Het wachtwoord moet minimaal 8 tekens zijn.',
            numbers_required_text: 'span=Er zijn twee nummers vereist.',
            uppercase_required_text: 'span=Er is één hoofdletter vereist.',
            lowercase_required_text: 'span=Er is één kleine letter vereist.',
            special_character_required_text: 'span=Er is één kleine letter vereist.',
            apple_pay_alt: 'apple pay',
            payPal_alt: 'paypal',
            american_express_alt: 'american express',
            ideal_alt: 'iDeal',
            mastercard_alt: 'master card',
            google_pay_alt: 'google pay',
            procard_alt: 'pro card',
            visa_alt: 'visa',
            salutation_required_text: 'p=Aanhef is vereist.',
            first_name_required_text: 'p=Voornaam is vereist.',
            last_name_required_text: 'p=Achternaam is vereist.',
            email_required_text: 'p=E-mail is vereist.',
            phone_number_required_text: 'p=Telefoonnummer',
            password_required_text: 'p=Wachtwoord is vereist.',
            full_address_required_text: 'p=Volledig adres is vereist.',
            fields_marked_required_text: 'p=Velden gemarkeerd als * zijn verplicht',
            terms_conditions_title: 'algemene voorwaarden',
            inclusive_toggle_testid: 'menu-vat-toggle_header-vat-toggle-inc_toggle-label',
            exclusive_toggle_testid: 'menu-vat-toggle_header-vat-toggle-ex_toggle-label',
            privacy_policy_title: 'privacybeleid',
            toggle_button_findElementsByTestIdEndingWith: 'toggle_toggle-thumb',
            email_toggle_testid: 'signup-email-toggle_toggle-thumb',
            sms_toggle_testid: 'signup-sms-toggle_toggle-thumb',
            post_toggle_testid: 'signup-post-toggle_toggle-thumb',
            click_collect_promo_xpath: '//p[text()= "Nieuwe website!  5% KORTING met Click & Collect. Code: COLLECT"]',
            invalid_phone_number_text: 'p=Het telefoonnummer moet 10 cijfers bestaan',
            invalid_password_text: 'p=Je wachtwoord voldoet niet aan alle vereisten. Controleer de regels hieronder en pas je wachtwoord aan.',
            address_suggestion_testids: 'signup-address-form-autocomplete-search-li',
 
 
        }
        this.value = {
            registered_email: 'abhijeet-g001+1@webreinvent.com',
            email: 'demotest'+Date.now()+'@gmail.com',
            incorrect_email: 'user@com',
            cred_secure: 'Abhijeet@22',
            first_name: 'Abhijeet',
            last_name: 'Ghosh',
            phone_number: '9999999999',
            incorrect_number: '000000',
            incorrect_cred_secure: 'Abhijeet',
            street: 'Test',
            house_number: 'Test',
            place: 'Hoofddorp',
            postcode: '2131 DH',
            prod_url: 'https://www.toolstation.nl',
            code: '1011',
        }
        this.params.page = {
            id: 'SU',
            name: 'Signup',
            url : this.base_url+'/register'
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Sign in" link on Sign Up page is functional or not',
                        expect: 'The "Sign in" link should be functional. It should open the Sign In page',
                        assert: this.base_url+'/login'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can register on the website using an already registered email address',
                        expect: 'The user should not be able to register with an email address that is already used for registration',
                        assert: {
                            prod: 'Er bestaat al een account met dit e-mailadres. Log in met je bestaande account of reset je wachtwoord als je het vergeten bent',
                            others: 'Dit e-mailadres is al in gebruik. Je kunt hier inloggen met dit e-mailadres. Wachtwoord vergeten? Geen probleem. Je kunt je wachtwoord eenvoudig opnieuw instellen.',
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can sign up using a valid, unregistered email or not',
                        expect: 'The user should be able to register by using a  is valid and unregistration email address'
                    }
                ]
            },
            {
                count: 2,
                name: 'Regression',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the page title is visible on the Sign-Up page',
                        expect: 'The page title should be clearly visible and displayed',
                        assert: {
                            url : this.base_url+'/register',
                            title : 'Toolstation | Sign Up'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if all section heading texts are visible on the Sign-Up page',
                        expect: 'All section heading texts should be clearly visible and displayed on the Sign-Up page',
                        assert: {
                            url : this.base_url+'/register',
                            create_new_account: 'Maak een nieuw account aan.',
                            fill_contact_details: 'Vul je contactgegevens in',
                            fill_address_details: 'Vul je adresgegevens in',
                            communication_preferences: 'Stel je communicatievoorkeuren in'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if all input fields on the Sign-Up page are visible',
                        expect: 'All input fields on Sign-Up page should be clearly visible and displayed',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if all input fields on the Sign-Up page have visible placeholders',
                        expect: 'All placeholders on Sign-Up page should be clearly visible and displayed inside input fields',
                        assert: {
                            url : this.base_url+'/register',
                            title: 'Aanhef *',
                            first_name: 'Voornaam *',
                            last_name: 'Achternaam *',
                            email_address: 'E-mailadres *',
                            phone_number: 'Telefoonnummer *',
                            company_name: 'Vul je bedrijfsnaam in',
                            password: 'Vul je wachtwoord in *',
                            autocomplete_search: 'Voer postcode in of zoek adres',
                            street: 'Straat*',
                            house_number: 'Huisnummer*',
                            add_house_number: 'Toevoeging van huisnummer',
                            postcode: 'Postcode*',
                            place: 'Plaats*',
                        }                       
                    },
                    {
                        count: 1.5,
                        name: 'Verify if App Store and Google Play buttons are visible on the Sign-Up page',
                        expect: 'Both App Store and Google Play buttons should be clearly visible and displayed on the Sign-Up page',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 1.6,
                        name: 'Verify if password requirement messages are visible on the Sign-Up page',
                        expect: 'All password requirement messages should be clearly visible and displayed on the Sign-Up page',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 1.7,
                        name: 'Verify if all the Secure Payments icon is visible on the Sign-Up page',
                        expect: 'All the Secure Payments icon should be clearly visible and appropriately placed on the Sign-Up page',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 1.8,
                        name: 'Verify if required validation texts are visible for all mandatory fields on the Sign-Up page',
                        expect: 'Each mandatory field should display a visible required validation message when left empty after clicking on Sign up button',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the Terms & Policy link is visible on the Sign-Up page',
                        expect: 'The Terms & Policy link should be clearly visible and accessible on the Sign-Up page',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 2.1,
                        name: 'Verify the functionality of the Inclusive/Exclusive toggle on the Sign-Up page',
                        expect: 'Toggling between Inclusive and Exclusive options should update the selection state correctly and reflect the expected behavior',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    },
                    {
                        count: 2.2,
                        name: 'Verify validation message for incorrect email format on Sign-Up page',
                        expect: 'An appropriate error message should be displayed when the user enters an incorrectly formatted email address',
                        assert: {
                            url : this.base_url+'/register',
                            invalid_email_msg: 'Voer een geldig e-mailadres in.'
                        }
                    },
                    {
                        count: 2.3,
                        name: 'Verify validation message for incorrect mobile number format on Sign-Up page',
                        expect: 'An appropriate error message should be displayed when the user enters an incorrectly formatted mobile number',
                        assert: {
                            url : this.base_url+'/register',
                            invalid_number_msg: 'Het telefoonnummer moet 10 cijfers bestaan'
                        }
                    },
                    {
                        count: 2.4,
                        name: 'Verify validation message for incorrect password format on Sign-Up page',
                        expect: 'An appropriate error message should be displayed when the user enters an incorrectly formatted password',
                        assert: {
                            url : this.base_url+'/register',
                            invalid_password_msg: 'Je wachtwoord voldoet niet aan alle vereisten. Controleer de regels hieronder en pas je wachtwoord aan.'
                        }
                    },
                    {
                        count: 2.5,
                        name: 'Verify the discount message is displayed at the heading of Sign-Up page',
                        expect: 'Discount message should be displayed at the heading of register page',
                        assert: {
                            url : this.base_url+'/register',
                            clickCollectPromo: 'Nieuwe website! 5% KORTING met Click & Collect. Code: COLLECT'
                        }
                    },
                    {
                        count: 2.6,
                        name: 'Verify the email, sms and post toggle button functionality',
                        expect: 'Toggling the switch/button should correctly change the state and reflect the change in the UI.',
                        assert: {
                            url : this.base_url+'/register'
                        }
                    }
                ]
            }
        ]
    }
 }
 