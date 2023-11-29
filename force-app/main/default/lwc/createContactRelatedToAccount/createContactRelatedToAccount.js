import { LightningElement,api,track } from 'lwc';
import createContact from '@salesforce/apex/CreateContactRelatedToAcoount.createContact';
export default class CreateContactRelatedToAccount extends LightningElement {
   //get the record id of account
    @api recordId;
    contactName;
    @track showModal=false;

    accountId;
    handleChange(event)
{
    this.contactName=event.target.value;
}
//accountId=this.recordId;


onCreateRecord()
{
    // calling inperativally
    
     createContact({contactName :this.contactName,accountId: this.recordId})
     //called when the method is successfully passed without any error
     .then(result =>{ 
        // this.accountId=result[0].AccountId;
         console.log('the account id is' +this.accountId);
          console.log('result' +JSON.stringify(result))
          this.closeModal();
     })
     .catch(error => {
         console.error('error' +JSON.stringify(error))
     })
}
openModal(){
    this.showModal = true;
    this.accountId=this.recordId;
}
closeModal(){
    this.showModal = false;
}
}