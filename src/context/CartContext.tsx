import React, { useState } from "react";
import { IProduct } from "../models/IProduct";

interface ICartContext{
    products:IProduct[];
    addToCart:(product:IProduct|undefined)=> IProduct[];
}

export const CartContext = React.createContext<ICartContext | null>(null);

export const CartContextProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const addToCart = (product:IProduct|undefined)=>{
        product && setProducts([...products, product]);
        console.log("Product added to cart " + product?.title);
        return products;
    };

    return(
        <CartContext.Provider value={{products:products, addToCart:addToCart}}>
            {children}
        </CartContext.Provider>
    )
};