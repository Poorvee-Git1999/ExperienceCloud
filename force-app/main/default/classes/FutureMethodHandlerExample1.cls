public with sharing class FutureMethodHandlerExample1 {
    public static void FutureMethodExample1(List<User> newList) {
     Profile salesProfile= [Select Id,Name from Profile where Name ='Custom: Sales Profile' LIMIT 1 ];
    List<PermissionSetAssignment> permissionSetList = new List<PermissionSetAssignment>();
    PermissionSet permissionSets  = [SELECT Id FROM PermissionSet WHERE Name = 'Sales User Permissions' LIMIT 1];

    System.debug('lst of profile' +salesProfile);
    set<Id> userprofileid= new set<id>();
    set<Id> userid = new set<Id>();
    for(User objUser :newList)
    {
        system.debug('lst of user' +newList);
        if(objUser.ProfileId == salesProfile.id)
        {
        userid.add(objUser.id);
        system.debug('set of userid' +userid);
        }
    }
    List<PermissionSetAssignment> lstcurrentUserPerSet = new List<PermissionSetAssignment>();
    system.debug('##lstcurrentUserPerSet' + lstcurrentUserPerSet);
     for(ID User:userid)
     {
        if(salesProfile!= null)
        {
            PermissionSetAssignment obj=new PermissionSetAssignment();
            obj.AssigneeId=User;
            obj.PermissionSetId=permissionSets.id;
            lstcurrentUserPerSet.add(obj);
        }
     }
    if(!lstcurrentUserPerSet.isEmpty())
    {
       insert lstcurrentUserPerSet;
    }
    }
}