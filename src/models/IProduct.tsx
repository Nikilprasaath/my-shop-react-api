interface IProduct {
  id?: string;
  title: string;
  description?: string;
  category?: string;
  maxRetailPrice: string;
  rating?: string;
  review?: string;
  imgSrc: string;
  reviews?: string[];
}

export default IProduct;
