public class CreateUpdateRecord {
    @AuraEnabled
    public static List<Account> createRecord(String accountName , String accountIndustry)
    {
    List<Account> accList = new List<Account>();
    if(accountName != NULL)
    {
        Account objAccount = new Account();
        objAccount.Name=accountName;
        objAccount.Industry=accountIndustry;
        accList.add(objAccount);
    }
    if(!accList.isEmpty())
    {
        insert accList;
        return accList;
    }
    return NULL;
    }
 // update 
  @AuraEnabled
public static List<Account> updateRecord(String recordids,String accountName , String accountIndustry)
    {
    List<Account> accList = new List<Account>();
    if(recordids != NULL)
    {
        Account objAccount = new Account();
             objAccount.ID =recordids;
        objAccount.Name=accountName;
        objAccount.Industry=accountIndustry;
        accList.add(objAccount);
    }
    if(!accList.isEmpty())
    {
        update accList;
        return accList;
    }
    return NULL;
    }

}