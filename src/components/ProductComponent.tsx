interface ProductProps{
  title: string;
  thumbnailUrl: string;
  price: string;
}
const ProductComponent:React.FC<ProductProps> = (props) => {
  return (
    <div className="card">
    <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
        />
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: Rs {props.price}</li>
    </ul>
    <div className="card-body">
        <a href="#" className="btn btn-primary">
           Add to Cart
        </a>
    </div>
</div>
  );
};

export default ProductComponent;
