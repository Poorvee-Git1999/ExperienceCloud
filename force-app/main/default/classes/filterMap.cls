public class filterMap {
    @AuraEnabled(cacheable=true)
    public static List<Contact> method( String accountId)
    {
        List<Contact> lstContact = [Select Id ,Name,Phone,Email ,AccountId,Account.Name from Contact where AccountId =:accountId];
        system.debug('lst of contact' +lstContact);
        return lstContact;
    }

}