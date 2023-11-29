trigger CreatefollowUpTaskforCaseEscaltionTrigger on Case (after insert ,after Update) {
    if(trigger.isAfter)
    {
    if(trigger.isInsert)
    {
        CreatefollowUpTaskforCaseEscaltion.CreatefollowUpTaskforCaseEscaltionMethod(trigger.new,trigger.oldMap);
    }
    if(trigger.isUpdate)
    {
     CreatefollowUpTaskforCaseEscaltion.CreatefollowUpTaskforCaseEscaltionMethod(trigger.new,trigger.oldMap);
  
    }
}}