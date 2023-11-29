import { LightningElement } from 'lwc';
export default class ParentComponent1 extends LightningElement {
    valueChanged;
handlePass(event)
{
this.valueChanged=event.detail;
console.log(this.valueChanged);
}
}