public with sharing class fetchAccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccContact(){
        try {
            List<Account> accList = new List<Account>([Select Id, Name,AccountNumber, Phone,Type , (Select Id, LastName ,FirstName from Contacts) from Account LIMIT 10]);
            system.debug('the data is here' +accList);
            return accList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}