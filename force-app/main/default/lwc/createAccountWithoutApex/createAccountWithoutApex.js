import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class CreateAccountWithoutApex extends LightningElement {
accountId;
name;
handleName(event)
{
this.name=event.target.value;
console.log('the naame value is ' ,this.name);
}
handleClick()
{
    const fields={};
    fields[NAME_FIELD.fieldApiName]=this.name;
    console.log('the field value is ',fields);
    recordInput={apiName:ACCOUNT_OBJECT.objectApiName,fields};
    createRecord(recordInput)
    .then(result=>{
       console.log('the result recieved is ',JSON.stringify(result));
    })
   
}
}