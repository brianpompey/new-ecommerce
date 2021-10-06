import React from 'react';
import './styles.css'

import { CartState } from "../../context/CartContext.js"
import SingleProduct from "./SingleProduct.js";


const SmokerPage = () => {
    const {
        state: { products } 
    } = CartState();

    const prod = products;

    return (
        <div className="home">
          <div className="productContainer">
              <SingleProduct prod={prod} key={prod.id} />
          </div>
        </div>
    );
};


export default SmokerPage;