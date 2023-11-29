import { LightningElement ,track} from 'lwc';
import changePassword from '@salesforce/apex/UserLogin.changePassword';
import isGuest from "@salesforce/user/isGuest";
import basePath from "@salesforce/community/basePath";
export default class PasswordPageExperienceSite extends LightningElement {
@track currentPassword;
@track newPassword;
@track reEnterNewPassword;
@track data;
onCurrentPasswordChange(event)
{
this.currentPassword=event.target.value;
console.log('current password is' ,this.currentPassword);
}
onNewPasswordChange(event)
{
this.newPassword=event.target.value;
console.log('new password is' ,this.newPassword);

}
onReenterPasswordChange(event)
{
this.reEnterNewPassword=event.target.value;
console.log('Re enter password is' ,this.reEnterNewPassword);

}
onSavePassword(event)
{
console.log('method called');
      changePassword({currentPassword :this.currentPassword,newPassword:this.newPassword,reEnterNewPassword: this.reEnterNewPassword})
     
      .then((result) => {
      this.data = result;
      console.log(' the url is ' +JSON.stringify(this.data));
      const sitePrefix = basePath.replace(/\/s$/i, ""); // site prefix is the site base path without the trailing "/s"

      var url = sitePrefix + "/secur/logout.jsp";

      window.open(url,'_self');

     // var url = result;
     // window.open(url,'_self');
    })
    .catch((error) => {
      this.error = error;
      console.log('the value is of error is' +JSON.stringify(this.error));
    });
}

}