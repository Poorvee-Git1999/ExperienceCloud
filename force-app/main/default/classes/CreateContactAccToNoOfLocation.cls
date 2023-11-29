public class CreateContactAccToNoOfLocation {
    public static void createContactbasedOnAccount(List<Account> newLst)
    {
     	Map<Id,Decimal> mapCount =new Map<Id,Decimal>(); 
        List<Contact> contactlist = new List<Contact>();

  //	NumberofLocations__c        
        for(Account acc :newLst)
    {
        mapCount.put(acc.id,acc.NumberofLocations__c);
    }
    if(!mapCount.isEmpty())
    {
       for(Id id  :mapCount.keySet())
       {
        for(integer count=1;count<mapCount.get(id);count++)
           
        {
            Contact con = new Contact();
            con.LastName='poorvee' + count;
            con.Email='test@gmail.com';
            con.AccountId=id;
            contactlist.add(con);
        }
       }
       insert contactlist;
    }
    }
}