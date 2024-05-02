import Category from "./Category";
import ProductComponent from "../../components/ProductComponent";
import { ProductService } from "../../services/ProductService";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/IProduct";
import { ICategory } from "../../models/ICategory";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const productService:ProductService = new ProductService();
const ProductsPage: React.FC = () => {
  const [Products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  var category = searchParams.get("category");
  let order = searchParams.get("_order");

  if (category == "men"){
      console.log("comparison")
      category = "Men";
    }
    else if (category == "women"){
      category = "Women";
    }
    else if (category == "kids"){
      category = "Kids";
    }

  const sortOrder: string[] = [
    "Latest",
    "Best Sellers",
    "Featured Products",
    "Price - Low to High",
    "Price - High to Low",
  ];


  const getProductDetails = async (_category?: string, _order?: string) => {
    var products: IProduct
    if (_category){
      category = _category
    }
    if (_order){
      order = _order
    }
    if (_category == "All"){
      category = null
    }

    console.log(category)
    console.log(order)
    if (category && order) {
      products = await productService.getProductsByCategorySortOrder(category, order, "maxRetailPrice");
    }
    else if (category){
      console.log("hello2")
      console.log(category)
      var products: IProduct | undefined = await productService.getProductsByCategory(category)
      console.log(products)
    }
    else if (order){
      var products: IProduct | undefined = await productService.getProductsBySortOrder(order)
      console.log(products)
    }
    else{
      var products: ICategory | undefined = await productService.getProducts()
    }
    
    setProducts(products)
  };

  const handleCategory = (category:string)=>{
    console.log("Received Category "+category);
    getProductDetails(category);
   }
 
   
  const navigation = useNavigate()
   

   const handleSort = ()=>{
    const order = event?.target.value;
    var categoryUrl = undefined

    if (category) {
      categoryUrl = "category="+ category+"&"
    }
    else{
      categoryUrl = ""
    }
    
    if (order == "Price - Low to High"){
      console.log(category)
      console.log("asc")
      navigation("/products?"+categoryUrl+"_sort=maxRetailPrice&_order=asc")
      getProductDetails(category, "asc")
       
    }
    else if (order == "Price - High to Low"){
      console.log(category)
      navigation("/products?"+categoryUrl+"_sort=maxRetailPrice&_order=dsc")
      getProductDetails(category, "dsc")
      
    }
   }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Products</h2>
        </div>
        <div className="row">
          <div className="col-2">
            <Category callback={handleCategory}></Category>
          </div>
          <div className="col">
            <div className="row">
              <div className="col" style={{ float: "left" }}>
                <h4>{Products?.length} products found</h4>
              </div>
              <div className="col">
                <select onChange={handleSort} style={{ float: "right" }}>
                  {sortOrder.map((sort) => {
                    return (
                      <option key={sort} value={sort}>
                        {sort}
                      </option>
                    );
                  })}
                </select>
                <div></div>
              </div>
            </div>
            <div className="row">
              {Products.map((product: IProduct, index) => (
                
                  <ProductComponent {...product}></ProductComponent>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
