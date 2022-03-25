import { createContext, useReducer } from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);

  return (
    <AppContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
