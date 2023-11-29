import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UploadFile extends LightningElement {
@api recordId;
        handleUploadFinished(event) {
        const uploadedFiles = event.detail.files.length;
        console.log(uploadedFiles);
        const evt = new ShowToastEvent({
            title: 'SUCCESS',
            message: uploadedFiles + ' File(s) uploaded  successfully',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}