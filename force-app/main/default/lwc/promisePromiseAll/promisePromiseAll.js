import { LightningElement,track } from 'lwc';
export default class PromisePromiseAll extends LightningElement {
// Example of promise.all
 isLoaded =false;
  //  connectedCallback() {
  //   const promise1 = Promise.resolve(3);
  //   const promise2 = 42;
  //   const promise3 = new Promise((resolve, reject) => {
  //     setTimeout(reject, 100, 'foo');
  //   });

  //   Promise.all([promise1, promise2, promise3])
  //     .then((values) => {
  //       console.log('result of promisees in array ' ,values);
  //       // You can now use 'values' as needed within your LWC component.
  //     })
  //     .catch((error) => {
  //       console.error('error is there',error);
  //     });
  // }
handleFileUpload()
{
            this.isLoading = true;
        console.log('loading ' , this.isLoading );
        console.log('File upload started');

     const fileUpload = new Promise((resolve)=>
      {
        resolve('file uploaded successfully');
        }
    
    );

fileUpload
.then((result)=>{
const data = result;
console.log(JSON.stringify(data));
setTimeout(()=> {
this.isLoading = false;
console.log('loading of' , this.isLoading );

console.log('Result is ready' );
},2000);

})
.catch((error) => {
    console.error('File upload failed:', error);
    });

}
}