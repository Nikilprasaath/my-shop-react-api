import axios, { AxiosResponse } from "axios";
import Categories from "./CategoriesList";
import ProductList from "./ProductsList";
import { ProductService } from "../../services/ProductService";

const ProductsPage = () => {
  let data = new ProductService()
  console.log(data.getProducts())
  

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-1">
          <Categories />
        </div>
        <div className="col">
          <ProductList />
        </div> 
      </div>
    </div>
  );
};

export default ProductsPage;
