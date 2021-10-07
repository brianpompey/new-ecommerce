import React from 'react';
import { CartState } from "../../context/CartContext.js";
import { Card, Button } from "react-bootstrap";
import { getProducts } from '../../services/ProductsServices.js';
//import Card from './../Card.js'

const products = getProducts();
const SingleProduct = (props) => {
    return(
        <div className="products">
            <Card>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{props.price}</Card.Title>
                <Card.Title>{props.description}</Card.Title>
            </Card>
        </div>
    )
}
 /**
    const {
      state: { cart },
      dispatch,
    } = CartState();

    
  
    
    return (
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>₹ {prod.price.split(".")[0]}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}
            </Card.Subtitle>
            {cart.some((p) => p.id === prod.id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}
              >
                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    );
    */

  
  export default SingleProduct;