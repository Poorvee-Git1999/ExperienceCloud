public class ExportDataInCSVController {
@AuraEnabled
public static list<Account> fetchAccount()
{
    List<Account> lstAccount =[Select Id,Name,PersonEmail,Industry from Account];
    if(!lstAccount.isEmpty())
    {
        return lstAccount;
    }
     return lstAccount;
}
}