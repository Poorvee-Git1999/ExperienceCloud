public class CountOpportunityTriggerHandler {
    public static void countOpportunity(List<id> accountids)
{
    Account acc ;
    List<Account> accList = new List<Account>();
    for(AggregateResult arg:[Select count(id)opp ,AccountId from Opportunity where AccountId IN:accountids GROUP BY AccountId ])
    {
        acc =new Account();
        acc.id=(id)arg.get('AccountId');
        system.debug(' print the account id line 8 ==>' +acc.id);
        acc.Count_Opportunity_Record__c =(decimal)arg.get('opp');
        system.debug('print the count of opportunity line 10 ==>>' + acc.Count_Opportunity_Record__c);
        accList.add(acc);
    }
    If(accList.size() >0)
    {
        Update accList;
    }
}
}