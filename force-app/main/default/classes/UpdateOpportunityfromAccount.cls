public class UpdateOpportunityfromAccount {
    public static void updateallOpportunity(List<Account> lstAccount)

    {
        Set<Id> accountids= new Set<Id>();
        for(Account acc :lstAccount)
        {
           accountids.add(acc.id);    
        }
        
}

}