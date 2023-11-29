import { LightningElement } from 'lwc';
export default class ChildComponent1 extends LightningElement {
    value;
handleChange(event)
{
this.value= event.target.value;

this.dispatchEvent(new CustomEvent('pass', {detail:this.value,bubbles: true,composed : true}));
}
}