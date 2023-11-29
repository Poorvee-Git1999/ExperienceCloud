public class ValidateContactsCountController {
    
  public static void contactCount(List<Contact> newData)
  {
   Set<Id> setofaccountIds = new Set<Id>(); 
    Map<Id ,Integer> countContactMap = new  Map<Id ,Integer>();
      for(Contact objContact :newData)
      {
          //if(objContact.AccountId != NULL)
          //{
              setofaccountIds.add(objContact.AccountId); 
              system.debug('the set of account is value is ==>> ' +setofaccountIds);
          //}
      }
   List<AggregateResult> result = [SELECT COUNT(Id) countContact , AccountId FROM Contact WHERE AccountId =: setofaccountIds GROUP BY AccountId]; 
   system.debug('The count of contact is ==>> ' +result);
     for(AggregateResult arg :result) 
     {
         countContactMap.put((Id)arg.get('AccountId') , (Integer)arg.get('countContact'));
         system.debug('the map value is ==>> ' +countContactMap);
     }
      
     for(Contact obj :newData)
     {
         if(countContactMap.containsKey(obj.AccountId) && countContactMap.get(obj.AccountId)>=2)
         {
             obj.addError(' can not insert the contact');
         }
        
             
     }
  }
    
    
  
}