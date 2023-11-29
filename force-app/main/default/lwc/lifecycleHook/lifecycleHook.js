import { LightningElement } from 'lwc';
export default class LifecycleHook extends LightningElement {
constructor()
{
    super();
    console.log(' i am the child component');
}
connectedCallback() {
     console.log(' i am the child connectedcallback component');
}
}