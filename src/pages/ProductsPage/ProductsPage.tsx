import Category from "./Category";
import ProductComponent from "../../components/ProductComponent";
import { ProductService } from "../../services/ProductService";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/IProduct";
import { ICategory } from "../../models/ICategory";
import { useNavigate, useSearchParams } from "react-router-dom";

const productService: ProductService = new ProductService();
const ProductsPage: React.FC = () => {
  const [Products, setProducts] = useState<IProduct[]>([]);
  const [sortBy, setSortBy] = useState("Latest")
  const [searchParams] = useSearchParams();
  var category = searchParams.get("category");
  let order = searchParams.get("_order");

  if (category == "men") {
    category = "Men";
  } else if (category == "women") {
    category = "Women";
  } else if (category == "kids") {
    category = "Kids";
  }

  const sortOrder: string[] = [
    "Latest",
    "Best Sellers",
    "Featured Products",
    "Price - Low to High",
    "Price - High to Low",
  ];

  const getProductDetails = async () => {
    var products: IProduct[] = []
    if (category && order) {
      products = await productService.getProductsByCategorySortOrder(
        category,
        order,
        "maxRetailPrice"
      );
    } else if (category) {
      products =
        await productService.getProductsByCategory(category);
      ;
    } else if (order) {
      products =
        await productService.getProductsBySortOrder(order);
     
    } else {
      products = await productService.getProducts();
    }

    setProducts(products);
  };

  const handleCategory = (category: string) => {
    console.log("Received Category " + category);
    setSortBy("Latest")
  };

  const navigation = useNavigate();

  const handleSort = () => {
    const order = event?.target.value;
    setSortBy(order)

    var categoryUrl = undefined;

    if (category) {
      categoryUrl = "category=" + category.toLowerCase() + "&";
    } else {
      categoryUrl = "";
    }

    if (order == "Price - Low to High") {
      console.log(category);
      console.log("asc");
      navigation(
        "/products?" + categoryUrl + "_sort=maxRetailPrice&_order=asc"
      );
    } else if (order == "Price - High to Low") {
      console.log(category);
      navigation(
        "/products?" + categoryUrl + "_sort=maxRetailPrice&_order=dsc"
      );
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [category, order]);

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
                <select value={sortBy} onChange={handleSort} style={{ float: "right" }}>
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
                <ProductComponent key={index} {...product}></ProductComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
