export interface IProduct {
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


export interface IReview{
  id:Number;
  name:string;
  email:string;
  phone:string;
  feedback:string;
  productRating:Number;
}