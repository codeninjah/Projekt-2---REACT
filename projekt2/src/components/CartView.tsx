import { Products, Carts } from "../database.json"
import CartItem from "./cartItem"

const CartView = () => {
    return (
      <>
        <div className="mainBar">
          <h2>Shopping Cart</h2>
        </div>
        <ul className="productsList">
          {
            Carts.map(cart => {
              const item = Products.find(item => cart.productId === item.id)
              return item ? (<CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={cart.amount}/>) : null
          })}
        </ul>
      </>
    )
  }


  export default CartView