/*Service to get product details*/
import { IProduct } from "../models/IProduct";
import { RestClient } from "../utilities/RestClient";

export class ProductService {
  productHttpClient: RestClient | undefined;
  baseURI: string = "http://localhost:3000";
  productList: IProduct[] | undefined = [];

  public constructor() {
    this.productHttpClient = new RestClient(this.baseURI);
  }

  public async getProducts() {
    let result: IProduct[] = [];
    await this.productHttpClient?.getProducts().then((response) => {
      result =
        response !== undefined
          ? JSON.parse(JSON.stringify(response))
          : undefined;
      console.log(result);
    });
    return result;
  }

  public async getProduct(id: string) {
    let result: IProduct | undefined = undefined;
    await this.productHttpClient?.getProduct(id).then((response) => {
      result =
        response !== undefined
          ? JSON.parse(JSON.stringify(response))
          : undefined;
      console.log(result);
    });
    return result;
  }

  public async getProductsByLimit(limit: Number) {
    let result: IProduct | undefined = undefined;
    await this.productHttpClient?.getProductsByLimit(limit).then((response) => {
      result =
        response !== undefined
          ? JSON.parse(JSON.stringify(response))
          : undefined;
      console.log(result);
    });
    return result;
  }

  public async getProductsByMaxPrice(sort: String = "maxRetailPrice") {
    let result: IProduct | undefined = undefined;
    await this.productHttpClient
      ?.getProductsByMaxPrice(sort)
      .then((response) => {
        result =
          response !== undefined
            ? JSON.parse(JSON.stringify(response))
            : undefined;
        console.log(result);
      });
    return result;
  }

  public async getProductsByCategory(category: String = "Men") {
    let result: IProduct[] = [];
    await this.productHttpClient
      ?.getProductsByCategory(category)
      .then((response) => {
        result =
          response !== undefined
            ? JSON.parse(JSON.stringify(response))
            : undefined;
        console.log(result);
      });
    return result;
  }

  public async getProductsBySortOrder(sort: String = "maxRetailPrice") {
    let result: IProduct[] = [];
    await this.productHttpClient
      ?.getProductsBySortOrder(sort)
      .then((response) => {
        result =
          response !== undefined
            ? JSON.parse(JSON.stringify(response))
            : undefined;
        console.log(result);
      });
    return result;
  }

  public async getProductsByCategorySortOrder(
    category: String = "Men",
    order: String = "asc",
    sort: String = "maxRetailPrice"
  ) {
    let result: IProduct[] = [];
    await this.productHttpClient
      ?.getProductsByCategorySortOrder(category, order, sort)
      .then((response) => {
        result =
          response !== undefined
            ? JSON.parse(JSON.stringify(response))
            : undefined;
      });
    return result;
  }
}
