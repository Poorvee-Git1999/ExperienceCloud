import { LightningElement,api,track } from 'lwc';
//import template1 from './template1.html';
//import template2 from './template2.html';


export default class LifecycleHookParent extends LightningElement {
@api name;
@track valueChange;
@track valueRenderChange;
@track hasRendered;
value;
    //showTemplate1 = true;
// call this method to update the UI
//can we called before or after the connectedcallback
// used to conditically render the templates.
    /*render() {
        return this.showTemplate1 ? template1 : template2;
    }*/

constructor()
{
   
    super();
    this.name='helli api';
    this.value='hello value';
    console.log('i am parent component');
    console.log( this.name);
    console.log(this.value);
}
// when component is inserted into a dom
// parent to child
//called more than onces
connectedCallback() {
       console.log('i am parent connectedcallback component');
        this.valueChange='hello world';
}
connectedCallback() {
       //console.log('i am parent connectedcallback component');
               this.valueChange='value overlapped';

}
// called when the component is removed from DOM
// this flows from parent to child
//check onces more
disconnectedCallback() {
           console.log('i am parent disconnectedCallback component');

}
hasRendered=true;
handleClick()
{
this.valueRenderChange='hello buddy';
}
renderedCallback(){
    if(this.hasRendered)
    {
   this.valueRenderChange='hello value get change in rendered';
   this.hasRendered=false;
    }
}
}