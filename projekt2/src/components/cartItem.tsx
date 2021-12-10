import Cart from "../models/Cart"
import { Carts } from "../database.json"
import { useState, useEffect } from 'react';

const CartItem = ({amount, id, name, price, deleteItem, countTotal}: Cart) => {
    const [itemAmount, setAmount] = useState<number>(amount)
    const changeAmount = (add:Boolean) => {
        add ? setAmount(itemAmount + 1) : setAmount(itemAmount - 1)
    }
    useEffect(() => {
        const cart = Carts.find(item => item.productId === id)
        if (cart) cart.amount = itemAmount
        countTotal()
    });
    return (
        <li className="cartItem" data-test="cart-item">
            <article>
                <h3>{name}</h3>
                <p>{price} SEK</p>

                <div className="buttonContainer">
                    <button onClick={() => changeAmount(false)} data-test="dec-cart-button">&#62;</button>
                    <p data-test="amount-paragraph">{itemAmount}</p>
                    <button onClick={() => changeAmount(true)} data-test="add-cart-button">&#62;</button>
                </div>            
                <p data-test="amount-paragraph">Total: {itemAmount * price} SEK</p>
                <button className="button" data-test="delete-cart-button" onClick={() => deleteItem(id)}>Remove</button>
            </article>
        </li>
    )
}

export default CartItem