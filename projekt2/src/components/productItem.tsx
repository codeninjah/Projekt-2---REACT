import React from 'react';
import { Carts } from "../database.json"
import Product from "../models/Product"

const ProductItem = ({id, name, price}:Product) => {
    const BuyItem = () => {
      const cart = Carts.find(item => item.productId === id)
      cart ? cart.amount += 1 : Carts.push({productId: id, amount: 1, userLogin: "3fbdcc8f-0d86-4f43-8d70-70008809bad0"})
    }
    return (
      <>
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={BuyItem}>Buy</button>
      </>
    ) 
  }

  export default ProductItem