public with sharing class ExperienceData{



    //public class ExperienceDatafetch {
      @AuraEnabled(cacheable=true) 
      public static List<ExperienceDataWrapper> fetch() {
          Set<Id> experienceSetId = new Set<Id>();
          List<ExperienceDataWrapper> result = new List<ExperienceDataWrapper>();
          Map<Id, Experience__c> experienceMap = new Map<Id, Experience__c>();

          List<Experience__c> experienceList = new List<Experience__c>([
              SELECT Id, Is_Featured__c, Sub_Title__c, Type__c, 
                  Location__r.Country__c, Location__r.City__c, Location__r.State__c, 
                  Experience_Start_Date__c, Name 
              FROM Experience__c 
              WHERE Is_Featured__c = true
          ]);
    
          system.debug('experienceList-->' + experienceList);
    
          for (Experience__c experience : experienceList) {
              experienceSetId.add(experience.id);  
              system.debug('experienceSetId-->' + experienceSetId);
              experienceMap.put(experience.id,experience);
              system.debug('value in map is -->' +experienceMap);

          }
    
          List<ContentDocumentLink> documentLinks = new List<ContentDocumentLink>([
              SELECT Id, ContentDocumentId, ContentDocument.FileExtension, 
                  ContentDocument.LatestPublishedVersion.Title, 
                  ContentDocument.LatestPublishedVersion.VersionData, LinkedEntityId 
              FROM ContentDocumentLink 
              WHERE LinkedEntityId IN :experienceSetId
          ]);
    
          system.debug('documentLinks-->' + documentLinks);
    
          for (ContentDocumentLink documentLink : documentLinks) {
              String base64Data;
              if (documentLinks.size() > 0) {
                  base64Data = 'data:image/' + documentLink.ContentDocument.FileExtension + ';charset=utf-8;base64, ';
                  base64Data += EncodingUtil.base64Encode(documentLink.ContentDocument.LatestPublishedVersion.VersionData);
              }
              //LinkedEntityIds.add(documentLink.LinkedEntityId);
              Experience__c experience = experienceMap.get(documentLink.LinkedEntityId);
             if(experience != null)
             {
              result.add(new ExperienceDataWrapper(base64Data, experience));
              system.debug('result-->' + result);
             }
          }
    
          
    
          
    
          return result;
      }
    
    
    public class ExperienceDataWrapper{
          @AuraEnabled  public String base64Data { get; set; }
           @AuraEnabled public Experience__c experience { get; set; }
      
        public ExperienceDataWrapper(String base64Data, Experience__c experience) {
            this.base64Data = base64Data;
            this.experience = experience;
        }
      }
    }