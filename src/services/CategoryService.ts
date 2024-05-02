import { RestClient } from "../utilities/RestClient";

export class CategoryService{
    productHttpClient:RestClient|undefined;
    baseURI:string = "http://localhost:3000";

    public constructor(){
        this.productHttpClient = new RestClient(this.baseURI);
    }

    public async getCategories(){
        return this.productHttpClient?.getCategories();
    }

    public async postContact(contactData:IContact){
        return this.productHttpClient?.postContact(contactData);
    }
}