public class SearchAccount {
@AuraEnabled
public static List<Account> getAccount(String searchKey)
{
 String AccountName  ='%' + searchKey +'%';
 List<Account> relatedAccount =[Select Name from Account where Name LIKE :AccountName];
 return relatedAccount;
}

}