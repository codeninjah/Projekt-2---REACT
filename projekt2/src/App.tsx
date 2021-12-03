import React, {useState} from 'react';
import './App.css';
import { Products } from "./database.json"

interface Product {
  id: string,
  name: string,
  price: number
}
interface Cart {
  //userLogin: string,
  productId: String,
  amount: number
}

// byts mot cart i databas
interface ProductCarts extends Array<Cart>{}
const productCart: ProductCarts = [        {
  //"userLogin": "3fbdcc8f-0d86-4f43-8d70-70008809bad0",
  "productId": "818ca9b3-a0f1-4267-b429-a8b7a2da66f4",
  "amount": 10
}]

function App() {
  return (
    <div className="App">
      <ProductList />
      <hr/>
      <ProductCart />
      <hr/>
    </div>
  );
}
 
export const ProductCart = () => {
  const itemList = Products
  return (
    <div>
    {
      itemList.map(item => {
        const cart = productCart.find(cart => cart.productId === item.id)
        return cart ? (<div key={item.id}><ProductItem  id={item.id} name={item.name} price={item.price}/><p>{cart.amount}</p></div>) : null
    })}
    </div>
  )
}
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
    <p>{inputValue}</p>
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



export const ProductItem = ({id, name, price}:Product) => {
  const BuyItem = () => {
    const cart = productCart.find(item => item.productId === id)
    cart ? cart.amount += 1 : productCart.push({productId: id, amount: 1})
  }
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={BuyItem}>Buy</button>
    </>
  ) 
}

export default App;
