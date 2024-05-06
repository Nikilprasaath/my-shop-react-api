import { useEffect, useState } from "react";
import  { IProduct }  from "../../models/IProduct";
import ProductComponent from "../../components/ProductComponent";
import { ProductService } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

const productService:ProductService = new ProductService();
const HomePage = () => {

  const navigate = useNavigate();
  const [prds, setPrds] = useState<IProduct[]|undefined>([])
  let products:IProduct[]|undefined = [];
  const fetchProducts = async()=>{
    products = await productService.getProductsByLimit(3);
    setPrds(products);
  };
  useEffect(()=>{
    fetchProducts();
  },[]);

  const handleViewAll = ()=>{
    navigate("/products");
  };

  const HomeStyles = {
    carouselImgStyles: {
      // height: '400px',
      // width: '500px',
      padding: '10px',
      margin: '0px 0px 0px 300px',
    },
    carouselTextStyles: {
      right: '15%',
      top: '1.25rem',
      color: '#000',
      padding: '10px 50px',
    },
    carouselBtnStyles: {
      backgroundColor: '#6c757d',
      color: '#fff',
    },
    blockStyling: {
      margin:'50px 10px 0px 10px',
      border:'solid 5px black',
      borderRadius: '10px',
    }
  }
  return (
    <>
      <div className="d-flex flex-column mb-3 justify-content-between">
        <div className="p-2" style={HomeStyles.blockStyling}>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://placehold.co/300x300" className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles}>
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the first slide.</p>
                  <button style={{float:"right"}} className="btn btn-primary" type="button" onClick={handleViewAll}>Browse 1000+ products</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/300x300" className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles} >
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the second slide.</p>
                  <button style={{float:"right"}} className="btn btn-primary" type="button" onClick={handleViewAll}>Browse 1000+ products</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://placehold.co/300x300" className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles}>
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the third slide.</p>
                  <button style={{float:"right"}} className="btn btn-primary" type="button" onClick={handleViewAll}>Browse 1000+ products</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={HomeStyles.carouselBtnStyles}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={HomeStyles.carouselBtnStyles}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="p-2" style={HomeStyles.blockStyling}>
          <div className="row">
          {
              prds?.map((prd, index)=>{
                return(
                  <ProductComponent 
                  key = {index}
                  {...prd}               
                  />
                )
              })
            }
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button" onClick={handleViewAll}>View All</button>
          </div>
        </div>
        <div className="p-2" style={HomeStyles.blockStyling}>
          <div className="d-flex flex-row mb-3 justify-content-between">
            <div className="p-2">
              <h5>FREE SHIPPING & RETURN</h5>
              <p>Free shopping on all orderd over Rs.499</p>
            </div>
            <div className="p-2">
              <h5>MONEY BACK GUARANTEE</h5>
              <p>100% money back gurantee</p>
            </div>
            <div className="p-2">
              <h5>ONLINE SUPPORTED 24/7</h5>
              <p>Reach us out at anytime</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

