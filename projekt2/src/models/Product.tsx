

export interface Product {
    id: string,
    name: string,
    price: number
  }

export type Props = {
  view: (item: Product) => void
}
