import React, { Component } from 'react';
import './styles.css'

import { CartState } from "../../context/CartContext.js"
import SingleProduct from "./SingleProduct.js";


class SmokerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: CartState.products}
    }

    render() {
        return(
            <div>
                <h2>Hello WOrld</h2>
            </div>
        )
    }
}

/*
const SmokerPage = () => {
    const {
        state: { products },
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

*/

export default SmokerPage;