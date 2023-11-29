import { LightningElement,track } from 'lwc';
export default class Spinner extends LightningElement {
 @track isLoading = false;

    handleFileUpload() {
        this.isLoading = true;
        console.log('loading ', this.isLoading);
        console.log('File upload started');

        const fileUpload = new Promise((resolve) => {
            resolve('file uploaded successfully');
        });

        fileUpload
            .then((result) => {
                const data = result;
                console.log(JSON.stringify(data));
                setTimeout(() => {
                    this.isLoading = false;
                    console.log('loading of', this.isLoading);
                    console.log('Result is ready');
                }, 2000);
            })
            .catch((error) => {
                console.error('File upload failed:', error);
            });
    }
}