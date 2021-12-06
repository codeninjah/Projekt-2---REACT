import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ProductItem from './components/productItem';
import ProductList from './components/productList';
import ProductCart from './components/productCart';
import { Products } from "./database.json"
//import { renderIntoDocument } from 'react-dom/test-utils';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
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
  it("renders ProductList without errors (smoke test)", () => {
    render(<ProductList/>)
  })
  it("nameElement with Kiwi is rendered (black box)", () => {
    render(<ProductList/>)
    const nameElement = screen.getByText(/Kiwi/i)
    expect(nameElement).toBeInTheDocument()
  })
  it("renders ProductCart without errors (smoke test)", () => {
    render(<ProductCart/>)
  })
  it("nameElement with Mellon is rendered (black box)", () => {
    render(<ProductCart/>)
    const nameElement = screen.getByText(/Mellon/i)
    expect(nameElement).toBeInTheDocument()
  })  
})