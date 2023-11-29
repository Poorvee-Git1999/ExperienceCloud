trigger CreateRecordBasedOnSubscription on OpportunityLineItem (After insert) {
    
 if(trigger.isAfter && trigger.isInsert)
 {
     if(!CreateRecordBasedOnSubscriptionHandler.firstcall)
     {
         CreateRecordBasedOnSubscriptionHandler.firstcall=true;
     CreateRecordBasedOnSubscriptionHandler.createRecord(trigger.new);
 }
                
 }

}