import { LightningElement ,api,wire} from 'lwc';
import {getRecord,getFieldValue,deleteRecord,createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';

import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
export default class Day1CodingChallengelwc extends LightningElement {
    @api recordId;
    currentRecordId;
    fulldata;
    closeDate;
    name;
    phone;
    accountId;
    //fetch the record id
    connectedCallback()
    {
        this.currentRecordId=this.recordId;
    }
    // fetch the field value of specific record
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
            console.log('data error', +JSON.stringify(error));
         }
        }
        // what to delete record
        handleClick()
        {
            deleteRecord(this.currentRecordId)
            .then(result=> {
                window.alert('record Deleted Successfully');
            })
            .catch(error => {
             console.error('error occured' ,JSON.stringify(error));
            })

        }
        handleName(event)
        {
            this.name=event.target.value;
            console.log('name is' +this.name);
        }
        handlePhone(event)
        {
            this.phone=event.target.value;
            console.log('Phone is' +this.phone);
        }
        handleClickAccount()
        {
            const fields ={};
            fields[ACCOUNT_NAME.fieldApiName]=this.name;
            fields[ACCOUNT_PHONE.fieldApiName]=this.phone;
            console.log('the value in fields is', JSON.stringify(fields));
            const recordInput ={ apiName :ACCOUNT_OBJECT.objectApiName,fields }
            console.log('the record input is' , JSON.stringify(recordInput));
            createRecord(recordInput)
            .then(result=>{
                this.accountId=result.id;
                console.log('the record is ' , this.accountId);
                this.dispatchEvent(
                    new ShowToastEvent({
                        message:'Account Created',
                        Variant :'success',
                        title :'Success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'error',
                        message:'error occured',
                        Variant:'error',
                    }),
                );
            })

        }
    }
