public with sharing class wrapperClass {









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