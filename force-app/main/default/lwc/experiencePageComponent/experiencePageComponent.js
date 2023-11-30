import { LightningElement ,wire} from 'lwc';
import myResource from '@salesforce/resourceUrl/ExperiencePage';
import fetchExperienceData from '@salesforce/apex/ExperienceData.fetch';

export default class ExperiencePageComponent extends LightningElement {
    companyLogoUrl = myResource;
    experienceData;

    @wire(fetchExperienceData)
    wiredExperienceData({ error, data }) {
        if (data) {
            this.experienceData = data;
            console.log('the data is ' ,this.experienceData)
        } else if (error) {
            console.error('Error fetching experience data', error);
        }
    }

}