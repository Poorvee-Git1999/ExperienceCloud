public with sharing class BatchClassExample2 implements Database.Batchable<sObject> {
    public Database.QueryLocator start(Database.BatchableContext Bc)
    {
        return Database.getQueryLocator('Select id ,StageName,OwnerId, Owner.isActive from Opportunity');
    }
    public void execute(Database.BatchableContext Bc, list<Opportunity> lst)
    {
        User userid=[select Id , ProfileId from User where  Profile.Name = 'System Administrator' LIMIT 1];
        List<Task> tasks = new List<Task>(); 
        for(Opportunity obj :lst)
        {
            If(obj.Owner.isActive)
            {
            tasks.add(new task(whatid=obj.id,OwnerId = obj.OwnerId));
            }
            else
            {
                tasks.add(new task(whatid=obj.id,OwnerId = userid.id));

            }



        }

    }
    public void finish(Database.BatchableContext Bc)
    {
        system.debug('Batchclass2 finidh method called');
    }
}