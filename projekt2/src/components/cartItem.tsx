import Cart from "../models/Cart"
import { Carts } from "../database.json"
import { useState } from 'react';

const CartItem = ({amount, id, name, price}: Cart) => {
    const [itemAmount, setAmount] = useState<number>(amount)
    const changeAmount = (add:Boolean) => {
        add ? setAmount(itemAmount + 1) : setAmount(itemAmount - 1)
        const cart = Carts.find(item => item.productId === id)
        if (cart) cart.amount = itemAmount
        // bug vid tillbaka till products och sen igen så minskas eller ökas 
        // värdet på amount en fel åt båda håll uppdatteringen till Carts?
    }
    const deleteItem = () => {
        const cartIndex = Carts.findIndex(item => item.productId === id)
        Carts.splice(cartIndex, cartIndex +1)

        // delete uppdateras inte men fugnerar. behöver testas
    }
    return (
        <li>
            <h3>{name}</h3>
            <p>{price} SEK</p>
            <div className="buttonContainer">
                <button onClick={() => changeAmount(true)} data-test="add-cart-button">+</button>
                <button onClick={() => changeAmount(false)} data-test="dec-cart-button">-</button>
            </div>            
            <button data-test="delete-cart-button" onClick={deleteItem}>Remove</button>
            <p data-test="amount-paragraph">{itemAmount}</p>
        </li>
    )
}

export default CartItem