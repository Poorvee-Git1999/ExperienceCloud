public with sharing class FetchListOfContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getListOfContact() {
     List<Contact> contactList = [Select id ,Name,Email from Contact WITH SECURITY_ENFORCED LIMIT 10];
     return contactList;
    }
}