import { LightningElement } from 'lwc';
export default class Javascript1 extends LightningElement {
number1;
number2;
result;
onFirstNumber(event)
{
    this.number1=event.target.value;
    console.log( this.number1);
}
onSecondNumber(event)
{
    this.number2=event.target.value;
    console.log( this.number2);
}


isEqualto100(number1,number2)
{
    console.log('function called');
return this.number1 ===100 || this.number2 ===100;
}
handleClick(event)
{
console.log('handle');
const result =this.isEqualto100(100,0);
console.log(result);
}
}