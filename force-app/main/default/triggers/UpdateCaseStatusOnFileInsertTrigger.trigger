trigger UpdateCaseStatusOnFileInsertTrigger on ContentDocument (after insert) {
    



    // List to hold Case Ids that need to be updated

    Set<Id> caseIdsToUpdate = new Set<Id>();
     //set<id> idOfcaseobject=  SELECT LinkedEntityId FROM ContentDocumentLink WHERE ContentDocumentId=:
    string contentdocumentid;

    // Iterate through the inserted ContentDocuments

    for (ContentDocument file : Trigger.new) {

        // Check if the file is associated with a Case
        contentdocumentid=file.id;   
          system.debug(file.id);
        /*if (file.LinkedEntityId != null && file.LinkedEntityId.getSObjectType() == Case.SObjectType) {

            // Add the Case Id to the set

            caseIdsToUpdate.add(file.LinkedEntityId);

        }*/

    }

     List<ContentDocumentLink> idOfcaseobject= new List<ContentDocumentLink>( [SELECT LinkedEntityId FROM ContentDocumentLink WHERE ContentDocumentId=:contentdocumentid ]);
     system.debug('the list id is' +idOfcaseobject);
    // Fetch the relevant Case records

    List<Case> casesToUpdate = [SELECT Id, Status FROM Case WHERE Id IN :caseIdsToUpdate];


    // Update the Case Status field

    for (Case caseRecord : casesToUpdate) {

        // Update the Case Status field as per your requirements

        caseRecord.Status = 'New Status'; // Replace 'New Status' with the desired value


        // Add any additional updates or conditions here


    }


    // Perform the Case updates

    update casesToUpdate;

}