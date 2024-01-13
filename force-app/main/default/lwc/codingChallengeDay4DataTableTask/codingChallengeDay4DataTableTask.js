import { LightningElement ,track,wire} from 'lwc';
import { refreshApex } from '@salesforce/apex';

import getaccContact from '@salesforce/apex/fetchAccountData.getaccContact';
const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' }
 ];

 //define datatable columns with row actions
 const column = [
    { label: 'Name', fieldName: 'Name', sortable :'true' },
    { label: 'AccountNumber', fieldName: 'AccountNumber' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Phone', fieldName: 'Phone', type: 'Phone' ,sortable :'true'  },
    {
        type: 'action',
        typeAttributes: {
            rowActions: actions,
            menuAlignment: 'right'
        }
    }
 ];

export default class CodingChallengeDay4DataTableTask extends LightningElement {
   //these are the actions we can do in a datatable
@track columns =column;
@track result=[];
sortBy;
sortDirection;
@wire(getaccContact)
getData({data,error})
{
    if(data)
    {
        this.result=data;
        console.log('the data lenght is' ,data.length);

        console.log('the data is' ,JSON.stringify(this.result));
        if (Array.isArray(this.result)) {
            console.log(this.result);
            let lst = this.result.map(results => {
                
                   console.log('method called if');
                    console.log('got the record',JSON.stringify(results.Contacts));
                    //console.log('got the record',JSON.stringify(results.Contacts));
                    //console.log('got the record lenght',results.Contacts.length);

                      /*if(results.Contacts && results.Contacts.length>0)
                      {
                        console.log('inside of there');
                        results.Contacts.forEach(contact => {
                            console.log('the ids are', contact.AccountId);
                        });

                      }*/
                    /*if(results.Contacts.AccountId !== Null)
                    {
                       console.log('method of contact called');
                    }*/
                
            });
            console.log('lst here', JSON.stringify(lst));
           
        }
    }
    else
    {
        console.log('error occurred');
    }
}
 /////////  Sorting
 sortHandler(event)
 {
    this.sortBy =event.detail.fieldName;
    console.log('sortby ==>>' ,this.sortBy);
    this.sortDirection=event.detail.sortDirection;
    console.log('sortdirection ==>>' ,this.sortDirection);
    this.sortData(this.sortby,this.sortDirection)

 }
 sortData(fieldName,direction)
 {
    console.log('sort method called');
    let parseData = JSON.parse(JSON.stringify(this.data));
     console.log('Parsed Value' ,parseData);

        // Return the value stored in the field
        let keyValue = (a) => {
            return a[fieldName];
        };
        console.log('value of key' ,keyValue);
        // cheking reverse direction
        let isReverse = direction === 'asc' ? 1: -1;
        console.log('value of key' ,isReverse);

        // sorting data
        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : ''; // handling null values
            y = keyValue(y) ? keyValue(y) : '';
            // sorting values based on direction
            return isReverse * ((x > y) - (y > x));
        });
        this.data = parseData;

 }
 ///onrowselection
 handleRowAction(event)
 {
    const actionName=event.detail.action.name;
    console.log('actionName ==>' ,actionName);
    const row=event.detail.row;
    console.log('row ==>' ,row);

    const recordId= row.Id;
    console.log('recordId ==>' ,recordId);
     if(actionName === "delete")
     {
        //this.deleteRecord(recordId);
        console.log('records deletd');
     }



 }

}