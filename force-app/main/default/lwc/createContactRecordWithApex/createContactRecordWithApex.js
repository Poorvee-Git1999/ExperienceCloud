import { LightningElement } from 'lwc';
import createRecord from'@salesforce/apex/CreateUpdateRecord.createRecord';

export default class CreateContactRecordWithApex extends LightningElement {
accountName;
accountIndustry;
accountId;
handleChange(event)
{
    this.accountName=event.target.value;
}
handleChangeEvent(event)
{
    this.accountIndustry=event.target.value;
}
onCreateRecord()
{
    // calling inperativally
     createRecord({accountName :this.accountName,accountIndustry: this.accountIndustry})
     //called when the method is successfully passed without any error
     .then(result =>{ 
         this.accountId=result[0].Id;
          console.log('result' +JSON.stringify(result))
     })
     .catch(error => {
         console.error('error' +JSON.stringify(error))
     })
}
}