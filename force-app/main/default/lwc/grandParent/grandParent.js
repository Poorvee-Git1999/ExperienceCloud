import { LightningElement } from 'lwc';
export default class GrandParent extends LightningElement {
    valueChanged;
handlePass(event)
{
this.valueChanged=event.detail;
console.log(this.valueChanged);
}
}