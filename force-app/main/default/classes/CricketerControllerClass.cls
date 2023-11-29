public class CricketerControllerClass {
     @AuraEnabled(cacheable=true)
    public static List<Cricketer__c> getCricketer(String natinality)
    {
        List<Cricketer__c> lst = [Select Name, Age__c,Run__c ,Nationality__c ,Image_URL__c from Cricketer__c Where Nationality__c =:natinality  ];
        return  lst;
    }

}