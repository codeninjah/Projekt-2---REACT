import { Products, Carts } from "../database.json"
import CartItem from "./cartItem"
import { useState } from "react"

const CartView = () => {
  // räkna ut sammanlagdkostnad
  const [cartList, setCart] = useState(Carts)
  const [totalPrice, setTotal] = useState(0)
  const deleteItem = (id:string) => {
    const cartIndex  = cartList.findIndex((item: { productId: string }) => item.productId === id)
    setCart(cartList.splice(cartIndex, cartIndex +1))
    countTotal()
  }
  const countTotal = () => {
    let total = 0
    Carts.forEach(cart => {
      const product = Products.find(product => product.id === cart.productId)
      if (cart && product) total += cart.amount * product.price
    })
    setTotal(total)
  }
    return (
      <>
        <div className="mainBar">
          <h2>Shopping Cart</h2>
          <p data-test="total-price">Total: {totalPrice} Sek</p>
        </div>
        <ul className="productsList">
          {
            Carts.map(cart => {
              const item = Products.find(item => cart.productId === item.id)
              return item ? (<CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={cart.amount} deleteItem={(itemId) => deleteItem(itemId)} countTotal={countTotal}/>) : null
          })}
        </ul>
      </>
    )
  }


  export default CartView