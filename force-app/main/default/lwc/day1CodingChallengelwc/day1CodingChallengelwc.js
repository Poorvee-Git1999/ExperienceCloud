import { LightningElement ,api,wire} from 'lwc';
import {getRecord,getFieldValue,deleteRecord} from 'lightning/uiRecordApi';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
export default class Day1CodingChallengelwc extends LightningElement {
    @api recordId;
    currentRecordId;
    fulldata;
    closeDate;
    connectedCallback()
    {
        this.currentRecordId=this.recordId;
    }
    @wire(getRecord ,{recordId :'$recordId',fields :[CLOSEDATE_FIELD,STAGENAME_FIELD]})
    Oppp({data , error})
        {
         if(data)
         {
            this.fulldata=JSON.stringify(data);
            this.closeDate=getFieldValue(data,CLOSEDATE_FIELD);
         }
         else if(error)
         {
            console.log('data error');
         }
        }
        handleClick()
        {
            deleteRecord(this.currentRecordId)
            .then(result=> {
                window.alert('record Deleted Successfully');
            })
            .catch(error => {
             console.error('error occured' +JSON.stringify(error));
            })
        }
}