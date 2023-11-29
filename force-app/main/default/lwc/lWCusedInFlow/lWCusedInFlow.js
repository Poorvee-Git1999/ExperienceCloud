import { LightningElement,api } from 'lwc';
import {FlowAttributeChangeEvent} from 'lightning/flowSupport';

export default class LWCusedInFlow extends LightningElement {
@api MobilePhone;
 @api Email;
@api agree;
handleMobileNumber(event)
{
this.MobilePhone=event.target.value;
        ["MobilePhone"].forEach((loc) =>
        this.dispatchEvent(new FlowAttributeChangeEvent(loc, this[loc]))
      );

}
handleEmail(event)
{
this.Email=event.target.value;
}
handleAgree(event)
{
this.agree=event.target.value;
}
}