import { LightningElement ,api} from 'lwc';
import updateRecord from'@salesforce/apex/CreateUpdateRecord.updateRecord';

export default class UpdateContactRecord extends LightningElement {
@api recordId;
accountName;
accountIndustry;
handleChange(event)
{
    this.accountName=event.target.value;
}
handleChangeEvent(event)
{
    this.accountIndustry=event.target.value;
}
onUpdateRecord()
{
    // calling inperativally
     updateRecord({recordids :this.recordId , accountName :this.accountName,accountIndustry: this.accountIndustry})
     //called when the method is successfully passed without any error
     .then(result =>{ 
         
          console.log('result' +JSON.stringify(result))
     })
     .catch(error => {
         console.error('error' +JSON.stringify(error))
     })
}
}