import { LightningElement } from 'lwc';
export default class ParentComponent3 extends LightningElement {
counter=0;

handleaddition()
{
  this.counter++;
}
handlesubraction()
{
this.counter--;
}
handlemultiplcation2(event)

    {
const multiplyingNumber =event.detail;
console.log('method called handlemultiplcation2' ,multiplyingNumber);
    this.counter*=multiplyingNumber;
    
    }
handlemultiplcation10(event)
{
const multiplyingNumbers =event.detail;
console.log('method called handlemultiplcation10' ,multiplyingNumbers);

    this.counter*=multiplyingNumbers;
    
}
}