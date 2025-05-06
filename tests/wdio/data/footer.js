import Page from '../webdriverio-helper/Page.js';

export default class Footer extends Page {
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            faq_link_testid: 'desktop-footer-content-faq',
            contact_link_testid: 'desktop-footer-contact',
            payment_method_link_testid: 'desktop-footer-content-payment',
            delivery_link_testid: 'desktop-footer-content-delivery',
            click_collect_link_testid: 'desktop-footer-content-clickandcollect',
            exchange_return_link_testid: 'desktop-footer-content-returnsandexchanges',
            sitemap_link_testid: 'desktop-footer-sitemap',
            guarantee_link_testid: 'desktop-footer-guarantee',
            about_us_link_testid: 'desktop-footer-content-aboutus',
            procard_link_testid: 'desktop-footer-content-pro',
            toolstation_app_link_testid: 'desktop-footer-content-toolstation-app',
            branches_link_testid: 'desktop-footer-branches',
            vacancies_link_testid: 'desktop-footer-content-jobs',
            terms_and_condition_link_testid: 'desktop-footer-content-terms',
            privacy_policy_link_testid: 'desktop-footer-content-privacy',
            cookie_policy_link_testid: 'desktop-footer-content-cookies',
            reviews_link_testid: 'desktop-footer-content-reviewguidelines',
            weee_link_testid: 'desktop-footer-weee',
            modern_slavery_link_testid: 'desktop-footer-modern-slavery-statement',
            blogs_news_link_testid: 'desktop-footer-Advice/Blogs/News',
            request_catalogue_link_testid: 'desktop-undefined-FolderCatalogue',
            facebook_link_testid: 'desktop-footer-social-link-0',
            instagram_link_testid: 'desktop-footer-social-link-1',
            youtube_link_testid: 'desktop-footer-social-link-2',
            linkedin_link_testid: 'desktop-footer-social-link-3',
            bottom_privacy_policy_link_testid: 'desktop-undefined-privacy-policy',
            bottom_cookie_policy_link_testid: 'desktop-undefined-cookie-policy',
            faq_page_heading_xpath: '//h1[contains(text(),"Veelgestelde vragen")]',
            guaranty_page_heading_xpath: '(//span[contains(text(),"Garantie")])[2]',
            delivery_page_heading_xpath: '//h1[contains(text(),"Bezorgen")]',
            page_heading_text_testid: 'heading-primary',
            sitemap_heading_text: 'h1*=Sitemap',
            news_heading_text: 'h2*=Blijf op de hoogte van het laatste nieuws',
            branches_page_heading_text_testid: 'our-branches-page-title',
            mob_helpandcontact_testid: 'mobile-footer-navigation-tab-0',
            mob_faq_link_xpath: '//a[@href="/content/faq" and @data-testid="mobile-footer-link-0"]',
            mob_contact_link_xpath: '//a[@href="/contact" and @data-testid="mobile-footer-link-1"]',
            mob_payment_link_xpath: '//a[@href="/content/payment" and @data-testid="mobile-footer-link-2"]',
            mob_delivery_link_xpath: '//a[@href="/content/delivery" and @data-testid="mobile-footer-link-3"]',
            mob_clickandcollect_link_xpath: '//a[@href="/content/clickandcollect" and @data-testid="mobile-footer-link-4"]',
            mob_return_link_xpath: '//a[@href="/content/returnsandexchanges" and @data-testid="mobile-footer-link-5"]',
            mob_guarantee_link_xpath: '//a[@href="/guarantee" and @data-testid="mobile-footer-link-6"]',
            mob_abouttoolstation_testid: 'mobile-footer-navigation-tab-1',
            mob_about_link_xpath: '//a[@href="/content/aboutus" and @data-testid="mobile-footer-link-0"]',
            mob_procard_link_xpath: '//a[@href="/content/pro" and @data-testid="mobile-footer-link-1"]',
            mob_toolapp_link_xpath: '//a[@href="/content/toolstation-app" and @data-testid="mobile-footer-link-2"]',
            mob_news_link_xpath: '//a[@href="/newsletter" and @data-testid="mobile-footer-link-3"]',
            mob_branches_link_xpath: '//a[@href="/branches" and @data-testid="mobile-footer-link-4"]',
            mob_jobs_link_xpath: '//a[@href="/content/jobs" and @data-testid="mobile-footer-link-5"]',
            mob_termsandcontidition_testid: 'mobile-footer-navigation-tab-2',
            mob_terms_link_xpath: '//a[@href="/content/terms" and @data-testid="mobile-footer-link-0"]',
            mob_privacy_link_xpath: '//a[@href="/content/privacy" and @data-testid="mobile-footer-link-1"]',
            mob_cookies_link_xpath: '//a[@href="/content/cookies" and @data-testid="mobile-footer-link-2"]',
            mob_reviews_link_xpath: '//a[@href="/content/reviewguidelines" and @data-testid="mobile-footer-link-3"]',
            mob_wee_link_xpath: '//a[@href="/weee" and @data-testid="mobile-footer-link-4"]',
            mob_slavery_link_xpath: '//a[@href="/modern-slavery-statement" and @data-testid="mobile-footer-link-5"]',
            mob_copy_link_xpath: '//a[@href="/copyright" and @data-testid="mobile-footer-link-6"]',
        }
        this.value = {
            prod_url: 'https://www.toolstation.nl',
            develop_url: 'https://ts-eu24-develop.ventrox.com',
            feature_url: 'https://ts-feature',
            gke_staging_url: 'https://website-staging.gke.pre-prod.nl.toolstation.dev',
            staging_url: 'https://ts-eu24-staging.ventrox.com',
            pre_prod_url: 'https://www.pre-prod.nl.toolstation.dev'
        }
        this.params.page = {
            id: 'FT',
            name: 'Footer',
            url: this.base_url
        }
        this.groups = [
            {
                count: 1,
                name: 'Help & Contact',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "FAQ" link under Help & Contact section is functional or not',
                        expect: 'The "FAQ" link should be functional. It should open the FAQ page',
                        assert: {
                            url: this.base_url + '/content/faq',
                            heading: 'Veelgestelde vragen'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "Contact" link under Help & Contact section is functional or not',
                        expect: 'The "Contact" link should be functional. It should open the Contact Us page',
                        assert: {
                            url: this.base_url + '/contact',
                            heading: 'Neem contact met ons op'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the "Payment Methods" link under Help & Contact section is functional or not',
                        expect: 'The "Payment Methods" link should be functional. It should open the Payment Method page',
                        assert: {
                            url: this.base_url + '/content/payment',
                            heading: 'Betaalmogelijkheden'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the "Delivery" link under Help & Contact section is functional or not',
                        expect: 'The "Delivery" link should be functional. It should open the Delivery page',
                        assert: {
                            url: this.base_url + '/content/delivery',
                            heading: 'Bezorgen van je Toolstation bestelling',
                            heading_prod: 'Bezorging door leverancier',
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the "Click and Collect" link under Help & Contact section is functional or not',
                        expect: 'The "Click and Collect" link should be functional. It should open the Click and Collect page',
                        assert: {
                            url: this.base_url + '/content/clickandcollect',
                            heading: 'Click & Collect'
                        }
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the "Exchange and Return" link under Help & Contact section is functional or not',
                        expect: 'The "Exchange and Return" link should be functional. It should open the Return Exchange page',
                        assert: {
                            url: this.base_url + '/content/returnsandexchanges',
                            heading: 'Ruilen & Retourneren'
                        }
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the "Site Map" link under Help & Contact section is functional or not',
                        expect: 'The "Site Map" link should be functional. It should open the Site map page',
                        assert: {
                            url: this.base_url + '/sitemap',
                            heading: 'Sitemap'
                        }
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the "Guarantee" link under Help & Contact section is functional or not',
                        expect: 'The "Guarantee" link should be functional. It should open the Guarantee page',
                        assert: {
                            url: this.base_url + '/guarantee',
                            heading: 'Garantie'
                        }
                    }
                ]
            },
            {
                count: 2,
                name: 'Company Information',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "About Us" link under Company Information section is functional or not',
                        expect: 'The "About Us" link should be functional. It should open the About Us page',
                        assert: {
                            url: this.base_url + '/content/aboutus',
                            heading: 'Over Toolstation'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "Pro Card" link under Company Information section is functional or not',
                        expect: 'The "Pro Card" link should be functional. It should open the Pro Card page',
                        assert: {
                            url: this.base_url + '/content/pro',
                            heading: 'PRO-kaart'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the "Toolstation App" link under Company Information section is functional or not',
                        expect: 'The "Toolstation App" link should be functional. It should open the Pro Card page',
                        assert: {
                            url: this.base_url + '/content/toolstation-app',
                            heading: 'Toolstation App'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the "Branches" link under Company Information section is functional or not',
                        expect: 'The "Branches" link should be functional. It should open the Branches page',
                        assert: {
                            url: this.base_url + '/branches',
                            heading: 'Onze vestigingen'
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the "Vacancies" link under Company Information section is functional or not',
                        expect: 'The "Vacancies" link should be functional. It should open the Vacancies page',
                        assert: {
                            url: this.base_url + '/content/jobs',
                            heading: 'Werken bij Toolstation'
                        }
                    }
                ]
            },
            {
                count: 3,
                name: 'Conditions',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Terms and Conditions" link under Conditions section is functional or not',
                        expect: 'The "Terms and Conditions" link should be functional. It should open the Terms and Condition page',
                        assert: {
                            url: this.base_url + '/content/terms',
                            heading: 'Algemene voorwaarden Toolstation'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "Privacy Policy" link under Conditions section is functional or not',
                        expect: 'The "Privacy Policy" link should be functional. It should open the Privacy Policy page',
                        assert: {
                            url: this.base_url + '/content/privacy',
                            heading: 'Privacyverklaring'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the "Cookie Policy" link under Conditions section is functional or not',
                        expect: 'The "Cookie Policy" link should be functional. It should open the Cookie Policy page',
                        assert: {
                            url: this.base_url + '/content/cookies',
                            heading: {
                                prod: 'Cookiebeleid',
                                other: 'Cookie Statement'
                            }
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the "Reviews" link under Conditions section is functional or not',
                        expect: 'The "Reviews" link should be functional. It should open the Reviews page',
                        assert: {
                            url: this.base_url + '/content/reviewguidelines',
                            heading: 'Beoordelingen'
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the "Weee" link under Conditions section is functional or not',
                        expect: 'The "Weee" link should be functional. It should open the WEEE page',
                        assert: {
                            url: this.base_url + '/weee',
                            heading: 'AEEA'
                        }
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the "Modern Slavery Statment" link under Conditions section is functional or not',
                        expect: 'The "Modern Slavery Statment" link should be functional. It should open the Modern Slavery page',
                        assert: {
                            url: this.base_url + '/modern-slavery-statement',
                            heading: 'Moderne Slaverij Statement'
                        }
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the "Blog, News and Advices" link under Conditions section is functional or not',
                        expect: 'The "Blog, News and Advices" link should be functional. It should open the Blog, News and Article page',
                        assert: {
                            url: this.base_url + '/blogs-news-advices',
                            heading: 'Blijf op de hoogte van het laatste nieuws'
                        }
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the "Request Catelogue" link under Conditions section is functional or not',
                        expect: 'The "Request Catelogue" link should be functional. It should open the Request Catelogue page',
                        assert: this.base_url + '/account/catalogue'
                    }
                ]
            },
            {
                count: 4,
                name: 'Stay in the loop',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of "Facebook" link under Stay in the loop section',
                        expect: 'The "Facebook" link should be functional. It should open the Toolstation\'s Facebook page',
                        assert: 'https://www.facebook.com/ToolstationNederland'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of "Instagram" link under Stay in the loop section',
                        expect: 'The "Instagram" link should be functional. It should open the Toolstation\'s Instagram page',
                        assert: 'https://www.instagram.com/toolstation_nl/'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of "Youtube" link under Stay in the loop section',
                        expect: 'The "Youtube" link should be functional. It should open the Toolstation\'s Youtube channel',
                        assert: 'https://www.youtube.com/channel/UCT5P5fy539NUKmHX8gOOpAQ'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the functionality of "LinkedIn" link under Stay in the loop section',
                        expect: 'The "LinkedIn" link should be functional. It should open the Toolstation\'s LinkedIn page',
                        assert: 'https://www.linkedin.com/company/toolstation-nl'
                    },
                ]
            },
            {
                count: 5,
                name: 'Bottom Section',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of "Privacy Policy" link added at the bottom of the footer section',
                        expect: 'The "Privacy Policy" link should be functional. It should open the privacy policy page',
                        assert: {
                            url: this.base_url + '/content/privacy',
                            heading: 'Privacyverklaring'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of "Cookie Policy" link added at the bottom of the footer section',
                        expect: 'The "Cookie Policy" link should be functional. It should open the cookie policy page',
                        assert: {
                            url: this.base_url + '/content/cookies',
                            heading: {
                                prod: 'Cookiebeleid',
                                other: 'Cookie Statement'
                            }
                        }
                    }
                ]
            }
        ]
    }
}
