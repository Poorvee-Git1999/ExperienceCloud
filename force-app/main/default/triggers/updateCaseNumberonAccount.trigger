trigger updateCaseNumberonAccount on Case (after insert) {
    if(trigger.isInsert)
    {
        UpdateCaseNumberonAccountController.updateCaseNumberonAccount(trigger.new);
    }

}