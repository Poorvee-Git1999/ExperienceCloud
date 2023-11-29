import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/SearchAccount.getAccount'
export default class SearchAccount extends LightningElement {
@track columnsList =[{
            label: 'Name',
            fieldName: 'Name',
            type: 'text',
            
        }];
SearchAccount;
@track dataList;
handleChange(event)
{
this.SearchAccount=event.target.value;
console.log('the account' +this.SearchAccount);

getAccount({searchKey:this.SearchAccount})
.then(result =>{ 
      this.dataList=result;
          console.log('result' +JSON.stringify(this.dataList))
     })
     .catch(error => {
         console.error('error' +JSON.stringify(error))
     })
     
}
}