public class ErrorOnInsertionOLR {
    public static void ErrorOnInsertionOLRMethod(List<OpportunityLineItem> newLstOLR)
    {
        set<Id> opportunityIds=new Set<Id>();
        set<Id> productIds=new Set<Id>();
        //List<OpportunityLineItem>
        for(OpportunityLineItem obj :newLstOLR)
        {
            opportunityIds.add(obj.OpportunityId);
            productIds.add(obj.Product2Id);
        }
       Map<Id,Opportunity> mapOppoertunity=new Map<Id,Opportunity>([Select Id,	Product_Family__c from Opportunity where Id IN:opportunityIds]);
       Map<Id,Product2> mapProduct= new Map<Id,Product2>([Select Id,Family from Product2 where Id IN:productIds]);
        for(OpportunityLineItem obj :newLstOLR)
        {
            if(mapOppoertunity.containsKey(obj.OpportunityId) && mapProduct.containsKey(obj.Product2Id) && mapOppoertunity.get(obj.OpportunityId).Product_Family__c !=mapProduct.get(obj.Product2Id).Family)
            {
                obj.addError('not same');
            }
                
               }
               
    }

}