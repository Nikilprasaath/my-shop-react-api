import ProductComponent from "../../components/ProductComponent";

const ProductsList = () => {
  return (
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
  )
}

export default ProductsList