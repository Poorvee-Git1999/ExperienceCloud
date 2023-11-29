public class CreateAssetonInsertOLR {
    public static void method(List<OpportunityLineItem> newLstOLR)
    {
        set<Id> opportunityIds=new Set<Id>();
       set<Id> accIds=new Set<Id>();
        //List<OpportunityLineItem>
        for(OpportunityLineItem obj :newLstOLR)
        {
            opportunityIds.add(obj.OpportunityId);
            //productIds.add(obj.Product2Id);
        }
        List<Opportunity> lstOpportunity =[select AccountId ,Id ,Account.Name from Opportunity where ID IN :opportunityIds];
         List<Asset> lstass=new List<Asset>();
        For(Opportunity obj :lstOpportunity)
        {
            if(obj.AccountId !=null)
            {
                Asset acc=new Asset();
                acc.id=obj.AccountId;
                acc.Name=obj.Account.Name;
                lstass.add(acc);
                
            }
        }
        if(!lstass.isEmpty())
        {
            insert lstass;
        }
     
    }

}