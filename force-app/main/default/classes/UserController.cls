public with sharing class UserController {
    @AuraEnabled(cacheable=true)
    public static User getCurrentUser() {
        return [SELECT Id, Name, Email FROM User WHERE Id = :UserInfo.getUserId()];
    }
}