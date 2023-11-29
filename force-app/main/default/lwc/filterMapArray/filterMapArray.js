import { LightningElement ,wire,api} from 'lwc';
import method from'@salesforce/apex/filterMap.method';

export default class FilterMapArray extends LightningElement {
contacts=[];
@api recordId;
recordsId;
connectedCallback() {
//    this.recordsId=this.recordId;
    console.log('record is ' ,this.recordId);
}
@wire(method, { accountId: '$recordId' })
wiredContacts({ error, data }) {
        if (data) {

            this.contacts = data;
            console.log('the contact is' +JSON.stringify(this.contacts));
            const emailToFind = 'test@gmail.com';
            const foundContact = this.contacts.find(contact => contact.Email === emailToFind);
            console.log('found contact' ,foundContact);
            //const countLenght = data.lenght;
            //console.log('the lenght is' ,countLenght);
            const foundContacts = this.contacts.filter(contact => contact.Name.startsWith('test'));
            console.log('found contact' ,JSON.stringify(foundContacts));
            for(var i =0;i<foundContacts.length;i++)
            {
             console.log('Name: ' ,foundContacts[i].Name);

            }
            foundContacts.forEach(contact => {
               console.log('the value of contact naes are',contact.Name)
            });
            //Acess the first object in the array
            console.log('Name: ' + foundContacts[0].Name);

            //const value=foundContacts.['Name'];
             //Object.keys(foundContacts);
             //console.log('found contact id' ,JSON.stringify((Object.keys(foundContacts))));

            const contactNames = this.contacts.map(contact => `${contact.Name} `);
             console.log('found contact' ,JSON.stringify(contactNames));

        } else if (error) {
            console.error('Error fetching contacts:', error);
        }
}



}