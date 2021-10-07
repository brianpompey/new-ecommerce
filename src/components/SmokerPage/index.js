import React, { Component } from 'react';
import './styles.css'
import { getProducts } from '../../services/ProductsServices';
import { CartState } from "../../context/CartContext.js"
import SingleProduct from "./SingleProduct.js";

const products = getProducts();

class SmokerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: products}
    }

    render() {
      //  const prod = products;
        return(
            <div className="home">
                <div className="productContainer">
                    {this.state.products.map((prod) => (
                        <SingleProduct name={prod.name} price={prod.id} />
                    ))}
                </div>
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