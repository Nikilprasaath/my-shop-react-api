import { useEffect } from "react"
import { ProductService } from "../services/ProductService";

const ProductsComponent = () => {
const productService:ProductService = new ProductService();

useEffect(()=>{
    let res = productService.getProducts();
    console.log(res);
},[]); 

  return (
    <div className="col-md-3">
        ProductsComponent
    </div>
  )
}

export default ProductsComponent