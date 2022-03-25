import React, { useState, useReducer, useEffect } from 'react';
import AppContext from '../context/AppContext';
import CartContext from '../context/CartContext';
import toast from 'react-hot-toast';

const SET_CART = 'SET_CART';

export const initialState = {
  totalItems: 0,
  totalUniqueItems: 0,
  items: [],
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

function ContextWrapper({ children }) {
  const [name, setName] = useState('ismailawa');

  useEffect(() => {
    getCart();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const setCart = (payload) => dispatch({ type: SET_CART, payload });
  const notify = (message) => toast.error(message);

  const getCart = () => {
    try {
      const cart = localStorage.getItem('cart');
      if (!cart) {
        notify('no cart found');
      } else {
        setCart(cart);
      }
    } catch (error) {
      notify('no cart found');
    }
  };
  return (
    <AppContext.Provider value={{ name, setName }}>
      <CartContext.Provider value={{ state, setCart }}>
        {children}
      </CartContext.Provider>
    </AppContext.Provider>
  );
}

export default ContextWrapper;
