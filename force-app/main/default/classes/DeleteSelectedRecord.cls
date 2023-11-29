public class DeleteSelectedRecord {
    @AuraEnabled(cacheable=true)
public static List<Contact>getContactRelatedtoAccount(String Accountid)
{
 List<Contact> lstContact = [Select id,FirstName, LastName, Phone , AccountId from Contact where AccountId=:Accountid  WITH SECURITY_ENFORCED];
 return lstContact;
}
@AuraEnabled(cacheable=true)
public static string deleteContact(string objcontact)
{
  string str ='success';
  List<Contact> lst =[select Id from Contact where Id=:objcontact];
  System.debug(lst);
  delete lst;
  return str;
}
}