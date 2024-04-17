/*Service to get product details*/
import { RestClient } from "../utilities/RestClient"

export class ProductService{
    productHttpClient:RestClient|undefined;
    baseURI:string = "http://localhost:3000";

    public constructor(){
        this.productHttpClient = new RestClient(this.baseURI);
    }

    public async getProducts(){
        let result = await this.productHttpClient?.getProducts();
        return result;
    }
}
