import axios, { AxiosResponse } from "axios";
import Category from "./Category";
import ProductComponent from "../../components/ProductComponent";
import { ProductService } from "../../services/ProductService";
import { useEffect, useState } from "react";
import IProduct from "../../models/IProduct";
import ICategory from "../../models/ICategories";
import { Link } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const [Categories, setCategories] = useState([]);
  const [Products, setProducts] = useState([]);

  const sortByList = []

  const getCategoryDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/categories`);
      setCategories(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  const getProductDetails = async (category?: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  const onSelectCategories = async (category: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products?category=${category}`
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryDetails();
    getProductDetails();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-1">
          <h4>Category</h4>
          <div>
            <ul className="nav flex-column">
              <div>
                <li className="nav item">
                  <Link to="" onClick={() => getProductDetails()}>
                    All
                  </Link>
                </li>
              </div>
              {Categories.map((category: ICategory, index) => (
                <div>
                  <li className="nav item">
                    <Link
                      to=""
                      onClick={() => onSelectCategories(category.name)}
                    >
                      {category.name}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {Products.map((product: IProduct, index) => (
              <div className="col-md-4">
                <ProductComponent
                  key={product.id}
                  title={product.title}
                  imgSrc={product.imgSrc}
                  maxRetailPrice={product.maxRetailPrice}
                ></ProductComponent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
