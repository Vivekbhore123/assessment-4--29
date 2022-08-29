import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { EmpData,UserType } from '../models/users.model';

export class DataService implements InMemoryDbService{

    constructor(){
 
    }   
    // createDb(): {} | Observable<{}> | Promise<{}> {
    //     throw new Error('Method not implemented.');
    // }
    createDb() {
       return {
        employees: [
            { code:1,fname:"tom",mname:"mdtom",lname:"ljsjd",gender:"male",userType:"Contractual",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"",age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24",email:"v@gmail.com",contact:8888888888 },
            { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:"Permenant",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24",email:"v@gmail.com",contact:8888888888  },
            { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:"Permenant",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24",email:"v@gmail.com",contact:8888888888  },
            { code:3,fname:"shyam",mname:"shell",lname:"jquery",gender:"female",userType:"Contractual",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" ,email:"v@gmail.com",contact:8888888888 },
            { code:4,fname:"seeta",mname:"toor",lname:"json",gender:"male",userType:"Permenant",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  ,email:"v@gmail.com",contact:8888888888},
            { code:5,fname:"geeta",mname:"moore",lname:"xml",gender:"female",userType:"Contractual",salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:""  ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24",email:"v@gmail.com",contact:8888888888 },
            { code:6,fname:"dell",mname:"pqr",lname:"lambda",gender:"male",userType:"Contractual",salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" ,email:"v@gmail.com",contact:8888888888},
            { code:7,fname:"bill",mname:"xyz",lname:"pixel",gender:"male",userType:"Contractual",salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" ,email:"v@gmail.com",contact:8888888888},
        ],
        products: [
            {code:1,name:"car1",description:"car",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
            {code:2,name:"car1",description:"tv",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
            {code:3,name:"car1",description:"watch",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
            {code:4,name:"car1",description:"cooler",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
            {code:5,name:"car1",description:"oven",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
            {code:6,name:"car1",description:"heater",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
         ],
         users:[
            { username:"admin@gmail.com",password:"admin"},
          { username:"one@gmail.com",password:"one"},
          { username:"two@gmail.com",password:"two"}
         ]
    };    
    }

}
//mytest
// difference between observable and promise;
//observable returns data in the form of chunks while promises does not

//Observable and Observer or Subscriber
//Observable- Asynchronous pattern which emit the data for us. We have Obervable and observer.
//Observer observes the observable.
//Observable can have multiple observer or subscriber.
//When a subscriber subscribes to an observable , the subscriber specify a callback function.
// The subscriber call back function is notified as and when the observables
// emit items or data or notifications.
//In the call back function we define or write the line of code to handle the data or item
// recieved from observables

