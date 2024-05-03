import { ICategory } from "../models/ICategory";
import { RestClient } from "../utilities/RestClient";

export class CategoryService{
    productHttpClient:RestClient|undefined;
    baseURI:string = "http://localhost:3000";

    public constructor(){
        this.productHttpClient = new RestClient(this.baseURI);
    }

    public async getCategories(){
        let result: ICategory[] = [];
        await this.productHttpClient?.getCategories().then((response) => {
        result =
            response !== undefined
            ? JSON.parse(JSON.stringify(response))
            : undefined;
        console.log(result);
    });
    return result;
    }

    public async postContact(contactData:IContact[]){
        return this.productHttpClient?.postContact(contactData);
    }
}