import {Product} from "./Product"

interface Cart extends Product {
    amount: number,
    deleteItem: (id: string) => void,
    countTotal: () => void
    //changeAmount: (add: boolean) => void
  }
  

  export default Cart