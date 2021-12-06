import React, {useState} from 'react';
import { Products } from "../database.json"
import ProductItem from './productItem';

export const ProductList = () => {
    const itemList = Products
    const [inputValue, setInputValue] = useState<string>("")
    return (
      <div>
      <input 
      type="text"
      value={inputValue}
      onChange={(
        ev: React.ChangeEvent<HTMLInputElement>,
      ): void => setInputValue(ev.target.value)}
      />
      {
        itemList.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map(item => (
          <div key={item.id}>
            <ProductItem id={item.id} name={item.name} price={item.price}/>
          </div>
        ))
      }
      </div>
    )
  }

  export default ProductList