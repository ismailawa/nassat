import { createContext, useEffect, useReducer } from 'react';
import auth from './reducers/auth';
import cart from './reducers/cart';
import favourite from './reducers/favourite';
import authInitialState from './initialStates/authInitialState';
import cartsInitialState from './initialStates/cartInitialState';
import favouriteInitialState from './initialStates/favouriteInitialState';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [cartState, cartDispatch] = useReducer(cart, cartsInitialState);
  const [favouriteState, favouriteDispatch] = useReducer(
    favourite,
    favouriteInitialState
  );
  return (
    <AppContext.Provider
      value={{
        authState,
        authDispatch,
        cartState,
        cartDispatch,
        favouriteState,
        favouriteDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
