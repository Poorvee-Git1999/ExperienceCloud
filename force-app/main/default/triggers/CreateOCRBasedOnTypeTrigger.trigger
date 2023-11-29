trigger CreateOCRBasedOnTypeTrigger on Opportunity (after update) {
    If(trigger.isAfter && trigger.isUpdate)
    {
        CreateOCRBasedOnType.CreateOCRBasedOnTypeMethod(trigger.new , trigger.oldMap);
    }

}