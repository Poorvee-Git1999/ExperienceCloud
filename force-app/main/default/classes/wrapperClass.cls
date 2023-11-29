public with sharing class wrapperClass {

    @AuraEnabled
    public static List<wrapperClassDemo> fetchAccountRelatedContact(){
        List<wrapperClassDemo> accountwrapperLst=new List<wrapperClassDemo>();
        List<Account> lst=[select id , Name ,(select id,firstName,lastName from contacts) from Account limit 5];
     for(Account acc :lst)
     {
        accountwrapperLst.add(new wrapperClassDemo(acc,acc.contacts) );
     }
     return accountwrapperLst;
    }








//Defined the wrapper class
    public class wrapperClassDemo
    {
 // Add Properties or Variables to Hold the Required Data
       
    @AuraEnabled public Account accRecord{get;set;}
    @AuraEnabled public List<Contact> lstContact{get;set;}
    
    // Create Constructors to Initialize the Class

        public wrapperClassDemo(Account accRecord ,List<Contact> lstContact) 
        {
            this.accRecord=accRecord;
            this.lstContact=lstContact;
        }
    }
}