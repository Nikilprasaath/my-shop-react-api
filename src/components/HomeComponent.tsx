import ProductComponent from "./ProductComponent";
import image1 from '../assets/images/image_1.png';
import image2 from '../assets/images/image_2.png';
import image3 from '../assets/images/image_3.png';

const HomeComponent = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <div className="container-sm">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ProductComponent
            title="Women Dresses"
            thumbnailUrl="https://placehold.co/300x220/ffff00/000?text=WomenDresses"
            price="5000"
          ></ProductComponent>
        </div>
        <div className="col-md-3">
          <ProductComponent
            title="Men Suits"
            thumbnailUrl="https://placehold.co/300x220/ff0000/000?text=MenSuits"
            price="4000"
          ></ProductComponent>
        </div>
        <div className="col-md-3">
          <ProductComponent
            title="Kids Clothes"
            thumbnailUrl="https://placehold.co/300x220/ff00ff/000?text=KidsClothes"
            price="9000"
          ></ProductComponent>
        </div>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">View All</button>
</div>
    </>
  );
};

export default HomeComponent;
