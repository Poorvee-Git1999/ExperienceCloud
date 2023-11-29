import { LightningElement ,track} from 'lwc';
import createRecord from '@salesforce/apex/CreateLeaveRequestRecord.createRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MyLeave extends LightningElement {

@track isShowModal = false;
fromDate;
toDate;
handleFromDateChange(event)
{
this.fromDate=event.target.value;
}
handleToDateChange(event)
{
this.toDate=event.target.value;
}
    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
onSave()
{
if(this.fromDate>this.toDate)
{
const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'From Date should be greater than To Date',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    


}
else 
{
         createRecord({fromDate :this.fromDate,toDate: this.toDate})
     //called when the method is successfully passed without any error
     .then(result =>{ 
         
          console.log('result' +JSON.stringify(result))
     })
     .catch(error => {
         console.error('error' +JSON.stringify(error))
     })
     this.isShowModal = false;
}
}
}