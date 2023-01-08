import { createContext, ReactNode, useState } from "react";

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}

interface AuthProviderProps {
  children?: ReactNode;
}

const initialValue: IAuthContext = {
  authenticated: false,
  setAuthenticated: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
