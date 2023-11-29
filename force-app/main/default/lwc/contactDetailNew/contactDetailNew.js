import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Contact.Email';
import PHONE_FIELD from '@salesforce/schema/User.Contact.Phone';
import BIRTHDATE_FIELD from '@salesforce/schema/User.Contact.Account.PersonBirthdate';


const fields = [NAME_FIELD, EMAIL_FIELD,PHONE_FIELD,BIRTHDATE_FIELD]

export default class ContactDetailNew extends LightningElement {
    userId;
/*connectedCallback() {
  this.userId = Id ;
  console.log('the current user id is '+this.userId );
} */   
//userId = Id

    userDetail
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields;
            console.log('the user is ' +JSON.stringify(this.userDetail) );
        }
        if(error){
            console.log('error');
        }
    }

}