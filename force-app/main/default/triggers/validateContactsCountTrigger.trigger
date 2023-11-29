trigger validateContactsCountTrigger on Contact(before insert,before update) {
    If(trigger.isBefore && (trigger.isInsert || trigger.isUpdate))
       {
          
               ValidateContactsCountController.contactCount(trigger.new);
           }
       
        If(trigger.isBefore && (trigger.isInsert || trigger.isUpdate))
       {
          
               DuplicateDetectController.checkDuplicateContact(trigger.new);
           }
    

}