public class CheckPalindrome {

    public static Boolean checkPalindomeString(String inputString)
    {
        string reversedString='';
        list<string> stringSplit = inputString.split('');
        System.debug('line 6 split the string ==>> ' +stringSplit);
        for(integer i=stringSplit.size()-1;i>=0;i--)
        {
            reversedString=reversedString+stringSplit[i];
            system.debug('line 10 reversed string ==>> ' +reversedString);
        }
        if(inputString.equalsIgnoreCase(reversedString))

  {
      return true;
  }       
  else {
      return false;
  }
    }

}