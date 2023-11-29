import { LightningElement ,track} from 'lwc';
import doLogin from '@salesforce/apex/UserLogin.doLogin';
import isUserNameExist from '@salesforce/apex/UserLogin.isUserNameExist';
export default class LoginPage extends LightningElement {
storeEmailAddress;
storePassword;
@track data;
@track error;
onEmailChange(event)
{
  this.storeEmailAddress=event.target.value;
  console.log('Entered Email is' +this.storeEmailAddress); 
}
onPasswordChange(event)
{
  this.storePassword=event.target.value;
  console.log('Entered password is' +this.storePassword); 


}


onLogin(event)
{
  console.log('method called');
      doLogin({username :this.storeEmailAddress,password:this.storePassword})
     
      .then((result) => {
      this.data = result;
      console.log(' the url is ' +JSON.stringify(this.data));
      var url = result;
      window.open(url,'_self');
    })
    .catch((error) => {
      this.error = error;
      console.log('the value is of error is' +JSON.stringify(this.error));
    });

    /* isUserNameExist({username :this.storeEmailAddres})
    {
      .then((result) => {
      this.data = result;
      console.log('valess' +this.data);
    })
    .catch((error) => {
      this.error = error;
      console.log('the value is of error is' +this.error);
    
    });*/
}
}