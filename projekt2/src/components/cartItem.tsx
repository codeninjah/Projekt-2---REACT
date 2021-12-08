import Cart from "../models/Cart"
import { Carts } from "../database.json"
import { useState } from 'react';

const CartItem = ({amount, id, name, price}: Cart) => {
    const [itemAmount, setAmount] = useState<number>(amount)
    const changeAmount = (add:Boolean) => {
        add ? setAmount(itemAmount + 1) : setAmount(itemAmount - 1)
        const cart = Carts.find(item => item.productId === id)
        if (cart) cart.amount = itemAmount
    }
    const deleteItem = () => {
        const cartIndex = Carts.findIndex(item => item.productId === id)
        Carts.splice(cartIndex, cartIndex +1)
    }
    return (
        <li>
            <h3>{name}</h3>
            <p>{price} SEK</p>
            <div className="buttonContainer">
                <button onClick={() => changeAmount(true)} data-test="add-cart-button">+</button>
                <button onClick={() => changeAmount(false)} data-test="dec-cart-button">-</button>
            </div>            
            <button onClick={deleteItem}>Remove</button>
            <p>{itemAmount}</p>
        </li>
    )
}

export default CartItem