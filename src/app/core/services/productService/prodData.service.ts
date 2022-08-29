import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ProductData } from '../../models/product.model';
export class ProductDataService implements InMemoryDbService{

    constructor(){
 
    }   
   
    createDb() {
       return {
        products: [
           {code:1,name:"car",description:"car",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
           {code:2,name:"car",description:"tv",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Fashion",color:"blue",price:3000},
           {code:3,name:"car",description:"watch",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
           {code:4,name:"car",description:"cooler",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Fashion",color:"blue",price:3000},
           {code:5,name:"car",description:"oven",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
           {code:6,name:"car",description:"heater",inStockQuantity:4,imageURL:"https://m.media-amazon.com/images/I/81NJ3EVshNL._AC_UY327_FMwebp_QL65_.jpg",category:"Electronics",color:"blue",price:3000},
        ]
    };    
    }

}
