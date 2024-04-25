/*Service to get product details*/
import { RestClient } from "../utilities/RestClient"
import IProduct from "../models/IProduct";

export class ProductService{
    productHttpClient:RestClient|undefined;
    baseURI:string = "http://localhost:3000";

    public constructor(){
        this.productHttpClient = new RestClient(this.baseURI);
    }
 
    public async getProducts():Promise<IProduct[]|undefined>{
        console.log(await this.productHttpClient?.getProducts())
        return this.productHttpClient?.getProducts();
    }
 
    public async getProduct(id:Number){
        return await this.productHttpClient?.getProduct(id);
    }
 
    public async getProductsByLimit(limit:Number){
        return await this.productHttpClient?.getProductsByLimit(limit);
    }
 
    public async getProductsByMaxPrice(sort:String = "maxRetailPrice"){
        return await this.productHttpClient?.getProductsByMaxPrice(sort);
    }
 
    public async getProductsBySortOrder(order:String="asc", sort:String = "maxRetailPrice"){
        return await this.productHttpClient?.getProductsBySortOrder(order,sort);
    }
   
    public async getProductsByCategorySortOrder(category:String="Men", order:String="asc", sort:String="maxRetailPrice"){
        return await this.productHttpClient?.getProductsByCategorySortOrder(category,order,sort);
    }
}