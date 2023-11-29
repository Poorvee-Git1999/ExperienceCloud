import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal' 
export default class ModalPopup extends LightningElement {
    handleOkay()
    {
        this.close('okay');
    }

}