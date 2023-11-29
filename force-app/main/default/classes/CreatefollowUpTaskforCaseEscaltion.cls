public class CreatefollowUpTaskforCaseEscaltion {
    public static void CreatefollowUpTaskforCaseEscaltionMethod(List<Case> newListCase ,Map<Id,Case> oldMapCase)
    {
        try{
        Set<Id> accIds = new Set<Id>();
        Map<Id,Contact> mapOfContact= new Map<Id,Contact>();
        List<Task> newTask= new List<Task>();
        if(!newListCase.isEmpty())
        {
           for(Case obj :newListCase ) 
           { 
               Case caseRecord=oldMapCase.get(obj.Id);

               if(obj.Escalated_Required__c ==true && obj.AccountId!= null && obj.Escalated_Required__c != caseRecord.Escalated_Required__c)
               {
                  accIds.add(obj.AccountId);
                   
               }
                   
           }
            
        }
    
       List<Contact> lstContacts=[Select Id , AccountId ,Primary_Contact__c from Contact where Primary_Contact__c=true AND AccountId IN :accIds];
        For(Contact obj :lstContacts)
        {
            mapOfContact.put(obj.AccountId,obj);
        }
        for(Case obj :newListCase)
        {
            if(mapOfContact.containsKey(obj.AccountId))
            {
                Contact conObj=mapOfContact.get(obj.AccountId);
                Task tsk=new Task();
                tsk.WhoId=conObj.id;
                tsk.Subject='follow up';
                tsk.Status='Completed';
                tsk.Priority='Low';
                 newTask.add(tsk);
            }
        }
    if(!newTask.isEmpty())
    {
        Insert newTask;
    }
        }
         catch (System.NullPointerException e) {
             system.debug('error is' +e);
         }

    }
    
    

}