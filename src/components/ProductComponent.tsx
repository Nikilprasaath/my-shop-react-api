import { useNavigate } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductComponent:React.FC<IProduct|undefined> = (prd) => {
  const context = useContext(CartContext);
  const navigate = useNavigate();
  const handleAddToCart = (product: IProduct | undefined) => {
    context?.addToCart(product);
  };
  const handleOnClick = (id:any)=>{
    navigate("/products/"+id);
  };
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={prd?.imgSrc} alt="Card image cap" />
        <div className="card-body">
          <button onClick={()=>{handleOnClick(prd?.id)}} type="button" className="btn btn-link"><h5 className="card-title">{prd?.title}</h5></button>
          {/* <Link to={prd !== undefined ? prd?.id.toString():"0"}><h5 className="card-title">{prd?.title}</h5></Link> */}
          <p>Rs.{prd?.maxRetailPrice.toString()}</p>
          <button className="btn btn-primary" onClick={()=>{handleAddToCart(prd)}}>
            Add To Cart
          </button>
        </div>
      </div>
      </div>
  );
};

export default ProductComponent;
