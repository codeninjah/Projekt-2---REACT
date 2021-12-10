import {Product} from "../models/Product"
import { Products } from "../database.json"
import React, {useState} from 'react';

const AdminProductItem = ({id, name, price}:Product) => {
    const [nameValue, setnameValue] = useState<string>(name)
    const [priceValue, setpriceValue] = useState<number>(price)
    const changeValues = () => {
        const product = Products.find(product => product.id === id)
        if (product) {
            product.name = nameValue
            product.price = priceValue
        }
    }
    return (
      <>
        <div className="inputContainer">
            <label htmlFor="">Name</label>
            <input 
            type="text"
            data-test="admin-name-input"
            value={nameValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setnameValue(ev.target.value)}
            />
        </div>
        <div className="inputContainer">
            <label htmlFor="">Price</label>
            <input 
            type="text"
            data-test="admin-price-input"
            value={priceValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setpriceValue(Number(ev.target.value))}
            />
        </div>
        <button data-test="admin-edit-button" onClick={changeValues}>Edit</button>
      </>
    ) 
  }

  export default AdminProductItem