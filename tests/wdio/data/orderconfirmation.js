import Page from '../webdriverio-helper/Page.js'


export default class OrderConfirmation extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
           order_confirmation_msg_testid: 'order-confirmation-message',
           my_account_btn_testid: 'my-account',
        }
        this.value = {
        }
        this.params.page = {
            id: 'OC',
            name: 'OrderConfirmation',
            url : this.base_url+'checkout/order-confirmation/'
        }
   
    }
 }
 