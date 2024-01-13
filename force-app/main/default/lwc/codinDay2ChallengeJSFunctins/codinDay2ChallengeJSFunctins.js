import { LightningElement, wire } from 'lwc';
import getListOfContact from '@salesforce/apex/FetchListOfContact.getListOfContact';

export default class CodinDay2ChallengeJSFunctins extends LightningElement {
    results;

    @wire(getListOfContact)
    getContactslist({ data, error }) {
        if (data) {
            console.log('method called');
            this.results = data; // Remove JSON.stringify, as data is likely already an array or object
            console.log('data', this.results);

            if (Array.isArray(this.results)) {
                console.log(this.results);
                let lst = this.results.map(result => {
                    if(result.Name === 'poorvee test')
                    
                    {
                       console.log('method called if');
                        console.log('got the record',result.Id);
                    }
                    return result.Name; // Assuming the field name is "Name" in your data
                });
                console.log('lst here', JSON.stringify(lst));
               
            }
        } else if (error) {
            console.error('Error fetching data:', error);
        }
    }
}
