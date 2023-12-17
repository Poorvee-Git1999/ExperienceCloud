public with sharing class BatchClassExample1 implements Database.Batchable<sObject> {
    

    public Database.QueryLocator start(Database.BatchableContext BC)
    {
       return Database.getQueryLocator('Select id ,Name ,Account.Name, 	Description ,Account.Description, AccountId from Contact where AccountId != Null');
    }
    public void execute(Database.BatchableContext BC, List<Contact> lstContact)
    {
        List<Contact> lstToBeUpdated =new  List<Contact>();
         for(Contact obj :lstContact)
         {
            lstToBeUpdated.add( new Contact(Description=obj.Account.Description));
         }
         if(!lstToBeUpdated.isEmpty())
         {
            Update lstToBeUpdated;
         }
    }
    public void finish(Database.BatchableContext BC)
    {
        system.debug('finish method called........');
    }
}  