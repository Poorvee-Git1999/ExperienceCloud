import { LightningElement ,api} from 'lwc';

export default class GetRecordId extends LightningElement {
    @api recordId;
    currentRecordId;

    buttonClick()
    {
    //this.connectedCallback()        
    this.currentRecordId=this.recordId;
    //console.log(this.currentRecordId);
    window.alert(this.currentRecordId);
    }
    /*connectedCallback()
    {
        this.currentRecordId=this.recordId;
        //console.log(this.currentRecordId);
        window.alert(this.currentRecordId);
    }*/

}