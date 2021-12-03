import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from "./database.json"

interface Product {
  id: string,
  name: string,
  price: number
}

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

const ProductItem = ({id, name, price}:Product) => {
  const BuyItem = () => {
    console.log("buy this item")
  }
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={BuyItem}>Buy</button>
    </div>
  ) 
}

const ProductList = () => {
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
        <ProductItem id={item.id} name={item.name} price={item.price}/>
      ))
    }
    </>
  )
}

export default App;
