import React, {useState} from 'react';
import { Products } from "../database.json"
import ProductItem from './productItem';
import {Props}from "../models/Product"



export const AdminView = (props:Props) => {
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
 
          <h2>Admin</h2>
        </div>
        <ul className="productsList">
          {
            itemList.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map(item => (
              <li className="productItem" key={item.id}>
                <article>
                  <ProductItem key={item.id} id={item.id} name={item.name} price={item.price}/>
                </article>
              </li>
            ))
          }
        </ul>
      </>
    )
  }

  export default AdminView