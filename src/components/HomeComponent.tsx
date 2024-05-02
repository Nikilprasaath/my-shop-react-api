import ProductComponent from "./ProductComponent";
import image1 from '../assets/images/image_1.png';
import image2 from '../assets/images/image_2.png';
import image3 from '../assets/images/image_3.png';
const HomeComponent = () => {
  const HomeStyles = {
    carouselImgStyles: {
      height: '400px',
      width: '500px',
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
      <h1>Home Page</h1>
      <div className="d-flex flex-column mb-3 justify-content-between">
        <div className="p-2" style={HomeStyles.blockStyling}>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles}>
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles} >
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block" alt="..." style={HomeStyles.carouselImgStyles} />
                <div className="carousel-caption d-none d-md-block" style={HomeStyles.carouselTextStyles}>
                  <h5 className="text-end">Same Day Delivery !</h5>
                  <p className="text-end">Some representative placeholder content for the third slide.</p>
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
            <div className="col-md-4">
              <ProductComponent
                title="Women Dresses"
                thumbnailUrl="https://placehold.co/300x100/ffff00/000?text=WomenDresses"
                price="5000"
              ></ProductComponent>
            </div>
            <div className="col-md-4">
              <ProductComponent
                title="Men Suits"
                thumbnailUrl="https://placehold.co/300x100/ff0000/000?text=MenSuits"
                price="4000"
              ></ProductComponent>
            </div>
            <div className="col-md-4">
              <ProductComponent
                title="Kids Clothes"
                thumbnailUrl="https://placehold.co/300x100/ff00ff/000?text=KidsClothes"
                price="9000"
              ></ProductComponent>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">View All</button>
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

export default HomeComponent;
