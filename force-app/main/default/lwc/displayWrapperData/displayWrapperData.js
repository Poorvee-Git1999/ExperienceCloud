import { LightningElement ,wire} from 'lwc';
import fetchAccountRelatedContact from '@salesforce/apex/wrapperClass.fetchAccountRelatedContact';
export default class DisplayWrapperData extends LightningElement {
   
   
    wrapperData;
    @wire(fetchAccountRelatedContact) 
   
    fetchdata({data,error}){
        if(data)
        {
          this.wrapperData=data;
          console.log('the data is' ,this.wrapperData);
        }
        else if(error)
        {
            console.log('error opps');
        }
    }
}