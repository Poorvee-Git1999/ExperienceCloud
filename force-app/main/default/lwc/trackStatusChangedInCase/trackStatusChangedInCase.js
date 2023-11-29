import { LightningElement ,wire,api,track} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Case.Status'];
export default class TrackStatusChangedInCase extends LightningElement {
@api recordId;
@track currentStatus;
  @track previousStatus;
  currentrecordId;
  

  @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
  wiredRecord({ data, error }) {
    if (data) {
      const caseRecord = data.fields;
      console.log(caseRecord);
      this.previousStatus = this.currentStatus;
       console.log(this.previousStatus );
      this.currentStatus = caseRecord.Status.value;

      if (this.previousStatus !== undefined && this.currentStatus !== this.previousStatus) {
        // Status value has changed, perform any necessary actions
        this.handleStatusChange();
      }
    } else if (error) {
      // Handle error if applicable
    }
};
handleStatusChange() {
    // Logic to execute when the status value changes
    console.log('Status has changed:', this.currentStatus);
  }

}