import { LightningElement ,track,api} from 'lwc';

import createCommunityUser from '@salesforce/apex/newSelfRegistrationController.createCommunityUser';
import intlTellinputjs from '@salesforce/resourceUrl/intlTellinputjs';
import utils from '@salesforce/resourceUrl/utils';
import intlTellinputcsss from '@salesforce/resourceUrl/intlTellinputcsss';
import democss from '@salesforce/resourceUrl/democss';
import flags from '@salesforce/resourceUrl/flags';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class SelfRegistrationNew extends LightningElement {
    storeFirstName;
    storeLastName;
    storeEmail;
    storeConfEmail;
    storePassword;
    storeConfPassword;
    openNewTemplate = false;
    openFirstPage = true;
    isChecked = false;
    dateOfBirth;
    phoneMobile;
    optvalue;
    storeOptValue;
    zipCode;
    selectedCountry;
    showErrorMessage;
    showErrorMessageEmail;
    showErrorMessageAge;
@track requiredMsg='All fields are required';
 @track errorMessageForEmail = 'Email and Confirm Email do not match';
 @track errorMessageForPassword='Password and Confirm Password do not match';
 @track errorMessageForDateOfBirth='Age should be greater than 18';
 showPasswordErrorMessage;
    friendFamilyValue;
    valueStoreFriendFamily;
    FriendFamily = false;
    nameofFriend;

    otherNamevalue;
    otherName = false;

    shopNamevalue;
    shopRestaurant = false;

    eventNameValue;
    eventTasting = false;

    websiteNameValue;
    pressWebsite = false;

    hotelNameValue;
    hotelWinery = false;

    socialMediaNameValue;
    socialMedia = false;
    passData = [];
    spinner = false; // to call spinner function.
   /* @api CountryName = '';
    @track inputElem;
    @track iti;
   
    
  renderedCallback()
    {

       
        loadStyle(this, democss)
            .then(() => {

            });
        loadStyle(this, intlTellinputcsss)
            .then(() => {

            });
        loadScript(this, utils)
            .then(() => {

            });
        loadScript(this, intlTellinputjs)

            .then(() => {
                this.inputElem = this.template.querySelector("[data-id=country]")

                // initialize the intl plugin 
                var iti = window.intlTelInput(this.inputElem, {
                    initialCountry: "US",
                    preferredCountries: ['AU', 'NZ', 'US', 'CA',],
                    separateDialCode: true,
                    //nationalMode: true,
                    utilsScript: utils,

                })

                // store the instance variable so we can access it further down
                window.iti = iti;

            })    
    }*/

   showSpinner() {
        this.spinner = true;
    }
    hideSpinner() {
        this.spinner = false;
    }


    onFirstName(event) {
        this.storeFirstName = event.target.value;
        console.log('the first name is' ,this.storeFirstName);
    }
    onLastName(event) {
        this.storeLastName = event.target.value;
        console.log('the storeLastName name is' ,this.storeLastName);

    }
    onEmailChange(event) {
        this.storeEmail = event.target.value;
        console.log('the storeEmail name is' ,this.storeEmail);

    }
    
    onConfirmEmailChange(event) {
        this.storeConfEmail = event.target.value;
         console.log('the storeConfEmail name is' ,this.storeConfEmail);

       
        
    }
    onPasswordChange(event) {
        this.storePassword = event.target.value;
        console.log('the storePassword name is' ,this.storePassword);

    }
    onConfirmPassword(event) {
        this.storeConfPassword = event.target.value;
      
    }
    //
    validateFields() {
   
    if(this.storeFirstName == '' || this.storeFirstName == null || this.storeFirstName == undefined
            || this.storeLastName == '' || this.storeLastName == null || this.storeLastName == undefined
            || this.storeEmail == '' || this.storeEmail == null || this.storeEmail == undefined
            || this.storePassword == '' || this.storePassword == null || this.storePassword == undefined) 
            {
                 this.showErrorMessage=true;
            }

    
if(this.storeEmail !== this.storeConfEmail)
       {
        this.showErrorMessageEmail = true;
        this.openNewTemplate = false;
        this.openFirstPage = true;
       }
       else{
      this.showErrorMessageEmail = false;
 
       }
       if(this.storePassword  !== this.storeConfPassword)
     {
    this.showPasswordErrorMessage = true;
    this.openNewTemplate = false;
    this.openFirstPage = true;
    
    }
    else
    {
     showPasswordErrorMessage=false;   
    }
}
    

    onContinueClick() {
        console.log('177');
        console.log('the first name is' ,this.storeFirstName);

        if(this.storeFirstName != '' && this.storeFirstName != null && this.storeFirstName != undefined
            && this.storeLastName != '' && this.storeLastName != null && this.storeLastName != undefined
            && this.storeEmail != '' && this.storeEmail != null && this.storeEmail != undefined
            && this.storePassword != '' && this.storePassword != null && this.storePassword != undefined) 
        {
            this.openNewTemplate = true;
            this.openFirstPage = false;
        }
        else {
            this.validateFields(); 
        }
    if(this.storeEmail !== this.storeConfEmail)
    {
       this.validateFields();  
    }
    if(this.storePassword  !== this.storeConfPassword)
    {
        this.validateFields();  
    }
        
        var email;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        email = this.template.querySelector('[data-id="txtEmailAddress"]');
        console.log('the email' +email);
        var emailVal = email.value;
        console.log('the value of  email' +emailVal);
        if (emailVal.match(emailRegex)) {
            email.setCustomValidity("");

        } else {
          
            email.setCustomValidity("Please enter valid email");
            console.log('goes in else');
             this.openNewTemplate = false;
             this.openFirstPage = true;
        }
        email.reportValidity();
        
    }
       
    
    
    backFirstPage() {
        this.openNewTemplate = false;
        this.openFirstPage = true;
        this.FriendFamily = false;
        this.shopRestaurant = false;
        this.otherName = false;
        this.eventTasting = false;
        this.pressWebsite = false;
        this.hotelWinery = false;
        this.socialMedia = false;
    }
    onDOB(event) {
        this.dateOfBirth = event.target.value;
        if (!this.isAgeValid()) {
           this.showErrorMessageAge = true;
        } 
        else{
          this.showErrorMessageAge = false;  
        }

    }
    isAgeValid() {
        const currentDate = new Date();
        console.log('the current date is' ,currentDate);
        const inputDate = new Date(this.dateOfBirth);
        console.log('The input date is' ,)
        const ageDifference = currentDate.getFullYear() - inputDate.getFullYear();
        console.log('The age difference is more than',ageDifference)

        // Check if the user is 18 years or older
        return ageDifference >= 18;
    }

    onphoneMobile(event) {
        this.phoneMobile = event.target.value;
    }
    onOptValue(event) {
        this.optvalue = event.target.value;
        this.isChecked = event.target.checked;
        console.log('this.isChecked:',this.isChecked);
        if(this.isChecked == true) {
            this.storeOptValue = 'Checked';
            console.log('this.storeOptValue:',this.storeOptValue);
        }
        else {
            this.storeOptValue = 'Unchecked';
            console.log('this.storeOptValue:',this.storeOptValue);
        }
    }
    onZipCode(event) {
        this.zipCode = event.target.value;
    }
    onCountry(event) {
        this.selectedCountry = event.target.value;
    }
    onFriendFamily(event) {
        this.friendFamilyValue = event.target.value;
        this.valueStoreFriendFamily = 'Freind/Family/Colleague';
        this.FriendFamily = true;
        this.shopRestaurant = false;
        this.otherName = false;
        this.eventTasting = false;
        this.pressWebsite = false;
        this.hotelWinery = false;
        this.socialMedia = false;
        console.log('this.valueStoreFriendFamily--->',this.valueStoreFriendFamily);
    }
    onNameFriend(event) {
        this.nameofFriend = event.target.value;
        console.log('this.nameofFriend--->',this.nameofFriend);
    }
    onOther(event) {
        this.otherNamevalue = event.target.value;
        //this.valueStoreOtherName = 'Others';
        this.valueStoreFriendFamily = 'Others';
        this.otherName = true;
        this.shopRestaurant = false;
        this.FriendFamily = false;
        this.eventTasting = false;
        this.pressWebsite = false;
        this.hotelWinery = false;
        this.socialMedia = false;
        console.log('this.valueStoreFriendFamily--->',this.valueStoreFriendFamily);

    }
    onEnterName(event) {
        //this.enterNameOther = event.target.value;
        this.nameofFriend = event.target.value;
        console.log('this.nameofFriend--->',this.nameofFriend);
        
    }
    onShop(event){
        this.shopNamevalue = event.target.value;
        //this.valueStoreShopName = 'Shop/Restaurant';
        this.valueStoreFriendFamily = 'Shop/Restaurant';
        this.shopRestaurant = true;
        this.otherName = false;
        this.FriendFamily = false;
        this.eventTasting = false;
        this.pressWebsite = false;
        this.hotelWinery = false;
        this.socialMedia = false;

        console.log('this.valueStoreFriendFamily--->',this.valueStoreFriendFamily);
    }
    onNameShop(event) {
        this.nameofFriend = event.target.value;
        //this.enterNameShop = event.target.value;
        console.log('this.nameofFriend--->',this.nameofFriend);
    }
    onEventTasting(event) {
        this.eventNameValue = event.target.value;
        this.valueStoreFriendFamily = 'Event/Tasting';
        this.eventTasting = true;
        this.shopRestaurant = false;
        this.otherName = false;
        this.FriendFamily = false; 
        this.pressWebsite = false;
        this.hotelWinery = false;
        this.socialMedia = false;
    }
    onNameofEvent(event) {
        this.nameofFriend = event.target.value;
    }
    onWebsite(event) {
        this.websiteNameValue = event.target.value;
        this.valueStoreFriendFamily = 'Press/Website';
        this.pressWebsite = true;
        this.eventTasting = false;
        this.shopRestaurant = false;
        this.otherName = false;
        this.FriendFamily = false;
        this.hotelWinery = false;
        this.socialMedia = false;
    }
    onNameWebsite(event) {
        this.nameofFriend = event.target.value; 
    }
    onHotel(event) {
        this.hotelNameValue = event.target.value;
        this.valueStoreFriendFamily = 'Hotel/Winery';
        this.pressWebsite = false;
        this.eventTasting = false;
        this.shopRestaurant = false;
        this.otherName = false;
        this.FriendFamily = false;
        this.hotelWinery = true;
        this.socialMedia = false;
    }
    onNameHotel(event) {
        this.nameofFriend = event.target.value; 
    }
    onSocialMedia(event) {

        this.socialMediaNameValue = event.target.value;
        this.valueStoreFriendFamily = 'SocialMedia';
        this.pressWebsite = false;
        this.eventTasting = false;
        this.shopRestaurant = false;
        this.otherName = false;
        this.FriendFamily = false;
        this.hotelWinery = false;
        this.socialMedia = true;
    }
    onNameSocialMedia(event) {
        this.nameofFriend = event.target.value; 
    }
    onSignIn(){

       this.showSpinner();
          
        if(this.storeFirstName != '' && this.storeFirstName != null && this.storeFirstName != undefined
            && this.storeLastName != '' && this.storeLastName != null && this.storeLastName != undefined
            && this.storeEmail != '' && this.storeEmail != null && this.storeEmail != undefined) 
        {
            this.passData = [this.storeFirstName,this.storeLastName,this.storeEmail,this.storePassword,this.dateOfBirth,this.phoneMobile,this.storeOptValue,this.zipCode,this.selectedCountry,this.valueStoreFriendFamily,this.nameofFriend];
            createCommunityUser({personAccountdata : this.passData})
            .then(result => {
                if(result) {
                  
                   this.storeFirstName = '';
                    this.storeLastName = '';
                    this.storeEmail = '';
                   this.hideSpinner();
                    setTimeout(() => {
                        this.backFirstPage();
                    }, 2000);   
                    console.log('the result value is' +result);                 
                }
            }).catch((error) =>{
                    this.hideSpinner();
                    this.storeFirstName = '';
                    this.storeLastName = '';
                    this.storeEmail = '';
                    setTimeout(() => {
                        this.backFirstPage();
                    }, 2000); 
                    
               console.log('the result value is' +this.error);  
            });
            
        }
else {
            this.hideSpinner();
            setTimeout(() => {
                this.backFirstPage();
            }, 2000); 
            this.storeFirstName = '';
            this.storeLastName = '';
            this.storeEmail = '';
            
          
        }
    }
}