
import React, {createContext, useContext, useReducer, useState, useEffect } from 'react';

import { getProducts, noProducts } from './../services/ProductsServices.js';

export const CartContext = createContext();

const [products, setProducts] = useState([]);

useEffect(() => {
    setProducts(getProducts());
});


const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });


    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
          {children}
        </Cart.Provider>
      );
};


export const CartState = () => {
    return useContext(CartContext);
};
    

export default Context;





/*
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });

  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }
  
  /** */
function clearCart() {
    return setItems(noProducts);
}
  
return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, clearCart}}>
      {props.children}
    </CartContext.Provider>
);
