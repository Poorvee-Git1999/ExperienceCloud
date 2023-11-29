import { LightningElement ,wire,track} from 'lwc';
import { getRecord ,updateRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import USER_ID from '@salesforce/user/Id'; //this is how you will retreive the USER ID of current in user.
import NAME_FIELD from '@salesforce/schema/User.Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/User.Contact.LastName';
import Mobile_FIELD from '@salesforce/schema/User.Contact.MobilePhone';
import Phone_FIELD from '@salesforce/schema/User.Contact.Phone';
import Email_FIELD from '@salesforce/schema/User.Contact.Email';
import DOB_FIELD from '@salesforce/schema/User.Contact.Birthdate';

//import Opt_FIELD from '@salesforce/schema/User.Contact.Account.Opt_for_text_notification__c';

 

export default class ContactDetail extends LightningElement {

    templateOne;
    templatetwo;
    userNameField;
    userLastNameField;
    userEmail;
    userDOB;
    userMobile;
    userPhone;
    userOptNotify;
    @track error ;
    @track name;
    @track lastName;
    @track email;
    @track mobile;
    @track phone;
    @track dob;
    @track optNotify;
    userField;
    userLastField;

    onFirstName(event)
    {
        this.userField=event.target.value;
        console.log('the value is ' , this.userField);
    }
    
    onLastName(event)
    {
        this.userLastField=event.target.value;
        console.log('the value is ' , this.userLastField);
    }
     
    @wire(getRecord, {
        recordId: USER_ID,
        fields: [NAME_FIELD,LastName_FIELD,Mobile_FIELD,Phone_FIELD,Email_FIELD,DOB_FIELD],
     }) 
     wireuser({error,data}) 
       {
        if (error) {
            this.error = error ; 
        } else if (data) {
            this.templateOne=true;
            this.templatetwo=false;
            console.log('Name-----',data);
       // const converteddata=JSON.stringify(data);
 

            this.name = data.fields.Contact.value.fields.FirstName;

            this.userNameField = this.name.value;
           console.log('this value ' ,this.userNameField);
 

            this.lastName = data.fields.Contact.value.fields.LastName;

            this.userLastNameField = this.lastName.value;

 

            this.email = data.fields.Contact.value.fields.Email;

            this.userEmail = this.email.value;

 

            this.mobile = data.fields.Contact.value.fields.MobilePhone;

            this.userMobile = this.mobile.value;

 

            this.phone = data.fields.Contact.value.fields.Phone;

            this.userPhone = this.phone.value;

 

            this.dob = data.fields.Contact.value.fields.Birthdate;

            this.userDOB = this.dob.displayValue;

 

          //  this.optNotify = data.fields.Contact.value.fields.Account.value.fields.Opt_for_text_notification__c;

            //this.userOptNotify = this.optNotify.value;

            //console.log('this.userOptNotify',this.userOptNotify);


        }
    

    }

    onEdit(event)
    { 

        this.templatetwo=true;
        this.templateOne=false;

    }

    onSave(event)
    {
        console.log('on save called');
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.userField

        fields[LastName_FIELD.fieldApiName] = this.userLastField;
       /* fields[Email_FIELD.fieldApiName] = this.userEmail;
        fields[Mobile_FIELD.fieldApiName] = this.userMobile;
        fields[Phone_FIELD.fieldApiName] = this.userPhone;*/
       console.log('field value is' , JSON.stringify(fields));
       const stringField = JSON.stringify(fields); 

        const recordInput = { fields };
        console.log('OUTPUT : ', JSON.stringify(recordInput));
        this.callUpdate(recordInput);
       
       
        // updateRecord(recordInput)
        //     .then(() => {
        //         console.log('in then');
        //         this.templatetwo = false;
        //         this.templateOne = true;
        //         this.dispatchEvent(
        //             new ShowToastEvent({
        //                 title: 'Success',
        //                 message: 'User information updated successfully',
        //                 variant: 'success',
        //             })
        //         );
        //     })
        //    .catch(error => {
        //      console.log('in catch');

        //         this.dispatchEvent(
        //             new ShowToastEvent({
        //                 title: 'Error updating record',
        //                 message: error.body.message,
        //                 variant: 'error',
        //             })
        //         );
        //     });


    }   

    callUpdate(recordInput){
        console.log('OUTPUT : 170 >>  ',JSON.parse(JSON.stringify(recordInput)));
        updateRecord(recordInput)
            .then(() => {
                console.log('in then');
                this.templatetwo = false;
                this.templateOne = true;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'User information updated successfully',
                        variant: 'success',
                    })
                );
            })
           .catch(error => {
             console.log('in catch');

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating record',
                        message: error.body.message,
                        variant: 'error',
                    })
                );
            });

    }
    
    
 
}