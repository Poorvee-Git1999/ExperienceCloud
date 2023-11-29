public class DuplicateDetectController {
    public static void checkDuplicateContact(List<Contact> newData)
        
    {
        Map<String,Contact> mapOfEmail= new Map<String,Contact>();
        Map<String,Contact> mapOfPhone= new Map<String,Contact>();
        For(Contact objContact :newData)
        {
         mapOfEmail.put(objContact.Email,objContact);
         System.debug('the Email is in map==>>' +mapOfEmail);  
            
         mapOfPhone.put(objContact.Phone,objContact);
         System.debug('the Phone is in map==>>' +mapOfPhone);    
        }
        
        

    }

}