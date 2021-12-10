import React, {useState} from 'react';
import { Products } from "../database.json"
import AdminProductItem from './adminProductItem';
import { Props } from "../models/Admin"

export const AdminProducts = (props: Props) => {
    const itemList = Products
    return (
        <ul className="productsList">
        {
          itemList.filter(item => item.name.toLowerCase().includes(props.inputValue.toLowerCase())).map(item => (
            <li className="productItem" key={item.id}>
              <article>
                <AdminProductItem key={item.id} id={item.id} name={item.name} price={item.price}/>
              </article>
            </li>
          ))
        }
        </ul>
    )
  }


  export default AdminProducts