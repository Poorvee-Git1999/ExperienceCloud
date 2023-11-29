import { LightningElement ,track,wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo ,getPicklistValues} from 'lightning/uiObjectInfoApi';
import Cricketer_OBJECT from '@salesforce/schema/Cricketer__c';

export default class PlayerSearchFilter extends NavigationMixin(LightningElement)   {
    objectInfo;
recordtypeId;
handleClick()
{
this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Cricketer__c',
                actionName: 'new'
            }
        });

}

    @wire(getObjectInfo, { objectApiName: Cricketer_OBJECT })
    objectInfo({data,error}){
    if(data)
    {
     console.log('the data is' +JSON.stringify(data));
     this.recordtypeId=data.defaultRecordTypeId;
     console.log('the record type value is : ' +this.recordtypeId);
    }
    else{
        console.log('the error is' +JSON.stringify(error));
    }
}}