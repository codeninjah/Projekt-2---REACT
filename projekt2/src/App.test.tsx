import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ProductItem from './components/productItem';
import ProductsView from './components/productsView';
import ProductView from "./components/productView"
import CartView from './components/CartView';
import App from "./App"
import { Products } from "./database.json"


const product = Products[0]
describe("Finns grid av produkter", () => {
  it("renders ProductItem without errors (smoke test)", () => {
    render(<ProductItem name={product.name} id={product.id} price={product.price} />)
  })
  it("nameElement with apple is rendered (black box)", () => {
    render(<ProductItem name={product.name} id={product.id} price={product.price} />)
    const nameElement = screen.getByText(/Apple/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("renders ProductsView without errors (smoke test)", () => {
    render(<ProductsView view={(item) => console.log(item)}/>)
  })
  it("nameElement with Kiwi is rendered (black box)", () => {
    render(<ProductsView view={(item) => console.log(item)}/>)
    const nameElement = screen.getByText(/Kiwi/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("renders CartView without errors (smoke test)", () => {
    render(<CartView/>)
  })
  it("nameElement with Mellon is rendered (black box)", () => {
    render(<CartView/>)
    const nameElement = screen.getByText(/Mellon/i)
    expect(nameElement).toBeInTheDocument()
  })  
  it("decrease amount on click", () => {
		const wrapper = mount(<CartView/>)
    const decButton = wrapper.find('[data-test="dec-cart-button"]').at(0)
    const amount = wrapper.find('[data-test="amount-paragraph"]').at(0)
    decButton.simulate('click')
    expect(amount.text()).toBe('9');
  })  
  it("increase amount on click", () => {
		const wrapper = mount(<CartView/>)
    const incButton = wrapper.find('[data-test="add-cart-button"]').at(0)
    const amount = wrapper.find('[data-test="amount-paragraph"]').at(0)
    incButton.simulate('click')
    expect(amount.text()).toBe('11');
  })  

  it("renders ProductView without errors (smoke test)", () => {
    render(<ProductView id="55f0c839-c9f5-4a77-bd1f-1d12667bf412" name="Ginger" price={49}/>)
  })
  it("nameElement with Ginger is rendered (black box)", () => {
    render(<ProductView id="55f0c839-c9f5-4a77-bd1f-1d12667bf412" name="Ginger" price={49}/>)
    const nameElement = screen.getByText(/Ginger/i)
    expect(nameElement).toBeInTheDocument()
  })  

  it("renders CartView after menu click", () => {
		const wrapper = mount(<App />)
    const cartButton = wrapper.find('[data-test="cart-button"]')
    cartButton.simulate('click')
    expect(wrapper.contains(<CartView />)).toBe(true)
  })
  it("renders ProductsView heading after menu click", () => {
		const wrapper = mount(<App />)
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
  })

  it("renders ProductView after menu click", () => {
		const wrapper = mount(<App />)
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const productButton = wrapper.find('[data-test="product-button"]').at(0)
    productButton.simulate('click')
    expect(wrapper.contains(<ProductView id="0b7f94e5-42d4-4aff-afb2-0260f8fb8e17" name="Apple" price={25}/>)).toBe(true)
  })

})

describe("Finns login view (smoke test)", () => {
  it("renders the input field for name (black box test)", () => {
    const wrapper = mount(<App/>)
    const nameField = wrapper.find(".name")
    expect(nameField.exists()).toBe(true)
  })

  it("renders a button (black box test) - login button i detta fall", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })

  it("verifies if test text is in name input field", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    nameField.simulate('change', { target: { value: 'Simon' } })
    button.simulate('click')
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
  })

})