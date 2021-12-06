import React from 'react';
import './App.css';

import ProductList from "./components/productList"
import ProductCart from './components/productCart';


// byts mot cart i databas
/*
const productCart: ProductCarts = [        {
  //"userLogin": "3fbdcc8f-0d86-4f43-8d70-70008809bad0",
  "productId": "818ca9b3-a0f1-4267-b429-a8b7a2da66f4",
  "amount": 10
}]
*/

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





export default App;
