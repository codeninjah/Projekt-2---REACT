import ProductItem from "./productItem"
import {Product} from "../models/Product"

const ProductView = ({id, name, price}:Product) => {
    return (
        <article className="productView">
            <ProductItem id={id} name={name} price={price}/>
        </article>
    )
}

export default ProductView