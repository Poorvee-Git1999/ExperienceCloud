import { LightningElement } from 'lwc';
export default class CssLearning extends LightningElement {


handleClickGreen()
{
    let block=this.template.querySelector('[data-id="divblock"]');
            if(block){
            this.template.querySelector('[data-id="divblock"]').className='greenColor';
        }

}
handleClickRed()
{
 let block=this.template.querySelector('[data-id="divblock"]');
            if(block){
            this.template.querySelector('[data-id="divblock"]').className='redColor';
        }   
}
}