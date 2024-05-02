import axios, { AxiosResponse } from "axios";
import { IProduct } from "../models/IProduct";
import { ICategory } from "../models/ICategory";

export class RestClient {
  private baseURI: string = "";

  public constructor(baseURI: string) {
    this.baseURI = baseURI;
  }

  //To get product details
  //http://localhost:3000/products 
  public async getProducts():Promise<IProduct[]|undefined> {
    let product:IProduct[]|undefined = [];
    try {
      await axios
        .get(`${this.baseURI}/products`)
        .then((res: AxiosResponse<IProduct[]>) => {
          product = res.data;
        })
        .catch((err: any) => {
          console.log(err);
        });
      //console.log(result);
    } catch (exe) {
      console.log(exe);
    }
    return product;
  }

 //To limit only 3 products for Homepage
  //http://localhost:3000/products?_limit=3
  public async getProductsByLimit(limit: Number):Promise<IProduct[]|undefined> {
    let product:IProduct[]|undefined = [];
    try {
      await axios
        .get(`${this.baseURI}/products?_limit=${limit}`)
        .then((res: AxiosResponse<IProduct[]>) => {
          product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      //console.log(result);
    } catch (exe) {
      console.log(exe);
    }
    return product;
  }

    //To get product details
  //http://localhost:3000/products/1
  public async getProduct(id:string):Promise<IProduct|undefined>{
    let product:IProduct|undefined = undefined;
    try {
      await axios
        .get(`${this.baseURI}/products/${id}`)
        .then((res: AxiosResponse<IProduct>) => {
          //console.log(res.data);
          product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
    return product;
  }

    //To sort products based on maxRetailPrice in ascending order
  //http://localhost:3000/products?_sort=maxRetailPrice&_order=asc
  public async getProductsByMaxPrice(sort:String = "maxRetailPrice"):Promise<IProduct[]|undefined>{
    let product:IProduct[]|undefined = [];
    try {
      await axios
        .get(`${this.baseURI}/products?_sort=${sort}`)
        .then((res: AxiosResponse<IProduct[]>) => {
          product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
    return product;
  }

  public async getProductsByCategory(category:String = "Men"):Promise<IProduct[]|undefined>{
    let product:IProduct[]|undefined = [];
    try {
      await axios
        .get(`${this.baseURI}/products?category=${category}`)
        .then((res: AxiosResponse<IProduct[]>) => {
          product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
    return product;
  }

  //To sort products based on maxRetailPrice in ascending order
  //http://localhost:3000/products?_sort=maxRetailPrice&_order=asc
  public async getProductsBySortOrder(sort:String = "maxRetailPrice"):Promise<IProduct[]|undefined>{
    let product:IProduct[]|undefined = [];
    try {
      await axios
        //.get(`${this.baseURI}/products?_sort=${sort}&_order=${order}`)
        .get(`${this.baseURI}/products?_sort=${sort}`)
        .then((res: AxiosResponse<IProduct[]>) => {
          product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
return product;
  }

  /*
    When sorting by price (desc) is performed in Products of specific category
	http://localhost:3000/products?category=Men&_sort=maxRetailPrice&_order=desc
    When sorting by price (asc) is performed in Products of specific category
	http://localhost:3000/products?category=Women&_sort=maxRetailPrice&_order=asc
  */
  public async getProductsByCategorySortOrder(ctgry:String="Men", order:String="asc", sort:String="maxRetailPrice"):Promise<IProduct|undefined>{
    let products:IProduct[]|undefined = [];
    try {
      await axios
        .get(`${this.baseURI}/products?category=${ctgry}&_sort=${sort}&_order=${order}`)
        .then((res: AxiosResponse<IProduct[]>) => {
          products = res.data;
          console.log("Men"+products);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (exe) {
      console.log(exe);
    }
    return products;
  }

  //To display categories in sidebar
  //http://localhost:3000/categories
  public async getCategories():Promise<ICategory|undefined>{
    let category:ICategory[]|undefined = [];
    try{
        await axios.get(`${this.baseURI}/categories`)
        .then((res:AxiosResponse<ICategory[]>)=>{
            category = res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(ex){
        console.log(ex);
    }
    return category;
  }

  //To submit contact form data
  //http://localhost:3000/contact
  public async postContact(contactInfo:IContact){
    try{
        await axios.post(`${this.baseURI}/contact`,contactInfo)
        .then((res:AxiosResponse<IContact>)=>{
            if(res.status === 201){
                //
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(ex){
        console.log(ex);
    }
  }
}
