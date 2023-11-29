import { LightningElement, wire } from 'lwc';
import getCurrentUser from '@salesforce/apex/UserController.getCurrentUser';

export default class UserComponent extends LightningElement {
    user;

    @wire(getCurrentUser)
    wiredUser({ error, data }) {
        if (data) {
            this.user = data;
        } else if (error) {
            // Handle error
            console.error(error);
        }
    }
}