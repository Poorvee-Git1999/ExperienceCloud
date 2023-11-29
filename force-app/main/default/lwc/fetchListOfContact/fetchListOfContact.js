import { LightningElement ,wire} from 'lwc';
import getListOfContact from '@salesforce/apex/FetchListOfContact.getListOfContact';
export default class FetchListOfContact extends LightningElement {
    @wire(getListOfContact) contacts;
}