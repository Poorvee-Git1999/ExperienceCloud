public class CreateRecordBasedOnSubscriptionHandler {
         Public static Boolean firstcall=false;

    public static void createRecord(List<OpportunityLineItem> newList)
    {
      

    Set<Id> opportunityids = new Set<Id>();
    Set<Id> productids= new Set<Id>();
       for(OpportunityLineItem obj :newList)
    {
        opportunityids.add(obj.OpportunityId);
        system.debug('the value of set is line 9' +opportunityids);
        productids.add(obj.Product2Id);
         system.debug('the value of set is line 11' +productids);

    }
    List<OpportunityLineItem> newOpportunityLineItems= new List<OpportunityLineItem>();
    List<Opportunity> lstOpportunity =new List<Opportunity>([Select Id  from Opportunity where Id IN :opportunityids]);
    List<Product2> lstProduct = new List<Product2>([Select Id ,Recurring__c,Subscription_term__c from Product2 Where Id IN :productids]);
    Map<Id ,Product2> mapOfProduct =new Map<Id ,Product2>(lstProduct);
    Map<Id ,Opportunity> mapOfOpportunity =new Map<Id ,Opportunity>(lstOpportunity);  
        for(OpportunityLineItem obj :newList)
    {
        if(mapOfProduct.get(obj.Product2Id).Recurring__c==true && mapOfProduct.get(obj.Product2Id).Subscription_term__c != Null  )
        {
            string subterm=mapOfProduct.get(obj.Product2Id).Subscription_term__c;
            system.debug('the value of  isline ' +subterm);

            String[] str = subterm.split(' ');

            integer valueofstring=integer.ValueOf(str[0]);
             system.debug('the value of string is line ' +valueofstring);
             For(integer i=0;i<obj.Quantity;i++)
            {
            system.debug('Inside for');
 
             OpportunityLineItem newLineItem = new OpportunityLineItem(
                OpportunityId = obj.OpportunityId,
                Product2Id = obj.Product2Id,
                Quantity=1,
                TotalPrice=100,
                Start_Date__c = Date.today().addMonths(valueofstring*i),
                End_Date__c = Date.today().addMonths(valueofstring*(i+1))
                // Add other fields as needed
                
            );
                
            newOpportunityLineItems.add(newLineItem);
            }
            if(!newOpportunityLineItems.isEmpty())
            {
              system.debug('Inside if' +newOpportunityLineItems);

                insert newOpportunityLineItems;
            }
        }
    }
    }

}