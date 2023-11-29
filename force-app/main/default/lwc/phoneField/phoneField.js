import { LightningElement ,track,api} from 'lwc';
import intlTellinputjs from '@salesforce/resourceUrl/intlTellinputjs';
import utils from '@salesforce/resourceUrl/utils';
import intlTellinputcss from '@salesforce/resourceUrl/intlTellinputcss';
import democss from '@salesforce/resourceUrl/democss';
import flags from '@salesforce/resourceUrl/flags';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';


export default class PhoneField extends LightningElement {
  @api CountryName = '';
    @track inputElem;
    @track iti;
    inputFlags;
    connectedCallback() {

        this.inputFlags = flags;
        loadStyle(this, democss)
            .then(() => {

            });
        loadStyle(this, intlTellinputcss)
            .then(() => {

            });
        loadScript(this, utils)
            .then(() => {

            });
        loadScript(this, intlTellinputjs)

            .then(() => {
                this.inputElem = this.template.querySelector("[data-id=country]")

                /* initialize the intl plugin */
                var iti = window.intlTelInput(this.inputElem, {
                    initialCountry: "US",
                    preferredCountries: ['AU', 'NZ', 'US', 'CA',],
                    separateDialCode: true,
                    //nationalMode: true,
                    utilsScript: utils,

                })

                // store the instance variable so we can access it further down
                window.iti = iti;

            })
}
}