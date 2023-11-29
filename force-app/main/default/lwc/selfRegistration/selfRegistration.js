import { LightningElement ,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createCommunityUser from '@salesforce/apex/SelfRegistrationController.createCommunityUser';
 const countryList = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
    // Add more countries here...
];

export default class SelfRegistration extends LightningElement {
    value = 'Tutorial';
    isValid = false;
   @track errorMessage = 'Email and Confirm Email do not match';

    get options() {
        return [
            { label: 'Friend/Family/Colleague ', value: 'Friend/Family/Colleague ' },            
            { label: 'Restaurant/Shop', value: 'Restaurant/Shop' },
            { label: 'Event/Tasting ', value: 'Event/Tasting ' },
            { label: 'Press/Website  ', value: 'Press/Website' },
             { label: 'Hotel/Winery ', value: 'Hotel/Winery  ' },
            { label: 'Social Media  ', value: 'Social Media' },
            { label: 'Other ', value: 'Other  ' },

        ];
    }

    firstName;
    lastName;
    emailaddress;
    confirmEmail;
    password;
    confirmpassword;
    phone;
    zipCode;
    dateofBirth;
    methodError;
    showErrorMessage;
     @track selectedCountry = '';
     
    @track isChecked = false;
     opentemplate =true;
    countryOptions = countryList;
handleFirstName(event)
{
    this.firstName=event.target.value;
    console.log('firstName is',this.firstName);
}
handleLastName(event)
{
    this.lastName=event.target.value;
    console.log('lastName is',this.lastName);
}
handleEmailAddresss(event)
{
    this.emailaddress=event.target.value;
    console.log('Emailss is',this.emailaddress);
}
handleConfirmEmailAddress(event)
{
    this.confirmEmail=event.target.value;
    console.log('confirmEmail is',this.confirmEmail);
    this.validateEmails();
    
}
handlePassword(event)
{
    this.password=event.target.value;
    console.log('password is',this.password);
}
handleConfirmPassword(event)
{
    this.confirmpassword=event.target.value;
    console.log('confirmpassword is',this.confirmpassword);
     //this.validateEmails();
}
validateEmails() {
console.log('called valid');
    this.showErrorMessage = this.emailaddress !== this.confirmEmail;
  }

handleBirthdate(event)
{
this.dateofBirth=event.target.value;
}

    handleChange(event) {
        this.isChecked = event.target.checked;
    }

handlePhone(event)
{
this.phone=event.target.value;
}
handleZipCode(event)
{
this.zipCode=event.target.value;
}

    handleCountryChange(event) {
        this.selectedCountry = event.detail.value;
     console.log('Selected value is',this.selectedCountry);

        // You can handle the selected country value here if needed
    }
//  isInputValid() {
//         let isValid = true;
//         let inputFields = this.template.querySelectorAll('.validate');
//         inputFields.forEach(inputField => {
//             if(!inputField.checkValidity()) {
//                 inputField.reportValidity();
//                 isValid = false;
//             }
//            // this.contact[inputField.name] = inputField.value;
//         });
//         return isValid;
//     }

// handelValidation(){
//     if(!this.firstName){
//         console.log('OUTPUT : 110 ');
//         return false;
//     }
//     if(this.firstName != ''){
//         console.log('OUTPUT : 118 ');
//         return false;
//     }
//     if(!this.lastName){
//         return false;
//     }
//     if(!this.emailaddress){
//         return false;
//     }
//     if(!this.confirmEmail){
//         return false;
//     }
//     if(!this.password){
//         return false;
//     }

//     return true;


// }


handleContinueClick()
{
    // console.log('OUTPUT : 135 ', this.handelValidation);

    // if(this.handelValidation){
    //     console.log('OUTPUT : 136 ');
    //     this.isValid = true;
    // }
    
    if(this.emailaddress !==this.confirmEmail)
    {
    // this.validateEmails();
     //this.opentemplate =true;
    }
    // if(this.password !==this.confirmpassword)
    // {
    //  this.showToast('Error', 'Password and Confirm Password must match.', 'error');
    //  //this.opentemplate =true;
    // } 

//this.opentemplate =false;
}
showToast(title, message, variant) {
  const event = new ShowToastEvent({
    title: title,
    message: message,
    variant: variant,
  });
  this.dispatchEvent(event);
}
handleClick()
{
    const passdata = [this.firstName, this.lastName, this.emailaddress, this.confirmEmail, this.password,this.confirmpassword,this.dateofBirth,this.phone,this.zipCode,this.selectedCountry];
    console.log('passdata 43 >>>  : ', +JSON.stringify(passdata));
    createCommunityUser({getDataFromUser : passdata})
        //called when the method is successfully passed without any error
        .then(result =>{ 
            // this.accountId=result[0].Id;
            console.log('result' +JSON.stringify(result))
        })
        .catch(error => {
            console.error('error' +JSON.stringify(error))
            this.methodError = JSON.stringify(error);
            
        })   

             

}
}