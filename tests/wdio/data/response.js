import Page from '../webdriverio-helper/Page.js';


export default class Response extends Page{
   constructor() {
       super();
       this.params = {
           group: {
               count: null,
               name: null,
           }
       }
       this.element = {
       }
       this.value = {
           base_url: this.base_url
       }
       this.params.page = {
           id: 'RS',
           name: 'Response',
           url : this.base_url
       }
       this.groups = [
           {
               count: 1,
               name: 'Response',
               tests: [
                   {
                       count: 1.1,
                       name: 'Verify the response code for the baseUrl',
                       expect: 'The baseUrl should give a 200 success response code'
                   }
               ]
           }
       ]
   }
}
