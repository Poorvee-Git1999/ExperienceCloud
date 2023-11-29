public class UserLogin {
    @AuraEnabled
    public static string doLogin(String username, String password) {
        try {
            system.debug('the username is ' + username);
            system.debug('the username is ' + password);

            //String startUrl = System.currentPageReference().getParameters().get('startURL');
            //system.debug('the url is ' + startUrl);
            
            // Check if username and password are not null before proceeding
            if(String.isNotBlank(username) && String.isNotBlank(password)) {
                system.debug('inside the username and password');
                ApexPages.PageReference pageRef = Site.login(username, password, 'https://d5i00000dwxgfeal-dev-ed.develop.my.site.com/ExperienceCloud/s/welcomepage');
                if (pageRef != null) {
                    system.debug('the pageRef is '); 
                   // system.debug('the pageRef url is ' + pageRef.getUrl()); 
                    return pageRef.getUrl();
                } else {
                    throw new CalloutException('Login failed. Invalid credentials or other issue.');
                }
            } else {
                throw new CalloutException('Username and/or password are empty.');
            }
        } catch (Exception e) {
            system.debug('Exception in doLogin: ' + e.getMessage());
            throw new AuraHandledException('An error occurred during login.');
        }
    }
    /*@AuraEnabled
    public static string getFirstName()
    {
     String result = UserInfo.getLastName();
     system.debug('the name of user ' +result);
     return result;
    }*/
 
    @AuraEnabled
    public static boolean isUserNameExist(String username) {
        try {
            system.debug('user name exist method runs');
            List<User> userList = [SELECT Id, Name FROM User WHERE Username = :username];
            system.debug('the user list is ' + userList);
            return !userList.isEmpty();
        } catch (Exception e) {
            system.debug('Exception in isUserNameExist: ' + e.getMessage());
            throw new AuraHandledException('An error occurred while checking username existence.');
        }
    }
        @AuraEnabled
    public static string getFirstName()
    {
     String result = UserInfo.getLastName();
     system.debug('the name of user ' +result);
     return result;
    }
    
    @AuraEnabled(cacheable=true)
    public static User getCurrentUserInfo()
    {
        
     User currentUser = [SELECT Id, Firstname, Lastname    ,Username, Email, ProfileId
                    FROM User
                    WHERE Id = :UserInfo.getUserId()];
     string userdata = currentUser.Email;
     return currentUser  ;               
    }
    @AuraEnabled
    public static string changePassword(string currentPassword,string newPassword,string reEnterNewPassword)
    {
     try {
            system.debug('the username is ' +currentPassword );
            system.debug('the newPassword is ' + newPassword);
            system.debug('the reEnterNewPassword is ' + reEnterNewPassword);

            //String startUrl = System.currentPageReference().getParameters().get('startURL');
            //system.debug('the url is ' + startUrl);
            
            // Check if username and password are not null before proceeding
            if(String.isNotBlank(currentPassword) && String.isNotBlank(newPassword) && String.isNotBlank(reEnterNewPassword)) {
                system.debug('inside the username and password');

               // ApexPages.PageReference pageRef = changePassword(currentPassword, newPassword, reEnterNewPassword);
                ApexPages.PageReference pageRef = Site.changePassword(newPassword, reEnterNewPassword,currentPassword);

                if (pageRef != null) {
                    system.debug('the pageRef is '); 
                  // system.debug('the pageRef url is ' + pageRef.getUrl()); 
                    return pageRef.getUrl();
                   
                } else {
                    throw new CalloutException('Password changed failed');
                }
            } else {
                throw new CalloutException('oldPassword and/or Newpassword are empty.');
            }
        } catch (Exception e) {
            system.debug('Exception in changePassword: ' + e.getMessage());
            throw new AuraHandledException('An error occurred during change password.');
        }
    
    }
}