import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import ProductItem from './components/productItem';
import ProductsView from './components/productsView';
import ProductView from "./components/productView"
import CartView from './components/CartView';
import App from "./App"
import { Products } from "./database.json"


const product = Products[0]

describe("productItem", () => {
  it("renders ProductItem without errors (smoke test)", () => {
    render(<ProductItem name={product.name} id={product.id} price={product.price} />)
  })
  it("nameElement with apple is rendered (black box)", () => {
    render(<ProductItem name={product.name} id={product.id} price={product.price} />)
    const nameElement = screen.getByText(/Apple/i)
    expect(nameElement).toBeInTheDocument()
  })
})

describe("productsView", () => {
  it("renders ProductsView without errors (smoke test)", () => {
    render(<ProductsView view={(item) => console.log(item)}/>)
  })
  it("renders ProductsView heading after menu click", () => {
		const wrapper = mount(<App />)
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
  })
  it("nameElement with Kiwi is rendered (black box)", () => {
    render(<ProductsView view={(item) => console.log(item)}/>)
    const nameElement = screen.getByText(/Kiwi/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("product added to cart when clicked on buy button", () => {
		const wrapper = mount(<App />)
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const buyButton = wrapper.find('[data-test="buy-button"]').at(0)
    buyButton.simulate('click')
    render(<CartView/>)
    const nameElement = screen.getByText(/Apple/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("input in productsView filters productItems", () => {
    const wrapper = mount(<ProductsView view={(item) => console.log(item)}/>)
    const input = wrapper.find('[data-test="products-input"]')
    input.simulate('change', { target: { value: 'M' } })
    const productItem = wrapper.find('li').length
    expect(productItem).toEqual(6);
  })
})


describe("cartView", () => {
  it("renders CartView without errors (smoke test)", () => {
    render(<CartView/>)
  })
  it("renders CartView after menu click", () => {
		const wrapper = mount(<App />)
    const cartButton = wrapper.find('[data-test="cart-button"]')
    cartButton.simulate('click')
    expect(wrapper.contains(<CartView />)).toBe(true)
  })
  it("nameElement with Mellon is rendered (black box)", () => {
    render(<CartView/>)
    const nameElement = screen.getByText(/Mellon/i)
    expect(nameElement).toBeInTheDocument()
  })  
  it("decrease amount on dec click CartItem in CartView", () => {
		const wrapper = mount(<CartView/>)
    const decButton = wrapper.find('[data-test="dec-cart-button"]').at(0)
    const amount = wrapper.find('[data-test="amount-paragraph"]').at(0)
    decButton.simulate('click')
    expect(amount.text()).toBe('9');
  })  
  it("increase amount on inc click CartItem in CartView", () => {
		const wrapper = mount(<CartView/>)
    const incButton = wrapper.find('[data-test="add-cart-button"]').at(0)
    const amount = wrapper.find('[data-test="amount-paragraph"]').at(0)
    incButton.simulate('click')
    expect(amount.text()).toBe('10');
  })  
  it("item delets on delete click CartItem in CartView", () => {
		const wrapper = mount(<CartView/>)
    const deleteButton = wrapper.find('[data-test="delete-cart-button"]').at(0)
    deleteButton.simulate('click')
    const cartItems = wrapper.find('[data-test="cart-item"]')
    expect(cartItems.length).toEqual(1)
  })  


  it("total price adds up amount on add click CartItem in CartView", () => {
		const wrapper = mount(<CartView/>)
    const addButton = wrapper.find('[data-test="add-cart-button"]').at(0)
    addButton.simulate('click')
    const amount = wrapper.find('[data-test="total-price"]').at(0)
    expect(amount.text()).toBe('Total: 50 SEK');
  })  
  it("total price adds up amount on delete click CartItem in CartView", () => {
		const wrapper = mount(<CartView/>)
    const deleteButton = wrapper.find('[data-test="delete-cart-button"]').at(0)
    deleteButton.simulate('click')
    const amount = wrapper.find('[data-test="total-price"]').at(0)
    expect(amount.text()).toBe('Total: 0 SEK');
  })  
})

describe("productView", () => {
  it("renders ProductView without errors (smoke test)", () => {
    render(<ProductView id="55f0c839-c9f5-4a77-bd1f-1d12667bf412" name="Ginger" price={49}/>)
  })
  it("nameElement with Ginger is rendered (black box)", () => {
    render(<ProductView id="55f0c839-c9f5-4a77-bd1f-1d12667bf412" name="Ginger" price={49}/>)
    const nameElement = screen.getByText(/Ginger/i)
    expect(nameElement).toBeInTheDocument()
  })  
  it("renders ProductView after item click from productsView", () => {
		const wrapper = mount(<App />)
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const productButton = wrapper.find('[data-test="product-button"]').at(0)
    productButton.simulate('click')
    expect(wrapper.contains(<ProductView id="0b7f94e5-42d4-4aff-afb2-0260f8fb8e17" name="Apple" price={25}/>)).toBe(true)
  })

})

describe("loginView", () => {
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
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Simon' } })
    passwordField.simulate('change', { target: { value: '2b785907-688f-4b3d-8913-96354f37c9fa' } } )
    button.simulate('click')
    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
  })
  it("Error if name doesn't exist when login", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    nameField.simulate('change', { target: { value: 'felNamn' } })
    button.simulate('click')
    expect(wrapper.find('.name').getElement().props.value).toBe('Wrong details')
  })
  it("Error if wrong password when login", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Simon' } })
    passwordField.simulate('change', { target: { value: 'Grillkorv' } } )
    button.simulate('click')
    expect(wrapper.find('.name').getElement().props.value).toBe('Wrong details')
  })
})
describe("AdminView", () => {
  it("renders adminButton for Admins when Login", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]').at(0)
    expect(adminButton.text()).toBe('Admin')
  })
  it("change name value of product from AdminView", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const adminField = wrapper.find('[data-test="admin-name-input"]').at(0)
    const adminEditButton = wrapper.find('[data-test="admin-edit-button"]').at(0)
    adminField.simulate('change', { target: { value: 'Grillkorv' } } )
    adminEditButton.simulate('click')
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const h3 = wrapper.find('h3').at(0)
    expect(h3.text()).toBe('Grillkorv')
  })
  it("change price value of product from AdminView", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const adminField = wrapper.find('[data-test="admin-price-input"]').at(0)
    const adminEditButton = wrapper.find('[data-test="admin-edit-button"]').at(0)
    adminField.simulate('change', { target: { value: '20' } } )
    adminEditButton.simulate('click')
    const productsButton = wrapper.find('[data-test="products-button"]')
    productsButton.simulate('click')
    const p = wrapper.find('p').at(0)
    expect(p.text()).toBe('20 SEK')
  })
  
  it("Register a new user as Admin in AdminView", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const userButton = wrapper.find('[data-test="edit-user-button"]')
    userButton.simulate('click')
    const adminNameField = wrapper.find('[data-test="admin-user-name-input"]').at(0)
    const adminPasswordField = wrapper.find('[data-test="admin-user-password-input"]').at(0)
    adminNameField.simulate('change', { target: { value: 'Johan' } } )
    adminPasswordField.simulate('change', { target: { value: 'hejhopp2' } } )
    const newUserButton = wrapper.find('[data-test="admin-new-user-button"]').at(0)
    newUserButton.simulate('click')
    const h3 = wrapper.find('h3').getElements()
    expect(h3[h3.length-1].props.children).toBe('Johan')
  })
  it("Register a new product as Admin in AdminView", () => {
    const wrapper = mount(<App/>)
    const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const productButton = wrapper.find('[data-test="new-product-button"]')
    productButton.simulate('click')
    const adminNameField = wrapper.find('[data-test="admin-product-name-input"]').at(0)
    const adminPriceField = wrapper.find('[data-test="admin-product-price-input"]').at(0)
    adminNameField.simulate('change', { target: { value: 'Grillkorv' } } )
    adminPriceField.simulate('change', { target: { value: 20 } } )
    const newProductButton = wrapper.find('[data-test="admin-new-product-button"]').at(0)
    newProductButton.simulate('click')
    const h3 = wrapper.find('h3').getElements()
    expect(h3[h3.length-1].props.children).toBe('Grillkorv')
  })
  it("renders AdminProducts after button click from adminView", () => {
    const wrapper = mount(<App/>)
		const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const editButton = wrapper.find('[data-test="edit-products-button"]')
    editButton.simulate('click')
    const label = wrapper.find('label').at(2)
    expect(label.text()).toBe("Price")
  })
  it("input in Adminview filters admin productItems", () => {
    const wrapper = mount(<App/>)
		const button = wrapper.find('[data-test="login-button"]')
    const nameField = wrapper.find('.name')
    const passwordField = wrapper.find('.password')
    nameField.simulate('change', { target: { value: 'Alex' } })
    passwordField.simulate('change', { target: { value: '4889fbf6-4a66-4cb4-bed9-1c5086379b9f' } } )
    button.simulate('click')
    const adminButton = wrapper.find('[data-test="admin-button"]')
    adminButton.simulate('click')
    const input = wrapper.find('[data-test="products-input"]')
    input.simulate('change', { target: { value: 'M' } })
    const productItem = wrapper.find('li').length
    expect(productItem).toEqual(6);
  })
})