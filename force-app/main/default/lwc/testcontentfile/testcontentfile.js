import { LightningElement,wire } from 'lwc';
import fetchExperiences from '@salesforce/apex/ExperienceData.fetch';

export default class Testcontentfile extends LightningElement {
photoUrl;

@wire(fetchExperiences)
fetchExperiences({ data, error }){
    if (data) {
        console.log('OUTPUT : 10',data);
        this.photoUrl = data; 
        
     }else if(error){
        console.log('ERROR ----- ', JSON.stringify(error));
    }
}

}