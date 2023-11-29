import { LightningElement ,api,wire} from 'lwc';
import getCricketer from '@salesforce/apex/CricketerControllerClass.getCricketer';
export default class PlayerSearchResult extends LightningElement {
    cricketerdata;
cricketNationality='';
@wire(getCricketer , {natinality : $cricketNationality })
wireCricketer({data,error})
{
    if(data)
    {
     this.cricketerdata=data;
     console.log('data' +JSON.stringify(data));
    }
    else if(error)
    {
  
    }
};
@api selectedNationality(nationalityOfCricketer)
{
    console.log('the value in child lwc is' +JSON.stringify(nationalityOfCricketer));
  this.cricketNationality=nationalityOfCricketer;

}
}