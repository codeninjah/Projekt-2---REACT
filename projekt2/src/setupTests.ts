// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Enzyme följer inte med create-react-app, vi måste lägga till det själva
// Enzyme har inte någon officiell "adapter" för React version 17, vi använder en inofficiell
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
