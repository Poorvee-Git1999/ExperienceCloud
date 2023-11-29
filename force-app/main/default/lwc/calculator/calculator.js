import { LightningElement,track } from 'lwc';
export default class Calculator extends LightningElement {
firstNumber;
secondNumber;
    @track result;
    valueChange(event)
    {
        const names =event.target.name;
        if(names==='value1')
        {
            this.firstNumber=event.target.value; 
        }
        else if(names ==='value2')
        {
            this.secondNumber=event.target.value; 
        }
    }
    handlerClick(event)
    {
        const mathsoperation =event.target.label;
        var restemp=0;
        if(mathsoperation ==='Addition')
        {
            restemp=parseInt(this.firstNumber) + parseInt(this.secondNumber);
        }
        else if(mathsoperation ==='Substraction')
        {
            restemp=this.firstNumber - this.secondNumber;
   
        }
        else if(mathsoperation ==='Multiplication')
        {
            restemp=this.firstNumber*this.secondNumber;
   
        }
        else if(mathsoperation ==='Division')
        {
            restemp=this.firstNumber / this.secondNumber;
   
        }
        this.result=restemp;
    }
}