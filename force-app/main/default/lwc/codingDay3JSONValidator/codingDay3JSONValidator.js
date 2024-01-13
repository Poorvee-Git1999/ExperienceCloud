import { LightningElement } from 'lwc';

export default class CodingDay3JSONValidator extends LightningElement {

    handleClick(event)
    {
      const innerValue = this.template.querySelector('lightning-input');
      console.log('value is a' ,innerValue);
      const valueofli =innerValue.value;
      console.log('value is', valueofli);
      if(valueofli)
      {
        try{
           const jsonData=JSON.parse(valueofli);
           console.log('value is parsed ' ,jsonData);
           console.log('value is parsed and strifyied ' ,JSON.stringify(jsonData));

        }
        catch (ex){
            console.error('Invalid JSON:', ex.message);

        }
    }
    }
}