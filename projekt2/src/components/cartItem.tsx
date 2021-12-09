import Cart from "../models/Cart"
import { Carts } from "../database.json"
import { useState, useEffect } from 'react';

const CartItem = ({amount, id, name, price, deleteItem}: Cart) => {
    const [itemAmount, setAmount] = useState<number>(amount)
    const changeAmount = (add:Boolean) => {
        add ? setAmount(itemAmount + 1) : setAmount(itemAmount - 1)
    }
    useEffect(() => {
        const cart = Carts.find(item => item.productId === id)
        if (cart) cart.amount = itemAmount
    });
    return (
        <li data-test="cart-item">
            <h3>{name}</h3>
            <p>{price} SEK</p>
            <div className="buttonContainer">
                <button onClick={() => changeAmount(true)} data-test="add-cart-button">+</button>
                <button onClick={() => changeAmount(false)} data-test="dec-cart-button">-</button>
            </div>            
            <button data-test="delete-cart-button" onClick={() => deleteItem(id)}>Remove</button>
            <p data-test="amount-paragraph">{itemAmount}</p>
        </li>
    )
}

export default CartItem