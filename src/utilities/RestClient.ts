import axios, { AxiosResponse } from "axios";

/*
To list products
	http://localhost:3000/products/

    To get product details
	http://localhost:3000/products/1 

To limit only 3 products for Homepage
	http://localhost:3000/products?_limit=3
To sort products based on maxRetailPrice in ascending order
	http://localhost:3000/products?_sort=maxRetailPrice&_order=asc
To sort products based on maxRetailPrice in descending order
	http://localhost:3000/products?_sort=maxRetailPrice&_order=desc
When sorting by price (desc) is performed in Products of specific category
	http://localhost:3000/products?category=Men&_sort=maxRetailPrice&_order=desc
When sorting by price (asc) is performed in Products of specific category
	http://localhost:3000/products?category=Women&_sort=maxRetailPrice&_order=asc
To display categories in sidebar
	http://localhost:3000/categories

To submit contact form data
	http://localhost:3000/contact

*/

export class RestClient {
  private baseURI: string = "";

  public constructor(baseURI: string) {
    this.baseURI = baseURI;
  }

  public async getProducts() {
    let result: IProduct | null = null;
    try {
      await axios
        .get(`${this.baseURI}/products`)
        .then((res: AxiosResponse<IProduct>) => {
          result = res.data;
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
      //console.log(result);
      return result;
    } catch (exe) {
      console.log(exe);
    }
  }

  public async getProduct(id: Number) {
    let result: IProduct | null = null;
    try {
      await axios
        .get(`${this.baseURI}/products/${id}`)
        .then((res: AxiosResponse<IProduct>) => {
          result = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      //console.log(result);
      return result;
    } catch (exe) {
      console.log(exe);
    }
  }
}
