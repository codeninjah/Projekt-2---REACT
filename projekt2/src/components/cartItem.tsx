import ProductItem from './productItem';
import Cart from "../models/Cart"

const CartItem = ({amount, id, name, price}: Cart) => {
    return (
        <li>
            <ProductItem id={id} name={name} price={price}/>
            <p>{amount}</p>
        </li>
    )
}

export default CartItem