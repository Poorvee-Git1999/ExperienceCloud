public with sharing class WeatherAPIWrapper {
    public static WeatherAPIWrapperClass wrapperApiMethod(String cityName) {
        String apiKey = '043398657b8db4894d58efe71d8cea76';

        String endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
        endpoint += 'q=' + cityName;
        endpoint += '&units=metric';
        endpoint += '&APPID=' + apiKey;
        System.debug('Endpoint: ' + endpoint);

        // Create an HTTP request object
        HttpRequest request = new HttpRequest();

        // Set the HTTP method (GET, POST, etc.)
        request.setMethod('GET');
        request.setEndpoint(endpoint);

        // Create an HTTP object to send the request
        Http http = new Http();

        // Send the HTTP request and get the response
        HttpResponse response = http.send(request);
        System.debug('Response Body: ' + response.getBody());

        WeatherAPIWrapperClass weatherObj = new WeatherAPIWrapperClass();

        if (response.getStatusCode() == 200) {
            Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

            weatherObj.city = String.valueOf(result.get('name'));

            Map<String, Object> mainResult = (Map<String, Object>) result.get('main');
            weatherObj.temperature = String.valueOf(mainResult.get('temp'));
            weatherObj.pressure = String.valueOf(mainResult.get('pressure'));
            weatherObj.mintemperature = String.valueOf(mainResult.get('temp_min'));
            weatherObj.maxtemperature = String.valueOf(mainResult.get('temp_max'));
        }

        return weatherObj;
    }

    // Wrapper class inside the class
    public class WeatherAPIWrapperClass {
        @AuraEnabled public String temperature {get; set;}
        @AuraEnabled public String city {get; set;}
        @AuraEnabled public String pressure {get; set;}
        @AuraEnabled public String mintemperature {get; set;}
        @AuraEnabled public String maxtemperature {get; set;}
        @AuraEnabled public String humidity {get; set;}
    }
}
