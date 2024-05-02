import { useEffect, useState } from "react";
import { CategoryService } from "../../services/CategoryService";
import { Link } from "react-router-dom";
import { ICategory } from "../../models/ICategory";

interface ISideBarSelection {
  callback: any;
}

const categoryService: CategoryService = new CategoryService();

const Category: React.FC<ISideBarSelection> = ({ callback }) => {
  const [categories, setCategories] = useState([]);

  const getCategoryDetails = async () => {
    const getCategories = await categoryService.getCategories();
    setCategories(getCategories);
  };

  const handleCallBack = () => {
    callback()
  }

  useEffect(() => {
    getCategoryDetails();
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: 280 }}
      >
        <span className="fs-4">Categories</span>
        <hr />
        <ul className="nav nav-link link-dark">
          <li key="All">
            <Link to="/products" onClick={() => handleCallBack()} className="nav-link link-dark">
              All
            </Link>
          </li>
          {categories.map((category: ICategory, index) => (
            <li key={category.name}>
              <Link to={`/products?category=${category.name?.toLowerCase()}`} onClick={() => handleCallBack()} className="nav-link link-dark">
                {category.name}
              </Link>
            </li>
          ))}
          
        </ul>
      </div>
    </>
  );
};

export default Category;
