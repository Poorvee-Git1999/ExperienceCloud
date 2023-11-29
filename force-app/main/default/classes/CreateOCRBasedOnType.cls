public class CreateOCRBasedOnType {

    public static void CreateOCRBasedOnTypeMethod(List<Opportunity> newOppList , Map<Id,Opportunity> oldMapOpportunityData)
    {
        Set<Id> accList = new Set<Id>();
        Map<Id,String> mapofType= new  Map<Id,String>();
        List<OpportunityContactRole> createRecord= new List<OpportunityContactRole>();
        For(Opportunity Opp :newOppList)
        {
          if(!newOppList.isEmpty()) 
          {
             Opportunity oppRecord=oldMapOpportunityData.get(Opp.AccountId);

             if(Opp.AccountId != null && Opp.Type__c!=null && Opp.Type__c != oppRecord.Type__c ) 
             {
              accList.add(Opp.AccountId);
              mapofType.put(opp.id,Opp.Type__c);
             }
               
           }
        }
        List<Contact> lstContact = new  List<Contact>([Select Id ,Type__c,AccountId from Contact where AccountId IN :accList AND Type__c IN :mapofType.values()]);
       Map<String,Contact> mapOfContact= new Map<String,Contact>();
        For(Contact obj : lstContact)
        {
            mapOfContact.put(obj.Type__c,obj);
        }
        for(Opportunity Opp :newOppList)
        {
            if(mapOfContact.containsKey(Opp.Type__c))
            {
              OpportunityContactRole ocr = new OpportunityContactRole();
              ocr.OpportunityId =ocr.id ; // Specify the Opportunity Id or reference
              ocr.ContactId = mapOfContact.get(Opp.Type__c).Id; // Specify the Contact Id or reference
              ocr.Role = 'Decision Maker'; // Specify the role
              ocr.IsPrimary = true; // Set as the primary role if applicable
              createRecord.add(ocr);

                
            }
        }
    If(!createRecord.isEmpty())
    {
        Insert createRecord;
    }
    }
}