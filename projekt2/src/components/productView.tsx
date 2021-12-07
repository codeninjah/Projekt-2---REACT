import ProductItem from "./productItem"
import Product from "../models/Product"

const ProductView = ({id, name, price}:Product) => {
    return (
        <div className="productView">
            <ProductItem id={id} name={name} price={price}/>
        </div>
    )
}

export default ProductView