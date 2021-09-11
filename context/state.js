import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{
      loggedIn
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
