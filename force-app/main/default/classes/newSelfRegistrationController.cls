public class newSelfRegistrationController {




    @AuraEnabled

    public static String createCommunityUser(List<String>personAccountdata) {

        system.debug('passingData'+personAccountdata);

 

        String firstName='';

        String lastName='';

        String emailId='';

        String password='';

        String dateofBirth='';

        String mobilePhone='';

        String optNotification='';

        String zipCode='';

        String country='';

        String radioValue='';

        String radioTextValue='';

        Boolean boolOptValue = false;

        date valueDOB;

        

        Id personRECORDTYPEID = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Person Account').getRecordTypeId();
      System.debug('personRECORDTYPEID =>>' +personRECORDTYPEID);
 
        try{
 

        for(Integer i=0;i<personAccountdata.size();i++){

            if(i==0) {

                firstName = personAccountdata[0];
                System.debug('firstName =>>' +firstName);

            }

            else if (i==1){

                lastName = personAccountdata[1];
                 System.debug('lastName =>>' +lastName);

            }

            else if (i==2){

                emailId = personAccountdata[2];
                System.debug('emailId =>>' +emailId);

            }

            else if (i==3){

                password = personAccountdata[3];
                System.debug('password =>>' +password);

            }

            else if (i==4){

                dateofBirth = personAccountdata[4];

                valueDOB = date.valueOf(dateofBirth);
                System.debug('valueDOB =>>' +valueDOB);

            }

            else if (i==5){

                mobilePhone = personAccountdata[5];
                System.debug('mobilePhone =>>' +mobilePhone);

            }

            else if (i==6){

                optNotification = personAccountdata[6];
                System.debug('optNotification =>>' +optNotification);

                if(optNotification == 'Checked') {

                    boolOptValue = true;

                }

                else{

                    boolOptValue = false;

                }

            }

            else if (i==7){

                zipCode = personAccountdata[7];
                System.debug('zipCode =>>' +zipCode);

            }

            else if (i==8){

                country = personAccountdata[8];
                System.debug('country =>>' +country);

            }

            else if (i==9){

                radioValue = personAccountdata[9];
                System.debug('radioValue =>>' +radioValue);

            }

            else if (i==10){

                radioTextValue = personAccountdata[10];
                System.debug('radioTextValue =>>' +radioTextValue);

            }

        }

 

            List<Account> lstAccount = new List<Account>();

            

 

            Account objAcc = new Account();

            objAcc.FirstName = firstName;

            objAcc.LastName = lastName;

            objAcc.PersonEmail = emailId;

            objAcc.PersonMobilePhone = mobilePhone;

            objAcc.PersonBirthdate = valueDOB;

            objAcc.BillingPostalCode = zipCode;

            objAcc.BillingCountry = country;

            objAcc.Referral_Source_c__c = radioValue;

            objAcc.Referral_Note__c = radioTextValue;

            objAcc.Opt_for_text_notification__c = boolOptValue;

            objAcc.RecordTypeId = personRECORDTYPEID;

            

            lstAccount.add(ObjAcc);
            system.debug('the lstofaccount is' +lstAccount);

            if(!lstAccount.isEmpty()) {

                insert lstAccount;
                

            }

 Integer minRange = 1000;
Integer maxRange = 9999;
string usernames;
Integer randomNum = (Integer)(Math.random() * (maxRange - minRange + 1)) + minRange;

System.debug('Random 4-digit number: ' + randomNum);

               
            usernames=emailId+randomNum;
             User newUser = new User();

             newUser.Username =emailId+randomNum;
             
             newUser.Email =emailId;

             newUser.FirstName = firstName;

             newUser.LastName = lastName;

             //newUser.Alias = firstName.substring(0, 2) + lastName.substring(0, 2);

             newUser.CommunityNickname = firstName.substring(0, 1)+lastName.substring(0, 4)+ randomNum;

             //newUser.LocaleSidKey = 'en_US';
            //Profile usrProfileId = [SELECT Id From Profile WHERE Name =: 'Customer Community Plus User Custom' LIMIT 1];
            //System.debug('usrProfileId'+usrProfileId);
             //newUser.ProfileId = usrProfileId.Id;

             //newUser.TimeZoneSidKey = 'America/New_York';

             //newUser.EmailEncodingKey = 'UTF-8';

             //newUser.LanguageLocaleKey = 'en_US';

            String UserId= Site.createExternalUser(newUser,objAcc.Id,password);    
            system.debug('the value of site user ' +UserId);
            if (userId != null) {
              newSelfRegistrationController.doLogin(usernames,password);
              newSelfRegistrationController.mailer(emailId);
               system.debug('the user is not null'); 
            /*if (password != null && password.length() > 1) {
                pexPages.PageReference pageRef = Site.login(username, password, '/s');
                if(pageRef != null) return pageRef.getUrl();
                }*/
            }
             return 'newUser';
        }
        catch(exception e) {
           throw new AuraHandledException(e.getMessage());
        }

    }

     @AuraEnabled
        public static void mailer(String emailAddress){
        try {
            String[] toAddresses = emailAddress.split(':', 0);
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            system.debug('send mail method id called');       
            mail.setSenderDisplayName('LWC Site');// Cgeck in code ,changed the name displayed
            mail.setSubject('Welcome to our community !');
            mail.setPlainTextBody('Your Url to access is: '+'	https://d5i00000dwxgfeal-dev-ed.develop.my.site.com/LearnLWR');
            mail.setToAddresses(toAddresses);
            mail.setSaveAsActivity(false);

            Messaging.sendEmail( new List<Messaging.SingleEmailMessage>{mail} );

        } catch (Exception e) {            
            throw new AuraHandledException(e.getMessage());
        }
        }
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
}