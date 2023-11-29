public class ExperienceData {
 @AuraEnabled(cacheable=true) 
public static string fetch()
{
    Set<Id> experienceSetId = new  Set<Id>();
    List<Experience__c> lst =new  List<Experience__c>([Select Id,	Is_Featured__c,Sub_Title__c,Type__c, Location__r.Country__c,Location__r.City__c  , Location__r.State__c	,Experience_Start_Date__c,	Name from Experience__c where Is_Featured__c =true ]);
    system.debug('lst-->' +lst);
    For(Experience__c obj :lst)
    {
      experienceSetId.add(obj.id);  
    }
    
    List<ContentDocumentLink> lstlink= new List<ContentDocumentLink>([Select Id, ContentDocumentId, ContentDocument.FileExtension, ContentDocument.LatestPublishedVersion.Title, ContentDocument.LatestPublishedVersion.VersionData ,LinkedEntityId From ContentDocumentLink Where LinkedEntityId IN :experienceSetId]);
    system.debug('the contentDocument --' +lstlink);
    String base64Data;
    if(!lstlink.isEmpty()) {
        ContentDocumentLink cdl = lstlink[0];
        base64Data = 'data:image/' + cdl.ContentDocument.FileExtension + ';charset=utf-8;base64, ';
        base64Data += EncodingUtil.base64Encode(cdl.ContentDocument.LatestPublishedVersion.VersionData);
    }
   

    List<ContentVersion> lstversion= new List<ContentVersion>([SELECT Id, Title, VersionData, ContentDocumentId FROM ContentVersion WHERE ContentDocumentId =: lstlink[0].ContentDocumentId]);
    system.debug('the contentversion --' +lstversion);
 
 return base64Data;
}
}