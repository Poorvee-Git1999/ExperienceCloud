public class UpdateCaseNumberonAccountController {
    public static void updateCaseNumberonAccount(List<Case> newData)
    {
       set<id> setOfAccount=new set<id>();
        Map<Id,Account> mapToUpdate = new Map<Id,Account>();
        for(Case objCase:newData)
        {
            setOfAccount.add(objCase.AccountId);
            system.debug('the set of account id is ==>>' +setOfAccount);
}
 Map<id,Account> mapOfAccount =new Map<id,Account>([Select id,Latest_Case_Inserted__c from Account where id =:setOfAccount]);
  system.debug('the map is ==>> ' +mapOfAccount);
    for(Case objCase:newData)
    {
         if(mapOfAccount.containsKey(objCase.AccountId) && (mapOfAccount.get(objCase.AccountId).Latest_Case_Inserted__c !=objCase.CaseNumber))    
         {
             
          mapOfAccount.get(objCase.AccountId).Latest_Case_Inserted__c =objCase.CaseNumber  ;
          mapToUpdate.put( mapOfAccount.get(objCase.AccountId).id,mapOfAccount.get(objCase.AccountId)); 
          system.debug('the updated value of map is ==>>' +mapToUpdate);  
         }
    }
        Update mapToUpdate.values();
    }

}