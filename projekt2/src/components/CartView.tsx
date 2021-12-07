import { Products, Carts } from "../database.json"
import CartItem from "./cartItem"

const CartView = () => {
    const itemList = Products
    return (
      <>
        <div className="mainBar">
          <h2>Shopping Cart</h2>
        </div>
        <ul className="productsList">
          {
            itemList.map(item => {
              const cart = Carts.find(cart => cart.productId === item.id)
              return cart ? (<CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={cart.amount}/>) : null
          })}
        </ul>
      </>
    )
  }


  export default CartView