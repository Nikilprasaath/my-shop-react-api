import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductService } from "../../services/ProductService";
import { IProduct } from "../../models/IProduct";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import { CartContext } from "../../context/CartContext";

const productService: ProductService = new ProductService();
const ProductDetailsComponent: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(CartContext);
  let product: IProduct | undefined;
  const [prd, setProduct] = useState<IProduct | undefined>();

  const handleBackButton = () => {
    navigate("/products");
  };

  const handleAddToCart = (product: IProduct | undefined) => {
    context?.addToCart(product);
  };

  const fetchProduct = async (id: string | undefined) => {
    product =
      id !== undefined ? await productService.getProduct(id) : undefined;
    product !== undefined ? setProduct(product) : null;
    console.log(product);
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <p>
              <button
                type="button"
                onClick={handleBackButton}
                className="btn btn-outline-dark"
              >
                &lt;&lt;
              </button>
            </p>
          </div>
          <div className="row">
            <div className="col">
              <img
                data-testid="productImage"
                src={prd?.imgSrc}
                className="img-fluid"
                alt="Product Image"
              />
            </div>
            <div className="col">
              <div>
                <h5>{prd?.title}</h5>
                <p>{prd?.description}</p>
                <p>
                  Rs. {prd?.maxRetailPrice && prd?.maxRetailPrice.toString()}
                </p>
                <p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={()=>handleAddToCart(prd)}                  
                  >
                    Add To Cart
                  </button>
                </p>
                <div>
                  <p>
                    Total Reviews:&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {prd?.reviews && prd?.reviews.length}
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-primary float-right"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewFormModal"
                    >
                      Write a Review
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <Reviews reviews={prd && prd.reviews}></Reviews>
            </div>

            <div
              className="modal fade"
              id="reviewFormModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <ReviewForm></ReviewForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
