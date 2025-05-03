import Page from "../webdriverio-helper/Page.js";
import Selector from '../webdriverio-helper/Selector.js';
import Asserts from "../webdriverio-helper/Asserts.js";
import Helper from '../webdriverio-helper/Helper.js';
import Header from '../data/header.js';


let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper;
let header = new Header();


export default class HomePage extends Page{
   constructor(){
       super();
       this.params.page.id = 'HM';
       this.params.page.name = 'Home';
       this.params.page.url = this.base_url;
   }


   async open() {
       await browser.maximizeWindow();
       await super.open(this.params.page.url);
       await helper.addCookies();
       await asserts.pauseIfHuman();
   }
}
