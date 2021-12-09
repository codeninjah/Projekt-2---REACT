import React, {useState} from 'react';
import { Products } from "../database.json"
import ProductItem from './productItem';
import {Props}from "../models/Product"



export const ProductsView = (props:Props) => {
    const itemList = Products
    const [inputValue, setInputValue] = useState<string>("")
    return (
      <>
        <div className="mainBar">
          <div className="inputContainer">
            <label htmlFor="">Search</label>
            <input 
            type="text"
            data-test="products-input"
            value={inputValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
          />
        </div>
 
          <h2>Our Products</h2>
        </div>
        <ul className="productsList">
          {
            itemList.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map(item => (
              <li key={item.id}>
                <ProductItem key={item.id} id={item.id} name={item.name} price={item.price}/>
                <button data-test="product-button" onClick={() => props.view(item)}>View Product</button>
              </li>
            ))
          }
        </ul>
      </>
    )
  }

  export default ProductsView