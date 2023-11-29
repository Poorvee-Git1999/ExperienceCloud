public class SelfRegistrationController {
    @AuraEnabled
 public static string createCommunityUser(List<String> getDataFromUser)
 {

    System.debug('getDataFromUser 6 >> '+ getDataFromUser);
      string firstName='';
      string lastName='';
      string emailAddress='';
      string confirmEmail='';
      string password = '';
      string confirmpassword='';
      string dateofBirth='';
      string phone='';
      string zipCode='';
      string selectedCountry='';
      String UserId='';
      for(Integer i = 0; i <getDataFromUser.size(); i++)

        {

            if(i == 0){

                firstName = getDataFromUser[0];
                system.debug('first name ' +firstName);

            }

            else if(i == 1){

                lastName = getDataFromUser[1];
                system.debug('last name ' +lastName);
            }

            else if(i == 2){

                emailAddress = getDataFromUser[2];
                system.debug('emailAddress  ' +emailAddress);
            }

            else if(i == 3){

                confirmEmail = getDataFromUser[3];
                system.debug('Email name ' +confirmEmail);
            }      
           else if(i == 4){

                password = getDataFromUser[4];
                system.debug('pass ' +password);
            }     
            else if(i == 5){

                confirmpassword = getDataFromUser[5];
                system.debug('Confirm pass name ' +confirmpassword);
            }     
            else if(i == 6){

                dateofBirth = getDataFromUser[6];
               system.debug('birthdate name ' +dateofBirth);
            }     
        }
    list<Account> lstaccount = new List<Account>();
            Id personRECORDTYPEID = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Business Account').getRecordTypeId();

     Account acc =new Account();
     acc.FirstName=firstName;
     acc.LastName=lastName;
     acc.PersonEmail=emailAddress;
     acc.PersonBirthdate= date.valueOf(dateofBirth);
     acc.RecordTypeId=personRECORDTYPEID;
     lstaccount.add(acc);
     If(!lstaccount.isEmpty())
     {
     Insert lstaccount;
     system.debug(lstaccount);
     }
    Profile profileName = [SELECT Name FROM Profile WHERE Name = 'Customer Community User' LIMIT 1];        
             User newUser = new User();
             newUser.Username =emailAddress+'a12b';
             newUser.Email =emailAddress;
             newUser.FirstName = firstName;
             newUser.LastName = lastName;
             newUser.Alias = firstName.substring(0, 2) + lastName.substring(0, 2);
             newUser.CommunityNickname = firstName.substring(0, 1)+lastName.substring(0, 4);
             newUser.LocaleSidKey = 'en_US';
             newUser.ProfileId = profileName.Id;
             newUser.TimeZoneSidKey = 'America/New_York';
             newUser.EmailEncodingKey = 'UTF-8';
             newUser.LanguageLocaleKey = 'en_US';
        
           UserId=Site.createExternalUser(newUser,null , password);
           // return userId;
     return UserId ;
 }
}