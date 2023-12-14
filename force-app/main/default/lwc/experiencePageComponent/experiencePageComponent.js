import { LightningElement ,wire,track} from 'lwc';
import myResource from '@salesforce/resourceUrl/ExperiencePage';
import fetchExperienceData from '@salesforce/apex/ExperienceData.fetch';

export default class ExperiencePageComponent extends LightningElement {
    companyLogoUrl = myResource;
    experienceData;
   @track experienceArray=[];
    @wire(fetchExperienceData)
    wiredExperienceData({ error, data }) {
        if (data) {
            this.experienceData = data;
            this.experienceData.forEach(experiences => {
                if (experiences.experience.Is_Featured__c == true) {
                    console.log('hello');
                    this.experienceArray.push(experiences);
                    console.log('his.experienceArray----->',this.experienceArray);
                    console.log('the balue of is ' ,JSON.parse(JSON.stringify(this.experienceArray)));
                }
            });
            console.log('the data is ' ,this.experienceData)
        } else if (error) {
            console.error('Error fetching experience data', error);
        }
    }

}