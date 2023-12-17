public with sharing class FutureMethodHandlerExample2 {
    @future
    public static void FutureMethodExample2(Set<Id> UserIdSet) {
     Group gruplst =[Select Id ,Name from Group where Name ='All Users'];
     List<User> newUser = new List<User>([Select id from User where id = :UserIdSet]);
     system.debug('newUser-->>' +newUser);
     system.debug('gruplst -->>' +gruplst);
     List<GroupMember> grupMember= new List<GroupMember>();
     for(User us:newUser)
     {
        grupMember.add( new GroupMember(GroupId=gruplst.id,
                                        UserOrGroupId =us.id));
     }
     If(!grupMember.isEmpty())
     {
        insert grupMember;
     }




    }
}