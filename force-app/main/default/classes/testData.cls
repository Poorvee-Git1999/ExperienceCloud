public class testData {
    public class ExperienceWrapper {
        @AuraEnabled public Experience__c experience;
        @AuraEnabled public ContentVersion contentVersion;
    }

    @AuraEnabled
    public static List<ExperienceWrapper> fetch() {
       Set<Id> experienceSetId = new  Set<Id>();
    List<Experience__c> lst =new  List<Experience__c>([Select Id,	Is_Featured__c,Sub_Title__c,Type__c, Location__r.Country__c,Location__r.City__c  , Location__r.State__c	,Experience_Start_Date__c,	Name from Experience__c where Is_Featured__c =true ]);
    system.debug('lst-->' +lst);
    For(Experience__c obj :lst)
    {
      experienceSetId.add(obj.id);  
    }
    
    List<ContentDocumentLink> lstlink= new List<ContentDocumentLink>([Select Id, ContentDocumentId, LinkedEntityId From ContentDocumentLink Where LinkedEntityId IN :experienceSetId]);
    system.debug('the contentDocument --' +lstlink);
    List<ContentVersion> lstversion= new List<ContentVersion>([SELECT Id, Title, VersionData, ContentDocumentId FROM ContentVersion WHERE ContentDocumentId =: lstlink[0].ContentDocumentId]);
    system.debug('the contentversion --' +lstversion);
 

        List<ExperienceWrapper> result = new List<ExperienceWrapper>();

        for (Experience__c obj : lst) {
            ExperienceWrapper wrapper = new ExperienceWrapper();
            wrapper.experience = obj;

            // Find the corresponding ContentVersion
            for (ContentDocumentLink link : lstlink) {
                if (link.LinkedEntityId == obj.Id) {
                    for (ContentVersion version : lstversion) {
                        if (version.ContentDocumentId == link.ContentDocumentId) {
                            wrapper.contentVersion = version;
                            break;
                        }
                    }
                    break;
                }
            }

            result.add(wrapper);
        }

        return result;
    }
}