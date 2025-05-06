import Page from '../webdriverio-helper/Page.js'


export default class Signin extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            email_address_field_testid: 'signin-email-address-input-field',
            password_field_testid: 'signin-password-input-field',
            signin_btn_testid: "signin-signin-button",
            signout_btn_testid: "account-signout-button",
            email_validation_message_testid: 'signin-email-address-validation-message',
            invalid_credential_testid:'signin-invalid-credentials',
            password_field_validation_testid:'password-input-field-validation-message',
            validation_message_text: 'p*=Ongeldige inloggegevens',
            myaccount_heading_testid: 'myaccount-heading-text',
            branch_locator_btn_text: 'span=Select your nearest branch',
            release_notes_skip_button_text: 'button*= Skip',
            header_myaccount_btn_testid: 'header-auth_header-link-logout',
            create_account_link_testid: 'signin-signup-link',
            signin_header_testid: 'signin-heading-text',
            mobile_signout_btn_text: 'span*=Uitloggen'
        }
        this.value = {
            email: 'abhijeet-g001+1@webreinvent.com',
            cred_secure: 'Abhijeet@123',
            unregistered_email: 'abhijeet@webreinvent.com',
            incorrect_cred_secure: 'Abhijeet@3',
            invalid_email: 'test123',
            account_url: "/account/home",
            prod_url: 'https://www.toolstation.nl',
            preprod_url: 'https://www.pre-prod.nl.toolstation.dev',
            develop_url: 'https://ts-eu24-develop.ventrox.com',
            gke_staging_url: 'https://website-staging.gke.pre-prod.nl.toolstation.dev',
            feature_url: 'https://ts-feature-',
            staging_url: 'https://ts-eu24-staging.ventrox.com',
            usernametext: 'Abhijeet Ghosh',
        }
 
 
        this.params.page = {
            id: 'SI',
            name: 'Signin',
            url : this.base_url+'/login'
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can sign into the website using valid credentials',
                        expect: 'The user should be able to sign in using valid credentials',
                        assert: {
                            attribute: 'href',
                            value: '/account/home',
                            usernametext: 'Abhijeet Ghosh',
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can sign out from an account or not',
                        expect: 'The user should be able to sign out from an account'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can sign into the website using invalid email address',
                        expect: 'The user should not be able to sign in using invalid email address',
                        assert: {
                            prod: "Voer een geldig e-mailadres in.",
                            other: "E-mail is vereist."
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the user can sign into the website using unregistered email address',
                        expect: 'The user should not be able to sign in using unregistered email address',
                        assert: 'Ongeldige inloggegevens'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can sign into the website using incorrect password',
                        expect: 'The user should not be able to sign in using incorrect password',
                        assert: 'Ongeldige inloggegevens'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the "create one now" link is functional or not',
                        expect: 'The "create one now" link should be functional. It should open the "Sign Up" page',
                        assert: this.base_url+'/register'
                    }
                ]
            }
        ]
    }
 }
 