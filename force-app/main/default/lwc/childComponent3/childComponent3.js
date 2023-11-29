import { LightningElement } from 'lwc';
export default class ChildComponent3 extends LightningElement {

handleSubtract()
{
const eventadd=this.dispatchEvent(new CustomEvent('add'));
console.log('add' ,eventadd);
}
handleAdd()
{
const eventminus=this.dispatchEvent(new CustomEvent('minus'));
console.log('eventminus' ,eventminu);
}
handleMultiple2(event)
{
const multipleByValue =event.target.value;
console.log('multipleByValue' ,multipleByValue);
const eventmultiply=this.dispatchEvent(new CustomEvent('multiply2',
                                                        {detail :multipleByValue}));

}
handleMultiple10(event)
{
const multipleByValues =event.target.value;
console.log('multipleByValues' ,multipleByValues);

const eventmultiply=this.dispatchEvent(new CustomEvent('multiply10',
                                                        {detail :multipleByValues}));

}
}