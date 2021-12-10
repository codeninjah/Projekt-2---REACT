import React, { useState } from 'react';
import { Products } from "../database.json"
import { Props } from "../models/Admin"

export const AdminProduct = (props: Props) => {
    const [nameValue, setnameValue] = useState<string>("")
    const [priceValue, setpriceValue] = useState<number>(0)
    const [productList, setproductList] = useState(Products)
    const registerproduct = () => {   
        Products.push({name: nameValue, price: priceValue, id: "hejhoptest2"})
        setproductList(Products)
        setpriceValue(0)
        setnameValue("")
    }
    return (
        <div className="adminProduct">
            <div className="productInputs">
                <div className="inputContainer">
                    <label htmlFor="">Name</label>
                    <input 
                    type="text"
                    data-test="admin-product-name-input"
                    value={nameValue}
                    onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                    ): void => setnameValue(ev.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="">price</label>
                    <input 
                    type="text"
                    data-test="admin-product-price-input"
                    value={priceValue}
                    onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                    ): void => setpriceValue(Number(ev.target.value))}
                    />
                </div>
                <button className="button" data-test="admin-new-product-button" onClick={registerproduct}>Register</button>
            </div>
            <article>
                <ul className="productList">
                {
                productList.filter(product => product.name.toLowerCase().includes(props.inputValue.toLowerCase())).map(product => (
                    <li className="productItem" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price} SEK</p>
                    </li>
                ))
                }
                </ul>
            </article>
        </div>
    )
  }


  export default AdminProduct