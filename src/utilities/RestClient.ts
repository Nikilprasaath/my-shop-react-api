import axios, { AxiosResponse } from "axios";
import IProduct from "../models/IProduct";
 
export class RestClient {
  private baseURI: string = "";
 
  public constructor(baseURI: string) {
    this.baseURI = baseURI;
  }
 
  //To get product details
  //http://localhost:3000/products
  public async getProducts():Promise<IProduct[]> {
    try {
      await axios
        .get(`${this.baseURI}/products`)
        .then((res: AxiosResponse<IProduct>) => {
          // console.log(res.data)
          let data = res.data;
          return data
        })
        .catch((err: any) => {
          console.log(err);
        });
        // return data
      //console.log(result);
    } catch (exe) {
      console.log(exe);
    }
    return [];
  }
 
 //To limit only 3 products for Homepage
  //http://localhost:3000/products?_limit=3
  public async getProductsByLimit(limit: Number) {
    try {
      await axios
        .get(`${this.baseURI}/products?_limit=${limit}`)
        .then((res: AxiosResponse<IProduct>) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
 
      //console.log(result);
    } catch (exe) {
      console.log(exe);
    }
  }
 
    //To get product details
  //http://localhost:3000/products/1
  public async getProduct(id:Number){
    try {
      await axios
        .get(`${this.baseURI}/products/${id}`)
        .then((res: AxiosResponse<IProduct>) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
  }
 
    //To sort products based on maxRetailPrice in ascending order
  //http://localhost:3000/products?_sort=maxRetailPrice&_order=asc
  public async getProductsByMaxPrice(sort:String = "maxRetailPrice"){
    try {
      await axios
        .get(`${this.baseURI}/products?_sort=${sort}`)
        .then((res: AxiosResponse<IProduct>) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
  }
 
  //To sort products based on maxRetailPrice in ascending order
  //http://localhost:3000/products?_sort=maxRetailPrice&_order=asc
  public async getProductsBySortOrder(order:String="asc", sort:String = "maxRetailPrice"){
    try {
      await axios
        .get(`${this.baseURI}/products?_sort=${sort}&_order=${order}`)
        .then((res: AxiosResponse<IProduct>) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
  }
 
  /*
    When sorting by price (desc) is performed in Products of specific category
  http://localhost:3000/products?category=Men&_sort=maxRetailPrice&_order=desc
    When sorting by price (asc) is performed in Products of specific category
  http://localhost:3000/products?category=Women&_sort=maxRetailPrice&_order=asc
  */
  public async getProductsByCategorySortOrder(category:String="Men", order:String="asc", sort:String="maxRetailPrice"){
    try {
      await axios
        .get(`${this.baseURI}/products?category=${category}&_sort=${order}&_order=${sort}`)
        .then((res: AxiosResponse<IProduct>) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
  }
 
  //To display categories in sidebar
  //http://localhost:3000/categories
  public async getCategories(){
    try{
        await axios.get(`${this.baseURI}/categories`)
        .then((res:AxiosResponse<IProduct>)=>{
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(ex){
        console.log(ex);
    }
  }
 
  //To submit contact form data
  //http://localhost:3000/contact
//   public async postContact(contactInfo:IContact){
//     try{
//         await axios.post(`${this.baseURI}/contact`,contactInfo)
//         .then((res:AxiosResponse<IContact>)=>{
//             if(res.status === 201){
//                 //
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }
//     catch(ex){
//         console.log(ex);
//     }
//   }
}