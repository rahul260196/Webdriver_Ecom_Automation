import Page from '../webdriverio-helper/Page.js'


export default class SaveList extends Page {
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            savelist_header_testid: 'current-savelist-name',
            product_link_endtestid: '-details-page-link-name',
            product_code_testid: 'plp-product-id-label',
            savelist_title_testid: 'saved-list-title',
 
 
        }
        this.value = {
        }
        this.params.page = {
            id: 'SL',
            name: 'Savelist',
            url: this.base_url + '/saved-lists'
        }
    }
 }
 