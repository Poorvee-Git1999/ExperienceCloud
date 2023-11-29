public class CreateContactRelatedToAcoount {
@AuraEnabled
public static List<Contact> createContact(string accountId, string contactName)
{
    List<Contact> conList=new List<Contact>();
if(accountId != Null)
{
    Contact objContact = new Contact();
   objContact.AccountId= accountId;
   objContact.LastName =contactName;
   conList.add(objContact);
}
if(!conList.isEmpty())
{
    insert conList;
    return conList;
}
return Null;
}
}