public class CreateLeaveRequestRecord {
@AuraEnabled
public static list<Leave_Request__c> createRecord(Date fromDate,Date toDate)
{
    List<Leave_Request__c> lstToUpdate= new  List<Leave_Request__c>();
    Leave_Request__c obj=new Leave_Request__c();
    obj.From_Date__c	=fromDate;
    obj.To_Date__c=toDate;
   lstToUpdate.add(obj);
   if(!lstToUpdate.isEmpty())
   {
       insert lstToUpdate;
       return lstToUpdate;
   }    
 return null;
}

}