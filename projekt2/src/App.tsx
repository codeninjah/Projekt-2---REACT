import React, { useState } from 'react';
import './App.css';

import ProductsView from "./components/productsView"
import CartView from './components/CartView';
import ProductView from "./components/productView"
import Product from './models/Product';
import LoginView from './components/LogInView';

// byts mot cart i databas
/*
const productCart: ProductCarts = [        {
  //"userLogin": "3fbdcc8f-0d86-4f43-8d70-70008809bad0",
  "productId": "818ca9b3-a0f1-4267-b429-a8b7a2da66f4",
  "amount": 10
}]
*/
function App() {
  const [view, setView] = useState<string>('login')
  const [product, setProduct] = useState<Product>({id:"", name:"", price:0})
  const VIEW_PRODUCTS = 'products', VIEW_CART = 'cart', VIEW_PRODUCT = 'product', LOGIN_VIEW = 'login'
  let main = null
  if(view === VIEW_PRODUCTS) {
    main = <ProductsView view={(item:Product) => viewProduct(item)}/>
  } 
  else if (view === VIEW_CART) {
    main = <CartView />
  }
  else if (view === VIEW_PRODUCT) {
    main = <ProductView id={product.id} name={product.name} price={product.price}/>
  }
  else if (view === LOGIN_VIEW) {
    main = <LoginView view={() => setView("products")}/>
  }
  const viewProduct = (item: Product) => {
    setProduct(item)
    setView(VIEW_PRODUCT)
  }
  return (
    <div className="App">
      <header>
        <h1>Webbshop</h1>
				<nav className="nav">
					<button data-test="products-button"
						onClick={() => setView(VIEW_PRODUCTS)}> Products </button>
					<button
						onClick={() => setView(VIEW_CART)}
						data-test="cart-button"> Cart </button>
				</nav>
      </header>
      <main>{main}</main>
      <footer></footer>
    </div>
  );
}


/*
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" data-test="products-button">Products</Link>
            </li>
            <li>
              <Link to="/cart" data-test="cart-button">Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}
*/

export default App;
