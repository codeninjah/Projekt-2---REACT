import React, {useState} from 'react';
import './App.css';
import { Products } from "./database.json"

interface Product {
  id: string,
  name: string,
  price: number
}

// byts mot cart i databas
interface ProductItems extends Array<Product>{}
const productCart: ProductItems = []

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export const ProductItem = ({id, name, price}:Product) => {
  const BuyItem = () => {
    productCart.push({id, name, price})
  }
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={BuyItem}>Buy</button>
    </div>
  ) 
}

export const ProductList = () => {
  const itemList = Products
  const [inputValue, setInputValue] = useState<string>("")
  return (
    <>
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
        <ProductItem key={item.id} id={item.id} name={item.name} price={item.price}/>
      ))
    }
    </>
  )
}

export default App;
