import { LightningElement ,api,track,wire} from 'lwc';
import getContactRelatedtoAccount from '@salesforce/apex/DeleteSelectedRecord.getContactRelatedtoAccount';
import  deleteContact from '@salesforce/apex/DeleteSelectedRecord.deleteContact';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { NavigationMixin } from 'lightning/navigation';



export default class DeleteSelectedRecord extends NavigationMixin(LightningElement) {
@api recordId;
@track contacts;
@track error;     


//currentrecordid;
    @track columns = [{
            label: 'First Name',
            fieldName: 'FirstName',
            type: 'text',
            
        },
        {
            label: 'Last Name',
            fieldName: 'LastName',
            type: 'text',
            
        },
                {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'phone',
            
        },
        {
        type: 'action',
        typeAttributes: {
            rowActions: actions,
            menuAlignment: 'right'
        }
    }


       
    ];


    @wire(getContactRelatedtoAccount, {Accountid:'$recordId'})
    wiredContacts({data, error}){
        if(data){
         console.log('checking the data', data);

            this.contacts = data;
            console.log( this.contacts);
            this.error = undefined;
            console.log('the error is in data block' +this.error);
        }
        else if (error) {
            this.error = error;
            console.log('the error is' +this.error);
            this.contacts = undefined;
        }
    }
   handleRowAction(event) {
        const actionName = event.detail.action.name;
        console.log('the event action is' +actionName);
       const rowid=event.detail.row;
         console.log('the row is' +rowid);
         console.log('the row is >  ' +rowid.Id);
		switch(actionName)
        {
        case 'view' :
        this[NavigationMixin.Navigate]({
         type: "standard__recordPage",
      attributes: {
          recordId:rowid.Id,
           objectApiName: "Contact",
             actionName: "view"
      }
    });
    break;
    case 'edit' :
        this[NavigationMixin.Navigate]({
         type: "standard__recordPage",
      attributes: {
          recordId:rowid.Id,
           objectApiName: "Contact",
             actionName: "edit"
      }
    });
    break;
      case 'delete':
       this.deleteContactRecord(rowid.Id);
        }
   }
   deleteContactRecord(currentRow)
   {
       console.log('delete metthod called' +currentRow);
      deleteContact({objcontact:currentRow})
     //called when the method is successfully passed without any error
     
     .then(result =>{ 
         const toastEvent = new ShowToastEvent({
       title: 'Success',
       message: 'Your contact has been deleted successfully',
       variant: 'success',
        
    });
     })
     
     .catch(error => {
        console.log('error occur')
     })
           
   
   }
}