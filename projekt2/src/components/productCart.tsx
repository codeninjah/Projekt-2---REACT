import React from 'react';
import { Products, Carts } from "../database.json"
import ProductItem from "./productItem"

const ProductCart = () => {
    const itemList = Products
    return (
      <div>
      {
        itemList.map(item => {
          const cart = Carts.find(cart => cart.productId === item.id)
          return cart ? (<div key={item.id}><ProductItem  id={item.id} name={item.name} price={item.price}/><p>{cart.amount}</p></div>) : null
      })}
      </div>
    )
  }


  export default ProductCart